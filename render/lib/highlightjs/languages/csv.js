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

    name:"csv",
    aliases:["csv","tsv"],

    contains: [
      NUMBER,

      {
        className:"string",
        begin: /[^0-9;\n]+/
      }

    ]
  };
};