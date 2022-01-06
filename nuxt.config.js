export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WD Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool Web Development Blog' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open Sans' }
    ]
  },

  loading: { color: '#fcba03', height: '5px', duration: 500000},

  loadingIndicator: {
    name: 'circle',
    color: '#fa923f',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-bdbbe-default-rtdb.asia-southeast1.firebasedatabase.app',
    credentials: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-bdbbe-default-rtdb.asia-southeast1.firebasedatabase.app',
  },

  transition: {
    name: 'fade',
    mode: 'out-in',
  },
}
