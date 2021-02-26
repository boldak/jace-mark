let _ = require('lodash')
let MD = require('markdown-it')
let plugins = require("./plugin")
let githubLinkify = require('./linkify')
let sanitize = require('./sanitize')


let defaultOptions = {
  sanitize: true,
  nofollow: true,
  linkify: true,
  highlightSyntax: true,
  prefixHeadingIds: true,
  enableHeadingLinkIcons: true,
  serveImagesWithCDN: false,
  debug: false,
  package: null,
  headingAnchorClass: 'anchor',
  headingSvgClass: ['octicon', 'octicon-link'],
  shortcuts: {},
  tabWidth: 4
}



let getParser = options => {
  
  options = _.defaults({}, options, defaultOptions)

  let mdOptions = {
    html: true,
    langPrefix: 'highlight ',
    linkify: options.linkify,
    highlight: (options.highlightSyntax) ? require("./highlight1") : undefined
  }

  let parser = MD(mdOptions)
  
  plugins( options )
    .filter( p => p)
    .forEach( p => { parser.use(p, options) })
  
  parser = githubLinkify(parser)

  // if (options.sanitize) {
  //   let originalRender = parser.render
  //   parser.render = markdown => sanitize(originalRender.call(parser, markdown), options)
  // }
  
  return parser
}


let renderPackageDescription = description => sanitize( MD({html: true}).renderInline(description), defaultOptions)


module.exports = {
  getParser,
  renderPackageDescription,
  render: (markdown, options) => getParser(options).render(markdown)
} 


