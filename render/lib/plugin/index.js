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

