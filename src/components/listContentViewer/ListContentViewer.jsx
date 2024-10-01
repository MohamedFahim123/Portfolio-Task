import PropTypes from 'prop-types';
import styles from './ListContentViewer.module.css';
import { Link } from 'react-router-dom';

export default function ListContentViewer({ media  }) {

  return (
    <div className={styles.media__container}>
      <div className={styles.media}>
        <img src={media} alt="media" />
      </div>
      <div className={styles.media__overlay}>
        <div className='head'>
          <h4>
            <Link to='/work' className={styles.linkHead}>Work 2</Link>
          </h4>
          <p>Animation</p>
        </div>
        <ul className={styles.icon__list}>
          <li>
            <i className="fa-solid fa-share-nodes"></i>
          </li>
          <li>
            <i className="fa-regular fa-eye"></i>
            100
          </li>
          <li>
            <i className="fa-regular fa-heart"></i>
            49
          </li>
        </ul>
      </div>
    </div>
  );
};

ListContentViewer.propTypes = {
  media: PropTypes.string.isRequired,
};
