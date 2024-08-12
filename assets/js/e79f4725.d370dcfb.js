"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65794],{61132:(e,n,s)=>{s.d(n,{Z:()=>i});var t=s(24246),r=(s(27378),s(40624));const a={tabItem:"tabItem_pnkT"};function i({children:e,hidden:n,className:s}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:e})}},97555:(e,n,s)=>{s.d(n,{Z:()=>M});var t=s(24246),r=s(27378),a=s(40624),i=s(75527),l=s(3620),o=s(44479),c=s(62821),u=s(52196),h=s(53589);function d(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function m(e){var n,s;return null!==(s=null===(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==s?s:[]}function g(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return m(e).map((({props:{value:e,label:n,attributes:s,default:t}})=>({value:e,label:n,attributes:s,default:t})))}(s);return function(e){const n=(0,u.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x({value:e,tabValues:n}){return n.some((n=>n.value===e))}function f({queryString:e=!1,groupId:n}){const s=(0,l.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),a=(0,c._X)(t),i=(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace(p(function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){d(e,n,s[n])}))}return e}({},s.location),{search:n.toString()}))}),[t,s]);return[a,i]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,a=g(e),[i,l]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var s;const t=null!==(s=n.find((e=>e.default)))&&void 0!==s?s:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,u]=f({queryString:s,groupId:t}),[d,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[s,t]=(0,h.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),m=(()=>{const e=null!=c?c:d;return x({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var y=s(29088);const b={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function k(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){w(e,n,s[n])}))}return e}function v(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function N({className:e,block:n,selectedValue:s,selectValue:r,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==s&&(c(n),r(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;var s;n=null!==(s=o[t])&&void 0!==s?s:o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;var t;n=null!==(t=o[s])&&void 0!==t?t:o[o.length-1];break}}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e),children:l.map((({value:e,label:n,attributes:r})=>(0,t.jsx)("li",v(k({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,ref:e=>o.push(e),onKeyDown:h,onClick:u},r),{className:(0,a.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===e}),children:null!=n?n:e}),e)))})}function O({lazy:e,children:n,selectedValue:s}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function D(e){const n=j(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,t.jsx)(N,k({},n,e)),(0,t.jsx)(O,k({},n,e))]})}function M(e){const n=(0,y.Z)();return(0,t.jsx)(D,v(k({},e),{children:m(e.children)}),String(n))}},47854:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=s(24246),r=s(71670),a=s(97555),i=s(61132);const l={id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},o="MDX Plugins",c={id:"guides/markdown-features/plugins",title:"MDX Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",source:"@site/docs/guides/markdown-features/markdown-features-plugins.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/plugins",permalink:"/docs/markdown-features/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-plugins.mdx",tags:[],version:"current",lastUpdatedBy:"Josh Wong",lastUpdatedAt:1723451752e3,frontMatter:{id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},sidebar:"docs",previous:{title:"Markdown links",permalink:"/docs/markdown-features/links"},next:{title:"Math Equations",permalink:"/docs/markdown-features/math-equations"}},u={},h=[{value:"Default plugins",id:"default-plugins",level:2},{value:"Installing plugins",id:"installing-plugins",level:2},{value:"Configuring plugins",id:"configuring-plugins",level:2},{value:"Creating new rehype/remark plugins",id:"creating-new-rehyperemark-plugins",level:2}];function d(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mrow:"mrow",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"mdx-plugins",children:"MDX Plugins"})}),"\n",(0,t.jsx)(n.p,{children:"Sometimes, you may want to extend or tweak your Markdown syntax. For example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["How do I embed youtube videos using the image syntax (",(0,t.jsx)(n.code,{children:"![](https://youtu.be/yKNxeF4KMsY)"}),")?"]}),"\n",(0,t.jsx)(n.li,{children:"How do I style links that are on their own lines differently, e.g., as a social card?"}),"\n",(0,t.jsx)(n.li,{children:"How do I make every page start with a copyright notice?"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["And the answer is: create an MDX plugin! MDX has a built-in ",(0,t.jsx)(n.a,{href:"https://mdxjs.com/advanced/plugins/",children:"plugin system"})," that can be used to customize how the Markdown files will be parsed and transformed to JSX. There are three typical use-cases of MDX plugins:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using existing ",(0,t.jsx)(n.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins",children:"remark plugins"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins",children:"rehype plugins"}),";"]}),"\n",(0,t.jsx)(n.li,{children:"Creating remark/rehype plugins to transform the elements generated by existing MDX syntax;"}),"\n",(0,t.jsx)(n.li,{children:"Creating remark/rehype plugins to introduce new syntaxes to MDX."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you play with the ",(0,t.jsx)(n.a,{href:"https://mdxjs.com/playground/",children:"MDX playground"}),", you would notice that the MDX transpilation has two intermediate steps: Markdown AST (MDAST), and Hypertext AST (HAST), before arriving at the final JSX output. MDX plugins also come in two forms:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/remarkjs/remark/",children:"Remark"})}),": processes the Markdown AST."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/rehypejs/rehype/",children:"Rehype"})}),": processes the Hypertext AST."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project. The ",(0,t.jsx)(n.a,{href:"/docs/markdown-features/admonitions",children:"admonition"})," syntax that we offer is also generated by a Remark plugin, and you could do the same for your own use case."]})}),"\n",(0,t.jsx)(n.h2,{id:"default-plugins",children:"Default plugins"}),"\n",(0,t.jsxs)(n.p,{children:["Docusaurus injects ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-mdx-loader/src/remark",children:"some default Remark plugins"})," during Markdown processing. These plugins would:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Generate the table of contents;"}),"\n",(0,t.jsx)(n.li,{children:"Add anchor links to each heading;"}),"\n",(0,t.jsxs)(n.li,{children:["Transform images and links to ",(0,t.jsx)(n.code,{children:"require()"})," calls."]}),"\n",(0,t.jsx)(n.li,{children:"\u2026"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These are all typical use-cases of Remark plugins, which can also be a source of inspiration if you want to implement your own plugin."}),"\n",(0,t.jsx)(n.h2,{id:"installing-plugins",children:"Installing plugins"}),"\n",(0,t.jsxs)(n.p,{children:["An MDX plugin is usually an npm package, so you install them like other npm packages using npm. Take the ",(0,t.jsx)(n.a,{href:"/docs/markdown-features/math-equations",children:"math plugins"})," as an example."]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save remark-math@5 rehype-katex@6\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add remark-math@5 rehype-katex@6\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add remark-math@5 rehype-katex@6\n"})})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:["How are ",(0,t.jsx)("code",{children:"remark-math"})," and ",(0,t.jsx)("code",{children:"rehype-katex"})," different?"]}),(0,t.jsxs)(n.p,{children:["In case you are wondering how Remark and Rehype are different, here is a good example. ",(0,t.jsx)(n.code,{children:"remark-math"})," operates on the Markdown AST, where it sees text like ",(0,t.jsx)(n.code,{children:"$...$"}),", and all it does is transform that to the JSX ",(0,t.jsx)(n.code,{children:'<span class="math math-inline">...</span>'})," without doing too much with the content. This decouples the extraction of math formulae from their rendering, which means you can swap ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mtext,{children:"KaTeX"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\KaTeX"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,t.jsxs)(n.span,{className:"mord text",children:[(0,t.jsx)(n.span,{className:"mord textrm",children:"K"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.17em"}}),(0,t.jsx)(n.span,{className:"vlist-t",children:(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.6833em"},children:(0,t.jsxs)(n.span,{style:{top:"-2.905em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(n.span,{className:"mord",children:(0,t.jsx)(n.span,{className:"mord textrm mtight sizing reset-size6 size3",children:"A"})})]})})})}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.15em"}}),(0,t.jsxs)(n.span,{className:"mord text",children:[(0,t.jsx)(n.span,{className:"mord textrm",children:"T"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,t.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(n.span,{className:"vlist-r",children:[(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.4678em"},children:(0,t.jsxs)(n.span,{style:{top:"-2.7845em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(n.span,{className:"mord",children:(0,t.jsx)(n.span,{className:"mord textrm",children:"E"})})]})}),(0,t.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.2155em"},children:(0,t.jsx)(n.span,{})})})]}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.125em"}}),(0,t.jsx)(n.span,{className:"mord textrm",children:"X"})]})]})]})})]})," out with other math renderers, like MathJax (with ",(0,t.jsx)(n.a,{href:"https://github.com/remarkjs/remark-math/tree/main/packages/rehype-mathjax",children:(0,t.jsx)(n.code,{children:"rehype-mathjax"})}),"), just by replacing the Rehype plugin."]}),(0,t.jsxs)(n.p,{children:["Next, the ",(0,t.jsx)(n.code,{children:"rehype-katex"})," operates on the Hypertext AST where everything has been converted to HTML-like tags already. It traverses all the elements with ",(0,t.jsx)(n.code,{children:"math"})," class and uses ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mtext,{children:"KaTeX"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\KaTeX"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,t.jsxs)(n.span,{className:"mord text",children:[(0,t.jsx)(n.span,{className:"mord textrm",children:"K"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.17em"}}),(0,t.jsx)(n.span,{className:"vlist-t",children:(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.6833em"},children:(0,t.jsxs)(n.span,{style:{top:"-2.905em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(n.span,{className:"mord",children:(0,t.jsx)(n.span,{className:"mord textrm mtight sizing reset-size6 size3",children:"A"})})]})})})}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.15em"}}),(0,t.jsxs)(n.span,{className:"mord text",children:[(0,t.jsx)(n.span,{className:"mord textrm",children:"T"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,t.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(n.span,{className:"vlist-r",children:[(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.4678em"},children:(0,t.jsxs)(n.span,{style:{top:"-2.7845em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(n.span,{className:"mord",children:(0,t.jsx)(n.span,{className:"mord textrm",children:"E"})})]})}),(0,t.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.2155em"},children:(0,t.jsx)(n.span,{})})})]}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.125em"}}),(0,t.jsx)(n.span,{className:"mord textrm",children:"X"})]})]})]})})]})," to parse and render the content to actual HTML."]})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Many official Remark/Rehype plugins are ",(0,t.jsx)(n.a,{href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c",children:(0,t.jsx)(n.strong,{children:"ES Modules only"})}),", a JavaScript module system, which Docusaurus supports. We recommend using an ",(0,t.jsx)(n.a,{href:"https://flaviocopes.com/es-modules/",children:(0,t.jsx)(n.strong,{children:"ES Modules"})})," config file to make it easier to import such packages."]})}),"\n",(0,t.jsxs)(n.p,{children:["Next, import your plugins and add them to the plugin options through plugin or preset config in ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\nimport remarkMath from 'remark-math';\nimport rehypeKatex from 'rehype-katex';\n// highlight-end\n\n// highlight-start\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [remarkMath],\n          rehypePlugins: [rehypeKatex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:["Using a ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/modules.html#modules-commonjs-modules",children:(0,t.jsx)(n.strong,{children:"CommonJS"})})," config file?"]}),(0,t.jsx)(n.p,{children:"If you decide to use a CommonJS config file, it is possible to load those ES module plugins thanks to dynamic imports and an async config creator function:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\nmodule.exports = async function createConfigAsync() {\n  // highlight-end\n  return {\n    presets: [\n      [\n        '@docusaurus/preset-classic',\n        {\n          docs: {\n            path: 'docs',\n            // highlight-start\n            remarkPlugins: [(await import('remark-math')).default],\n            rehypePlugins: [(await import('rehype-katex')).default],\n            // highlight-end\n          },\n        },\n      ],\n    ],\n  };\n};\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-plugins",children:"Configuring plugins"}),"\n",(0,t.jsxs)(n.p,{children:["Some plugins can be configured and accept their own options. In that case, use the ",(0,t.jsx)(n.code,{children:"[plugin, pluginOptions]"})," syntax, like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"import rehypeKatex from 'rehype-katex';\n\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          rehypePlugins: [\n            // highlight-start\n            [rehypeKatex, {strict: false}],\n            // highlight-end\n          ],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should check your plugin's documentation for the options it supports."}),"\n",(0,t.jsx)(n.h2,{id:"creating-new-rehyperemark-plugins",children:"Creating new rehype/remark plugins"}),"\n",(0,t.jsx)(n.p,{children:"If there isn't an existing package that satisfies your customization need, you can create your own MDX plugin."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The writeup below is ",(0,t.jsx)(n.strong,{children:"not"})," meant to be a comprehensive guide to creating a plugin, but just an illustration of how to make it work with Docusaurus. Visit the ",(0,t.jsx)(n.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#create-plugins",children:"Remark"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#create-plugins",children:"Rehype"})," documentation for a more in-depth explanation of how they work."]})}),"\n",(0,t.jsxs)(n.p,{children:["For example, let's make a plugin that visits every ",(0,t.jsx)(n.code,{children:"h2"})," heading and adds a ",(0,t.jsx)(n.code,{children:"Section X. "})," prefix. First, create your plugin source file anywhere\u2014you can even publish it as a separate npm package and install it like explained above. We would put ours at ",(0,t.jsx)(n.code,{children:"src/remark/section-prefix.js"}),". A remark/rehype plugin is just a function that receives the ",(0,t.jsx)(n.code,{children:"options"})," and returns a ",(0,t.jsx)(n.code,{children:"transformer"})," that operates on the AST."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'"src/remark/section-prefix.js"',children:"import {visit} from 'unist-util-visit';\n\nconst plugin = (options) => {\n  const transformer = async (ast) => {\n    let number = 1;\n    visit(ast, 'heading', (node) => {\n      if (node.depth === 2 && node.children.length > 0) {\n        node.children.unshift({\n          type: 'text',\n          value: `Section ${number}. `,\n        });\n        number++;\n      }\n    });\n  };\n  return transformer;\n};\n\nexport default plugin;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can now import your plugin in ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"})," and use it just like an installed plugin!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-next-line\nimport sectionPrefix from './src/remark/section-prefix';\n\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          remarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"transformer"})," has a second parameter ",(0,t.jsx)(n.a,{href:"https://github.com/vfile/vfile",children:(0,t.jsx)(n.code,{children:"vfile"})})," which is useful if you need to access the current Markdown file's path."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const plugin = (options) => {\n  const transformer = async (ast, vfile) => {\n    ast.children.unshift({\n      type: 'text',\n      value: `The current file path is ${vfile.path}`,\n    });\n  };\n  return transformer;\n};\n"})}),(0,t.jsxs)(n.p,{children:["Our ",(0,t.jsx)(n.code,{children:"transformImage"})," plugin uses this parameter, for example, to transform relative image references to ",(0,t.jsx)(n.code,{children:"require()"})," calls."]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["The default plugins of Docusaurus would operate before the custom remark plugins, and that means the images or links have been converted to JSX with ",(0,t.jsx)(n.code,{children:"require()"})," calls already. For example, in the example above, the table of contents generated is still the same even when all ",(0,t.jsx)(n.code,{children:"h2"})," headings are now prefixed by ",(0,t.jsx)(n.code,{children:"Section X."}),", because the TOC-generating plugin is called before our custom plugin. If you need to process the MDAST before the default plugins do, use the ",(0,t.jsx)(n.code,{children:"beforeDefaultRemarkPlugins"})," and ",(0,t.jsx)(n.code,{children:"beforeDefaultRehypePlugins"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          beforeDefaultRemarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n"})}),(0,t.jsxs)(n.p,{children:["This would make the table of contents generated contain the ",(0,t.jsx)(n.code,{children:"Section X."})," prefix as well."]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(27378);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);