export class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<p>Hello, WebComponents!</p>`;
  }
}

customElements.define('my-component', MyComponent);