(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9212)}])},9212:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);n(8804);var o=n(7294),i=n(542);function a(e){let{Component:t,pageProps:n}=e;return(0,o.useEffect)(()=>{i.ZP.initialize("UA-57623464-1"),i.ZP.pageview(window.location.pathname+window.location.search)},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t,{...n})})}},8804:function(){},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},542:function(e,t,n){"use strict";n.d(t,{ZP:function(){return et}});var r={};n.r(r),n.d(r,{addTrackers:function(){return z},default:function(){return Y},event:function(){return K},exception:function(){return W},ga:function(){return F},initialize:function(){return B},modalview:function(){return M},outboundLink:function(){return X},pageview:function(){return G},plugin:function(){return $},send:function(){return Z},set:function(){return U},testModeAPI:function(){return H},timing:function(){return V}});var o=n(7294),i=n(5697),a=n.n(i);function c(e){console.warn("[react-ga]",e)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=["to","target"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v="_blank",m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=g(a);if(t){var r=g(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function a(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(b(e=i.call.apply(i,[this].concat(n))),"handleClick",function(t){var n=e.props,r=n.target,o=n.eventLabel,i=n.to,c=n.onClick,u=n.trackerNames,l={label:o},f=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);r!==v&&f?(t.preventDefault(),a.trackLink(l,function(){window.location.href=i},u)):a.trackLink(l,function(){},u),c&&c(t)}),e}return n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=s(s({},function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,l)),{},{target:n,href:t,onClick:this.handleClick});return n===v&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,o.createElement("a",r)}}],p(a.prototype,n),r&&p(a,r),Object.defineProperty(a,"prototype",{writable:!1}),a}(o.Component);function h(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}d(m,"trackLink",function(){c("ga tracking not enabled")}),m.propTypes={eventLabel:a().string.isRequired,target:a().string,to:a().string,onClick:a().func,trackerNames:a().arrayOf(a().string)},m.defaultProps={target:null,to:null,onClick:null,trackerNames:null};var O=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i,w=!1;function j(e){console.info("[react-ga]",e)}var k=[],P={calls:k,ga:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];k.push([].concat(t))},resetCalls:function(){k.length=0}},A=["category","action","label","value","nonInteraction","transport"];function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _="undefined"==typeof window||"undefined"==typeof document,x=!1,C=!0,N=!1,D=!0,q=!0,L=function(){var e;return N?P.ga.apply(P,arguments):!_&&(window.ga?(e=window).ga.apply(e,arguments):c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function I(e){return function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=n||"";return r&&(i=h(n).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(O)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&0>n.charAt(t-1).search(/[^\s-]/)?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})),o&&(i="string"==typeof(t=e=i)&&-1!==t.indexOf("@")?(c("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e),i}(e,C,q)}function R(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"==typeof L){if("string"!=typeof o){c("ga command must be a string");return}(D||!Array.isArray(e))&&L.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){var t;L.apply(void 0,function(e){if(Array.isArray(e))return T(e)}(t=["".concat(e,".").concat(o)].concat(n.slice(1)))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})}}function J(e,t){if(!e){c("gaTrackingID is required in initialize()");return}t&&(t.debug&&!0===t.debug&&(x=!0),!1===t.titleCase&&(C=!1),!1===t.redactEmail&&(q=!1),t.useExistingGa)||(t&&t.gaOptions?L("create",e,t.gaOptions):L("create",e,"auto"))}function z(e,t){return Array.isArray(e)?e.forEach(function(e){if("object"!==S(e)){c("All configs must be an object");return}J(e.trackingId,e)}):J(e,t),!0}function B(e,t){if(t&&!0===t.testMode)N=!0;else{if(_)return;t&&!0===t.standardImplementation||function(e){if(!w){w=!0;var t,n,r,o,i,a,c="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?c=e.gaAddress:e&&e.debug&&(c="https://www.google-analytics.com/analytics_debug.js");var u=e&&e.onerror;t=window,n=document,r="script",o=c,t.GoogleAnalyticsObject="ga",t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),a=n.getElementsByTagName(r)[0],i.async=1,i.src=o,i.onerror=u,a.parentNode.insertBefore(i,a)}}(t)}D=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,z(e,t)}function F(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(L.apply(void 0,t),x&&(j("called ga('arguments');"),j("with arguments: ".concat(JSON.stringify(t))))),window.ga}function U(e,t){if(!e){c("`fieldsObject` is required in .set()");return}if("object"!==S(e)){c("Expected `fieldsObject` arg to be an Object");return}0===Object.keys(e).length&&c("empty `fieldsObject` given to .set()"),R(t,"set",e),x&&(j("called ga('set', fieldsObject);"),j("with fieldsObject: ".concat(JSON.stringify(e))))}function Z(e,t){R(t,"send",e),x&&(j("called ga('send', fieldObject);"),j("with fieldObject: ".concat(JSON.stringify(e))),j("with trackers: ".concat(JSON.stringify(t))))}function G(e,t,n){if(!e){c("path is required in .pageview()");return}var r=h(e);if(""===r){c("path cannot be an empty string in .pageview()");return}var o={};if(n&&(o.title=n),R(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach(function(t){var r,o;r=e,o=n[t],t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({hitType:"pageview",page:r},o)),x){j("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),j("with path: ".concat(r).concat(i))}}function M(e,t){if(!e){c("modalName is required in .modalview(modalName)");return}var n,r="/"===(n=h(e)).substring(0,1)?n.substring(1):n;if(""===r){c("modalName cannot be an empty string or a single / in .modalview()");return}var o="/modal/".concat(r);R(t,"send","pageview",o),x&&(j("called ga('send', 'pageview', path);"),j("with path: ".concat(o)))}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(!t||!n||"number"!=typeof r){c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");return}var a={hitType:"timing",timingCategory:I(t),timingVar:I(n),timingValue:r};o&&(a.timingLabel=I(o)),Z(a,i)}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,u=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,A),l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(!t||!n){c("args.category AND args.action are required in event()");return}var f={hitType:"event",eventCategory:I(t),eventAction:I(n)};r&&(f.eventLabel=I(r)),void 0!==o&&("number"!=typeof o?c("Expected `args.value` arg to be a Number."):f.eventValue=o),void 0!==i&&("boolean"!=typeof i?c("`args.nonInteraction` must be a boolean."):f.nonInteraction=i),void 0!==a&&("string"!=typeof a?c("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),f.transport=a)),Object.keys(u).filter(function(e){return"dimension"===e.substr(0,9)}).forEach(function(e){f[e]=u[e]}),Object.keys(u).filter(function(e){return"metric"===e.substr(0,6)}).forEach(function(e){f[e]=u[e]}),Z(f,l)}function W(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=I(n)),void 0!==r&&("boolean"!=typeof r?c("`args.fatal` must be a boolean."):o.exFatal=r),Z(o,t)}var $={require:function(e,t,n){if(!e){c("`name` is required in .require()");return}var r=h(e);if(""===r){c("`name` cannot be an empty string in .require()");return}var o=n?"".concat(n,".require"):"require";if(t){if("object"!==S(t)){c("Expected `options` arg to be an Object");return}0===Object.keys(t).length&&c("Empty `options` given to .require()"),F(o,r,t),x&&j("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else F(o,r),x&&j("called ga('require', '".concat(r,"');"))},execute:function(e,t){for(var n,r,o=arguments.length,i=Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];if(1===i.length?n=i[0]:(r=i[0],n=i[1]),"string"!=typeof e)c("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)c("Expected `action` arg to be a String.");else{var u="".concat(e,":").concat(t);n=n||null,r&&n?(F(u,r,n),x&&(j("called ga('".concat(u,"');")),j('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(F(u,n),x&&(j("called ga('".concat(u,"');")),j("with payload: ".concat(JSON.stringify(n))))):(F(u),x&&j("called ga('".concat(u,"');")))}}};function X(e,t,n){if("function"!=typeof t){c("hitCallback function is required");return}if(!e||!e.label){c("args.label is required in outboundLink()");return}var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:I(e.label)},o=!1,i=setTimeout(function(){o=!0,t()},250);r.hitCallback=function(){clearTimeout(i),o||t()},Z(r,n)}var H=P,Y={initialize:B,ga:F,set:U,send:Z,pageview:G,modalview:M,timing:V,event:K,exception:W,plugin:$,outboundLink:X,testModeAPI:P};function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach(function(t){var r,o;r=e,o=n[t],t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}m.origTrackLink=m.trackLink,m.trackLink=X;var et=ee(ee({},r),{},{OutboundLink:m})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);