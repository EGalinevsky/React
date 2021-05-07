import React from "react";
import s from "./Users.module.css";
import user_png from "../../assets/img/user.jpg";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.left__item}>
          <NavLink to={"/profile/" + user.id}>
            <img
              className={s.photo}
              src={user.photos.small != null ? user.photos.small : user_png}
              alt=""
            />
          </NavLink>
          <div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
                className={s.btn}
              >
                unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
                className={s.btn}
              >
                follow
              </button>
            )}
          </div>
        </div>
        <div className={s.right__item}>
          <div className={s.right__item_text}>
            <h4>{user.name}</h4>
            <p>{"user.status"}</p>
          </div>
          <div>
            <p>{"user.location.city"}</p>
            <p>{"user.location.country"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
