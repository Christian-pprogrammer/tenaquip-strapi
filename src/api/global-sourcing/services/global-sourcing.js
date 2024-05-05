'use strict';

/**
 * global-sourcing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-sourcing.global-sourcing');
