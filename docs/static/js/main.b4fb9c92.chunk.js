(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/rmlogo.75509f2e.png"},18:function(e,a,t){e.exports=t(29)},23:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),m=t(6),s=(t(23),t(17)),i=t(1),o=function(e){return c.a.createElement("div",{className:"card"},"Filter")},u=function(e){return c.a.createElement("article",{className:"card"},c.a.createElement("img",{src:e.imgUrl,className:"card__img",alt:e.name}),c.a.createElement("h3",{className:"card__title"},e.name),c.a.createElement("p",{className:"card__description"},"Specie: ",e.specie),c.a.createElement(m.b,{to:"/details/".concat(e.name),className:"card__btn"},"See more"))},d=function(e){var a=e.characters.map((function(e){return console.log(e),c.a.createElement(u,{key:e.id,name:e.name,imgUrl:e.image,specie:e.species})}));return c.a.createElement("section",{className:"cards"},a)},E=function(e){return c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal__dialog"},c.a.createElement("div",{className:"modal__content"},c.a.createElement("header",{className:"modal__header"},c.a.createElement("h2",{className:"modal__title"},"Character: ",e.name),c.a.createElement(m.b,{to:"/"},c.a.createElement("span",{className:"modal__close icon fas fa-times"}))),c.a.createElement("section",null,c.a.createElement("img",{className:"card__img",src:e.imageUrl,alt:e.name}),c.a.createElement("ul",{className:"ml-1 mt-1"},c.a.createElement("li",null,"Specie: ",e.specie),c.a.createElement("li",null,"Origin: ",e.origin),c.a.createElement("li",null,"Episodes: ",e.episode.length),c.a.createElement("li",null,"Status : ",e.status))))))},p=function(){return console.log("Pidiendo datos..."),fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results}))},g=t(16),h=t.n(g),f=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){p().then((function(e){r(e)}))}),[]);return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("div",{className:"header__logo-container"},c.a.createElement("img",{src:h.a,className:"header__logo",alt:"Rick and Morty logo"}))),c.a.createElement("main",{className:"App"},c.a.createElement("h1",{className:"title--big"},"Rick and Morty"),c.a.createElement(o,null),c.a.createElement(d,{characters:t}),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/details/:characterName",render:function(e){var a=e.match.params.characterName,n=t.find((function(e){return e.name===a}));return console.log(n),n?c.a.createElement(E,{key:n.id,imageUrl:n.image,name:n.name,specie:n.species,origin:n.origin.name,episode:n.episode,status:n.status}):c.a.createElement("p",null,"Character not found")}}))))};l.a.render(c.a.createElement(m.a,null,c.a.createElement(f,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b4fb9c92.chunk.js.map