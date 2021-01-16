"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities;
    console.log("ctx", ctx);
    if (ctx.query._q) {
      entities = await strapi.services.item.search(ctx.query);
    } else {
      entities = await strapi.services.item.find(ctx.query);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.item })
    );
  },
};
