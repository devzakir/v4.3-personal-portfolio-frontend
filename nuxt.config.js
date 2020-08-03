
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Zakir Hossen Personal Portfolio' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:image', property: 'og:image', content: "/images/banner3.jpg" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#245cd1' },
  loading: { color: '#ffc107' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/slider.js', mode: 'client' },
    { src: '~/plugins/vform.js'},
    // { src: '~/plugins/form-wizard.js', mode: 'client' },
    // { src: '~/plugins/affix.js', ssr: false }
  ],

  /*
  ** Nuxt Auth Package configurationApiAuthController
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'token' },
          logout: { url: 'auth/logout', method: 'post' },
          user: { url: 'auth/me', method: 'get', propertyName: false }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '',
      // home: '/account'
    }
  },

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['nuxt-fontawesome', {
      imports: [
       {
         set: '@fortawesome/free-solid-svg-icons',
         icons: ['fas']
       },
       {
         set: '@fortawesome/free-regular-svg-icons',
         icons: ['far']
       },
       {
         set:'@fortawesome/free-brands-svg-icons',
         icons: ['fab']
       }
     ]
    }],
    // You can also pass plugin options
    ["vue-toastification/nuxt", {
      transition: "Vue-Toastification__bounce",
      maxToasts: 6,
      newestOnTop: true
    }],
  ],
  // Or pass options through the "toast" key
  toast: {
    // Use your own CSS file
    cssFile: "vue-toastification/dist/index.css",
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: 'https://api.zakirhossen.com/api',
    baseURL: 'http://127.0.0.1:8000/api',
  },

  router: {
    linkActiveClass: 'your-custom-active-link',
    linkExactActiveClass: 'active',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
