'use strict';

/**
 * recognition service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recognition.recognition');
