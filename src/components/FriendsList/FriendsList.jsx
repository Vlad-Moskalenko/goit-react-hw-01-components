import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export const FriendsList = ({ friends }) => (
  <ul className={css.friendsList}>
    {friends.length > 0 &&
      friends.map(({ id, ...friendData }) => (
        <FriendsListItem key={id} friend={friendData} />
      ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
