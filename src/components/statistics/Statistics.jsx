import PropTypes from "prop-types";
import css from './statistics.module.css'

export function Statistics({title, stats}) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(item => {
          return (<li key={item.id} className={css.item}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}%</span>
        </li>)
        })
      }
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired
  })
}
