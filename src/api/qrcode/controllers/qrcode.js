'use strict';

/**
 *  qrcode controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::qrcode.qrcode');
