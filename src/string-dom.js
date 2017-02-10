// the element creator function
// accepts a tag name, then (optionally) an attributes object, then children
const element = (tag, ...rest) => {
  const secondArg = rest[0]

  // check for elements without attributes
  // the second parameter will be null (with JSX) or a string (without JSX)
  if (secondArg === null || typeof secondArg !== 'object') {
    return `<${tag}>${rest.join('')}</${tag}>`
  }

  // process the attributes object into a string, then trim the leading space
  const formatted = Object
    .keys(secondArg)
    .reduce((accum, current) => {
      // TODO: throw for events added by JSX
      // if (current.indexOf('on') === 0)

      accum += ` ${current}="${secondArg[current]}"`
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
