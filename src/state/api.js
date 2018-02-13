const content = require('../data/content.json');

let api = {
  getContent(locale = 'ja') {
    return content.filter(obj => obj.lang === locale)[0];
  },
};

module.exports = api;
