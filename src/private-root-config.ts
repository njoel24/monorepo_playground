// single-spa-config.js
import { registerApplication, start } from 'single-spa';

// Simple usage
registerApplication(
  'shopping-list',
  () => import(process.env.isLocal ? '../shopping-list/public/index.js' : '../shopping-list/public/index.js'),
  (location) => location.pathname.startsWith('/'),
);

// Config with more expressive API
registerApplication(
  'cart',
  () => { 
   return  import(process.env.isLocal ? '../cart/www/build/index.esm.js' : '../cart/www/build/index.esm.js' )
  },
  (location) => location.pathname.startsWith('/'),
  { isLocal:  `${process.env.isLocal}` }
);

start();