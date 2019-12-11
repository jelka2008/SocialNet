import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Textarea } from "../../Common/FormControls/FormControls";
import { reduxForm, Field } from "redux-form";
import {
  required,
  maxLengthCreator
} from "../../../Utils/Validators/validator";

const MyPosts = props => {
  let postElements = props.profilePage.posts.map(post => (
    <Post message={post.post} like={post.likesCount} />
  ));

  let addNewPost = value => {
    props.addPost(value.newPostBody);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newPostBody"}
          component={Textarea}
          placeholder={"Enter your text"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
