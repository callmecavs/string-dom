import element from './element.js'

// export the element creator function as the default

export default element

// export a bunch of common pre-created elements,
// because destructuring them is convenient

// basic 3 tags

const html = element('html')
const head = element('head')
const body = element('body')

export { html }
export { head }
export { body }

// head tags

const title = element('title')
const meta = element('meta')

export { title }
export { meta }

// link & script tags

const link = element('link')
const script = element('script')

export { link }
export { script }

// block content

const div = element('div')
const header = element('header')
const footer = element('footer')
const main = element('main')
const section = element('section')
const nav = element('nav')

export { div }
export { header }
export { footer }
export { main }
export { section }
export { nav }

// image tags

const img = element('img')
const svg = element('svg')

export { img }
export { svg }

// heading tags

const h1 = element('h1')
const h2 = element('h2')
const h3 = element('h3')
const h4 = element('h4')
const h5 = element('h5')
const h6 = element('h6')

export { h1 }
export { h2 }
export { h3 }
export { h4 }
export { h5 }
export { h6 }

// text content tags

const p = element('p')
const a = element('a')
const hr = element('hr')
const span = element('span')

export { p }
export { a }
export { hr }
export { span }

// list tags

const ol = element('ol')
const ul = element('ul')
const li = element('li')

export { ol }
export { ul }
export { li }

// form tags

const form = element('form')
const input = element('input')
const textarea = element('textarea')
const label = element('label')

export { form }
export { input }
export { textarea }
export { label }
