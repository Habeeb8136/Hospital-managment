import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiAdminLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../features/user";
import './NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [active, setActive] = useState(false);

  function handleLogout() {
    dispatch(logoutUser(false));
  }
  

  return (
    <div>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          expand={expand}
          
          variant="dark"
        >
          <Container fluid>
            <Navbar.Brand >
              <Link to='/'><div className="nav"><RiAdminLine /> Admin</div></Link>
            </Navbar.Brand>
            {user.loggedIn ? (
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
            ) : null}

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              variant="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <div className="toggle-menu">
                    <div >
                    <Link to='/'><div className="menu-item">Dashboard</div></Link>
                    <Link to='employees'><div onClick={()=>setActive(true)} className={active?"menu-item active":"menu-item"}>Employees</div></Link>
                    <Link to='departments'><div className="menu-item">Departments</div></Link>
                    <Link to='heads'><div className="menu-item">Department Heads</div></Link>
                    </div>
                    <div className="menu-item">
                    <a href="signin">
                    <div onClick={()=>handleLogout()}><RiAdminLine />Logout</div>
                    </a>
                    </div>  
                 </div> 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavBar;
