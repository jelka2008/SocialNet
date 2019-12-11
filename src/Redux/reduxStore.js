import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReduser } from "redux-form";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  NavBars: navBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
