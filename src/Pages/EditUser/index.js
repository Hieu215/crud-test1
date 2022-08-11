import { useEffect, useState } from 'react';
// import { MDBValidation, MDBInput, MDBBtn, MDBValidationItem } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './EditUserStyles.module.scss';
import { editUserStart, getUserStart } from '~/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'reactstrap';

const cl = classNames.bind(styles);
// const initialState = {
//   name: '',
//   email: '',
//   phone: '',
//   address: '',
// };

const EditUser = () => {
  // const [fromValue, setFromValue] = useState(initialState);
  // const { name, email, phone, address } = fromValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { users } = useSelector((state) => state.getUser);

  const getDataForm = () => {
    // if (id) {
    //   const singleUser = users.find((user) => user.id === id);
    //   setFromValue({ ...singleUser });
    // }
    // setFromValue({ ...users });
    formik.setValues({
      ...users,
    });
  };

  useEffect(() => {
    if (users) {
      getDataForm();
    }
  }, [users]);

  useEffect(() => {
    // dispatch(loadUsers());
    if (id) {
      dispatch(getUserStart(id));
    }
  }, [id]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5, 'your name must be at least 5 characters!').required('Please provider a name.'),
      email: Yup.string().email('Invalid email').required('Please provider an email.'),
      address: Yup.string().required('please provider an adress.'),
      phone: Yup.number()
        .min(10, 'your number must be at least 10 characters!')
        .required('Please provider a phone no.'),
    }),
    onSubmit: (values) => {
      if (values.name && values.email && values.phone && values.address) {
        dispatch(editUserStart({ id, values }));
        toast.success('done');
        setTimeout(() => navigate('/', { replace: true }), 500);
      }
    },
  });

  // useEffect(() => {
  //   if (users) {
  //     formik.setValues({
  //       ...users
  //     });
  //   }
  // }, [users])

  // const handleEdit = (e) => {
  //   e.preventDefault();
  //   if (name && email && phone && address) {
  //     dispatch(editUserStart({ id, fromValue }));
  //     toast.success('done');
  //     setTimeout(() => navigate('/', { replace: true }), 500);
  //   }
  // };
  // const onInputChange = (e) => {
  //   let { name, value } = e.target;
  //   setFromValue({ ...fromValue, [name]: value });
  // };
  return (
    <div>
      <form className={cl('row', 'g-3', 'validate')} onSubmit={formik.handleSubmit}>
        <h3 className={cl('fs-2', 'fw-bold')}>Edit User Detail</h3>
        <div className={cl('input-validate')}>
          <div>
            <div className="form-outline">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formik?.values?.name || ''}
                onChange={formik.handleChange}
              />
              <label className="form-label">Name</label>
              <div className="form-notch">
                <div className="form-notch-leading"></div>
                <div className="form-notch-middle" style={{ width: '42.4px' }}></div>
                <div className="form-notch-trailing"></div>
              </div>
            </div>
            {formik.errors.name && formik.touched.name && <p className={cl('erros-toast')}>{formik.errors.name}</p>}
          </div>
          <br />
          <div>
            <div className="form-outline">
              <input
                type="text"
                className="form-control"
                name="email"
                value={formik.values.email || ''}
                onChange={formik.handleChange}
              />
              <label className="form-label">Email</label>
              <div className="form-notch">
                <div className="form-notch-leading"></div>
                <div className="form-notch-middle" style={{ width: '42.4px' }}></div>
                <div className="form-notch-trailing"></div>
              </div>
            </div>
            {formik.errors.email && formik.touched.email && <p className={cl('erros-toast')}>{formik.errors.email}</p>}
          </div>{' '}
          <br />
          <div>
            <div className="form-outline">
              <input
                type="number"
                className="form-control"
                name="phone"
                value={formik.values.phone || ''}
                onChange={formik.handleChange}
              />
              <label className="form-label">Phone</label>
              <div className="form-notch">
                <div className="form-notch-leading"></div>
                <div className="form-notch-middle" style={{ width: '42.4px' }}></div>
                <div className="form-notch-trailing"></div>
              </div>
            </div>
            {formik.errors.phone && formik.touched.phone && <p className={cl('erros-toast')}>{formik.errors.phone}</p>}
          </div>{' '}
          <br />
          <div>
            <div className="form-outline">
              <input
                type="text"
                className="form-control"
                name="address"
                value={formik.values.address || ''}
                onChange={formik.handleChange}
              />
              <label className="form-label">Address</label>
              <div className="form-notch">
                <div className="form-notch-leading"></div>
                <div className="form-notch-middle" style={{ width: '42.4px' }}></div>
                <div className="form-notch-trailing"></div>
              </div>
            </div>
            {formik.errors.address && formik.touched.address && (
              <p className={cl('erros-toast')}>{formik.errors.address}</p>
            )}
          </div>
        </div>
        <div className={cl('all-button')}>
          <Button className={cl('add-btn')} type="submit">
            Edit
          </Button>
          <Button onClick={() => navigate('/', { replace: true })} color="danger">
            Go Back
          </Button>
        </div>
      </form>
    </div>
    // <MDBValidation className={cl('row', 'g-3', 'validate')} noValidate onSubmit={handleEdit}>
    //   <p className={cl('fs-2', 'fw-bold')}>Update User Detail</p>
    //   <div className={cl('input-validate')}>
    //     <MDBValidationItem feedback="Please provider a name." invalid>
    //       <MDBInput value={name || ''} name="name" type="text" onChange={onInputChange} required label="Name" />
    //     </MDBValidationItem>
    //     <br />
    //     <MDBValidationItem feedback="Please provider an email." invalid>
    //       <MDBInput value={email || ''} name="email" type="email" onChange={onInputChange} required label="Email" />
    //     </MDBValidationItem>
    //     <br />
    //     <MDBValidationItem feedback="Please provider a phone no." invalid>
    //       <MDBInput value={phone || ''} name="phone" type="number" onChange={onInputChange} required label="Phone" />
    //     </MDBValidationItem>
    //     <br />
    //     <MDBValidationItem feedback="Please provider an address." invalid>
    //       <MDBInput
    //         value={address || ''}
    //         name="address"
    //         type="text"
    //         onChange={onInputChange}
    //         required
    //         label="Address"
    //       />
    //     </MDBValidationItem>
    //     <br />
    //     <div className="col-12">
    //       <MDBBtn className={cl('add-btn')} type="submit">
    //         Update
    //       </MDBBtn>
    //       <MDBBtn onClick={() => navigate('/', { replace: true })} color="danger">
    //         Go Back
    //       </MDBBtn>
    //     </div>
    //   </div>
    // </MDBValidation>
  );
};

export default EditUser;
