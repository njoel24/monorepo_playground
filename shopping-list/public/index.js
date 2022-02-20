/* eslint-disable prettier/prettier */

class ShoppingList extends HTMLElement {
    constructor() {
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
        button {
          background: #1E88E5;
          color: white;
          padding: 2rem 4rem;
          border: 0;
          font-size: 1.5rem;
        }
        </style>
        <div><ul><li>Product 1 - <button>Buy</button></li><li>Product 2 - <button>Buy</button></li></ul></div>`;
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(template.content.cloneNode(true));
        const button = this.shadowRoot.querySelector("button");
        button.addEventListener("click", this.handleClick);
    }
    handleClick(){
      alert("Sup?");
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
