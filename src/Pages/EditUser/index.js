import { useEffect, useState } from 'react';
import { MDBValidation, MDBInput, MDBBtn, MDBValidationItem } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './EditUserStyles.module.scss';
import { createUserStart } from '~/actions';

const cl = classNames.bind(styles);
const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const EditUser = () => {
  const [fromValue, setFromValue] = useState(initialState);
  const { name, email, phone, address } = fromValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromValue);
    if (name && email && phone && address) {
      dispatch(createUserStart(fromValue));

      setTimeout(() => navigate('/', { replace: true }), 500);
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    console.log([name]);
    setFromValue({ ...fromValue, [name]: value });
  };
  return (
    <MDBValidation className={cl('row', 'g-3', 'validate')} noValidate required onSubmit={handleSubmit}>
      <p className={cl('fs-2', 'fw-bold')}>Add User Detail</p>
      <div className={cl('input-validate')}>
        <MDBValidationItem feedback="Please provider a name." invalid>
          <MDBInput value={name} name="name" type="text" onChange={onInputChange} required label="Name" />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provider an email." invalid>
          <MDBInput value={email} name="email" type="email" onChange={onInputChange} required label="Email" />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provider a phone no." invalid>
          <MDBInput value={phone} name="phone" type="number" onChange={onInputChange} required label="Phone" />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provider an address." invalid>
          <MDBInput value={address} name="address" type="text" onChange={onInputChange} required label="Address" />
        </MDBValidationItem>
        <br />
        <div className="col-12">
          <MDBBtn className={cl('add-btn')} type="submit">
            Add
          </MDBBtn>
          <MDBBtn onClick={() => navigate('/', { replace: true })} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default EditUser;
