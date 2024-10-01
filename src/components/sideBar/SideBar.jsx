import sideBarStyles from './sideBar.module.css';
import myImg from '../../assets/images/myImage.jpg';
import { Link, NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className={`${sideBarStyles.sideBar__handler} col-md-2 px-4 py-5 d-none d-lg-block position-fixed`}>
      <div className={`${sideBarStyles.sideBar__contentHandler}`}>
        <div className={`sideBar__logo`}>
          <img src={myImg} alt="PortFolio's Owner" />
        </div>
        <div className={`owner__info text-center`}>
          <h3>
            <Link to='https://github.com/MohamedFahim123?tab=repositories'>
              Mohamed Fahim
            </Link>
          </h3>
          <p>
            <span className={`activLink`}>FrontEnd Developer</span> in Egypt
          </p>
        </div>
        <ul className={`webSite__links text-center`}>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink to='/skills' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
              skills
            </NavLink>
          </li>
          <li>
            <NavLink to='/experience' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
              experience
            </NavLink>
          </li>
          <li>
            <NavLink to='/work' className={({ isActive }) => isActive ? `activLink nav-link` : 'nav-link'}>
              work
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
