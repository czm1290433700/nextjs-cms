'use strict';

/**
 * qrcode service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::qrcode.qrcode');
