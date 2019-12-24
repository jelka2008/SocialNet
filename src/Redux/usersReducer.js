import { usersAPI } from "../API/API";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_SELECTED_PAGE = "SET_SELECTED_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  selectedPage: 1,
  totalUsersCount: 10,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    }
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.pageNumber };
    }
    case SET_SELECTED_PAGE: {
      return { ...state, selectedPage: action.pageNumber };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };
    }
    default:
      return state;
  }
};

export const follow = userId => ({ type: FOLLOW, userId });

export const unfollow = userId => ({ type: UNFOLLOW, userId });

export const setUsers = users => ({ type: SET_USERS, users });

export const setCurrentPage = pageNumber => ({
  type: SET_CURRENT_PAGE,
  pageNumber
});

export const setSelectedPage = pageNumber => ({
  type: SET_SELECTED_PAGE,
  pageNumber
});

export const setTotalUsersCount = count => ({
  type: SET_TOTAL_USERS_COUNT,
  count
});

export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (pageNumber, pageSize) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageNumber, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const acceptFollow = userId => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.postFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const acceptUnfollow = userId => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.deleteFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const pageChange = (pageNumber, pageSize) => {
  return dispatch => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(requestUsers(pageNumber, pageSize));
  };
};

export default usersReducer;
