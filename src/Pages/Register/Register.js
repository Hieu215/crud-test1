import styles from './Register.module.scss';

import classNames from 'classnames/bind';

import { Button, Form, Input, Space } from 'antd';
import 'antd/dist/antd.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { loadAcountStart, registerAccountStart } from '~/actions';

const cl = classNames.bind(styles);
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(registerAccountStart(values));
    navigate('/login/:id');
    toast.success('done');
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
        <h3 className={cl('fs-2', 'fw-bold')}>Register Account</h3>
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
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Space className={cl('all-button')}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
  // return (
  //   <div>
  //     <form className={cl('row', 'g-3', 'validate')} onSubmit={formik.handleSubmit}>
  //       <h3 className={cl('fs-2', 'fw-bold')}>Register</h3>
  //       <div className={cl('input-validate')}>
  //         <div>
  //           <div className="form-outline">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="account"
  //               value={formik?.values?.account || ''}
  //               onChange={formik.handleChange}
  //             />
  //             <label className="form-label">Account</label>
  //             <div className="form-notch">
  //               <div className="form-notch-leading"></div>
  //               <div className="form-notch-middle" style={{ width: '42.4px' }}></div>
  //               <div className="form-notch-trailing"></div>
  //             </div>
  //           </div>
  //           {formik.errors.account && formik.touched.account && (
  //             <p className={cl('erros-toast')}>{formik.errors.account}</p>
  //           )}
  //         </div>
  //         <br />
  //         <div>
  //           <div className={cl('form-outline', 'password')}>
  //             <input
  //               type="password"
  //               className="form-control"
  //               name="password"
  //               ref={eyePasswordRef}
  //               value={formik.values.password || ''}
  //               onChange={formik.handleChange}
  //             />
  //             <MDBTooltip title="View" tag="span">
  //               <MDBIcon
  //                 fas
  //                 icon="eye"
  //                 style={{ color: '#3b5938', marginBottom: '10px' }}
  //                 size="lg"
  //                 className={cl('eye-view')}
  //                 onClick={handleIconPassword}
  //               />
  //             </MDBTooltip>
  //             <label className="form-label">Password</label>
  //             <div className="form-notch">
  //               <div className="form-notch-leading"></div>
  //               <div className="form-notch-middle" style={{ width: '42.4px' }}></div>
  //               <div className="form-notch-trailing"></div>
  //             </div>
  //           </div>
  //           {formik.errors.password && formik.touched.password && (
  //             <p className={cl('erros-toast')}>{formik.errors.password}</p>
  //           )}
  //         </div>{' '}
  //         <br />
  //         <div>
  //           <div className={cl('form-outline', 'password')}>
  //             <input
  //               type="password"
  //               className="form-control"
  //               name="confirmPassword"
  //               ref={eyeConfirmPasswordRef}
  //               value={formik.values.confirmPassword || ''}
  //               onChange={formik.handleChange}
  //             />
  //             <MDBTooltip title="View" tag="span">
  //               <MDBIcon
  //                 fas
  //                 icon="eye"
  //                 style={{ color: '#3b5938', marginBottom: '10px' }}
  //                 size="lg"
  //                 className={cl('eye-view')}
  //                 onClick={handleIconConfirmPassword}
  //               />
  //             </MDBTooltip>
  //             <label className="form-label">ConfirmPassword</label>
  //             <div className="form-notch">
  //               <div className="form-notch-leading"></div>
  //               <div className="form-notch-middle" style={{ width: '42.4px' }}></div>
  //               <div className="form-notch-trailing"></div>
  //             </div>
  //           </div>
  //           {formik.errors.confirmPassword && formik.touched.confirmPassword && (
  //             <p className={cl('erros-toast')}>{formik.errors.confirmPassword}</p>
  //           )}
  //         </div>{' '}
  //       </div>
  //       <div className={cl('all-button')}>
  //         <Button className={cl('add-btn')} type="submit">
  //           Register
  //         </Button>
  //       </div>
  //     </form>
  //   </div>
  // );
}

export default Register;
