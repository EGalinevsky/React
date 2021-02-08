import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {

  let postElement = props.postData.map((postEl) => (
    <Post message={postEl.message} like={postEl.likes} id={postEl.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () =>{    
    let text = newPostElement.current.value;

    props.addPost(text);
    newPostElement.current.value = '';
  }
    
  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div>
          
          <button onClick={ addPost }>send</button>
        </div>
      </div>
      {postElement}
    </div>
  );
};

export default MyPosts;
