module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=[{id:1,name:"JWT Handbook",author:"Sebastian Peirot",version:"1.2.0",instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",newFeatures:["feature 1","feature 2","feature 3"],aboutAuthor:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",authorTwitterAccount:"@author",authorPicture:"/img/author-1.png",ebookPicture:"/img/ebook-1.png"},{id:2,name:"Introduction to Ethereum",author:"Sebastian Peirot",version:"1.2.0",instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",newFeatures:["feature 1","feature 2","feature 3"],aboutAuthor:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",authorTwitterAccount:"@author",authorPicture:"/img/author.png",ebookPicture:"/img/ebook-2.png"}];t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={url:"https://pay-with-tweet.herokuapp.com/"};t.default=o},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(1),s=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"not-found"},l.default.createElement("h1",null,"404"),l.default.createElement("h2",null,"Page not found!"),l.default.createElement("p",null,l.default.createElement(c.Link,{to:"/"},"Go back to the main page")))}}]),t}(l.default.Component);t.default=s},function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var o=n(2),r=t(o),a=n(3),i=t(a),u=n(8),l=n(9),c=t(l),s=n(0),f=t(s),d=n(10),p=n(1),m=n(11),b=t(m),h=n(5),y=t(h),v=n(6),w=t(v),_=n(23),g=t(_),E=new c.default,O=new u.Server(E);E.set("view engine","ejs"),E.set("views",r.default.join(e,"views")),E.use(c.default.static(r.default.join(e,"static"))),E.get("/download/:sid",function(e,t){var n=e.params.sid;g.default.getDownloadFilePath(n,function(e,o){if(e)return t.end("Error");console.log(o);var r=i.default.createReadStream(o),a=i.default.statSync(o);t.setHeader("Content-Length",a.size),t.setHeader("Content-Type","application/pdf"),t.setHeader("Content-Disposition","attachment; filename="+n+".pdf"),r.pipe(t),g.default.deleteDownload(n,function(e){console.log("Link deleted")})})}),E.get("/generateDownload/:id",function(t,n){g.default.createDownload(e+"/pdf/"+t.params.id+".pdf",function(e,t){console.log(e),n.setHeader("Content-Type","application/json"),n.send(JSON.stringify({link:y.default.url+"download/"+t}))})}),E.get("*",function(e,t){(0,p.match)({routes:b.default,location:e.url},function(e,n,o){if(e)return t.status(500).send(e.message);if(n)return t.redirect(302,n.pathname+n.search);var r=void 0;return o?r=(0,d.renderToString)(f.default.createElement(p.RouterContext,o)):(r=(0,d.renderToString)(f.default.createElement(w.default,null)),t.status(404)),t.render("index",{markup:r})})});var j=process.env.PORT||3e3;O.listen(j,function(e){if(e)return console.error(e);console.info("Server running on http://localhost:"+j+" [production]")})}).call(t,"src")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=o(r),i=n(1),u=n(12),l=o(u),c=n(13),s=o(c),f=n(15),d=o(f),p=n(6),m=o(p),b=a.default.createElement(i.Route,{path:"/",component:l.default},a.default.createElement(i.IndexRoute,{component:s.default}),a.default.createElement(i.Route,{path:"ebook/:id",component:d.default}),a.default.createElement(i.Route,{path:"*",component:m.default}));t.default=b},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=(n(1),function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"app-container"},l.default.createElement("header",{className:"app-container-header"},l.default.createElement("a",{href:"/"},l.default.createElement("img",{src:"/img/auth0-logo.png"}),l.default.createElement("h1",null,"Ebook pay with tweet application"))),l.default.createElement("div",{className:"app-content"},this.props.children))}}]),t}(l.default.Component));t.default=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),c=o(l),s=n(14),f=o(s),d=n(4),p=o(d),m=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"ebook-list"},c.default.createElement("h2",null," Available Ebooks "),c.default.createElement("table",{className:"ebook-table"},c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",{className:"id-header"},"#"),c.default.createElement("th",{className:"name-header"},"Name"),c.default.createElement("th",{className:"author-header"},"Author"))),c.default.createElement("tbody",null,p.default.map(function(e){return c.default.createElement(f.default,{key:e.id,id:e.id,name:e.name,author:e.author})}))))}}]),t}(c.default.Component);t.default=m},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(1),s=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("tr",{className:"ebook-row"},l.default.createElement("td",{className:"ebook-id"},this.props.id),l.default.createElement("td",{className:"ebook-name"},l.default.createElement(c.Link,{to:"/ebook/"+this.props.id},this.props.name)),l.default.createElement("td",{className:"ebook-author"},this.props.author))}}]),t}(l.default.Component);t.default=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),c=o(l),s=(n(1),n(4)),f=o(s),d=n(16),p=o(d),m=n(17),b=o(m),h=n(18),y=o(h),v=n(19),w=o(v),_=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.params.id,t=f.default.find(function(t){return t.id==e});return c.default.createElement("div",{className:"ebook-page-main"},c.default.createElement(y.default,{title:t.name,version:t.version,author:t.author}),c.default.createElement(b.default,{picture:t.ebookPicture}),c.default.createElement(w.default,{summary:t.summary,content:t.description,id:t.id,title:t.name,instructions:t.instructions}),c.default.createElement(p.default,{about:t.aboutAuthor,picture:t.authorPicture,twitterAccount:t.authorTwitterAccount}))}}]),t}(c.default.Component);t.default=_},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"author"},l.default.createElement("div",{className:"author-title"},l.default.createElement("h2",null,"About the author")),l.default.createElement("div",{className:"author-picture"},l.default.createElement("img",{src:this.props.picture})),l.default.createElement("p",{className:"author-about"},this.props.about),l.default.createElement("div",{className:"author-followtwitter"},l.default.createElement("span",null,"Follow him on ",l.default.createElement("img",{src:"/img/twitter-round.png"}))))}}]),t}(l.default.Component);t.default=c},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"ebook-thumb-wrapper"},l.default.createElement("img",{src:this.props.picture}))}}]),t}(l.default.Component);t.default=c},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"ebook-summary"},l.default.createElement("h2",{className:"ebook-summary-title"},this.props.title),l.default.createElement("span",{className:"ebook-summary-author"},"Written by ",this.props.author),l.default.createElement("span",{className:"ebook-summary-version"},l.default.createElement("img",{src:"/img/ebook-icon.png"})," Ebook version ",this.props.version))}}]),t}(l.default.Component);t.default=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),c=o(l),s=n(20),f=o(s),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"ebook-contents"},c.default.createElement("p",{className:"ebook-contents-paragraph ebook-contents-summary"},this.props.summary),c.default.createElement("p",{className:"ebook-contents-paragraph ebook-contents-description"},this.props.content),c.default.createElement("div",{className:"ebook-contents-link-toc"},c.default.createElement("a",{href:"#"},"Contents ",c.default.createElement("img",{src:"/img/arrow.png"})," ")),c.default.createElement(f.default,{id:this.props.id,title:this.props.title,version:this.props.version,downloadLink:""}),c.default.createElement("hr",{className:"content-separator"}),c.default.createElement("p",{className:"ebook-contents-paragraph ebook-contents-instructions"},this.props.instructions))}}]),t}(c.default.Component);t.default=d},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),c=o(l),s=n(5),f=o(s),d=n(21),p=n(22),m=o(p),b=d.ShareButtons.TwitterShareButton,h=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={shared:!1,downloaded:!1},n}return i(t,e),u(t,[{key:"afterSharedTweet",value:function(){var e=this;(0,m.default)({method:"get",url:f.default.url+"generateDownload/"+this.props.id,responseType:"stream"}).then(function(t){console.log(e.props),e.props.downloadLink=t.data.link,e.setState({shared:!0})})}},{key:"render",value:function(){var e="I just downloaded "+this.props.title+" 📖 by @auth0. "+this.props.version+". Check it out!",t=f.default.url+"ebook/"+this.props.id,n="";return n=this.state.shared?c.default.createElement("div",{className:"payment-download-wrapper"},c.default.createElement("a",{href:this.props.downloadLink},"Download")):c.default.createElement(b,{url:t,title:e,onShareWindowClose:this.afterSharedTweet.bind(this)},c.default.createElement("span",null," Pay with tweet")),c.default.createElement("div",{className:"payment"},n,c.default.createElement("div",{className:"emailDownload"},c.default.createElement("span",null,"Download via email")))}}]),t}(c.default.Component);t.default=h},function(e,t){e.exports=require("react-share")},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){var n=l.default.createReadStream(e);n.once("error",function(e){console.log(e)}),n.once("end",function(){console.log("done copying")}),n.pipe(l.default.createWriteStream(t))}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),l=o(u),c=n(24),s=o(c),f=n(2),d=o(f),p=e+"/static/download",m=function(){function e(){r(this,e)}return i(e,null,[{key:"createDownload",value:function(e,t){if(!l.default.existsSync(p))return t(new Error("Session directory does not exist"));if(!l.default.existsSync(e))return t(new Error("File doest not exist"));var n=s.default.createHash("md5").update(Math.random().toString()).digest("hex");a(e,d.default.join(p,n+".pdf")),t(null,n)}},{key:"getDownloadFilePath",value:function(e,t){var n=d.default.join(p,e+".pdf");if(!l.default.existsSync(n))return t(new Error("Download does not exist"));t(null,n)}},{key:"deleteDownload",value:function(e,t){var n=d.default.join(p,e+".pdf");if(!l.default.existsSync(n))return t(new Error("Download does not exist"));l.default.unlink(n,function(e){if(e)return t(e);t()})}}]),e}();t.default=m}).call(t,"src")},function(e,t){e.exports=require("crypto")}]);