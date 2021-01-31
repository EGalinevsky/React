import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/originals/f9/82/7a/f9827a43b8c9a91461d059ac092b4ab9.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
