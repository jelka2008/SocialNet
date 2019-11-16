import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setSelectedPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.togleIsFetching(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.togleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = pageNumber => {
    this.props.togleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.togleIsFetching(false);
        this.props.setUsers(response.data.items);
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

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setSelectedPage: pageNumber => {
      dispatch(setSelectedPageAC(pageNumber));
    },
    setTotalUsersCount: count => {
      dispatch(setTotalUsersCountAC(count));
    },
    togleIsFetching: isFetching => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
