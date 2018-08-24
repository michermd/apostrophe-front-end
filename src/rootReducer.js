import { combineReducers } from 'redux';
import browseReducer from './components/browse/browseMod';
import navReducer from './components/nav/navMod'
import pubReducer from './components/pubs/pubMod';

export default combineReducers({
  browse: browseReducer,
  pub: pubReducer,
  nav: navReducer
});
