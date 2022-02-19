export { Components, JSX } from './components';

/* eslint-disable prettier/prettier */
console.log("cart");
function bootstrap() {
  return Promise.resolve().then(() => {
    // One-time initialization code goes here
    console.log("cart is bootstrapped!");
  });
}
function mount() {
  return Promise.resolve().then(() => {
    // Do framework UI rendering here
    console.log("cart is mounted!");
    const script = document.createElement('script');
    script.src = 'http://localhost:3333/build/cart.esm.js';
    script.type = 'module';
    document.body.appendChild(script);

    script.onload = () => {
      setTimeout(() => {
        const el = document.createElement("my-cart");
        document.getElementById("cart-container").append(el);
      }, 500);
    };

  });
}
function unmount() {
  return Promise.resolve().then(() => {
    // Do framework UI unrendering here
    console.log("cart is unmounted!");
  });
}

export { bootstrap, mount, unmount };
