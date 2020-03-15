module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/mortal/' : '/'
  
}
