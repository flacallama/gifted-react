import { combineReducers } from 'redux';
import getGiftees from './getGiftees';
import getGifts from './getGifts';
import addIdea from './addIdea';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  form: formReducer,
  getGiftees,
  getGifts,
  addIdea
})

export default rootReducer;
