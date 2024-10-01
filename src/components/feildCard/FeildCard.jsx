import fieldStyle from './feildCard.module.css';
import PropTypes from 'prop-types';

export default function FeildCard({ name, icon, color }) {
  return (
    <div className={`col-md-3 col-sm-6 ${fieldStyle.column}`}>
      <div className={`d-flex flex-column gap-4 p-4 ${fieldStyle.card}`} style={{ borderBottom: `2px solid ${color || '#000'}` }}>
        <i className={icon} style={{ color: color }}></i>
        <h6>{name}</h6>
      </div>
    </div>
  );
};

FeildCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}