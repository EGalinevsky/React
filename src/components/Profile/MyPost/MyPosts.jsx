import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.content}>
      <div>My Posts</div>
      <div>
      
        <textarea></textarea>
        <button>send</button>
      </div>
     <Post message='1' value='15'/>
     <Post message='2' value='20'/>
     <Post message='3' value='35'/>
    </div>
  );
};

export default MyPosts;
