import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {
  required,
  maxLengthCreator,
} from "./../../../utils/validators/validators";
import { Textarea } from "./../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
  let postElement = props.postData.map((postEl) => (
    <Post
      message={postEl.message}
      key={postEl.id}
      like={postEl.likes}
      id={postEl.id}
    />
  ));

  let addNewPost = (values) => {
    props.addPost(values.nextPostBody);
  };

  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <AddMyPostFormRedux onSubmit={addNewPost} />
      {postElement}
    </div>
  );
};

const maxLength = maxLengthCreator(10);

// const afterSubmit = (result, dispatch) => {
//   dispatch(reset("nextPostBody"));
// }; // проверить завтра 

const AddMyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength]}
          component={Textarea}
          name="nextPostBody"
        ></Field>
        <div>
          <button>send</button>
        </div>
      </div>
    </form>
  );
};

const AddMyPostFormRedux = reduxForm({
  form: "newMyPostForm",
  // onSubmitSuccess: afterSubmit,
})(AddMyPostForm);

export default MyPosts;
