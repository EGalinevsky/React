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
      <ul className={`${s.item} ${s.active}`}>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
      <ul className={s.item}>
        <li>
          <a href="/dialogs">Messages</a>
        </li>
      </ul>
      <ul className={s.item}>
        <li>
          <a href="/music">Music</a>
        </li>
      </ul>
      <ul className={s.item}>
        <li>
          <a href="/news">News</a>
        </li>
      </ul>
      <ul className={s.item}>
        <li>
          <a href="/setting">Setting</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
