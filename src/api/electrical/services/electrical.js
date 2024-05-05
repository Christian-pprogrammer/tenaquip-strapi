'use strict';

/**
 * electrical service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::electrical.electrical');
