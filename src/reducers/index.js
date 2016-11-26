import { combineReducers } from 'redux';
import NavsReducer from './reducer_navs';
import  ActiveNav from './reducer_nav_select';
import messageBtn from './reducer_messenger';

const rootReducer = combineReducers({
  navs: NavsReducer,
  activeNav: ActiveNav,
  messageBtn: messageBtn
});

export default rootReducer;
