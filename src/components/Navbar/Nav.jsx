import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from "./Nav.module.css";



// let classes = `${s.item} ${s.active}`;

const Nav = (props) => {

  let friendsItem = props.friendsData.map((friend) => (
    <Friends name={friend.name} id={friend.id} />
  ));

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
      <ul className={s.item}>
        <li>
          <NavLink to="/friends" activeClassName={s.activeLink}>
            Friends
          </NavLink>
        </li>
        <li className={s.img_planets}>            {friendsItem}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
