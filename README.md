# string-dom

[![string-dom on NPM](https://img.shields.io/npm/v/string-dom.svg?style=flat-square)](https://www.npmjs.com/package/string-dom) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Create HTML strings using JSX (or functions).

## Install

```sh
$ npm i string-dom --save
```

## About

`string-dom` is a function that creates an HTML string. It is meant to work with JSX, but _does not_ create DOM (regular or virtual). It effectively turns JSX into an HTML templating language that can be used separately of React.

## Usage

```jsx
import sd from 'string-dom'

/** @jsx sd */

// with JSX
// note the comment above, and see the link below
// https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx#custom
document.body.innerHTML += (
  <div class="wrapper">
    <h1 class="heading" data-heading="data-heading">Heading Text</h1>
    <p class="heading-sub" data-subheading="data-subheading">Subheading Text</p>
    <p>An element without attributes.</p>
  </div>
)

// without JSX
document.body.innerHTML += (
  sd('div', { class: 'wrapper' },
    sd('h1', { class: 'heading', 'data-heading': 'data-heading' }, 'Heading Text'),
    sd('p', { class: 'heading-sub', 'data-subheading': 'data-subheading' }, 'Subheading Text'),
    sd('p', 'An element without attributes.')
  )
)
```

Both the above generate the following HTML (as a string), then add it to the `body`:

```html
<div class="wrapper">
  <h1 class="heading" data-heading="data-heading">Heading Text</h1>
  <p class="heading-sub" data-subheading="data-subheading">Subheading Text</p>
  <p>An element without attributes.</p>
</div>
```

## Prior Art

* [ejsx](https://github.com/jxnblk/ejsx)
* [hyperscript](https://github.com/hyperhype/hyperscript)
* [vhtml](https://github.com/developit/vhtml)

## Linting

[![JS Standard Style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
