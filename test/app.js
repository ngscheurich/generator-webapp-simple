'use strict'

var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

process.env.NODE_ENV = 'test'

describe('generator-webapp-simple:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise()
  })

  it('creates files', function () {
    assert.file([
      'dist',
      'src',
      '.babelrc',
      '.editorconfig',
      '.eslintignore',
      '.gitignore',
      'index.html',
      'package.json',
      'postcss.config.js',
      'webpack.config.js',
      'yarn.lock'
    ])
  })
})
