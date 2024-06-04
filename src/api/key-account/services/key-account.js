'use strict';

/**
 * key-account service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::key-account.key-account');
