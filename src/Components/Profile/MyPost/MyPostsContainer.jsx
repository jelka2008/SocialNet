import React from "react";
import { addPost, updateNewPostText } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost
})(MyPosts);

export default MyPostsContainer;
