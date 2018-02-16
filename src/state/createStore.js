import { createStore as reduxCreateStore } from 'redux';
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
  language: 'JP',
  locale: 'ja',
  content: api.getContent(),
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
