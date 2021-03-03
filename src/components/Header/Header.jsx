import { NavLink } from "react-router-dom";
import s from  "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.header_img} src="https://i.ya-webdesign.com/images/nasa-worm-logo-png-9.png"></img>
      <div className={s.login__block}>
        <NavLink to={'/login'} >login</NavLink>
      </div>
    </header>
  );
};

export default Header;
