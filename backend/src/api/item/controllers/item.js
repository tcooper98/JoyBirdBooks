'use strict';

/**
 * item controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::item.item');




// "use strict";

/**
 *  item controller
 */

// const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::item.item", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const item = await strapi.entityService.findMany("api::item.item", query);

    const sanitizedEntity = await this.sanitizeOutput(item);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
