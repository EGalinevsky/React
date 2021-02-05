import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {

  let postData = [
    { message: "hi", id: 1, likes:"15" },
    { message: "how is your name", id: 1, likes:"15" },
    { message: "what are you doing", id: 1, likes:"15" },
  ];

  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
        <div>
          <button>send</button>
        </div>
      </div>
      <Post message={postData[0].message} like={postData[0].likes} id={postData[0].id} />
      <Post message={postData[1].message} like={postData[1].likes} id={postData[1].id} />
      <Post message={postData[2].message} like={postData[2].likes} id={postData[2].id} />
    </div>
  );
};

export default MyPosts;
