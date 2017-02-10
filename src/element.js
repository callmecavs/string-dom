// the element creator function
// curried to accept tag, then attributes and children
const element = tag => (attrs = {}, ...children) => {
  // process the attributes object into a string
  // trim extra leading space
  const formatted = Object
    .keys(attrs)
    .reduce((accum, current) => {
      accum += ` ${current}="${attrs[current]}"`
      return accum
    }, '')
    .slice(1)

  // concatentate the children
  // nested elements just return Strings,
  // and regular text (not wrapped in an element) is a String too
  const concatted = children.join('')

  // return an HTML string representing the element
  return `<${tag} ${formatted}>${concatted}</${tag}>`
}

export default element