import PropTypes from 'prop-types';
import styles from './listOfLinksAndMedia.module.css';

export default function ListOfLinksAndMedia({ link, setContentPerView , setLoading , setActiveLink, activeLink }) {
  return (
    <li
      onClick={() => {
        setActiveLink(link?.id);
        setContentPerView(4);
        setLoading(true);
      }}
      className={`${styles?.list__link} ${link?.id === activeLink ? styles.active : ''}`}
    >{link?.name}
    </li>
  );
};

ListOfLinksAndMedia.propTypes = {
  link: PropTypes.object.isRequired,
  setActiveLink: PropTypes.func.isRequired,
  setContentPerView: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  activeLink: PropTypes.number.isRequired
};

