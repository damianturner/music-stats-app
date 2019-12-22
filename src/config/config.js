import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'
import parseLanguages from 'rmw-shell/lib/utils/localeTools'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading,
})

const config = {
  firebase_config: {
    apiKey: "AIzaSyBgNgnwyHWGLGCS-J2gC2_mDAxyrCjgyZo",
    authDomain: "music-stats-app.firebaseapp.com",
    databaseURL: "https://music-stats-app.firebaseio.com",
    projectId: "music-stats-app",
    storageBucket: "music-stats-app.appspot.com",
    messagingSenderId: "623445038666",
    appId: "1:623445038666:web:9630268a1aefd12476b8b3",
    measurementId: "G-9LX67BRTGF"
  },
  firebase_config_dev: {
    apiKey: "AIzaSyCCwrVbBi7HuzXZu9kcP_6VZ3rQczf0q40",
    authDomain: "music-stats-app-dev.firebaseapp.com",
    databaseURL: "https://music-stats-app-dev.firebaseio.com",
    projectId: "music-stats-app-dev",
    storageBucket: "music-stats-app-dev.appspot.com",
    messagingSenderId: "442775250619",
    appId: "1:442775250619:web:271ed30c6a7385d3916b9e",
    measurementId: "G-NWFGTGBC6X"
  },
  /*
  firebase_config_devd: {
    apiKey: 'AIzaSyB31cMH9nJnERC1WCWA7lQHnY08voLs-Z0',
    authDomain: 'react-most-wanted-dev.firebaseapp.com',
    databaseURL: 'https://react-most-wanted-dev.firebaseio.com',
    projectId: 'react-most-wanted-dev',
    storageBucket: 'react-most-wanted-dev.appspot.com',
    messagingSenderId: '70650394824',
    appId: '1:70650394824:web:7cd3113c37741efc',
  },
  */
  firebase_providers: [
    'google.com',
    'twitter.com',
    'github.com',
    'password',
    'phone',
  ],
  googleMaps: {
    apiKey: 'AIzaSyByMSTTLt1Mf_4K1J9necAbw2NPDu2WD7g',
  },
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light',
    },
    locale: parseLanguages(['en', 'bs', 'es', 'ru', 'de'], 'en'),
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
  landingPage: LPAsync,
}

export default config
