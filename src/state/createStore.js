import { createStore as reduxCreateStore } from 'redux';
import text from '../data/content.json';
import api from './api';

const reducer = (state, action) => {
  if (action.type === `SWITCH_LANGUAGE`) {
    return Object.assign({}, state, {
      content: api.getContent(action.locale),
    });
  }
  return state;
};

const initialState = {
  language: 'EN',
  locale: 'en',
  content: api.getContent(),
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
