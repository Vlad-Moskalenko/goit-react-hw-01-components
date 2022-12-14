import css from './StatisticsItem.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsItem = ({ statData: { label, percentage } }) => (
  <li style={{ backgroundColor: getRandomHexColor() }} className={css.item}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  statData: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
