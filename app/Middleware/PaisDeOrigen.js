'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const geoip = require('geoip-lite')

class PaisDeOrigen {
  async handle ({ params, response }, next) {
    const {edad} = params

    if (edad < 18) {
      return response.json({Notificacion:"No eres lo suficientemente grande como para ver estos datos xd."})
    }
    await next()
  }
}

module.exports = PaisDeOrigen
