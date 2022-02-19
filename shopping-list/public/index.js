/* eslint-disable prettier/prettier */

class ShoppingList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class','wrapper');
        wrapper.innerHTML = "<ul><li>Product 1 - <button>Buy</button></li><li>Product 2 - <button>Buy</button></li></ul>";
        this.shadowRoot.append(wrapper);
    }
}

export function bootstrap(props) {
  return Promise.resolve().then(() => {
    // One-time initialization code goes here
    console.log("shopping list is bootstrapped!");
  });
}

export function mount(props) {
  return Promise.resolve().then(() => {
    // Do framework UI rendering here
    console.log("shopping list is mounted!"); 
    customElements.define("shopping-list", ShoppingList);
    const el = document.createElement("shopping-list");
    document.getElementById("shopping-list-container").append(el);
  });
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    // Do framework UI unrendering here
    console.log("shopping list is unmounted!");
  });
}
