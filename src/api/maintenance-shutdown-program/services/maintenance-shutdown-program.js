'use strict';

/**
 * maintenance-shutdown-program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maintenance-shutdown-program.maintenance-shutdown-program');
