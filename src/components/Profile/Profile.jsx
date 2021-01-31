import MyPosts from "./MyPost/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <img
        className={s.space}
        src="https://avatanplus.com/files/resources/original/5cb1eb4d3d21516a16ff25c2.jpg"
      ></img>
      <div>
        <img
          className={s.astronaut}
          src="http://bm.img.com.ua/berlin/storage/orig/2/e3/c7eb255f1c240407c9a6a205378a2e32.png"
        ></img>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
