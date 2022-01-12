"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::game.game", () => ({
  async populate(ctx) {
    console.log("Starting to populate...")

    console.log(ctx.query)

    ctx.send("Finished populating!")
  },
}));
