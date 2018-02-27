const action_types = require('./action-types');

let actions = {
  switchLanguage(language) {
    return {
      type: action_types.SWITCH_LANGUAGE,
      language,
    };
  },
  toggleMenu(bool) {
    return {
      type: action_types.TOGGLE_MENU,
      bool,
    };
  },
};

module.exports = actions;
