'use strict';

/**
 * global-sourcing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-sourcing.global-sourcing');
