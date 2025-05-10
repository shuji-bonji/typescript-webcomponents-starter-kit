import { describe, it, expect, beforeEach } from 'vitest';
import type { SampleComponent } from './sample-component';

describe('SampleComponent', () => {
  let element: SampleComponent;

  beforeEach(() => {
    document.body.innerHTML = `<sample-component></sample-component>`;
    element = document.querySelector('sample-component') as SampleComponent;
  });

  it('初期状態で "Hello, World!" と表示されること', () => {
    const p = element.shadowRoot!.querySelector('p');
    expect(p?.textContent).toBe('Hello, World!');
  });

  it('属性が変更された場合、内容が更新されること', () => {
    element.setAttribute('message', 'Hello, Vitest!');
    const p = element.shadowRoot!.querySelector('p');
    expect(p?.textContent).toBe('Hello, Vitest!');
  });
});