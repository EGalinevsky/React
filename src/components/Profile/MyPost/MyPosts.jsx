import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>My Posts</div>
      <div>
        <textarea></textarea>
        <button>send</button>
      </div>
     <Post message='1'/>
     <Post message='2'/>
     <Post message='3'/>
    </div>
  );
};

export default MyPosts;
