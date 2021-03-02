module.exports = function(hljs) {
  var NUMBER = {
      className: 'number',
      variants: [
        { begin: '\\b(0[bB][01]+)' },
        { begin: '\\b(0[oO][0-7]+)' },
        { begin: hljs.C_NUMBER_RE }
      ],
      relevance: 0
    };

  return {

    name:"dps",
    aliases:["dps","data-processing","dp-script"],

    contains: [
    
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,

      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      NUMBER,

      {
        className:"title",
        begin: /[A-Za-z$_][0-9A-Za-z$_]/
      },

      {
        className:"built_in",
        begin:/\@/,
        end:/[A-Za-z$_]+/
      },

      {
        begin:/\(/,
        end:/\)/,
        contains:[
          {
            className:"variable",
            begin: /[A-Za-z$_][0-9A-Za-z$_]/,
            end: /\:/,
            excludeEnd: true 
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          
          NUMBER,
          
          {
            className:"keyword",
            begin:/\{\{/,
            end:/\}\}/  
          },

          {
            begin: /<\?( |\n)/,
            end:/\?>/,
            subLanguage: "javascript",
            returnBegin: true,
            endsWithParent:true,
            contains:[
              {
                className:"built_in",
                begin: /<\?( |\n)/ 
              },
              {
                className:"built_in",
                begin: /\?>/,
                endsParent:true
              },
            ]
          }

        ]
      },
      
      {
        begin: /<\?(xml|html)/,
        end:/\?>/,
        subLanguage: "xml",
        returnBegin: true,
        endsWithParent:true,
        contains:[
          {
            className:"built_in",
            begin: /<\?(xml|html)/ 
          },
          {
            className:"built_in",
            begin: /\?>/,
            endsParent:true 
          }
        ]
      },
      {
        begin: /<\?sql/,
        end:/\?>/,
        subLanguage: "sql",
        returnBegin: true,
        endsWithParent:true,
        contains:[
          {
            className:"built_in",
            begin: /<\?sql/ 
          },
          {
            className:"built_in",
            begin: /\?>/,
            endsParent:true 
          }
        ]
      },
      {
        begin: /<\?json/,
        end:/\?>/,
        subLanguage: "json",
        returnBegin: true,
        endsWithParent:true,
        contains:[
          {
            className:"built_in",
            begin: /<\?json/ 
          },
          {
            className:"built_in",
            begin: /\?>/,
            endsParent:true 
          }
        ]
      },

      {
        begin: /<\?cypher/,
        end:/\?>/,
        subLanguage: "cypher",
        returnBegin: true,
        endsWithParent:true,
        contains:[
          {
            className:"built_in",
            begin: /<\?cypher/ 
          },
          {
            className:"built_in",
            begin: /\?>/,
            endsParent:true 
          }
        ]
      },

      {
        begin: /<\?csv/,
        end:/\?>/,
        subLanguage: "csv",
        returnBegin: true,
        endsWithParent:true,
        contains:[
          {
            className:"built_in",
            begin: /<\?csv/ 
          },
          {
            className:"built_in",
            begin: /\?>/,
            endsParent:true 
          }
        ]
      },

      {
        begin: /<\?text/,
        end:/\?>/,
        subLanguage: "text",
        returnBegin: true,
        endsWithParent:true,
        contains:[
          {
            className:"built_in",
            begin: /<\?text/ 
          },
          {
            className:"built_in",
            begin: /\?>/,
            endsParent:true 
          }
        ]
      },

      {
        begin: /<\?(javascript)*( |\n)/,
        end:/\?>/,
        subLanguage: "javascript",
        returnBegin: true,
        endsWithParent:true,
        contains:[
          {
            className:"built_in",
            begin: /<\?(javascript)*( |\n)/ 
          },
          {
            className:"built_in",
            begin: /\?>/,
            endsParent:true
          },
        ]
      }
    ]
  };
};