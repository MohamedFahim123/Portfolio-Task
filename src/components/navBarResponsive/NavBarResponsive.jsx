import { NavLink } from 'react-router-dom';
import styles from './navBarResponsive.module.css';
import { useState } from 'react';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import myImg from '../../assets/images/myImage.jpg';

export default function NavBarResponsive() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  function handleOffcanvasToggle() {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };
  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.myNavBar}`}>
      <Navbar.Toggle className='bg-light' onClick={handleOffcanvasToggle} aria-controls="basic-navbar-nav" />

      <Navbar.Offcanvas
        id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
        show={showOffcanvas}
        onHide={handleOffcanvasToggle}
        placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='offCanvas__head' id="offcanvasNavbarLabel">
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="OffcanvasBody__Scrollable">
          <Nav className="mx-auto offCanvasBodyNav" >
            <div className={`sideBar__logo`}>
              <img src={myImg} alt="PortFolio's Owner" />
            </div>
            <div className={`owner__info text-center`}>
              <h3>
                <NavLink to='https://github.com/MohamedFahim123?tab=repositories'>
                  Mohamed Fahim
                </NavLink>
              </h3>
              <p>
                <span className={'activLink'}>FrontEnd Developer</span> <br />in Egypt
              </p>
            </div>
            <ul className={`webSite__links text-center`}>
              <li>
                <NavLink onClick={closeOffcanvas} to='/' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
                  home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeOffcanvas} to='/about' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
                  about
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeOffcanvas} to='/skills' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
                  skills
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeOffcanvas} to='/experience' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
                  experience
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeOffcanvas} to='/work' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
                  work
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </nav>
  )
}
