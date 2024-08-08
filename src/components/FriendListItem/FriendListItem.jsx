import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
