!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Soyie=t():e.Soyie=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return"function"==typeof t?d["default"].set(e,t):!function(){var n=function(e){function n(e){i(this,n),l(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,e);var r=t.events;if(r){for(var o in r){var s=o.replace(/^(\w)/,function(e){return e.toUpperCase()});this["on"+s]=r[o]}delete t.events}g.extend(this,t,!0)}return s(n,e),n}(p.COMPONENT);d["default"].set(e,n)}(),this}function u(e){y["default"](e)}function c(e){var t="string"!=typeof e?e:document.querySelector("app[so-name='"+e+"']"),n=t.innerHTML,r=g.createHtmlNode(n);t.parentNode.replaceChild(r.node,t);var o=new O["default"];return v.DOMSCAN(r,o),o}function f(e,t,n){"function"==typeof t&&(n=t,t={});var r=this.app(e).init(t);return"function"==typeof n&&n.call(r.scope,r.scope),r.scope}Object.defineProperty(t,"__esModule",{value:!0});var l=function(e,t,n){for(var r=!0;r;){var o=e,i=t,s=n;a=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,i);if(void 0!==a){if("value"in a)return a.value;var u=a.get;return void 0===u?void 0:u.call(s)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=s,r=!0}};t.component=a,t.ready=u,t.app=c,t.bootstrap=f;var p=n(7),h=n(5),d=o(h),v=n(6),m=n(18),y=o(m),b=n(1),g=r(b),_=n(17),O=o(_);t["default"]={component:a,ready:u,app:c,bootstrap:f}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return document.createDocumentFragment()}function i(e){var t=o(),n=document.createComment("Fragment Start"),r=document.createComment("Fragment End"),i=document.createElement("div"),s=[];i.innerHTML=e,t.appendChild(n),y.call(i.childNodes,0).forEach(function(e){t.appendChild(e),s.push(e)}),t.appendChild(r);var a=Object.create({});return Object.defineProperties(a,{childNodes:{value:s},node:{value:t},start:{value:n},end:{value:r}}),i=null,a}function s(e,t){var n=b.call(e).split(" ")[1].replace(/\]$/,"");return t?n==t:n}function a(e,t,n){for(var r in t)e[r]?n&&(e[r]=t[r]):e[r]=t[r];return e}function u(e){var n=[];return e.split(t.REGEXP_TAGSPILTOR).forEach(function(e,t){var r=t%2===1;if(r)n.push("("+e+")");else{var o=e.replace(/\'/g,"\\'");o.length&&n.push("'"+o+"'")}}),n.join(" + ")}function c(e){return e.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()})}function f(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function l(e,t,n){try{var r=new Function("value","scope","scope."+n+"=value;");r(e,t)}catch(o){console.warn("scope."+n+"=value;",o)}}function p(e,t,n){try{n||(n={});var r=[];for(var o in n)r.push("var "+o+" = $options['"+o+"'];");var i=new Function("$this","$options",r.join("\n")+"\nwith($this){return "+e+"}"),s=i(t,n);return void 0===s||null===s?this.configs.defaultText:s}catch(a){return this.configs.defaultText}}function h(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function d(e,t,n){var r=e[t];Object.defineProperty(e,t,{get:function(){return r},set:function(e){var t=r;r=e,"function"==typeof n&&n(r,t)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.createNodeCopier=o,t.createHtmlNode=i,t.type=s,t.extend=a,t.formatExpression=u,t.enHump=c,t.deHump=f,t.set=l,t.get=p,t.defineValue=h,t.defineIndex=d;var v=n(19),m=r(v),y=Array.prototype.slice;t.slice=y;var b=Object.prototype.toString;t.toString=b;var g=/\{\{([^\}\}]+)\}\}/g;t.REGEXP_TAGSPILTOR=g;var _=/(["|'])(.+?)*?\1/g;t.REGEXP_STRING=_;var O=/([^\s]+?)\sin\s(.+)/i;t.REGEXP_COMMAND_IN=O;var w=/(\B\$parent\.)+?[a-zA-z_\.\$0-9]+/g;t.REGEXP_PARENT=w;var j=["head","script","meta","link","title","script","hr","br"];t.exceptTagNames=j;var E={},k=E.configs;t.configs=k,t.configs=k={defaultText:"",commandPrefix:"so"};var x=m["default"];t.hashCode=x},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),a=r(s),u=function(){function e(t,n){o(this,e),this.node=t,this.value=null,this.namespace="node",this.parent=null,this.expression=n,this.scope=null}return i(e,[{key:"set",value:function(e){this.value!==e&&(this.node.nodeValue=e,this.value=e)}},{key:"get",value:function(){return this.value}},{key:"render",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this.scope:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];this.scope=e,this.options=t,this.set(a.get(this.expression,e,t))}},{key:"update",value:function(e,t){this.render(e,t)}}]),e}();t["default"]=u,e.exports=t["default"]},function(e,t,n){(function(e,r){function o(e,t){this._id=e,this._clearFn=t}var i=n(20).nextTick,s=Function.prototype.apply,a=Array.prototype.slice,u={},c=0;t.setTimeout=function(){return new o(s.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new o(s.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=c++,r=arguments.length<2?!1:a.call(arguments,1);return u[n]=!0,i(function(){u[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete u[e]}}).call(t,n(3).setImmediate,n(3).clearImmediate)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){return s.create(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=o;var i=n(14),s=r(i)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=new Map,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){g.slice.call(e.childNodes,0).forEach(function(e){if(1!==e.nodeType||"app"!==e.tagName.toLowerCase())switch(e.nodeType){case 1:u(e,t);break;case 3:s(e,t)}})}function s(e,t){t.objects=t.objects.concat(h["default"](e,t))}function a(e,t){t.objects=t.objects.concat(v["default"](e,t))}function u(e,t){var n=e.tagName.toLowerCase();if(l["default"].has(n)){var r=g.slice.call(e.attributes,0),o=l["default"].get(n),s=new o(e);c(s.keys,r),s.parentroot=t,s.init(),t.components.push(s)}else if(e.hasAttribute("so-repeat")){var u=new y.Block(e);u.DOMSCAN=i,u.parentroot=t,u.init(),t.components.push(u)}else a(e,t),i(e,t)}function c(e,t){t.forEach(function(t){e[t.nodeName]=g.formatExpression(t.nodeValue)})}Object.defineProperty(t,"__esModule",{value:!0}),t.DOMSCAN=i;var f=n(5),l=o(f),p=n(16),h=o(p),d=n(15),v=o(d),m=n(11),y=r(m),b=n(1),g=r(b)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),a=r(s),u=n(6),c=n(4),f=r(c),l=function(){function e(t){o(this,e),this.namespace="component",this.props=[],this.interfaces={},this.outerfaces={},this.virtualDom=t,this.element=null,this.template=t.innerHTML,this.objects=[],this.components=[],this.DOMSCAN=u.DOMSCAN,this.keys={},this.parent=null,this.scope=null,this.upnotify=!1,this.rendered=!1,this.watcher=f,this.onBeforeInit=null,this.onInjectProps=null,this.onScanDoms=null,this.onInit=null,this.onCheckPropsError=null,this.onBeforeRender=null,this.onRndered=null,this.onBeforeUpdate=null,this.onUpdated=null}return i(e,[{key:"init",value:function(){"function"==typeof this.onBeforeInit&&this.onBeforeInit(),this.injectProps(),"function"==typeof this.onInjectProps&&this.onInjectProps(),this.element=a.createHtmlNode(this.template),this.virtualDom.parentNode.replaceChild(this.element.node,this.virtualDom),u.DOMSCAN(this.element,this),"function"==typeof this.onScanDoms&&this.onScanDoms(),"function"==typeof this.onInit&&this.onInit()}},{key:"injectProps",value:function(){var e=this;if(a.type(this.props,"Array"))this.props.forEach(function(t){var n=a.deHump(t);e.interfaces[t]={type:[],"default":"",required:!1,validator:null,dehump:n},e.outerfaces[n]=e.interfaces[t],e.virtualDom.hasAttribute(n)&&(e.keys[t]=a.formatExpression(e.virtualDom.getAttribute(n)))});else for(var t in this.props){var n=a.deHump(t);this.interfaces[t]={type:this.props[t].type||[],"default":this.props[t]["default"]||"",required:this.props[t].required||!1,validator:this.props[t].validator||null,dehump:n},a.type(this.interfaces[t].type,"Array")||(this.interfaces[t].type=[this.interfaces[t].type]),this.outerfaces[n]=this.interfaces[t],this.virtualDom.hasAttribute(n)&&(this.keys[t]=a.formatExpression(this.virtualDom.getAttribute(n)))}}},{key:"state",value:function(e,t){var n=!0;if(this.interfaces[e]){var r=this.interfaces[e];if(r.required&&(void 0===e||null===e))return"function"==typeof this.onCheckPropsError&&this.onCheckPropsError(new Error("key ["+e+"] required, but it is undefined.")),n;if(-1==r.type.indexOf(a.type(t))&&r.type.length>0)return"function"==typeof this.onCheckPropsError&&this.onCheckPropsError(new Error("key ["+e+"] need a value of ["+r.type+"]")),n;if(r.validator){var o=a.type(t);if("RegExp"==o){if(!r.validator.test(t))return"function"==typeof this.onCheckPropsError&&this.onCheckPropsError(new Error("check props of "+e+" faild.")),n}else if("Function"==o){if(0==r.validator(t))return"function"==typeof this.onCheckPropsError&&this.onCheckPropsError(new Error("check props of "+e+" faild.")),n}else if(t!=r.validator)return"function"==typeof this.onCheckPropsError&&this.onCheckPropsError(new Error("check props of "+e+" faild.")),n}}}},{key:"render",value:function(e){var t=this;e&&(this.parent=e);var n={},r=!0;for(var o in this.interfaces){var i=a.get(this.keys[o],this.parent);(void 0===i||null===i||""===i)&&(i=this.interfaces[o]["default"]);var s=this.state(o,i);s?r=!1:n[o]=i}r&&("function"==typeof this.onBeforeRender&&this.onBeforeRender(),"function"==typeof this.handle&&this.handle(n),this.rendered=!0,this.scope=n,f.create(this.scope,this),this.components.forEach(function(e){return e.render(t.scope)}),this.objects.forEach(function(e){return e.render(t.scope)}),"function"==typeof this.onRndered&&this.onRndered())}},{key:"update",value:function(e){var t=this;e&&(this.parent=e);var n=this.rendered?this.scope:{},r=!0;for(var o in this.interfaces){var i=a.get(this.keys[o],this.parent);(void 0===i||null===i||""===i)&&(i=this.interfaces[o]["default"]);var s=this.state(o,i);s?r=!1:n[o]!=i&&(n[o]=i)}r&&("function"==typeof this.onBeforeUpdate&&this.onBeforeUpdate(),this.scope=n,this.rendered||("function"==typeof this.onBeforeRender&&this.onBeforeRender(),"function"==typeof this.handle&&this.handle(n),f.create(this.scope,this),this.components.forEach(function(e){return e.render(t.scope)}),this.rendered=!0,"function"==typeof this.onRndered&&this.onRndered()),f.create(this.scope,this),this.objects.forEach(function(e){return e.update(t.scope)}),"function"==typeof this.onUpdated&&this.onUpdated())}}]),e}();t.COMPONENT=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=o(i),a=n(2),u=r(a),c="text,password,tel,color,date,datetime,datetime-local,month,week,time,email,number,range,search,url".split(","),f={};f.Textarea=f.Text=function(e){e.stop=!1,e.set=function(e){this.stop?this.stop=!1:this.node.value=e},e.node.addEventListener("input",function(){e.stop=!0,s.set(this.value,e.scope,e.expression)},!1)},f.Select=function(e){e.stop=!1,e.set=function(e){if(this.stop)this.stop=!1;else{var t,n=!1;for(t=0;t<this.node.options.length;t++)if(this.node.options[t].value==e+""){this.node.options[t].selected=!0,n=!0;break}if(!n)for(t=0;t<this.node.options.length;t++)this.node.options[t].selected=!1}},e.node.addEventListener("change",function(){e.stop=!0;var t=this.value;t||(t=this.options[this.selectedIndex].value),s.set(t,e.scope,e.expression)},!1)},f.Checkbox=function(e){e.stop=!1,e.set=function(e){this.stop?this.stop=!1:this.node.value==e+""?this.node.checked=!0:this.node.checked=!1};var t;e.node.hasAttribute("so-unchecked")&&(t=e.node.getAttribute("so-unchecked"),e.node.removeAttribute("so-unchecked")),e.node.addEventListener("change",function(){e.stop=!0;var n=this.value;this.checked||(n=t),s.set(n,e.scope,e.expression)},!1)},f.Radio=function(e){e.stop=!1,e.set=function(e){this.stop?this.stop=!1:this.node.value==e+""?this.node.checked=!0:this.node.checked=!1},e.node.addEventListener("change",function(){e.stop=!0;var t=this.value;this.checked||(t=void 0),s.set(t,e.scope,e.expression)},!1)},t["default"]=function(e,t,n){var r=e.nodeValue,o=new u["default"](t,r),i=(t.type||"NULL").toLowerCase(),s=t.tagName.toUpperCase(),a=null;switch(t.removeAttribute("so-binding"),o.parent=n,s){case"INPUT":a=c.indexOf(i)>-1?"Text":"radio"===i?"Radio":"checkbox"===i?"Checkbox":"file"===i?"File":"Common";break;case"SELECT":a="Select";break;case"TEXTAREA":a="Textarea";break;default:a="Common"}return f[a]&&f[a](o),o},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=o(i),a=n(2),u=r(a);t["default"]=function(e,t,n){var r=s.formatExpression(e.nodeValue),o=new u["default"](t,r);return o.parent=n,o.set=function(e){this.value!==e&&(this.node.innerHTML=e,this.value=e)},o.node.removeAttribute("so-html"),o},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=(o(i),n(2)),a=r(s);t["default"]=function(e,t,n){var r=e.nodeValue,o=new a["default"](t,r);return o.parent=n,o.value={},o.set=function(e,t){return o.value[e]=t},o.render=function(e){var t=this,n=this.expression.split("|");n.forEach(function(n){var r=n.indexOf(":"),o=n.substring(0,r),i=n.substring(r+1).trim();"function"!=typeof t.value[o]&&t.node.addEventListener(o,function(){for(var n=arguments.length,r=Array(n),i=0;n>i;i++)r[i]=arguments[i];var s=t.value[o],a=s.call(t.node,e);"function"==typeof a&&a.apply(t.node,r)},!1),t.set(o,new Function("scope",";with(scope){\nreturn "+i+"\n};"))})},t.removeAttribute("so-on"),o},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),a=r(s),u=n(4),c=r(u),f=function(){function e(t){o(this,e),this.element=t,this.namespace="repeat-block",this.fragment=a.createNodeCopier(),this.expression=a.formatExpression(t.getAttribute("so-repeat")),this.element.removeAttribute("so-repeat"),this.template=this.element.cloneNode(!0),this.parent=null,this.scope=null,this.objects=[],this.components=[],this.installed=!1}return i(e,[{key:"init",value:function(){this.commentStartNode=document.createComment("Repeat Start"),this.commentEndNode=document.createComment("Repeat End"),this.fragment.appendChild(this.commentStartNode),this.fragment.appendChild(this.commentEndNode),this.element.parentNode.replaceChild(this.fragment,this.element)}},{key:"render",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?this.parent:arguments[0];this.parent=t;var n=a.get(this.expression,this.parent);n&&a.type(n,"Array")&&n.length>0&&((this.scope=n).forEach(function(t,n){e.add(t,n)}),this.installed=!0,c.create(this.scope,this))}},{key:"update",value:function(){var e=this,t=a.get(this.expression,this.parent);t&&a.type(t,"Array")&&t.length>0&&(this.installed?(this.scope=t).forEach(function(t,n){e.components[n]?e.components[n].update(t,n,e.parent):e.add(t,n)}):((this.scope=t).forEach(function(t,n){e.add(t,n)}),c.create(this.scope,this),this.installed=!0))}},{key:"add",value:function(e,t){var n=this.append();n.render(e,t,this.parent),this.watch(this.scope,t,this.parent),c.create(e,this.parentroot)}},{key:"append",value:function(){var e=new l,t=this.template.cloneNode(!0);return this.commentEndNode.parentNode.insertBefore(t,this.commentEndNode),this.DOMSCAN(t,e),e.element=t,e.root=this,this.components.push(e),e}},{key:"watch",value:function(e,t,n){var r=this,o=e[t];Object.defineProperty(e,t,{get:function(){return o},set:function(e){o=e;var i=r.components[t];i?i.update(o,t,n):r.add(o,t)}}),this.watchObject(e[t],this.components[t])}},{key:"watchObject",value:function(e,t){if(a.type(e,"Object")){c.create(e,t);for(var n in e)this.watchObject(e[n],t)}}}]),e}();t.Block=f;var l=function(){function e(){o(this,e),this.namespace="repeat-single",this.objects=[],this.components=[],this.scope=null}return i(e,[{key:"render",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this.scope:arguments[0],t=this,n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];this.scope=e,this.options={$index:n,$parent:r},this.objects.forEach(function(e){return e.render(t.scope,t.options)}),this.components.forEach(function(e){return e.render(t.scope,t.options)})}},{key:"update",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this.scope:arguments[0],t=this,n=arguments.length<=1||void 0===arguments[1]?-1:arguments[1],r=arguments.length<=2||void 0===arguments[2]?null:arguments[2];this.scope=e,n>-1&&(this.options.$index=n),null!=r&&(this.options.$parent=r),this.objects.forEach(function(e){return e.update(t.scope,t.options)}),this.components.forEach(function(e){e.parent=t.scope,e.update()})}},{key:"remove",value:function(){this.element.parentNode.removeChild(this.element),this.root.components.$remove(this)}}]),e}();t.Single=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=o(i),a=n(2),u=r(a);t["default"]=function(e,t,n){var r=s.formatExpression(e.nodeValue),o=new u["default"](t,r);return o.parent=n,o.set=function(e){this.value!==e&&(this.node.src=e,this.value=e)},o.node.removeAttribute("so-src"),o},e.exports=t["default"]},function(e,t,n){(function(e,t){"use strict";Object.observe||!function(n,r){var o=function(e){var t=e.call(e),n=typeof n;return"object"==typeof r.alert?function(r){return t===e.call(r)||!!r&&typeof r.toString==n&&typeof r.valueOf==n&&/^\s*\bfunction\b/.test(""+r)}:function(n){return t===e.call(n)}}(n.prototype.toString),i=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},s=function(){return!!r.setImmediate}(),a=function(){return s?function(t){return e(t)}:function(e){return setTimeout(e,10)}}(),u=function(){return s?function(e){t(e)}:function(e){clearTimeout(e)}}(),c=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},f=function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t},l=function(e){return"undefined"==typeof e?!1:"get"in e||"set"in e},p=function(e,t,n){if("object"!=typeof e)throw new TypeError("Object.observeObject called on non-object");if(o(t)===!1)throw new TypeError("Object.observeObject: Expecting function");if(Object.isFrozen(t)===!0)throw new TypeError("Object.observeObject: Expecting unfrozen function");if(void 0!==n&&!Array.isArray(n))throw new TypeError("Object.observeObject: Expecting acceptList in the form of an array")},h=function y(){var e=[],y=function(t,n,r){p(t,n,r),r||(r=["add","update","delete","reconfigure","setPrototype","preventExtensions"]),Object.getNotifier(t).addListener(n,r),-1===e.indexOf(t)?e.push(t):Object.getNotifier(t)._checkPropertyListing()};y.prototype.deliverChangeRecords=function(e){Object.getNotifier(e).deliverChangeRecords()},e.lastScanned=0;var t=function(e){return function t(){var n=0,r=e.length,o=new Date,i=!1;for(n=e.lastScanned;r>n&&!i;n++)m.indexOf(e[n])>-1?(Object.getNotifier(e[n])._checkPropertyListing(),i=new Date-o>100):(e.splice(n,1),n--,r--);e.lastScanned=r>n?n:0,a(t)}}(e);return a(t),y}(),d=function(e){var t=[],n=[],r=[],o=!1,i=[],s=[],p=this;Object.defineProperty(p,"_watching",{enumerable:!0,get:function(e){return function(){return e}}(e)});var h=function(e,t){var n=(typeof e[t],Object.getOwnPropertyDescriptor(e,t));if("getNotifier"===t||l(n)||!n.enumerable)return!1;if(e instanceof Array&&c(t)){var r=i.length;return i[r]=t,s[r]=e[t],!0}return function(t,n){function r(){return s[r.info.idx]}function o(t){f(s[o.info.idx],t)||(Object.getNotifier(e).queueUpdate(e,n,"update",s[o.info.idx]),s[o.info.idx]=t)}i[t]=n,s[t]=e[n],r.info=o.info={idx:t},Object.defineProperty(e,n,{get:r,set:o})}(i.length,t),!0};p._checkPropertyListing=function(e){var t,n,r,o,a,u=p._watching,f=Object.keys(u),l=0,d=f.length,v=i.slice(0),m=!e;for(u instanceof Array&&(a=p._oldLength),l=0;d>l;l++)t=f[l],r=u[t],n=typeof r,-1===(o=i.indexOf(t))?h(u,t)&&m&&p.queueUpdate(u,t,"add",null,u[t]):(u instanceof Array&&!c(t)||s[o]!==r&&(m&&p.queueUpdate(u,t,"update",s[o],r),s[o]=r),v.splice(v.indexOf(t),1));if(u instanceof Array&&u.length!==a&&(m&&p.queueUpdate(u,"length","update",a,u),p._oldLength=u.length),m)for(d=v.length,l=0;d>l;l++){o=i.indexOf(v[l]),p.queueUpdate(u,v[l],"delete",s[o]),i.splice(o,1),s.splice(o,1);for(var l=o;l<i.length;l++)if(i[l]in u){var y=Object.getOwnPropertyDescriptor(u,i[l]).get;if(y){var b=y.info;b.idx=l}}}},p.addListener=function(e,r){var o=t.indexOf(e);-1===o?(t.push(e),n.push(r)):n[o]=r},p.removeListener=function(e){var r=t.indexOf(e);r>-1&&(t.splice(r,1),n.splice(r,1))},p.listeners=function(){return t},p.queueUpdate=function(e,t,n,r){this.queueUpdates([{type:n,object:e,name:t,oldValue:r}])},p.queueUpdates=function(e){var t,n=this,i=0,s=e.length||0;for(i=0;s>i;i++)t=e[i],r.push(t);o&&u(o),o=a(function(){o=!1,n.deliverChangeRecords()})},p.deliverChangeRecords=function(){var e=0,o=t.length;for(e=0;o>e;e++)if(t[e]){var i;if(n[e]){i=[];for(var s=0,a=r.length;a>s;s++)-1!==n[e].indexOf(r[s].type)&&i.push(r[s])}else i=r;i.length&&(t[e]===console.log?console.log(i):t[e](i))}r=[]},p.notify=function(t){if("object"!=typeof t||"string"!=typeof t.type)throw new TypeError("Invalid changeRecord with non-string 'type' property");t.object=e,p.queueUpdates([t])},p._checkPropertyListing(!0)},v=[],m=[];n.getNotifier=function(e){var t=m.indexOf(e),n=t>-1?v[t]:!1;return n||(t=m.length,m[t]=e,n=v[t]=new d(e)),n},n.observe=function(e,t,n){return i(e)?void 0:new h(e,t,n)},n.unobserve=function(e,t){p(e,t);var n=m.indexOf(e),r=n>-1?v[n]:!1;r&&(r.removeListener(t),0===r.listeners().length&&(m.splice(n,1),v.splice(n,1)))}}(Object,window)}).call(t,n(3).setImmediate,n(3).clearImmediate)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var n;return e&&e.hasOwnProperty("__obs__")&&e.__obs__ instanceof d?n=e.__obs__:Object.isFrozen(e)||(n=new d(e)),n&&t&&n.addVm(t),n}function s(e,t,n){for(var r,o=n.length;o--;)r=n[o],c.defineValue(e,r,t[r])}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.create=i;var u=n(1),c=r(u),f=n(13),l=(r(f),Array.prototype),p=Object.create(l);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=l[e];c.defineValue(p,e,function(){for(var n=arguments.length,r=this.length,o=new Array(n),i=new Array(n);n--;){switch(e){case"push":o[n]=r+n;break;case"unshift":o[n]=n}i[n]=arguments[n]}if("splice"===e)for(var s=i[0]>=0?i[0]:r+i[0],a=i[1],u=s;s+a>u;u++)r>u&&o.push(u);var c=t.apply(this,i),f=this.__obs__;if(f){var l,p;switch(e){case"push":l=i;break;case"unshift":l=i;break;case"splice":l=i.slice(2),p=c;break;case"pop":p=[c],o=[r-1];break;case"shift":p=[c],o=[0]}l&&f.observeArray(l,this,o),p&&f.unObserveArray(p,this,o)}return c})});var h=Object.getOwnPropertyNames(p);c.defineValue(l,"$remove",function(e){return this.length?("number"!=typeof e&&(e=this.indexOf(e)),e>-1?this.splice(e,1):void 0):void 0});var d=function(){function e(t){o(this,e),c.defineValue(t,"__obs__",this),this.vms=[],c.type(t,"Array")?(s(t,p,h),this.observeArray(t)):this.observeObject(t)}return a(e,[{key:"addVm",value:function(e){e&&-1===this.vms.indexOf(e)&&this.vms.push(e)}},{key:"removeVm",value:function(e){this.vms.$remove(e)}},{key:"observeObject",value:function(e){var t=this;Object.observe(e,function(e){e.forEach(function(){t.vms.forEach(function(e){e.update()})})})}},{key:"observeArray",value:function(e,t,n){var r=e.__obs__;r||t.__obs__.vms.forEach(function(t,r){e.forEach(function(e){var o=n[r];t.add(e,o);var i=t.parentroot;i&&i.update()})})}},{key:"unObserveArray",value:function(e,t,n){e.forEach(function(e){var r=e.__obs__;r?r.vms.forEach(function(e){e.remove()}):(r=t.__obs__,n.forEach(function(e){r.vms.forEach(function(t){var n=t.components[e];n.remove(),n.root.update()})}))})}}]),e}();t.Observer=d},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),s=o(i),a=n(1),u=r(a),c=n(12),f=o(c),l=n(9),p=o(l),h=n(10),d=o(h),v=n(8),m=o(v),y={"so-src":f["default"],"so-html":p["default"],"so-on":d["default"],"so-binding":m["default"]};t["default"]=function(e,t){var n=[];return u.slice.call(e.attributes,0).forEach(function(r){var o=r.nodeName;if(y[o])n.push(y[o](r,e,t));else{var i=u.formatExpression(r.nodeValue),a=new s["default"](r,i);a.parent=t,n.push(a)}}),n},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),s=o(i),a=n(1),u=r(a);t["default"]=function(e,t){var n=e.textContent,r=u.createNodeCopier(),o=[];return n.split(u.REGEXP_TAGSPILTOR).forEach(function(e,n){var i=n%2===1,a=i?u.configs.defaultText:e,c=document.createTextNode(a),f=e.trim();if(i&&f.length>0){var l=new s["default"](c,f);l.parent=t,o.push(l)}r.appendChild(c)}),e.parentNode.replaceChild(r,e),o},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),a=r(s),u=n(1),c=r(u),f=function(){function e(){o(this,e),this.objects=[],this.components=[],this.scope=null}return i(e,[{key:"init",value:function(e){return this.scope=e||{},this.render(),this.watch(this.scope),this}},{key:"watch",value:function(e){var t=this;if(e){a.create(e,this),this.watchComponents(this.components,e);var n=Object.keys(e);n.forEach(function(n){var r=c.type(e[n]);"Object"===r&&t.watch(e[n])})}}},{key:"watchComponents",value:function(e,t){var n=this;e.forEach(function(e){a.create(t,e),e.components.forEach(function(e){n.watchComponents(e.components,t)})})}},{key:"render",value:function(){var e=this;return this.components.forEach(function(t){a.create(e.scope,t),t.render(e.scope)}),this.objects.forEach(function(t){return t.render(e.scope)}),this}},{key:"update",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?this.scope:arguments[0];return this.scope=t,this.watch(this.scope),this.objects.forEach(function(t){return t.render(e.scope)}),this}}]),e}();t["default"]=f,e.exports=t["default"]},function(e,t,n){/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,r=n.documentElement.doScroll,o="DOMContentLoaded",i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return i||n.addEventListener(o,e=function(){for(n.removeEventListener(o,e),i=1;e=t.shift();)e()}),function(e){i?setTimeout(e,0):t.push(e)}})},function(e,t){e.exports=function(){var e=function(e){var t,e=e.toString(),n=0;for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t)&4294967295;return n},t=function(t){var n=0;for(var o in t)t.hasOwnProperty(o)&&(n+=e(o+r(t[o])));return n},n=function(t){return e(t.toString())},r=function(r){var o={string:e,number:e,"boolean":e,object:t,"function":n},i=typeof r;return null!=r&&o[i]?o[i](r)+e(i):0};return r}()},function(e,t){function n(){c=!1,s.length?u=s.concat(u):f=-1,u.length&&r()}function r(){if(!c){var e=setTimeout(n);c=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,c=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var s,a=e.exports={},u=[],c=!1,f=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new o(e,t)),1!==u.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}])});