module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vuecli/'
    : '/',
    outputDir: 'docs'
}