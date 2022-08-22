import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './EditUserStyles.module.scss';
import { editUserStart, getUserStart } from '~/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Input, Select, Space } from 'antd';
import 'antd/dist/antd.css';

const cl = classNames.bind(styles);

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { users } = useSelector((state) => state.getUser);
  const [form] = Form.useForm();
  const { Option } = Select;
  const onFinish = (values) => {
    if (values.name && values.email && values.phone && values.address) {
      dispatch(editUserStart({ id, values }));
      toast.success('done');
      setTimeout(() => navigate('/', { replace: true }), 500);
    }
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
  const getDataForm = () => {
    form.setFieldsValue({ ...users });
  };

  useEffect(() => {
    if (users) {
      getDataForm();
    }
  }, [users]);

  useEffect(() => {
    if (id) {
      dispatch(getUserStart(id));
    }
  }, [id]);

  return (
    <div>
      <Form
        className={cl('validate')}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 15 }}
        onFinish={onFinish}
        form={form}
      >
        <h3 className={cl('fs-2', 'fw-bold')}>Edit User Detail</h3>
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
            <Input placeholder="name" />
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
            <Input placeholder="email" />
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
            <Input placeholder="phone" addonBefore={prefixSelector} />
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
            <Input placeholder="address" />
          </Form.Item>
          <Space className={cl('all-button')}>
            <Button type="primary" htmlType="submit">
              Edit
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

export default EditUser;
