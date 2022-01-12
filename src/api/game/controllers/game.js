"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::game.game", () => ({
  async populate(ctx) {
    console.log("Starting to populate...")

    await strapi.service('api::game.game').populate()

    ctx.send("Finished populating!")
  },
}));
