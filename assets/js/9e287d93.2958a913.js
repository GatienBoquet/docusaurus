"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87317],{52605:(e,n,t)=>{t.d(n,{Z:()=>c});var s=t(24246),r=t(27378),i=t(80474),l=t(3620);const o={apiTable:"apiTable_e8hp"};function a({name:e,children:n},t){const o=function(e){let n=e;for(;(0,r.isValidElement)(n);)[n]=r.Children.toArray(n.props.children);if("string"!=typeof n)throw new Error(`Could not extract APITable row name from JSX tree:\n${JSON.stringify(e,null,2)}`);return n}(n),a=e?`${e}-${o}`:o,d=`#${a}`,c=(0,l.k6)();return(0,i.Z)().collectAnchor(a),(0,s.jsx)("tr",{id:a,tabIndex:0,ref:c.location.hash===d?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||c.push(d)},onKeyDown:e=>{"Enter"===e.key&&c.push(d)},children:n.props.children})}const d=r.forwardRef(a);function c({children:e,name:n}){if("table"!==e.type)throw new Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");const[t,i]=r.Children.toArray(e.props.children),l=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;null===(e=l.current)||void 0===e||e.focus()}),[l]);const a=r.Children.map(i.props.children,(e=>(0,s.jsx)(d,{name:n,ref:l,children:e})));return(0,s.jsxs)("table",{className:o.apiTable,children:[t,(0,s.jsx)("tbody",{children:a})]})}},29187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var s=t(24246),r=t(71670),i=t(52605);const l={slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},o="no-untranslated-text",a={id:"api/misc/eslint-plugin/no-untranslated-text",title:"no-untranslated-text",description:"Enforce text labels in JSX to be wrapped by translate calls.",source:"@site/docs/api/misc/eslint-plugin/no-untranslated-text.mdx",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",permalink:"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-untranslated-text.mdx",tags:[],version:"current",lastUpdatedBy:"Josh Wong",lastUpdatedAt:1723451752e3,frontMatter:{slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},sidebar:"api",previous:{title:"no-html-links",permalink:"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links"},next:{title:"prefer-docusaurus-heading",permalink:"/docs/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading"}},d={},c=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"no-untranslated-text",children:"no-untranslated-text"})}),"\n","\n",(0,s.jsx)(n.p,{children:"Enforce text labels in JSX to be wrapped by translate calls."}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.a,{href:"/docs/i18n/introduction",children:"i18n feature"})," is used, this rule ensures that all labels appearing on the website are translatable, so no string accidentally slips through untranslated."]}),"\n",(0,s.jsx)(n.h2,{id:"details",children:"Rule Details"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ",(0,s.jsx)(n.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Hello World is not translated\n<Component>Hello World</Component>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ",(0,s.jsx)(n.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Hello World is translated\n<Component>\n  <Translate>Hello World</Translate>\n</Component>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Rule Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(i.Z,{children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ignoredStrings"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Text labels that only contain strings in this list will not be reported."})]})})]})}),"\n",(0,s.jsx)(n.h2,{id:"when-not-to-use",children:"When Not To Use It"}),"\n",(0,s.jsxs)(n.p,{children:["If you're not using the ",(0,s.jsx)(n.a,{href:"/docs/i18n/introduction",children:"i18n feature"}),", you can disable this rule. You can also disable this rule where the text is not supposed to be translated."]}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate",children:"https://docusaurus.io/docs/docusaurus-core#translate"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative",children:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(27378);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);