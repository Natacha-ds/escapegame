(this.webpackJsonpescapegame=this.webpackJsonpescapegame||[]).push([[0],{18:function(e,t,a){e.exports={next:"NextButton_next__3w3k9"}},20:function(e,t,a){e.exports=a.p+"static/media/pastillev3.c9a1efc9.png"},21:function(e,t,a){e.exports=a.p+"static/media/lettrev2.3c2b5e71.png"},22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},3:function(e,t,a){e.exports={globalColorsAndLetters:"style_globalColorsAndLetters__1xlfs",mainimage:"style_mainimage__3Cf5g",letterToChoose:"style_letterToChoose__2mwdx",oneletter:"style_oneletter__m4i5o",images:"style_images__OpHU6",center:"style_center__2lD4s",wrongLetter:"style_wrongLetter__6_xTQ",explanations:"style_explanations__2EL43"}},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),s=(a(27),a(8)),o=a(1),m=a(10),i=a(4),u=a.n(i),E=a(18),p=a.n(E);function _(e){var t=e.text,a=e.handleClick;return l.a.createElement("button",{className:p.a.next,onClick:a},t)}function d(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(m.a)(c,2),i=s[0],E=s[1],p=Object(o.f)();function d(){p.push("/colorsandletters")}return l.a.createElement("div",{className:u.a.globalSecretCode},l.a.createElement("h1",null,"LE CODE SECRET "),l.a.createElement("div",{className:u.a.gameBlock},l.a.createElement("p",{className:u.a.explanations},"Trouve le code secret pour passer \xe0 la prochaine \xe9nigme..."),l.a.createElement("p",null,"4U D3P4r",l.a.createElement("span",{className:u.a.secretLetter},"7")," C357 8451QU3 r1",l.a.createElement("span",{className:u.a.secretLetter},"3"),"N D3",l.a.createElement("span",{className:u.a.secretLetter},"N"),"0UV34U N1 D3 C0MP11QU 3 M415 r4P1D3M3N",l.a.createElement("span",{className:u.a.secretLetter},"7")," C4 V",l.a.createElement("span",{className:u.a.secretLetter},"4")," 53 6473r 50 1",l.a.createElement("span",{className:u.a.secretLetter},"7")," P47",l.a.createElement("span",{className:u.a.secretLetter},"1"),"3N7 P",l.a.createElement("span",{className:u.a.secretLetter},"0"),"Ur 646",l.a.createElement("span",{className:u.a.secretLetter},"N"),"3r"),l.a.createElement("input",{onChange:function(e){r(e.target.value.toLowerCase())},className:u.a.userInput}),l.a.createElement("button",{onClick:function(){E("tentation"===a?"true":""===a?"empty":"false")},className:u.a.validationButton},"Tenter ma chance"),l.a.createElement("div",{className:u.a.nextButton},"true"===i?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(_,{text:">> Prochaine Enigme",handleClick:d})):"false"===i?l.a.createElement("p",{className:u.a.wrongAnswer}," ...Essaye encore... "):void 0)))}function g(){var e=Object(o.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Home"),l.a.createElement("button",{onClick:function(){e.push("/secretcode")}}," Start "))}var N=a(3),C=a.n(N),v=a(20),b=a.n(v),h=a(21),L=a.n(h);function f(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),s=Object(m.a)(c,2),o=s[0],i=s[1];function u(e){r(e.currentTarget.innerHTML),a==e.currentTarget.innerHTML?i(o+1):i(1)}return l.a.createElement("div",{className:C.a.globalColorsAndLetters},l.a.createElement("h1",null," LA COULEUR DES LETTRES "),l.a.createElement("div",{className:C.a.images},l.a.createElement("img",{src:b.a,className:C.a.mainimage}),l.a.createElement("img",{src:L.a,className:C.a.mainimage})),l.a.createElement("div",{className:C.a.center},l.a.createElement("p",{className:C.a.explanations},"La bonne lettre, pour combien de fois... ?"),l.a.createElement("div",{className:C.a.letterToChoose},l.a.createElement("p",{className:C.a.oneletter,onClick:u},"a"),l.a.createElement("p",{className:C.a.oneletter,onClick:u},"z"),l.a.createElement("p",{className:C.a.oneletter,onClick:u},"r"),l.a.createElement("p",{className:C.a.oneletter,onClick:u},"t"),l.a.createElement("p",{className:C.a.oneletter,onClick:u},"n"),l.a.createElement("p",{className:C.a.oneletter,onClick:u},"u"),l.a.createElement("p",{className:C.a.oneletter,onClick:u},"s"),l.a.createElement("p",{className:C.a.oneletter,onClick:u},"p"),l.a.createElement("p",{className:C.a.oneletter,onClick:u},"e"))),l.a.createElement("div",null," ","e"==a&&"5"==o?l.a.createElement(_,{text:">> Prochaine Enigme"}):"e"==a&&o<"5"?void 0:"e"==!a||""==!a?l.a.createElement("p",{className:C.a.wrongLetter}," ","Es-tu s\xfbr d'avoir choisi la bonne lettre ?"):void 0))}function x(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"menu"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/secretcode"},"Secret Code")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/colorsandletters"},"Colors and Letters")))),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/secretcode"},l.a.createElement(d,null)),l.a.createElement(o.a,{path:"/colorsandletters"},l.a.createElement(f,null)),l.a.createElement(o.a,{path:"/"},l.a.createElement(g,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports={gameBlock:"style_gameBlock__3PETJ",globalSecretCode:"style_globalSecretCode__2SL7G",secretLetter:"style_secretLetter__3C-27",userInput:"style_userInput__58WXL",validationButton:"style_validationButton__1jMKz",wrongAnswer:"style_wrongAnswer__2pFTI",explanations:"style_explanations__5j83F"}}},[[22,1,2]]]);
//# sourceMappingURL=main.63b35755.chunk.js.map