import { combineReducers } from 'redux';
import getGiftees from './getGiftees';
import getGifts from './getGifts';
import addIdea from './addIdea';
import getOccasions from './getOccasions';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  form: formReducer,
  getGiftees,
  getGifts,
  getOccasions,
  addIdea
})

export default rootReducer;
