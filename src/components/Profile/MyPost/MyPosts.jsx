import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        My Posts
      </div>
      <div>
        <textarea></textarea>
        <button>send</button>
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
