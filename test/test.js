let md = require("./render")


let data = `
---
title: Welcome to Markdown-it-meta
keywords: markdown-it-meta
runs: 0
score: 0.0
demographics:
 - {name: 'unknown'}
---

## Hello World

# Об'єкти

Як ми знаємо з голови <info:types>, в JavaScript існує 8 типів даних. Сім з них називаються "примітивними", так як містять тільки одне значення (будь то рядок, число або щось інше).

Об'єкти ж використовуються для зберігання колекцій різних значень і більш складних сутностей. В JavaScript об'єкти використовуються дуже часто, це одна з основ мови. Тому ми повинні зрозуміти їх, перш ніж заглиблюватися куди-небудь ще.

Об'єкт може бути створений за допомогою фігурних дужок \`{...}\` з необов'язковим списком *властивостей*. Властивість - це пара "ключ: значення", де \`ключ\` - це рядок (також званий "ім'ям властивості"), а \`значення\` може бути чим завгодно.

Ми можемо уявити об'єкт у вигляді ящика з підписаними папками. Кожен елемент даних зберігається у своїй папці, на якій написаний ключ. За ключом папку легко знайти, видалити або додати в неї що-небудь.

\`\`\`javascript

module.exports = options => ([
	require('markdown-it-lazy-headers'),
	require('markdown-it-meta'),
	require('markdown-it-emoji'),
	require('markdown-it-expand-tabs'),
	require('markdown-it-task-lists'),
	require('./heading-links'),
	require('./gfm/indented-headings'),
	require('./gfm/relaxed-link-reference'),
	require('./gravatar'),
	require('./github'),
	require('./youtube'),
	require('./packagize'),
	require('./html-heading'),
	require('./gfm/override-link-destination-parser'),
	require('./gfm/link'),
	require('./gfm/image'),
	require("./github-image-url"),
	require('markdown-it-plantuml'),
	require('./markdown-it-asciimath'),
	require("./outlinedBlocks"),
    require("./onlineOffline"),
    require("./summary"),
    require("./quote"),
    (options.nofollow) ? require('./nofollow') : null,
	(options.serveImagesWithCDN) ? require('./cdn') : null
])

\`\`\`

\`\`\`cypher
MATCH (p1:Person {name: "Tom Hanks"}), (p2:Person {name: "Tom Cruise"}),
      path = shortestpath((p1)-[:KNOWS*]-(p2))
RETURN path
\`\`\`
`

console.log(md.render(data))