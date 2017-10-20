import { combineReducers } from 'redux';
import getGiftees from './getGiftees';
import getGifts from './getGifts';
import addIdea from './addIdea';
import getOccasions from './getOccasions';
import toggleAddOccasions from './toggleAddOccasions'
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  form: formReducer,
  getGiftees,
  getGifts,
  getOccasions,
  toggleAddOccasions,
  addIdea
})

export default rootReducer;
