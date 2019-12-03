import { authAPI } from "../API/API";

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
        // isAuth: true
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

export const authMe = () => {
  return dispatch => {
    authAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
        // debugger;
        // axios
        //   .get("https://social-network.samuraijs.com/api/1.0/profile/" + id, {
        //     withCredentials: true
        //   })
        //   .then(response => {
        //     this.props.setAuthUsersProfile(response.data);
        //     // debugger;
        //   });

        // debugger;
      }
    });
  };
};

export default authReducer;
