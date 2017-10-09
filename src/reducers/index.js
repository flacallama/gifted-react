import { combineReducers } from 'redux';
import getGiftees from './getGiftees';
import getGifts from './getGifts';
import addIdea from './addIdea';

const rootReducer = combineReducers({
  getGiftees,
  getGifts,
  addIdea
})

export default rootReducer;
