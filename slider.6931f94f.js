parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wzuc":[function(require,module,exports) {
$(".hero-container").each(function(){var e=$(this),a=e.find(".panel").length;e.find(".panel:eq(0)").addClass("_active"),e.find(".nav-dot:eq(0)").addClass("active");var n=e.find(".panel._active"),i=e.find(".next-button"),d=e.find(".prev-button");$(".nav-dot").on("click",function(){!function(a){$(".panel._active").removeClass("_active"),e.find(".panel").eq(a-1).addClass("_active"),n=e.find(".panel").eq(a-1).addClass("_active"),e.trigger("slide.changed")}($(this).data("slide"))}),e.on("slide.changed",function(){console.log("slide changed !"),$(".nav-dot").removeClass("active");var e=$('.nav-dot[data-slide="'+$(".panel._active").data("slide")+'"]');console.log(),e.addClass("active")}),i.on("click",function(i){!function(){var i=(n=e.find(".panel._active")).next(".panel");n.removeClass("_active"),i.addClass("_active");var d=e.find(".panel._active").index(".panel");console.log(d),d>=a||d<=-1?($(".panel._active").removeClass("_active"),e.find(".panel:eq(0)").addClass("_active"),n=e.find(".panel:eq(0)"),e.trigger("slide.changed")):e.trigger("slide.changed")}()}),d.on("click",function(i){!function(){var i=(n=e.find(".panel._active")).prev(".panel");n.removeClass("_active"),i.addClass("_active");var d=e.find(".panel._active").index();console.log(d),null==i||-1==i.length||d<=-1?($(".panel._active").removeClass("_active"),e.find(".panel").eq(a-1).addClass("_active"),e.trigger("slide.changed")):e.trigger("slide.changed")}()})});
},{}]},{},["wzuc"], null)
//# sourceMappingURL=/Barbershop/slider.6931f94f.js.map