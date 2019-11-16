import React from 'react';
import Users from './Users'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setSelectedPageAC, setTotalUsersCountAC } from '../../Redux/usersReducer';

let mapStateToProps = (state) => {
  // debugger
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        selectedPage: state.usersPage.selectedPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }
  }

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setSelectedPage: (pageNumber) => {
      dispatch(setSelectedPageAC(pageNumber))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);