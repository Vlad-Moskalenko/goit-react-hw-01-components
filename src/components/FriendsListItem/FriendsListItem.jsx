import css from './FriendsListItem.module.css';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.status}>{isOnline}</span>
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </li>
);

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
