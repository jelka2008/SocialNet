const SET_USERS_DATA = "SET_USERS_DATA";
const SET_AUTH_USERS_PROFILE = "SET_AUTH_USERS_PROFILE";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  authUsersProfile: null
};

const authReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case SET_USERS_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    }
    case SET_AUTH_USERS_PROFILE: {
      return {
        ...state,
        authUsersProfile: [...action.usersProfile]
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (id, login, email) => ({
  type: SET_USERS_DATA,
  data: { id, login, email }
});

export const setAuthUsersProfile = usersProfile => ({
  type: SET_AUTH_USERS_PROFILE,
  usersProfile
});

export default authReducer;
