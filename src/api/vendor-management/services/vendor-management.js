'use strict';

/**
 * vendor-management service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vendor-management.vendor-management');
