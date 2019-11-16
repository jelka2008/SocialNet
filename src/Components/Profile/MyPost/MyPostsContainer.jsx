import React from "react";
import {
  addPostAction,
  updateNewPostTextAction
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      dispatch(updateNewPostTextAction(text));
    },
    addPost: () => {
      dispatch(addPostAction());
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
