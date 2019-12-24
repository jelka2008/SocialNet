import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setSelectedPage,
  setTotalUsersCount,
  toggleFollowingProgress,
  requestUsers,
  acceptFollow,
  acceptUnfollow,
  pageChange
} from "../../Redux/usersReducer";
import {
  // getUsers,
  getTotalUsersCount,
  getSelectedPage,
  getPageSize,
  getIsFetching,
  getFollowingInProgress,
  getCurrentPage,
  getUsers
} from "../../Redux/usersSelectors";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = pageNumber => {
    // this.props.setCurrentPage(pageNumber);
    this.props.pageChange(pageNumber, this.props.pageSize);
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
    // users: getUsers(state),
    users: getUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    selectedPage: getSelectedPage(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  setSelectedPage,
  setTotalUsersCount,
  toggleFollowingProgress,
  requestUsers,
  acceptFollow,
  acceptUnfollow,
  pageChange
})(UsersContainer);
