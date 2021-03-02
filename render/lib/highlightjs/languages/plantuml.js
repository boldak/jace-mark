module.exports = function(hljs) {
  
  
  return {

    name:"plantuml",
    aliases:["plantuml","uml"],

    contains: [

      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.CSS_NUMBER_MODE,

      {
         className:"string",
         begin:/(\.\. |\=\= |\-\- |\_\_ )/,
         end:/( \.\.| \=\=| \-\-| \_\_)/,
         // returnBegin: true,
         // // returnEnd: true,
         // contains:[
         //    {
         //       className:"built_in",
         //       begin:/(\.\. |\=\= |\-\- |\_\_ )/
         //    },
         //    {
         //       className:"built_in",
         //       begin:/( \.\.| \=\=| \-\-| \_\_)/,
         //       endsParent:true
         //    }

         // ]
      },

      {
         className:"built_in",
         begin:/\s[\<\|\*\o\#\x\+\^]*[\-\.]+((l|left|r|right|up|u|down|d)+[\-\.]+)*[\>\|\*\o\#\x\+\^]*\s/
      },

      {
         className:"string",
         begin: /\:.*/
      },
      
      {
         className:"number",
         begin: /\#[a-zA-Z0-9]*/
      },


      {
         className:"variable",
         begin: /(@enduml|@startuml|abstract|actor|class|component|enum|interface|object|participant|state|usecase|entity)\b/i
      },
      // {
      //    className:"built_in",
      //    begin: /(|activate|again|also|alt|as|autonumber|bottom|box|break|center|critical|deactivate|destroy|down|else|end|endif|endwhile|footbox|footer|fork|group|header|hide|if|is|left|link|loop|namespace|newpage|note|of|on|opt|over|package|page|par|partition|ref|repeat|return|right|rotate|show|skin|skinparam|start|stop|title|top|top to bottom direction|up|while)\b/i
      // },
      // {
      //    className:"buit_in",
      //    begin:/\b(AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkGrey|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkSlateGrey|DarkTurquoise|DarkViolet|Darkorange|DeepPink|DeepSkyBlue|DimGray|DimGrey|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|Grey|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSlateGrey|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|SlateGrey|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i
      // },

      {
         className:"title",
         begin: /[A-Za-z$_][0-9A-Za-z$_]*/
      }


    ]
  };
};