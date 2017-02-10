const expect = require('chai').expect
const sd = require('../dist/string-dom.js')

// TODO: cleanup
// TODO: add test for elements without attributes

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
    const Outer = ({ name, style, children }) => (
      <div class={ name } style={ style }>
        { children }
      </div>
    )

    const Inner = ({ text }) => (
      <p class="inner">{ text }</p>
    )

    const test = (
      <Outer
        name="outer"
        style="cursor: pointer;">
        <Inner text="A nested child component."/>
      </Outer>
    )

    expect(test).to.equal('<div class="outer" style="cursor: pointer;"><p class="inner">A nested child component.</p></div>')
  })

  it('should throw an error for event handler props', () => {
    const test = () => (
      <p onClick={ () => {} }/>
    )

    expect(test).to.throw(Error)
  })
})
