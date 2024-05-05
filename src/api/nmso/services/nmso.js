'use strict';

/**
 * nmso service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nmso.nmso');
