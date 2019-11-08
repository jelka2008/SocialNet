import {createStore, combineReducers} from 'redux';
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import navBarReducer from './navBarReducer'

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  NavBars: navBarReducer
});

let store = createStore(reducers);

export default store