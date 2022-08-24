import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteUserStart, loadUsers } from '~/actions';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBTooltip, MDBIcon, MDBSpinner } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import styles from './HomeStyles.module.scss';
import classNames from 'classnames/bind';
import Search from '~/components/Search';
import ViewA from '~/components/ViewA';
import ViewB from '~/components/ViewB';
import ViewC from '~/components/ViewC';

const cl = classNames.bind(styles);
function Home() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const { keyWord } = useSelector((state) => state.searchUser);
  const user = useSelector((state) => state.login.currentUsers);
  useEffect(() => {
    if (!user) {
      navigate('/login/:id');
    }
    dispatch(loadUsers());
  }, []);
  if (loading) {
    return (
      <MDBSpinner className={cl('container')} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }
  const handleDelete = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUserStart(id));
    }
  };
  let searchData = users.filter((user) => {
    if (keyWord === '') {
      return user;
    } else {
      return user?.phone.toString().includes(keyWord);
    }
  });
  return (
    <div className={cl('container')}>
      <Search />
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>actions</th>
          </tr>
        </MDBTableHead>
        {searchData.map((user, index) => (
          <MDBTableBody key={index}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <MDBBtn className={cl('m-1')} tag="span" color="none" onClick={() => handleDelete(user.id)}>
                  <MDBTooltip title="Delete" tag="span">
                    <MDBIcon fas icon="trash" style={{ color: '#dd4b39' }} size="lg" />
                  </MDBTooltip>
                </MDBBtn>{' '}
                <Link to={`./editUser/${user.id}`}>
                  <MDBTooltip title="Edit" tag="span">
                    <MDBIcon fas icon="pen" style={{ color: '#55acee', marginBottom: '10px' }} size="lg" />
                  </MDBTooltip>
                </Link>{' '}
                <Link to={`./addUser/${user.id}`}>
                  <MDBTooltip title="Add" tag="span">
                    <MDBIcon fas icon="plus" style={{ color: '#55acee', marginBottom: '10px' }} size="lg" />
                  </MDBTooltip>
                </Link>{' '}
                <Link to={`./infoUser/${user.id}`}>
                  <MDBTooltip title="View" tag="span">
                    <MDBIcon fas icon="eye" style={{ color: '#3b5938', marginBottom: '10px' }} size="lg" />
                  </MDBTooltip>
                </Link>
              </td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
      <ViewA />
      <ViewB />
      <ViewC />
    </div>
  );
}

export default Home;
