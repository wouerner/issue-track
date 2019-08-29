module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/issue-track/'
    : '/',
  devServer: {
    https: true,
    allowedHosts: [
      'issue-track.localhost',
      'issue-track.hmg.localhost',
    ]
  }
}
