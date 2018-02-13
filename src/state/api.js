const content = require('../data/content.json');

let api = {
  getContent(locale = 'en') {
    return content.filter(obj => obj.lang === locale)[0];
  },
};

module.exports = api;
