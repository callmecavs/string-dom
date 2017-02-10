# string-dom

[![string-dom on NPM](https://img.shields.io/npm/v/string-dom.svg?style=flat-square)](https://www.npmjs.com/package/string-dom) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Create HTML strings using functions.

## Install

```sh
$ npm i string-dom --save
```

## Usage

`string-dom` is a function that builds an HTML string. Its API is similar to [`hyperscript`](https://github.com/hyperhype/hyperscript). More about similarities and differences to come.

```javascript
import sd from 'string-dom'

document.body.innerHTML += (
  sd('div', { class: 'wrapper' },
    sd('h1', { class: 'heading', 'data-heading': 'data-heading' }, 'Heading Text'),
    sd('p', { class: 'heading-sub', 'data-subheading': 'data-subheading' }, 'Subheading Text'),
    sd('p', 'An element without attributes.')
  )
)
```

Adds the following HTML to the `body`:

```html
<div class="wrapper">
  <h1 class="heading" data-heading="data-heading">Heading Text</h1>
  <p class="heading-sub" data-subheading="data-subheading">Subheading Text</p>
  <p>An element without attributes.</p>
</div>
```

## Linting

[![JS Standard Style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
