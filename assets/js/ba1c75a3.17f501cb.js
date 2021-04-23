(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(137)),a={title:"normalizeUnicode",layout:"Optimisation",identifier:"normalizeunicode"},c={unversionedId:"optimisations/normalizeunicode",id:"optimisations/normalizeunicode",isDocsHomePage:!1,title:"normalizeUnicode",description:"This optimisation can convert unicode-range descriptors to use the shorter",source:"@site/docs/optimisations/normalizeunicode.md",sourceDirName:"optimisations",slug:"/optimisations/normalizeunicode",permalink:"/docs/optimisations/normalizeunicode",editUrl:"https://github.com/cssnano/cssnano/edit/master/site/docs/optimisations/normalizeunicode.md",version:"current",lastUpdatedBy:"Anix",lastUpdatedAt:1594121590,formattedLastUpdatedAt:"7/7/2020",frontMatter:{title:"normalizeUnicode",layout:"Optimisation",identifier:"normalizeunicode"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This optimisation can convert ",Object(i.b)("inlineCode",{parentName:"p"},"unicode-range")," descriptors to use the shorter\nwildcard ranges when a particular value meets the wildcard criteria. Values will\nbe converted when the code matches ",Object(i.b)("inlineCode",{parentName:"p"},"0")," & ",Object(i.b)("inlineCode",{parentName:"p"},"f")," in the same place on both sides\nof the range. So, ",Object(i.b)("inlineCode",{parentName:"p"},"u+2000-2fff")," can be converted to ",Object(i.b)("inlineCode",{parentName:"p"},"u+2???"),", but ",Object(i.b)("inlineCode",{parentName:"p"},"u+2100-2fff"),"\nwill be left as it is."))}u.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(a,".").concat(m)]||l[m]||d[m]||i;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);