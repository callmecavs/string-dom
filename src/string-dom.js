import empty from './empty.js'

const element = (tag, ...rest) => {
  // check for component
  if (typeof tag === 'function') {
    // if no props, create empty set
    const props = rest[0] || {}

    // add children to props
    props['children'] = rest
      .slice(1)
      .join('')

    // call component function, passing props
    return tag(props)
  }

  let attrs
  let children

  const secondArg = rest[0]

  // check for attributes
  // if attributes exist, remove before joining children
  if (secondArg !== null && typeof secondArg === 'object') {
    attrs = Object
      .keys(secondArg)
      .reduce((accum, attr) => {
        // if event, throw, because no DOM
        if (attr.indexOf('on') === 0) {
          throw new Error('string-dom: event binding is not supported.')
        }

        // note the leading space
        accum += ` ${attr}="${secondArg[attr]}"`
        return accum
      }, '')

    children = rest.slice(1).join('')
  } else {
    attrs = ''
    children = rest.join('')
  }

  // empty tag
  if (empty.indexOf(tag) !== -1) {
    return `<${tag}${attrs}>`
  }

  // normal tag
  return `<${tag}${attrs}>${children}</${tag}>`
}

export default element
