import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {stats.length > 0 &&
        stats.map(({ id, ...statData }) => (
          <StatisticsItem key={id} statData={statData} />
        ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
