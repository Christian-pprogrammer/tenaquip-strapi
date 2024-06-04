'use strict';

/**
 * calibration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calibration.calibration');
