import { NAV_ITEM_SELECTED } from '../actions/index';
import NavsReducer from './reducer_navs';

const initialNav = NavsReducer()[0];

export default function(state = initialNav, action){
  switch(action.type){
    case  NAV_ITEM_SELECTED:
    return action.payload;
  }
  //if we dont care about state just return the state
  return state;
}
