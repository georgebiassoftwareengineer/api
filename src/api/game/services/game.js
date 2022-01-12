"use strict";

/**
 * game service.
 */

module.exports = () => ({
  async populate() {
    const cat = await strapi.service('api::category.category').find({ name: "Action"})

    console.log(cat)
  },
});
