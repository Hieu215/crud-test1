import styles from './Login.module.scss';

import classNames from 'classnames/bind';

import { Button, Form, Input, Space } from 'antd';
import 'antd/dist/antd.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { loginAcountStart } from '~/actions';

const cl = classNames.bind(styles);
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // dispatch(loginAcountStart(values));
    // navigate('/');
    // toast.success('done');
  };
  return (
    <div>
      <Form
        className={cl('validate')}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        form={form}
      >
        <h3 className={cl('fs-2', 'fw-bold')}>Login</h3>
        <div className={cl('input-validate')}>
          <Form.Item
            name="account"
            label="Account"
            rules={[
              {
                required: true,
                message: ' please enter your account',
              },
              { whitespace: false },
              { min: 5, message: 'your name must be at least 5 characters!' },
            ]}
            hasFeedback
          >
            <Input placeholder="Account" allowClear />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  'Password must contain 8 characters, one uppercase, one lowercase, one number and one special case Character',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="password" allowClear />
          </Form.Item>
          <Space className={cl('all-button')}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
}

export default Login;
