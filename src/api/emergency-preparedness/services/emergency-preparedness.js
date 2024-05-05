'use strict';

/**
 * emergency-preparedness service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emergency-preparedness.emergency-preparedness');
