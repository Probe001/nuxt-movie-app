export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-movie-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},

      // <meta property="og:type" content="website" />
      // <meta property="og:site_name" content="Nuxt Movie App" />
      // <meta property="og:title" content="Nuxt Movie App / Search" />
      // <meta property="og:description" content="The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users." />
      // <meta property="og:image" content="https://heropy.blog/css/images/logo.png" />
      // <meta property="og:url" content="https://heropy-nuxt-movie-app.herokuapp.com" />

      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:site_name', property: 'ob:site_name', content: 'Nuxt Movie App'},
      { hid: 'og:title', property: 'ob:title', content: 'Nuxt Movie App / Search'},
      { hid: 'og:description', property: 'ob:description', content: 'The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.'},
      { hid: 'og:image', property: 'ob:image', content: 'https://heropy.blog/css/images/logo.png'},
      { hid: 'og:url', property: 'ob:url', content: process.env.CLIENT_URL}

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
      // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
      // <link rel="preconnect" href="https://fonts.gstatic.com" />
      // <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap" />
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/index.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  styleResources: {
    scss: [
      '~/scss/main.scss'
    ]
  },

  serverMiddleware: [
    {
      path: '/api/movie',
      handler: '~/server-middleware/movie.js'
    }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-runtime']
      ]
    },
    plugins: [
      require('autoprefixer')
    ]
  }
}
