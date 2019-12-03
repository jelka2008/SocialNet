import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setSelectedPage,
  setTotalUsersCount,
  toggleFollowingProgress,
  getUsers,
  acceptFollow,
<<<<<<< HEAD
  acceptUnfollow,
  pageChange
=======
  acceptUnfollow
>>>>>>> a0728c37aff8d50e790bae9c2d1d1f2a51b7f285
} from "../../Redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = pageNumber => {
<<<<<<< HEAD
    // this.props.setCurrentPage(pageNumber);
    this.props.pageChange(pageNumber, this.props.pageSize);
=======
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
>>>>>>> a0728c37aff8d50e790bae9c2d1d1f2a51b7f285
  };

  onFollow = userId => {
    this.props.acceptFollow(userId);
  };

  onUnfollow = userId => {
    this.props.acceptUnfollow(userId);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          selectedPage={this.props.selectedPage}
          totalUsersCount={this.props.totalUsersCount}
          setSelectedPage={this.props.setSelectedPage}
          followingInProgress={this.props.followingInProgress}
          onPageChange={this.onPageChange}
          onFollow={this.onFollow}
          onUnfollow={this.onUnfollow}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    selectedPage: state.usersPage.selectedPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  setSelectedPage,
  setTotalUsersCount,
  toggleFollowingProgress,
  getUsers,
  acceptFollow,
<<<<<<< HEAD
  acceptUnfollow,
  pageChange
=======
  acceptUnfollow
>>>>>>> a0728c37aff8d50e790bae9c2d1d1f2a51b7f285
})(UsersContainer);
