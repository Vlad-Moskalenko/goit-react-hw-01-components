import css from './StatisticsItem.module.css';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ statData: { label, percentage } }) => (
  <li className={css.item}>
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
