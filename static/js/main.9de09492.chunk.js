(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(2),c=a.n(i),r=a(3),s=a(4),l=a(7),m=a(5),u=a(8),d=a(6);a(15);var p=function(e){return o.a.createElement("div",{className:"card",key:e.id,id:e.id,alt:e.name,onClick:function(){return e.chooseFriend(e.id)}},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{src:e.image})),o.a.createElement("div",{className:"content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Name:")," ",e.name))))};var g=function(e){var t=e.friends.sort(function(){return.5-Math.random()}).slice(0,8);return o.a.createElement(o.a.Fragment,null,t.map(function(t){return o.a.createElement(p,{chooseFriend:e.chooseFriend,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location})}),";")};a(16);var h=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)};a(17);var v=function(e){return o.a.createElement("header",{className:"title"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("h1",null,"Clicky Game"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("h2",null,"Score: ",o.a.createElement("span",null,e.score))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("h2",null,"Top Score: ",o.a.createElement("span",null,e.topScore)))),o.a.createElement("div",{className:"row instructions"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("p",null,"Instructions: Click on the images below.  Be careful not to choose the same image twice.")))))},k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={chosen:[],friends:d,score:0,topScore:0},a.chooseFriend=function(e){var t=a.state.chosen;if(t.includes(e))return alert("Already chosen"),a.state.score>a.state.topScore&&(alert("New high score!!"),a.setState({topScore:a.state.score})),void a.setState({score:0,chosen:[]});t.push(e),a.setState({chosen:t,score:a.state.score+1}),console.log(a.state.chosen)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h,null,o.a.createElement(v,{score:this.state.score,topScore:this.state.topScore}),o.a.createElement(g,{friends:this.state.friends,chooseFriend:this.chooseFriend,chosen:this.state.chosen}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.9de09492.chunk.js.map