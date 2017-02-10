const expect = require('chai').expect
const sd = require('../dist/string-dom.js')

// TODO: cleanup
// TODO: add test for elements without attributes
// TODO: add JSX and non-JAX variant for each test case

/* eslint-env mocha */
/** @jsx sd */

describe('string-dom', () => {
  it('should create HTML strings', () => {
    const test = sd('div', { class: 'wrapper' },
      sd('h1', { class: 'heading', 'data-heading': 'data-heading' }, 'Heading Text'),
      sd('p', { class: 'heading-sub', 'data-subheading': 'data-subheading' }, 'Subheading Text'),
      sd('p', 'An element without attributes.')
    )

    const result = [
      '<div class="wrapper">',
        '<h1 class="heading" data-heading="data-heading">Heading Text</h1>',
        '<p class="heading-sub" data-subheading="data-subheading">Subheading Text</p>',
        '<p>An element without attributes.</p>',
      '</div>'
    ].join('')

    expect(test).to.equal(result)
  })

  it('should support JSX', () => {
    const test = (
      <div class="wrapper">
        <h1 class="heading" data-heading="data-heading">Heading Text</h1>
        <p class="heading-sub" data-subheading="data-subheading">Subheading Text</p>
        <p>An element without attributes.</p>
      </div>
    )

    const result = [
      '<div class="wrapper">',
        '<h1 class="heading" data-heading="data-heading">Heading Text</h1>',
        '<p class="heading-sub" data-subheading="data-subheading">Subheading Text</p>',
        '<p>An element without attributes.</p>',
      '</div>'
    ].join('')

    expect(test).to.equal(result)
  })

  it('should support nested, stateless, functional components', () => {
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

    const result = [
      '<div class="outer" style="cursor: pointer;">',
        '<p class="inner">A nested child component.</p>',
      '</div>'
    ].join('')

    expect(test).to.equal(result)
  })

  it('should support self-closing, empty tags', () => {
    const Image = ({ source }) => (
      <img class="image" src={ source }/>
    )

    const test = (
      <Image source="path/to/image.jpg"/>
    )

    const result = '<img class="image" src="path/to/image.jpg">'

    expect(test).to.equal(result)
  })

  it('should throw an error for event handler props', () => {
    const test = () => (
      <p onClick={ () => {} }/>
    )

    expect(test).to.throw(Error)
  })
})
