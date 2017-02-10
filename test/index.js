const expect = require('chai').expect
const sd = require('../dist/string-dom.js')

/* eslint-env mocha */
/** @jsx sd */

const RESULT = [
  '<div class="wrapper">',
    '<h1 class="heading" data-heading="data-heading">Heading Text</h1>',
    '<p class="heading-sub" data-subheading="data-subheading">Subheading Text</p>',
    '<p>An element without attributes.</p>',
  '</div>'
].join('')

describe('string-dom', () => {
  it('should build an html string', () => {
    const test = sd('div', { class: 'wrapper' },
      sd('h1', { class: 'heading', 'data-heading': 'data-heading' }, 'Heading Text'),
      sd('p', { class: 'heading-sub', 'data-subheading': 'data-subheading' }, 'Subheading Text'),
      sd('p', 'An element without attributes.')
    )

    expect(test).to.equal(RESULT)
  })

  it('should support JSX', () => {
    const test = (
      <div class="wrapper">
        <h1 class="heading" data-heading="data-heading">Heading Text</h1>
        <p class="heading-sub" data-subheading="data-subheading">Subheading Text</p>
        <p>An element without attributes.</p>
      </div>
    )

    expect(test).to.equal(RESULT)
  })

  it('should support stateless functional components', () => {
    const Component = ({ name, style, text }) => (
      <p class={ name } style={ style }>{ text }</p>
    )

    const test = (
      <Component
        class="paragraph"
        style="background-color: black;"
        text="A stateless, functional component."
      />
    )

    expect(test).to.equal('<p class="paragraph" style="background-color: black;">A stateless, functional component.</p>')
  })
})
