export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon.png' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/font-awesome.css' },
      { rel: 'stylesheet', href: '/css/fontello.css' },
      { rel: 'stylesheet', href: '/plugins/mediabox/mediabox.min.css' },
      { rel: 'stylesheet', href: '/plugins/accordion/accordion.css' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ],
    script: [
      { src: '/plugins/mediabox/mediabox.min.js', body: true },
      { src: '/plugins/chartjs/chart.js', body: true },
      { src: '/plugins/accordion/accordion.min.js', body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff7e00', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /*
  ** Generate configuration for static site
  */
  generate: {
    dir: 'dist'  // Specifies the output directory for static files
  }
}