const action_types = require('./action-types');
const api = require('../state/api');

const initialState = {
  content: api.getContent(), // Loads default language content (en) as an initial state
  language: 'JP',
};

let reducer = function(state = initialState, action) {
  switch (action.type) {
    case action_types.SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language),
      };
    default:
      return state;
  }
};

module.exports = reducer;
