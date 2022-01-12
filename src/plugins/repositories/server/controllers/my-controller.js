'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('repositories')
      .service('myService')
      .getWelcomeMessage();
  },
};
