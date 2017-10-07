'use strict'

/**
 * Class: net.Server
 * Event: 'error'
 * <Error>
 *
 * Emitted when an error occurs. Unlike net.Socket, the 'close' event will not be emitted directly
 * following this event unless server.close() is manually called. See the example in discussion of
 * server.listen().
 *
 * @link https://nodejs.org/dist/latest-v6.x/docs/api/net.html#net_event_error
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 *
 * @param {Error} err
 * @param {string} err.address
 * @param {string} err.code
 * @param {string} err.message
 * @param {string} err.errno
 * @param {number} err.port
 * @param {string} err.syscall
 *
 * @throws {Error}
 * @returns {undefined}
 */
function errorEvent( err ) {
  var bind

  if ( err.syscall !== 'listen' ) {
    throw err
  }

  bind = typeof err.port === 'string' ? 'Pipe ' : 'Port '
  bind += err.port

  switch ( err.code ) {
    case 'EACCES':
      console.error( '[error]', new Date(), bind, 'requires elevated privileges' )
      throw err

    case 'EADDRINUSE':
      console.error( '[error]', new Date(), bind, 'is already in use' )
      throw err

    default:
      throw err
  }
}

module.exports = errorEvent
