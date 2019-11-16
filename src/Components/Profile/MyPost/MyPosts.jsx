import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  debugger;
  let postElements = props.profilePage.posts.map(post => (
    <Post message={post.post} like={post.likesCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = event => {
    let text = event.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.profilePage.newPostText}
            placeholder="Enter your text"
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
