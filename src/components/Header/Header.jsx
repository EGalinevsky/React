import { NavLink } from "react-router-dom";
import s from  "./Header.module.css";
import {logout} from "./../../redux/auth-reducer";

const Header = (props) => {
  console.log(onclick)
  return (
    <header className={s.header}>
      <img className={s.header_img} src="https://i.ya-webdesign.com/images/nasa-worm-logo-png-9.png"></img>
      <div className={s.login__block}>
        {props.isAuth 
        ? <div>{props.login}-<button onClick={props.logout}>log out</button></div>
        : <NavLink to={'/login'} >login</NavLink>}
      </div>
    </header>
    
  );
};

export default Header;
