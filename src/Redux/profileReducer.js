const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, post: "Hi, How are you?", likesCount: 23 },
    { id: 2, post: "It's my first post!", likesCount: 3 },
    { id: 3, post: "It's my second post!", likesCount: 9 },
    { id: 4, post: "BlaBla", likesCount: 13 }
  ],
  newPostText: ""
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
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;
