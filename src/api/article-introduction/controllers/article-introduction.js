"use strict";
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

/**
 *  article-introduction controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::article-introduction.article-introduction",
  ({ strapi }) => ({
    async find(ctx) {
      const { pageNo, pageSize, ...params } = ctx.query;
      if (pageNo && pageSize) {
        ctx.query = {
          ...params,
          "pagination[page]": Number(pageNo),
          "pagination[pageSize]": Number(pageSize),
        };
      }
      const { data, meta } = await super.find(ctx);
      return { data: removeAttrsAndId(removeTime(data)), meta };
    },
  })
);
