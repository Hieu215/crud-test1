import styles from './InfoUserStyles.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { getUserStart } from '~/actions';
const cl = classNames.bind(styles);
const initialState = {
  id: '',
  name: '',
  email: '',
  phone: '',
  address: '',
};
function InfoUser() {
  const { users } = useSelector((state) => state.getUser);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fromValue, setFromValue] = useState(initialState);
  useEffect(() => {
    if (id) {
      dispatch(getUserStart(id));
    }
    // dispatch(loadUsers());
  }, [id]);
  const getDataForm = () => {
    // if (id) {
    // const singleUser = users.find((user) => user.id === id);
    // setFromValue({ ...singleUser });
    // }
    setFromValue({ ...users });
  };
  useEffect(() => {
    if (users) {
      getDataForm();
    }
  }, [users]);
  return (
    <div className={cl('header')}>
      <div className={cl('nav-header', 'row')}>
        <p className={cl('col-md-12', 'fs-3')}>User Detail</p>
        <hr />
        <p className="col-md-6 fw-blod">ID:</p>
        <p className="col-md-6">{fromValue.id}</p>
        <p className="col-md-6 fw-blod">Name:</p>
        <p className="col-md-6">{fromValue.name}</p>
        <p className="col-md-6 fw-blod">Email:</p>
        <p className="col-md-6">{fromValue.email}</p>
        <p className="col-md-6 fw-blod">Phone:</p>
        <p className="col-md-6">{fromValue.phone}</p>
        <p className="col-md-6 fw-blod">Address:</p>
        <p className="col-md-6">{fromValue.address}</p>
      </div>
      <div className={cl('button', 'col-12')}>
        <MDBBtn onClick={() => navigate('/', { replace: true })} color="danger">
          Go Back
        </MDBBtn>
      </div>
    </div>
  );
}

export default InfoUser;
