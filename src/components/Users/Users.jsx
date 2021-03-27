import React from "react";
import s from "./Users.module.css";
import user_png from "../../assets/img/user.jpg";
import { NavLink } from "react-router-dom";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

const Users = (props) => {
  debugger
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      {props.users.map((u) => (
        <User key={u.id} 
              user={u}
              followingInProgress={props.followingInProgress}
              unfollow={props.unfollow}
              follow={props.follow} />

      ))}
    </div>
  );
};

export default Users;
