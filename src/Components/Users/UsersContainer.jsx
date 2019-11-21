import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setSelectedPage,
  setTotalUsersCount,
  toggleIsFetching
} from "../../Redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../../API/API";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChange = pageNumber => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  onFollow = userId => {
    this.props.toggleIsFetching(true);
    usersAPI.postFollow(userId).then(data => {
      this.props.toggleIsFetching(false);
      data.resultCode === 0 ? this.props.follow(userId) : alert(data.messages);
    });
  };

  onUnfollow = userId => {
    this.props.toggleIsFetching(true);
    usersAPI.deleteFollow(userId).then(data => {
      this.props.toggleIsFetching(false);
      data.resultCode === 0
        ? this.props.unfollow(userId)
        : alert(data.messages);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          selectedPage={this.props.selectedPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChange={this.onPageChange}
          setSelectedPage={this.props.setSelectedPage}
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
    isFetching: state.usersPage.isFetching
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setSelectedPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer);
