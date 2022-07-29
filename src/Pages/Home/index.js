import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUsers } from '~/actions';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBTooltip, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import styles from './HomeStyles.module.scss';
import classNames from 'classnames/bind';
const cl = classNames.bind(styles);
function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const handleDelete = () => {};
  return (
    <div className={cl('container')}>
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
        {users.map((user, index) => (
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
    </div>
  );
}

export default Home;
