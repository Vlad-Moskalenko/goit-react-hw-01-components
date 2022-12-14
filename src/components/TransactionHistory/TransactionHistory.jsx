import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className={css.TransactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.length > 0 &&
        items.map(({ id, ...transactionData }) => (
          <TransactionHistoryItem key={id} transactionData={transactionData} />
        ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
