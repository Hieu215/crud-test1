import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './AddUserStyles.module.scss';
import { createUserStart } from '~/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Input, Select, Space } from 'antd';
import 'antd/dist/antd.css';


const cl = classNames.bind(styles);

const AddUser = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Option } = Select;
  const user = useSelector((state) => state.login.currentUsers);
  useEffect(() => {
    if (!user) {
      navigate('/login/:id');
    }
  }, []);
  const onFinish = (values) => {
    dispatch(createUserStart(values));
    toast.success('done');
    setTimeout(() => navigate('/', { replace: true }), 500);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div>
      <Form
        className={cl('validate')}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        form={form}
      >
        <h3 className={cl('fs-2', 'fw-bold')}>Add User Detail</h3>
        <div className={cl('input-validate')}>
          <Form.Item
            name="name"
            label="name"
            rules={[
              {
                required: true,
                message: ' please enter your name',
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="name" allowClear />
          </Form.Item>
          <Form.Item
            name="email"
            label="email"
            rules={[
              {
                required: true,
                message: 'please enter your email',
              },
              { type: 'email', message: ' please enter a valid email' },
            ]}
            hasFeedback
          >
            <Input placeholder="email" allowClear />
          </Form.Item>
          <Form.Item
            name="phone"
            label="phone"
            rules={[
              {
                required: true,
                message: 'A value must be entered',
                pattern: new RegExp(/^[0-9]+$/),
              },
              { max: 12 },
            ]}
          >
            <Input placeholder="phone" addonBefore={prefixSelector} allowClear />
          </Form.Item>
          <Form.Item
            name="address"
            label="address"
            rules={[
              {
                required: true,
                message: 'Province is required',
              },
            ]}
          >
            <Input placeholder="address" allowClear />
          </Form.Item>
          <Space className={cl('all-button')}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
            <Button type="primary" danger onClick={() => navigate('/', { replace: true })}>
              Go Back
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

export default AddUser;
