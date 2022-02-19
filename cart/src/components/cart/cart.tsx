import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-cart',
  styleUrl: 'cart.css',
  shadow: true,
})
export class MyCart {

  render() {
    return <div class='container'>
      <div>My Cart</div>
      <div>Entries</div>
      <ul>
        <li>First Product</li>
        <li>Second Product</li>
      </ul>
    </div>;
  }
}
