// single-spa-config.js
import { registerApplication, start } from 'single-spa';

// Simple usage
registerApplication(
  'shpping-list',
  () => import('../shopping-list/public/index.js'),
  (location) => location.pathname.startsWith('/'),
);

// Config with more expressive API
registerApplication(
  'cart',
  () => { 
   return  import('../cart/www/build/index.esm.js')
  },
  (location) => location.pathname.startsWith('/')
);

start();