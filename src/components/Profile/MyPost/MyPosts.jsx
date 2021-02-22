import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";




const MyPosts = (props) => {
  
  let postElement = props.postData.map((postEl) => (
    <Post message={postEl.message} like={postEl.likes} id={postEl.id} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onUpdateNewPostText = () => {
    let newPostText = newPostElement.current.value;
    props.updateNewPostText(newPostText)
    // newPostElement.current.value = ;
  };


  return (
    
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onUpdateNewPostText}
          ref={newPostElement}
          value={props.newPostText}
        />
        <div>
          <button onClick={onAddPost}>send</button>
        </div>
      </div>
      {postElement}
    </div>
  );
};

export default MyPosts;
