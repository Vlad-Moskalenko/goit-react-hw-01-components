import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({
  transactionData: { type, amount, currency },
}) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionHistoryItem.propTypes = {
  transactionData: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
