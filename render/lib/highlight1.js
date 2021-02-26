// let _ = require('lodash')
// let Highlights = require('highlights')
// let cleanup = require('./cleanup')

// let mappings = {
//   jsx: 'source.js.jsx',
//   sh: 'source.shell',
//   markdown: 'source.gfm',
//   erb: 'text.html.erb'
// }

// let languages = [
//   'atom-language-nginx',
//   'atom-language-diff',
//   'language-dart',
//   'language-rust',
//   'language-erlang',
//   'language-glsl',
//   'language-haxe',
//   'language-ini',
//   'language-stylus',
//   'language-cypher',
//   'language-plantuml',
//   'language-kotlin',
//   'language-yaml'
// ]

// let highlighter = new Highlights()
// languages.forEach(function (language) {
//   highlighter.requireGrammarsSync({
//     modulePath: require.resolve(language + '/package.json')
//   })
// })

// // cleanup generated rules in the highlighter registry if they are idle for 2000ms
// // they take a tremendous amount of memory if you process many languages in a server type environment.
// cleanup(highlighter.registry.grammars)



// // attempt to look up by the long language name, e.g. Ruby, JavaScript.
// // fallback to assuming that lang is the extension of the code snippet.
// let scopeNameFromLang = (highlighter, lang) => {
//   // alias language names.

//   if (mappings[lang]) return mappings[lang]

//   let grammar = _.pickBy(highlighter.registry.grammarsByScopeName, (val, key) => val.name.toLowerCase() === lang)

//   if (Object.keys(grammar).length) {
//     return Object.keys(grammar)[0]
//   }

//   let name = 'source.' + lang
//   return name
// }


// module.exports = (code, lang) => ((lang) 
//   ? highlighter.highlightSync({
//       fileContents: code,
//       scopeName: scopeNameFromLang(highlighter, lang)
//     })
//   : "")    
  

const hljs = require('highlight.js');
hljs.registerLanguage("cypher", require('highlightjs-cypher'));

module.exports = (code, lang) => ((lang) ? hljs.highlight(lang, code).value : "") 
