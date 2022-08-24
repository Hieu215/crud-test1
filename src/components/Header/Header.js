import style from './Header.module.scss';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { NavLink } from 'react-router-dom';
import { logOutAcountStart } from '~/actions';
const cl = classNames.bind(style);
function Header() {
  const [showBasic, setShowBasic] = useState(false);
  const user = useSelector((state) => state.login.currentUsers);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutAcountStart());
  };
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-white" tag="div">
            <NavLink to="/" className="text-white">
              <span style={{ marginRight: '10px' }}>
                <MDBIcon fas icon="book-open" />
              </span>
              Contact
            </NavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="text-white"
            onClick={() => {
              setShowBasic(!showBasic);
            }}
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className={cl('mr-auto mb-2 mb-lg-0', 'navbar-nav')}>
              <MDBNavbarItem>
                <NavLink to="/" className={cl('text-white', 'nav-link')}>
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/addUser/:id" className={cl('text-white', 'nav-link')}>
                  Add User
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/about" className={cl('text-white', 'nav-link')}>
                  About
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            {user ? (
              <MDBNavbarNav className={cl('navbar-authen')}>
                <MDBNavbarItem className={cl('nav-item')}>
                  <div className={cl('text-white', 'nav-link')}>
                    Hi, <span>{user.account}</span>
                  </div>
                </MDBNavbarItem>
                <MDBNavbarItem className={cl('nav-item')}>
                  <NavLink to="/login/:id" className={cl('text-white', 'nav-link')} onClick={handleLogOut}>
                    Logout
                  </NavLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            ) : (
              <MDBNavbarNav className={cl('navbar-authen')}>
                <MDBNavbarItem className={cl('nav-item')}>
                  <NavLink to="/login/:id" className={cl('text-white', 'nav-link')}>
                    Login
                  </NavLink>
                </MDBNavbarItem>
                <MDBNavbarItem className={cl('nav-item')}>
                  <NavLink to="/register/:id" className={cl('text-white', 'nav-link')}>
                    Register
                  </NavLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            )}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Header;
