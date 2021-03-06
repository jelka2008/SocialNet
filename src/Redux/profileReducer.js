import fb from "../image/ListSoc/facebook.png";
import ws from "../image/ListSoc/znachok-jelektronnoj-pochty.png";
import vk from "../image/ListSoc/vk.png";
import tw from "../image/ListSoc/twitter.png";
import inst from "../image/ListSoc/instagram.png";
import youtub from "../image/ListSoc/youtube.png";
import gh from "../image/ListSoc/github.png";
import mL from "../image/ListSoc/linkedin.png";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, post: "Hi, How are you?", likesCount: 23 },
    { id: 2, post: "It's my first post!", likesCount: 3 },
    { id: 3, post: "It's my second post!", likesCount: 9 },
    { id: 4, post: "BlaBla", likesCount: 13 }
  ],
  newPostText: "",
  profile: null,
  listCont: [
    { id: 1, email: null, img: fb },
    { id: 2, email: null, img: ws },
    { id: 3, email: null, img: vk },
    { id: 4, email: null, img: tw },
    { id: 5, email: null, img: inst },
    { id: 6, email: null, img: youtub },
    { id: 7, email: null, img: gh },
    { id: 8, email: null, img: mL }
  ]
};

const profileReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    // case SET_EMAIL_ADRESS: {
    //   return {
    //     ...state,
    //     listCont: [...state.listCount email: ]
    //   }
    // }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
