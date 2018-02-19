const action_types = require('./action-types');
const api = require('../state/api');
import rss from '../state/rss';
import members from '../data/members.json';

const initialState = {
  content: api.getContent(), // Loads default language content (en) as an initial state
  language: 'JP',
  feed: rss.getContent(),
  members: members,
};

let reducer = function(state = initialState, action) {
  switch (action.type) {
    case action_types.SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language),
        feed: rss.getContent(),
      };
    default:
      return state;
  }
};

module.exports = reducer;
