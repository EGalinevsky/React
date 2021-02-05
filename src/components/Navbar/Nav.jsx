import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

// let s = {
//   'nav': "Nav_nav__1Ub5l",
//   'item': "Nav_item__3opcv",
//   'active': "Nav_active__K2oL4",
// };

console.log(s);

let classes = `${s.item} ${s.active}`;

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.item}>
        <li>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </li>
      </ul>
      <ul className={s.item}>
        <li>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Messages
          </NavLink>
        </li>
      </ul>
      <ul className={s.item}>
        <li>
          <NavLink to="/music" activeClassName={s.activeLink}>
            Music
          </NavLink>
        </li>
      </ul>
      <ul className={s.item}>
        <li>
          <NavLink to="/news" activeClassName={s.activeLink}>
            News
          </NavLink>
        </li>
      </ul>
      <ul className={s.item}>
        <li>
          <NavLink to="/setting" activeClassName={s.activeLink}>
            Setting
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
