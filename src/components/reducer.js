const action_types = require('./action-types');
const api = require('../state/api');
import rss from '../state/rss';
import members from '../data/members.json';
import blogs from '../data/blogs.json';

const initialState = {
  content: api.getContent(), // Loads default language content (en) as an initial state
  language: 'JP',
  feed: rss.getContent(),
  members: members,
  blogs: blogs,
  navActive: false,
};

let reducer = function(state = initialState, action) {
  switch (action.type) {
    case action_types.SWITCH_LANGUAGE:
      return Object.assign({}, state, {
        content: api.getContent(action.language),
      });
    case action_types.TOGGLE_MENU:
      return Object.assign({}, state, {
        navActive: !navActive,
      });
    default:
      return state;
  }
};

module.exports = reducer;
