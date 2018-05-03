'use strict';

/**
 * Users.js controller
 *
 * @description: A set of functions called "actions" for managing `Users`.
 */

module.exports = {

  /**
   * Retrieve users records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.users.fetchAll(ctx.query);
  },

  /**
   * Retrieve a users record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.users.fetch(ctx.params);
  },

  /**
   * Create a/an users record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.users.add(ctx.request.body);
  },

  /**
   * Update a/an users record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.users.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an users record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.users.remove(ctx.params);
  }
};
