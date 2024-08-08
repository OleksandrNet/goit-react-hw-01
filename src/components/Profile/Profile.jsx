import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.containerHero}>
        <img className={css.avatar} src={image} alt={name} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.listWrap}>
        <li className={css.list}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.list}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.list}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
