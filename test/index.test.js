/* eslint max-len: off */

'use strict'

var errorEvent = require( '../src' )
var sinon = require( 'sinon' )
var spy_console_error = sinon.spy( console, 'error' )
var tap = require( 'tap' )

tap.test( 'called with a non syscall listen error',
  function ( t ) {
    var err = new Error( 'called with a non syscall listen error' )

    spy_console_error.resetHistory()

    t.throws(
      function () {
        errorEvent( err )
      },
      err
    )

    t.true( spy_console_error.notCalled, 'console.error not called' )
    t.end()
  }
)

tap.test( 'called with a syscall listen error, without error code EACCES or EADDRINUSE, and no Port or Pipe',
  function ( t ) {
    var err = new Error( 'called with a syscall listen error, without error code EACCES or EADDRINUSE, and no Port or Pipe' )

    err.syscall = 'listen'

    spy_console_error.resetHistory()

    t.throws(
      function () {
        errorEvent( err )
      },
      err
    )

    t.true( spy_console_error.notCalled, 'console.error not called' )
    t.end()
  }
)

tap.test( 'called with a syscall listen error, with error code EACCES, and no Port or Pipe',
  function ( t ) {
    var err = new Error( 'called with a syscall listen error, with error code EACCES, and no Port or Pipe' )

    err.syscall = 'listen'
    err.code = 'EACCES'

    spy_console_error.resetHistory()

    t.throws(
      function () {
        errorEvent( err )
      },
      err
    )

    t.true( spy_console_error.called, 'console.error called' )

    t.same(
      spy_console_error.getCall( 0 ).args[ 2 ],
      'Port undefined',
      'should console.error `Port undefined`'
    )

    t.same(
      spy_console_error.getCall( 0 ).args[ 3 ],
      'requires elevated privileges',
      'should console.error `requires elevated privileges`'
    )

    t.end()
  }
)

tap.test( 'called with a syscall listen error, with error code EADDRINUSE, and no Port or Pipe',
  function ( t ) {
    var err = new Error( 'called with a syscall listen error, with error code EADDRINUSE, and no Port or Pipe' )

    err.syscall = 'listen'
    err.code = 'EADDRINUSE'

    spy_console_error.resetHistory()

    t.throws(
      function () {
        errorEvent( err )
      },
      err
    )

    t.true( spy_console_error.called, 'console.error called' )

    t.same(
      spy_console_error.getCall( 0 ).args[ 2 ],
      'Port undefined',
      'should console.error `Port undefined`'
    )

    t.same(
      spy_console_error.getCall( 0 ).args[ 3 ],
      'is already in use',
      'should console.error `is already in use`'
    )

    t.end()
  }
)

tap.test( 'called with a syscall listen error, with error code EADDRINUSE, and a Pipe',
  function ( t ) {
    var err = new Error( 'called with a syscall listen error, with error code EADDRINUSE, and a Pipe' )

    err.syscall = 'listen'
    err.code = 'EADDRINUSE'
    err.port = '/tmp/app.sock'

    spy_console_error.resetHistory()

    t.throws(
      function () {
        errorEvent( err )
      },
      err
    )

    t.true( spy_console_error.called, 'console.error called' )

    t.same(
      spy_console_error.getCall( 0 ).args[ 2 ],
      'Pipe /tmp/app.sock',
      'should console.error `Pipe /tmp/app.sock`'
    )

    t.same(
      spy_console_error.getCall( 0 ).args[ 3 ],
      'is already in use',
      'should console.error `is already in use`'
    )

    t.end()
  }
)
