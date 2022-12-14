import css from './friendListItem.module.css';
import clsx from "clsx";

export function FriendListItem({name, avatar, isOnline}) {
  return (
    <li className={css.item}>
      <span className={clsx(css.status, isOnline && css.online)}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
