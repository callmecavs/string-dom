// the element creator function
// accepts a tag name, then (optionally) an attiributes object, then children
const element = (tag, ...rest) => {
  const secondArg = rest[0]

  // catch elements without attributes
  // JSX passes null instead, normal use passes a string instead
  if (secondArg === null || typeof secondArg !== 'object') {
    return `<${tag}>${rest.join('')}</${tag}>`
  }

  // process the attributes object into a string, then trim the leading space
  const formatted = Object
    .keys(secondArg)
    .reduce((accum, current) => {
      accum += ` ${current}="${secondArg[current]}"`
      return accum
    }, '')
    .slice(1)

  // concatentate the children
  // nested function calls return strings, and unwrapped text is a string too
  const concatted = rest
    .slice(1)
    .join('')

  // return an HTML string representing the element
  return `<${tag} ${formatted}>${concatted}</${tag}>`
}

export default element
