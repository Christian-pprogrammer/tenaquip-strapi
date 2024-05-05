'use strict';

/**
 * global-sourcing controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::global-sourcing.global-sourcing');
