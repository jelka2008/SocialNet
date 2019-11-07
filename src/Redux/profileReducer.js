const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = 'пусто';
      return state;
      case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;
      default:
        return state
     }
}

export const addPostAction = () => ({type: ADD_POST})

export const updateNewPostTextAction = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer