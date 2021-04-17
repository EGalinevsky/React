import s from "./../Nav.module.css";

const Friends = (props) => {
  return (
    <div>
      <a className={s.link} to="">
        <img
          className={s.img_planet_item}
          src="https://img2.pngio.com/desert-planet-stock-by-commandereve-planets-png-full-size-desert-planet-png-2000_2000.png"
          alt=""
        />
        {props.name}
      </a>
    </div>
  );
};

export default Friends;
