
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/movies"
  },
  {
    "renderMode": 2,
    "route": "/movies/755898"
  },
  {
    "renderMode": 2,
    "route": "/movies/911430"
  },
  {
    "renderMode": 2,
    "route": "/movies/1151334"
  },
  {
    "renderMode": 2,
    "route": "/movies/1061474"
  },
  {
    "renderMode": 2,
    "route": "/movies/575265"
  },
  {
    "renderMode": 2,
    "route": "/movies/1234821"
  },
  {
    "renderMode": 2,
    "route": "/movies/1242011"
  },
  {
    "renderMode": 2,
    "route": "/movies/1311031"
  },
  {
    "renderMode": 2,
    "route": "/movies/1083433"
  },
  {
    "renderMode": 2,
    "route": "/movies/1175942"
  },
  {
    "renderMode": 2,
    "route": "/movies/1382406"
  },
  {
    "renderMode": 2,
    "route": "/movies/1087192"
  },
  {
    "renderMode": 2,
    "route": "/movies/803796"
  },
  {
    "renderMode": 2,
    "route": "/movies/1429739"
  },
  {
    "renderMode": 2,
    "route": "/movies/1022787"
  },
  {
    "renderMode": 2,
    "route": "/movies/1078605"
  },
  {
    "renderMode": 2,
    "route": "/movies/1389158"
  },
  {
    "renderMode": 2,
    "route": "/movies/1241470"
  },
  {
    "renderMode": 2,
    "route": "/movies/13494"
  },
  {
    "renderMode": 2,
    "route": "/movies/1300116"
  },
  {
    "renderMode": 0,
    "route": "/movies/*"
  },
  {
    "renderMode": 2,
    "route": "/about-us"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5053, hash: '8eefb0daa3a2ed89d6e727f653b26d95c79b50df84457b5b60bae8b8d584740f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 998, hash: '410cc48711679b9e23231bfbda7ebb8efeeced4374c32cdfea23444be9694d31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'movies/1061474/index.html': {size: 30540, hash: 'bef315f3b37aa9f3707839ee33614212414debb8cdc1511d43c0006d17c88f3e', text: () => import('./assets-chunks/movies_1061474_index_html.mjs').then(m => m.default)},
    'movies/1151334/index.html': {size: 30431, hash: '6506b04dbcb363109dc229c09b0e1a35fea422d200a57f66cea34b829b964cef', text: () => import('./assets-chunks/movies_1151334_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 67281, hash: 'e5744e74f565e92f1bd4199d7241a9faedc41e606a8787dd2c6f22c9c90e15c8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'movies/1175942/index.html': {size: 30801, hash: '6cac4fb94222c0d298b17c9f88a5b1b682f08519823690a004ae459505784863', text: () => import('./assets-chunks/movies_1175942_index_html.mjs').then(m => m.default)},
    'movies/1311031/index.html': {size: 30997, hash: '27c09c8362ee820c66cf2ced8517cefbc6fd352fe233fc691cbfbe98885037f5', text: () => import('./assets-chunks/movies_1311031_index_html.mjs').then(m => m.default)},
    'movies/1078605/index.html': {size: 31098, hash: '4a6d97bd9c6a6df69c819f88356250adb9c0738d9aab010615fb20cf34442961', text: () => import('./assets-chunks/movies_1078605_index_html.mjs').then(m => m.default)},
    'movies/1241470/index.html': {size: 30650, hash: '6597df3f7b1ce29d1222ff1ebeec39392eec1d3cde53def60d81fb9ca52b7961', text: () => import('./assets-chunks/movies_1241470_index_html.mjs').then(m => m.default)},
    'movies/1429739/index.html': {size: 30340, hash: '1386c198edfaf4d916b77c63c9bd8dbe1a4412240750940b91df515b02a71fab', text: () => import('./assets-chunks/movies_1429739_index_html.mjs').then(m => m.default)},
    'movies/1087192/index.html': {size: 31043, hash: '7a6b5145e6c3fe71fd5d24b7a993a7d4d3f547641d97a0d446e6ef41480f9929', text: () => import('./assets-chunks/movies_1087192_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 33533, hash: '2263d1d6caa0546641b3a4dc293eea955e97e00cfdce2902371955a836371d76', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'movies/1300116/index.html': {size: 30085, hash: '6fdec2cf2af6364a3b09a02f3ad0bc113d8c8e2790bdbb0303f68bafaae77bc6', text: () => import('./assets-chunks/movies_1300116_index_html.mjs').then(m => m.default)},
    'movies/911430/index.html': {size: 30497, hash: '9470e7f84aa0aff4a02fb7a5522a36a4e6103d6e570d63e7e6ce3283dfc1ced9', text: () => import('./assets-chunks/movies_911430_index_html.mjs').then(m => m.default)},
    'movies/index.html': {size: 70931, hash: 'ff0b8994ab968ff04899fd4c05dbb20835b0c746dcf96072d07a231c5e3dae59', text: () => import('./assets-chunks/movies_index_html.mjs').then(m => m.default)},
    'movies/1234821/index.html': {size: 31289, hash: '6bcd6e237b0072a5b83fb1cd44137e6b9fed422cfa0182f92fdd486c0a50f75b', text: () => import('./assets-chunks/movies_1234821_index_html.mjs').then(m => m.default)},
    'movies/1083433/index.html': {size: 31561, hash: 'b4bba0362584a0998f8672f0f3c5e2f2e8ba7bfc0583030392963e48f0c5fe2b', text: () => import('./assets-chunks/movies_1083433_index_html.mjs').then(m => m.default)},
    'movies/803796/index.html': {size: 30692, hash: 'ab041b5539376659674ff670a63c37207a280a60ab7f7ec4b5562bb212721276', text: () => import('./assets-chunks/movies_803796_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 27935, hash: 'ad06ba918a2a5558383cd7dad360b89a80bb4993734f95c472b2a7cb493fae6a', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'movies/1389158/index.html': {size: 30055, hash: '8e7eff82adfe32b0ca22ff865fd31476716dab2aad05cb476ea17621db30cbb1', text: () => import('./assets-chunks/movies_1389158_index_html.mjs').then(m => m.default)},
    'movies/755898/index.html': {size: 30603, hash: 'cb52cd804045d1e3a8eab903f3b5b594a4003162f7b8ab25309f79896a22c66c', text: () => import('./assets-chunks/movies_755898_index_html.mjs').then(m => m.default)},
    'movies/1242011/index.html': {size: 30722, hash: '3bec927c145c47a07a06f0a67dbb66f8c5c5f5ed027a00dd07a0fcfb46ad14b4', text: () => import('./assets-chunks/movies_1242011_index_html.mjs').then(m => m.default)},
    'movies/1022787/index.html': {size: 30718, hash: '7350f12e5bcc0adb1f90bd3a8322420f3d73647c3a307bc12fbf511267b4c5ba', text: () => import('./assets-chunks/movies_1022787_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 24052, hash: '7209be9af0f7bb81815749a3f35c00cc8b64c36a952b61d4651fafc07a1e1539', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'movies/1382406/index.html': {size: 30229, hash: '8e97cea24defcda1b6da372db27b81d95522ea9a48b846e842750aa2eb3fe635', text: () => import('./assets-chunks/movies_1382406_index_html.mjs').then(m => m.default)},
    'movies/575265/index.html': {size: 31443, hash: 'fb063c097b27c31cb78c1788eb01cf93a0f2795a2fdbcbb3f21cf4aa9f1291ae', text: () => import('./assets-chunks/movies_575265_index_html.mjs').then(m => m.default)},
    'movies/13494/index.html': {size: 30460, hash: '09683a1be7fd1c13fef2c8bdcea2e54d50be203c95c6abae6210744da53bbe79', text: () => import('./assets-chunks/movies_13494_index_html.mjs').then(m => m.default)},
    'styles-B3FX7ICD.css': {size: 315757, hash: 'CFByj4BW1zU', text: () => import('./assets-chunks/styles-B3FX7ICD_css.mjs').then(m => m.default)}
  },
};
