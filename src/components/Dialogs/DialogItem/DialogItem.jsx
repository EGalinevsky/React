import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <ul className={s.item}>
      <li>
        <NavLink activeClassName={s.active} to={path}>
          <img
            className={s.astronaut}
            src="https://w7.pngwing.com/pngs/149/731/png-transparent-t-shirt-poster-logo-monochrome.png"
            alt=""
          />

          <p>{props.name}</p>
        </NavLink>
      </li>
    </ul>
  );
};

export default DialogItem;
