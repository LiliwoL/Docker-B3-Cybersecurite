(function(e){e.fn.extend({autocomplete:function(t,n){var r=typeof t=="string";n=e.extend({},e.Autocompleter.defaults,{url:r?t:null,data:r?null:t,delay:r?e.Autocompleter.defaults.delay:10,max:n&&!n.scroll?10:150,noRecord:"No Records."},n);n.highlight=n.highlight||function(e){return e};n.formatMatch=n.formatMatch||n.formatItem;return this.each(function(){new e.Autocompleter(this,n)})},result:function(e){return this.bind("result",e)},search:function(e){return this.trigger("search",[e])},flushCache:function(){return this.trigger("flushCache")},setOptions:function(e){return this.trigger("setOptions",[e])},unautocomplete:function(){return this.trigger("unautocomplete")}});e.Autocompleter=function(t,n){function d(){var r=h.selected();if(!r)return false;var i=r.result;u=i;if(n.multiple){var o=m(s.val());if(o.length>1){var a=n.multipleSeparator.length;var f=e(t).selection().start;var l,c=0;e.each(o,function(e,t){c+=t.length;if(f<=c){l=e;return false}c+=a});o[l]=i;i=o.join(n.multipleSeparator)}i+=n.multipleSeparator}s.val(i);w();s.trigger("result",[r.data,r.value]);return true}function v(e,t){if(l==r.DEL){h.hide();return}var i=s.val();if(!t&&i==u)return;u=i;i=g(i);if(i.length>=n.minChars){s.addClass(n.loadingClass);if(!n.matchCase)i=i.toLowerCase();S(i,E,w)}else{T();h.hide()}}function m(t){if(!t)return[""];if(!n.multiple)return[e.trim(t)];return e.map(t.split(n.multipleSeparator),function(n){return e.trim(t).length?e.trim(n):null})}function g(r){if(!n.multiple)return r;var i=m(r);if(i.length==1)return i[0];var s=e(t).selection().start;if(s==r.length){i=m(r)}else{i=m(r.replace(r.substring(s),""))}return i[i.length-1]}function y(i,o){if(n.autoFill&&g(s.val()).toLowerCase()==i.toLowerCase()&&l!=r.BACKSPACE){s.val(s.val()+o.substring(g(u).length));e(t).selection(u.length,u.length+o.length)}}function b(){clearTimeout(o);o=setTimeout(w,200)}function w(){var e=h.visible();h.hide();clearTimeout(o);T();if(n.mustMatch){s.search(function(e){if(!e){if(n.multiple){var t=m(s.val()).slice(0,-1);s.val(t.join(n.multipleSeparator)+(t.length?n.multipleSeparator:""))}else{s.val("");s.trigger("result",null)}}})}}function E(e,t){if(t&&t.length&&f){T();h.display(t,e);y(e,t[0].value);h.show()}else{w()}}function S(r,s,o){if(!n.matchCase)r=r.toLowerCase();var u=a.load(r);if(u){if(u.length){s(r,u)}else{var f=n.parse&&n.parse(n.noRecord)||x(n.noRecord);s(r,f)}}else if(typeof n.url=="string"&&n.url.length>0){var l={timestamp:+(new Date)};e.each(n.extraParams,function(e,t){l[e]=typeof t=="function"?t():t});e.ajax({mode:"abort",port:"autocomplete"+t.name,dataType:n.dataType,url:n.url,data:e.extend({q:g(r),limit:n.max},l),success:function(e){var t=n.parse&&n.parse(e)||x(e);a.add(r,t);s(r,t)}})}else{h.emptyList();if(i!=null){i()}else{o(r)}}}function x(t){var r=[];var i=t.split("\n");for(var s=0;s<i.length;s++){var o=e.trim(i[s]);if(o){o=o.split("|");r[r.length]={data:o,value:o[0],result:n.formatResult&&n.formatResult(o,o[0])||o[0]}}}return r}function T(){s.removeClass(n.loadingClass)}var r={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var i=null;if(n.failure!=null&&typeof n.failure=="function"){i=n.failure}var s=e(t).attr("autocomplete","off").addClass(n.inputClass);var o;var u="";var a=e.Autocompleter.Cache(n);var f=0;var l;var c={mouseDownOnSelect:false};var h=e.Autocompleter.Select(n,t,d,c);var p;navigator.userAgent.indexOf("Opera")!=-1&&e(t.form).bind("submit.autocomplete",function(){if(p){p=false;return false}});s.bind((navigator.userAgent.indexOf("Opera")!=-1&&!"KeyboardEvent"in window?"keypress":"keydown")+".autocomplete",function(t){f=1;l=t.keyCode;switch(t.keyCode){case r.UP:if(h.visible()){t.preventDefault();h.prev()}else{v(0,true)}break;case r.DOWN:if(h.visible()){t.preventDefault();h.next()}else{v(0,true)}break;case r.PAGEUP:if(h.visible()){t.preventDefault();h.pageUp()}else{v(0,true)}break;case r.PAGEDOWN:if(h.visible()){t.preventDefault();h.pageDown()}else{v(0,true)}break;case n.multiple&&e.trim(n.multipleSeparator)==","&&r.COMMA:case r.TAB:case r.RETURN:if(d()){t.preventDefault();p=true;return false}break;case r.ESC:h.hide();break;default:clearTimeout(o);o=setTimeout(v,n.delay);break}}).focus(function(){f++}).blur(function(){f=0;if(!c.mouseDownOnSelect){b()}}).click(function(){if(n.clickFire){if(!h.visible()){v(0,true)}}else{if(f++>1&&!h.visible()){v(0,true)}}}).bind("search",function(){function n(e,n){var r;if(n&&n.length){for(var i=0;i<n.length;i++){if(n[i].result.toLowerCase()==e.toLowerCase()){r=n[i];break}}}if(typeof t=="function")t(r);else s.trigger("result",r&&[r.data,r.value])}var t=arguments.length>1?arguments[1]:null;e.each(m(s.val()),function(e,t){S(t,n,n)})}).bind("flushCache",function(){a.flush()}).bind("setOptions",function(){e.extend(true,n,arguments[1]);if("data"in arguments[1])a.populate()}).bind("unautocomplete",function(){h.unbind();s.unbind();e(t.form).unbind(".autocomplete")});};e.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:100,max:1e3,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(e){return e[0]},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:" ",inputFocus:true,clickFire:false,highlight:function(e,t){return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")},scroll:true,scrollHeight:180,scrollJumpPosition:true};e.Autocompleter.Cache=function(t){function i(e,n){if(!t.matchCase)e=e.toLowerCase();var r=e.indexOf(n);if(t.matchContains=="word"){r=e.toLowerCase().search("\\b"+n.toLowerCase())}if(r==-1)return false;return r==0||t.matchContains}function s(e,i){if(r>t.cacheLength){u()}if(!n[e]){r++}n[e]=i}function o(){if(!t.data)return false;var n={},r=0;if(!t.url)t.cacheLength=1;n[""]=[];for(var i=0,o=t.data.length;i<o;i++){var u=t.data[i];u=typeof u=="string"?[u]:u;var a=t.formatMatch(u,i+1,t.data.length);if(typeof a==="undefined"||a===false)continue;var f=a.charAt(0).toLowerCase();if(!n[f])n[f]=[];var l={value:a,data:u,result:t.formatResult&&t.formatResult(u)||a};n[f].push(l);if(r++<t.max){n[""].push(l)}}e.each(n,function(e,n){t.cacheLength++;s(e,n)})}function u(){n={};r=0}var n={};var r=0;setTimeout(o,25);return{flush:u,add:s,populate:o,load:function(s){if(!t.cacheLength||!r)return null;if(!t.url&&t.matchContains){var o=[];for(var u in n){if(u.length>0){var a=n[u];e.each(a,function(e,t){if(i(t.value,s)){o.push(t)}})}}return o}else if(n[s]){return n[s]}else if(t.matchSubset){for(var f=s.length-1;f>=t.minChars;f--){var a=n[s.substr(0,f)];if(a){var o=[];e.each(a,function(e,t){if(i(t.value,s)){o[o.length]=t}});return o}}}return null}}};e.Autocompleter.Select=function(t,n,r,i){function p(){if(!l)return;c=e("<div/>").hide().addClass(t.resultsClass).css("position","absolute").appendTo(document.body).hover(function(t){if(e(this).is(":visible")){n.focus()}i.mouseDownOnSelect=false});h=e("<ul/>").appendTo(c).mouseover(function(t){if(d(t).nodeName&&d(t).nodeName.toUpperCase()=="LI"){u=e("li",h).removeClass(s.ACTIVE).index(d(t));e(d(t)).addClass(s.ACTIVE)}}).click(function(i){e(d(i)).addClass(s.ACTIVE);r();if(t.inputFocus)n.focus();return false}).mousedown(function(){i.mouseDownOnSelect=true}).mouseup(function(){i.mouseDownOnSelect=false});if(t.width>0)c.css("width",t.width);l=false}function d(e){var t=e.target;while(t&&t.tagName!="LI")t=t.parentNode;if(!t)return[];return t}function v(e){o.slice(u,u+1).removeClass(s.ACTIVE);m(e);var n=o.slice(u,u+1).addClass(s.ACTIVE);if(t.scroll){var r=0;o.slice(0,u).each(function(){r+=this.offsetHeight});if(r+n[0].offsetHeight-h.scrollTop()>h[0].clientHeight){h.scrollTop(r+n[0].offsetHeight-h.innerHeight())}else if(r<h.scrollTop()){h.scrollTop(r)}}}function m(e){if(t.scrollJumpPosition||!t.scrollJumpPosition&&!(e<0&&u==0||e>0&&u==o.size()-1)){u+=e;if(u<0){u=o.size()-1}else if(u>=o.size()){u=0}}}function g(e){return t.max&&t.max<e?t.max:e}function y(){h.empty();var n=g(a.length);for(var r=0;r<n;r++){if(!a[r])continue;var i=t.formatItem(a[r].data,r+1,n,a[r].value,f);if(i===false)continue;var l=e("<li/>").html(t.highlight(i,f)).addClass(r%2==0?"ac_even":"ac_odd").appendTo(h)[0];e.data(l,"ac_data",a[r])}o=h.find("li");if(t.selectFirst){o.slice(0,1).addClass(s.ACTIVE);u=0}if(e.fn.bgiframe)h.bgiframe()}var s={ACTIVE:"ac_over"};var o,u=-1,a,f="",l=true,c,h;return{display:function(e,t){p();a=e;f=t;y()},next:function(){v(1)},prev:function(){v(-1)},pageUp:function(){if(u!=0&&u-8<0){v(-u)}else{v(-8)}},pageDown:function(){if(u!=o.size()-1&&u+8>o.size()){v(o.size()-1-u)}else{v(8)}},hide:function(){c&&c.hide();o&&o.removeClass(s.ACTIVE);u=-1},visible:function(){return c&&c.is(":visible")},current:function(){return this.visible()&&(o.filter("."+s.ACTIVE)[0]||t.selectFirst&&o[0])},show:function(){var r=e(n).offset();c.css({width:typeof t.width=="string"||t.width>0?t.width:e(n).innerWidth(),top:r.top+n.offsetHeight,left:r.left}).show();if(t.scroll){h.scrollTop(0);h.css({maxHeight:t.scrollHeight,overflow:"auto"});if(navigator.userAgent.indexOf("MSIE")!=-1&&typeof document.body.style.maxHeight==="undefined"){var i=0;o.each(function(){i+=this.offsetHeight});var s=i>t.scrollHeight;h.css("height",s?t.scrollHeight:i);if(!s){o.width(h.width()-parseInt(o.css("padding-left"))-parseInt(o.css("padding-right")))}}}},selected:function(){var t=o&&o.filter("."+s.ACTIVE).removeClass(s.ACTIVE);return t&&t.length&&e.data(t[0],"ac_data")},emptyList:function(){h&&h.empty()},unbind:function(){c&&c.remove()}}};e.fn.selection=function(e,t){if(e!==undefined){return this.each(function(){if(this.createTextRange){var n=this.createTextRange();if(t===undefined||e==t){n.move("character",e);n.select()}else{n.collapse(true);n.moveStart("character",e);n.moveEnd("character",t);n.select()}}else if(this.setSelectionRange){this.setSelectionRange(e,t)}else if(this.selectionStart){this.selectionStart=e;this.selectionEnd=t}})}var n=this[0];if(n.createTextRange){var r=document.selection.createRange(),i=n.value,s="<->",o=r.text.length;r.text=s;var u=n.value.indexOf(s);n.value=i;this.selection(u,u+o);return{start:u,end:u+o}}else if(n.selectionStart!==undefined){return{start:n.selectionStart,end:n.selectionEnd}}}})(jQuery)