(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(9),a(1));a(11);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("form",{className:"d-flex"},l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",for:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){console.log("On Change"),o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8",placeholder:"Enter text here"})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Converted to UpperCase","success")}},"Convert to UpperCase"),l.a.createElement("button",{className:"btn btn-warning mx-2",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Converted to LowerCase","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-danger mx-2",onClick:function(){var t=r.replace(r,"");o(t),e.showAlert("Text Area is Cleared","success")}},"Clear"),l.a.createElement("button",{className:"btn btn-success mx-2",onClick:function(){document.querySelector("#myBox").select(),document.execCommand("copy"),e.showAlert("Copied to Clipboard","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=r.replace(/\s{2,}/g," ").trim();o(t),e.showAlert("Extra Spaces removed","success")}},"Remove Spaces")),l.a.createElement("div",{className:"container my-3 ",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,"Your text summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes reading time"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in the textbox above to preview it here")))}s.defaultProps={title:"Set title here",abouttext:"About text here"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e;return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),":",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",abouttext:"About",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",h("Dark mode has been enabled","success"),document.title="TextUtil-DarkMode",setInterval(function(){document.title="TextUtil-Home"},2e3)):(r("light"),document.body.style.backgroundColor="white",h("Light mode has been enabled","success"),document.title="TextUtil-LightMode",setInterval(function(){document.title="TextUtil-Home"},2e3))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:h,heading:"Enter the text to analyze below",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,14)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),d()},4:function(e,t,a){e.exports=a(13)},9:function(e,t,a){}},[[4,3,2]]]);
//# sourceMappingURL=main.8db27a0c.chunk.js.map