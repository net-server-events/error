# net-server-events-error
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

a net.Server event handler for the error event

## table of contents
* [installation](#installation)
* [api](#api)
* [usage](#usage)
    * [basic](#basic)
* [license](#license)

## installation
```javascript
npm install net-server-events-error
```

## api
```javascript
/**
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
function errorEvent( err )
```

## usage
### basic
```javascript
var error = require( 'net-server-event-error' )
var server = https.createServer( ssloptions, app )

server.on( 'error', error )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/net-server-events/error/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/net-server-events/error?branch=master
[mit-license]: https://raw.githubusercontent.com/net-server-events/error/master/license.txt
[npm-image]: https://img.shields.io/npm/v/net-server-events-error.svg
[npm-url]: https://www.npmjs.com/package/net-server-events-error
[nsp-image]: https://nodesecurity.io/orgs/net-server-events/projects/73d1d203-1bb8-4d99-a933-51eac9ef6437/badge
[nsp-url]: https://nodesecurity.io/orgs/net-server-events/projects/73d1d203-1bb8-4d99-a933-51eac9ef6437
[travis-image]: https://travis-ci.org/net-server-events/error.svg?branch=master
[travis-url]: https://travis-ci.org/net-server-events/error
