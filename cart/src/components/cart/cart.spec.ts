import { newSpecPage } from '@stencil/core/testing';
import { Cart } from './cart';

describe('my-cart', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Cart],
      html: '<my-cart></my-cart>',
    });
    expect(root).toEqualHtml(`
      <my-cart>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-cart>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Cart],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-cart first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-cart>
    `);
  });
});
