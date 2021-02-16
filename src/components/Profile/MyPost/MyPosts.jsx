import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
  let postElement = props.postData.map((postEl) => (
    <Post message={postEl.message} like={postEl.likes} id={postEl.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let updateNewPostText = () => {
    let newPostText = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(newPostText)
    props.dispatch(action);
  };

  return (
    
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={updateNewPostText}
          ref={newPostElement}
          value={props.newPostText}
        />
        <div>
          <button onClick={addPost}>send</button>
        </div>
      </div>
      {postElement}
    </div>
  );
};

export default MyPosts;
