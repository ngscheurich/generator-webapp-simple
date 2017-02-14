module.exports = {
  plugins: [
    require('postcss-custom-properties')(),
    require('postcss-nested')(),
    require('autoprefixer')(['last 2 versions'])
  ]
}
