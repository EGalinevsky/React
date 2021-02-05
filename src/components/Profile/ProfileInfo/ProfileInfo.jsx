
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={s.space}
        src="https://avatanplus.com/files/resources/original/5cb1eb4d3d21516a16ff25c2.jpg"
      ></img>
      <div>
        <img
          className={s.description_block}
          src="http://bm.img.com.ua/berlin/storage/orig/2/e3/c7eb255f1c240407c9a6a205378a2e32.png"
        ></img>
      </div>
    </div>
  );
};

export default ProfileInfo;
