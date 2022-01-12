"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::game.game", () => ({
  async populate(ctx) {
    console.log("Initializing")
    ctx.send({ ok: true})
  },
}));
