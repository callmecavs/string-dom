import empty from './empty.js'

// the element creator function
// accepts a tag name, then (optionally) an attributes object, then children
const element = (tag, ...rest) => {
  // destructure what may or may not be the attributes object
  const attrs = rest[0]

  // check for component functions
  // if component function, call it, passing it props
  if (typeof tag === 'function') {
    // check if the component is being passed props,
    // otherwise initialize an empty set
    const props = rest[0] || {}

    // pass children content to the component as a prop
    props.children = rest
      .slice(1)
      .join('')

    // pass the updated props, including the children, to the component function
    return tag(props)
  }

  // check for elements without attributes
  // the second parameter will be null (with JSX) or a string (without JSX)
  if (attrs === null || typeof attrs !== 'object') {
    return `<${tag}>${rest.join('')}</${tag}>`
  }

  // process the attributes object into a string, then trim the leading space
  const formatted = Object
    .keys(attrs)
    .reduce((accum, current) => {
      // throw for inline events added by JSX
      if (current.indexOf('on') === 0) {
        throw new Error(`string-dom: event handler unsupported: ${current}.`)
      }

      accum += ` ${current}="${attrs[current]}"`
      return accum
    }, '')
    .slice(1)

  // concatentate the children
  const concatted = rest
    .slice(1)
    .join('')

  // return an HTML string representing the element
  return `<${tag} ${formatted}>${concatted}</${tag}>`
}

export default element
