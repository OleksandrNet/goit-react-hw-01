import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsWrap}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friendsItem}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
