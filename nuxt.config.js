module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'project-website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my portfolio website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome'
  ],
  css: [
    'assets/main.css'
  ],
  vendor: ['vue-particles', 'vue-typer'],
  plugins: [
    { src: '~/plugins/vue-particles', ssr: false },
    { src: '~/plugins/vue-typer', ssr: false }
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
