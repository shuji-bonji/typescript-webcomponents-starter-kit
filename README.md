

# TypeScript WebComponents Starter Kit

このリポジトリは、Vite と TypeScript を使用して Web Components を開発するための最小構成のスターターキットです。

## 特徴

- Vite による高速なビルドとホットリロード
- TypeScript による型安全な実装
- Vanilla Web Components（フレームワーク非依存）
- Shadow DOM 対応
- シンプルで拡張しやすい構成

## セットアップ手順

```bash
git clone https://github.com/your-user/typescript-webcomponents-starter-kit.git
cd typescript-webcomponents-starter-kit
npm install
npm run dev
```

## ディレクトリ構成

```
.
├── public/                  # index.html を含む静的ファイル
├── src/
│   ├── components/          # WebComponent の実装
│   └── main.ts              # WebComponents の登録など
├── vite.config.ts           # Vite 設定ファイル
├── tsconfig.json            # TypeScript 設定ファイル
└── package.json
```

## サンプルコンポーネントの例

`src/components/MyComponent.ts` に以下のようなコードを追加して、`<my-component>` を定義できます。

```ts
export class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<p>Hello from MyComponent</p>`;
  }
}
customElements.define('my-component', MyComponent);
```

`index.html` に配置して確認できます：

```html
<my-component></my-component>
```

## 今後の拡張

- Vitest によるユニットテスト追加
- SCSS 対応
- コンポーネントの自動登録
- PWA 対応
- CI/CD パイプライン構築

---
このテンプレートは「[WebComponents-with-TypeScript](https://github.com/shuji-bonji/WebComponents-with-TypeScript)」ドキュメントと連携して活用されることを想定しています。