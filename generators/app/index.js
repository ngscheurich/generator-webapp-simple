'use strict'

var Generator = require('yeoman-generator')
var chalk = require('chalk')

module.exports = Generator.extend({
  prompting: function () {},

  writing: function () {
    console.log(`Hang tight...`)
    console.log()
    this.fs.copy(this.templatePath('dist'), 'dist')
    this.fs.copy(this.templatePath('src'), 'src')
    this.fs.copy(this.templatePath('babelrc'), '.babelrc')
    this.fs.copy(this.templatePath('editorconfig'), '.editorconfig')
    this.fs.copy(this.templatePath('eslintignore'), '.eslintignore')
    this.fs.copy(this.templatePath('eslintrc.js'), '.eslintrc.js')
    this.fs.copy(this.templatePath('gitignore'), '.gitignore')
    this.fs.copy(this.templatePath('index.html'), 'index.html')
    this.fs.copy(this.templatePath('package.json'), 'package.json')
    this.fs.copy(this.templatePath('postcss.config.js'), 'postcss.config.js')
    this.fs.copy(this.templatePath('webpack.config.js'), 'webpack.config.js')
    this.fs.copy(this.templatePath('yarn.lock'), 'yarn.lock')
  },

  install: function () {
    if (process.env.NODE_ENV !== 'test') {
      console.log()
      this.spawnCommandSync('yarn', ['install'])
      console.log()
      console.log(`All done! Run ${chalk.yellow('yarn start')} to spin up the dev server.`)
    }
  }
})
