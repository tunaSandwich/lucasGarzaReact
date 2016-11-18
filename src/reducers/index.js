import { combineReducers } from 'redux';
import NavsReducer from './reducer_navs';
import  ActiveNav from './reducer_nav_select'

const rootReducer = combineReducers({
  navs: NavsReducer,
  activeNav: ActiveNav
});

export default rootReducer;
