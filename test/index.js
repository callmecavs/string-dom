const expect = require('chai').expect
const sd = require('../dist/string-dom.js')

/* eslint-env mocha */

describe('string-dom', () => {
  it('should build an html string', () => {
    const test = sd('div', { class: 'wrapper' },
      sd('h1', { class: 'heading', 'data-heading': 'data-heading' }, 'Heading Text'),
      sd('p', { class: 'heading-sub', 'data-subheading': 'data-subheading' }, 'Subheading Text'),
      sd('p', 'An element without attributes.')
    )

    expect(test)
      .to
      .equal('<div class="wrapper"><h1 class="heading" data-heading="data-heading">Heading Text</h1><p class="heading-sub" data-subheading="data-subheading">Subheading Text</p><p>An element without attributes.</p></div>')
  })
})
