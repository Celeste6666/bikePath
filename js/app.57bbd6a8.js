(function(t){function e(e){for(var c,r,o=e[0],s=e[1],u=e[2],l=0,p=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);b&&b(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(c=!1)}c&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var c={},a={app:0},i=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c9189":"c81458cc","chunk-2d0cf391":"020c75ea","chunk-2d0da8f3":"c8c3e7e8","chunk-2d2248b6":"d84473c1","chunk-2d22523a":"4b710d99"}[t]+".js"}function o(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,c){n=a[t]=[e,c]}));e.push(n[2]=c);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=r(t);var u=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+c+": "+i+")",u.name="ChunkLoadError",u.type=c,u.request=i,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},o.m=t,o.c=c,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/bikePath/",o.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var b=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},1081:function(t,e,n){},1182:function(t,e,n){"use strict";n("5fed")},2916:function(t,e,n){},3235:function(t,e,n){"use strict";n("7361")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b107");var c=n("7b17"),a=n("ecee"),i=n("c074"),r=n("ad3d"),o=(n("6cc5"),n("7a23"));function s(t,e){var n=Object(o["H"])("router-view");return Object(o["z"])(),Object(o["d"])(n)}n("9ccc");var u=n("d959"),l=n.n(u);const b={},p=l()(b,[["render",s]]);var f=p,d=n("6c02"),O=n("61f5"),j=n.n(O),g=function(t){return Object(o["C"])("data-v-a8616696"),t=t(),Object(o["A"])(),t},v={class:"home"},S=g((function(){return Object(o["g"])("img",{alt:"bike-logo",src:j.a,class:"w-25 img-fluid"},null,-1)})),m=g((function(){return Object(o["g"])("h3",{class:"fw-bold ms-2 pe-4"},"BikeFun",-1)})),h=[S,m];function w(t,e,n,c,a,i){var r=Object(o["H"])("Start");return Object(o["z"])(),Object(o["f"])("div",v,[0===c.step?(Object(o["z"])(),Object(o["f"])("div",{key:0,class:"home-step1 h-100 d-flex justify-content-center align-items-center",onClick:e[0]||(e[0]=function(){return c.changeStep&&c.changeStep.apply(c,arguments)})},h)):Object(o["e"])("",!0),1===c.step?(Object(o["z"])(),Object(o["d"])(r,{key:1})):Object(o["e"])("",!0)])}var k=["src"],y={class:"my-5"},I={class:"text-secondary fw-bolder"},x={class:"text-secondary m-4"};function P(t,e,n,c,a,i){var r=Object(o["H"])("font-awesome-icon");return Object(o["z"])(),Object(o["f"])("div",{class:"home-step2 h-100 d-flex justify-content-center align-items-center flex-column",onClick:e[0]||(e[0]=function(){return c.changeInfo&&c.changeInfo.apply(c,arguments)})},[Object(o["g"])("img",{src:c.info.picture,class:"w-75 img-fluid",alt:""},null,8,k),Object(o["g"])("p",y,[Object(o["g"])("span",null,[(Object(o["z"])(),Object(o["f"])(o["a"],null,Object(o["G"])(3,(function(t){return Object(o["i"])(r,{key:t,class:Object(o["q"])(["mx-3",c.infoStep==t-1?"text-process fs-4":"text-warning fs-5"]),icon:["fas","circle"]},null,8,["class"])})),64))])]),Object(o["g"])("h3",I,Object(o["J"])(c.info.title),1),Object(o["g"])("p",x,Object(o["J"])(c.info.content),1)])}var D={name:"Start",setup:function(){var t=Object(d["c"])(),e=Object(o["E"])(0),n=[{step:0,title:"方便租車",content:"YouBike自行車甲租乙還，一卡在手就能輕鬆租借，也可達到環保與節能。",picture:"./assets/start01.png"},{step:1,title:"規劃路線",content:"找到你的位置和附近自行車站點，也可查詢周邊景點和餐廳，方便你規劃路徑。",picture:"./assets/start02.png"},{step:2,title:"自行車道推薦",content:"全台各個縣市都設置自行車路線，尋找自己喜愛的路線，來趟自行車之旅。",picture:"./assets/start03.png"}],c=Object(o["E"])(n[e.value]),a=function(){e.value+=1,e.value>2?t.push("bikeAvailable"):c.value=n[e.value]};return{info:c,infoStep:e,changeInfo:a}}};n("f541");const R=l()(D,[["render",P],["__scopeId","data-v-71d5e530"]]);var T=R,M={name:"Home",components:{Start:T},setup:function(){var t=Object(o["E"])(0),e=function(){t.value+=1};return{step:t,changeStep:e}}};n("3235");const z=l()(M,[["render",w],["__scopeId","data-v-a8616696"]]);var A=z,_=n("bee7"),C=n.n(_),L={class:"nav-stationInfo-content"},U={class:"text-wrap text-center lh-sm small p-2"},N={class:"fs-3 text-secondary d-flex lh-sm px-3"},H={class:"me-auto"},B={class:"small text-center"},E={class:"small text-center"},J={key:2,class:"nav-position d-flex flex-column"},$=Object(o["g"])("img",{src:C.a,alt:"",srcset:""},null,-1),q=[$],F={class:"border-0 nav-icon nav-icon-active text-warning my-2"};function G(t,e,n,c,a,i){var r=Object(o["H"])("Search"),s=Object(o["H"])("Map"),u=Object(o["H"])("Footer"),l=Object(o["H"])("font-awesome-icon"),b=Object(o["H"])("DetailSwiper");return Object(o["z"])(),Object(o["f"])("div",null,[Object(o["i"])(r,{center:c.center,onChangeDetailSwiperShow:c.changeDetailSwiperShow},null,8,["center","onChangeDetailSwiperShow"]),Object(o["i"])(s,{center:c.center,class:"position-absolute top-0 left-0 w-100 h-100",onChangeStationInfoToTrue:c.changeStationInfoToTrue},null,8,["center","onChangeStationInfoToTrue"]),Object(o["i"])(u),c.stationInfoIsShow&&c.stationInfo.StationName.Zh_tw?(Object(o["z"])(),Object(o["f"])("div",{key:0,onClick:e[0]||(e[0]=function(){return c.changeStationInfoToFalse&&c.changeStationInfoToFalse.apply(c,arguments)}),class:Object(o["q"])(["nav-stationInfo rounded-circle bg-white border border-2 border-warning ","d-flex align-items-center justify-content-center"])},[Object(o["g"])("div",L,[Object(o["g"])("p",U,Object(o["J"])(c.stationInfo.StationName.Zh_tw),1),Object(o["g"])("div",N,[Object(o["g"])("div",H,[Object(o["i"])(l,{icon:["fas","bicycle"]}),Object(o["g"])("div",B,Object(o["J"])(c.stationInfo.AvailableRentBikes),1)]),Object(o["g"])("div",null,[Object(o["i"])(l,{icon:["fas","expand"]}),Object(o["g"])("div",E,Object(o["J"])(c.stationInfo.AvailableReturnBikes),1)])])])])):Object(o["e"])("",!0),c.detailSwiperisShow?(Object(o["z"])(),Object(o["d"])(b,{key:1,class:"nav-detail",onChangeDetailSwiperShow:c.changeDetailSwiperShow},null,8,["onChangeDetailSwiperShow"])):Object(o["e"])("",!0),c.stationInfoIsShow||c.detailSwiperisShow?Object(o["e"])("",!0):(Object(o["z"])(),Object(o["f"])("div",J,[Object(o["g"])("button",{class:"border-0 nav-icon nav-icon-active my-2",onClick:e[1]||(e[1]=Object(o["O"])((function(){return c.getUserLocation&&c.getUserLocation.apply(c,arguments)}),["prevent"]))},q),Object(o["g"])("button",F,[Object(o["i"])(l,{icon:["fas","location-arrow"],style:{"font-size":"32px"}})])]))])}n("99af");var Z=n("5502"),K=(n("ac1f"),n("00b4"),{class:"search position-absolute container-fluid"}),V={class:"rounded-pill border border-2 border-dark p-1 bg-white fs-5 d-flex align-items-center"},W={class:"my-4 fs-5"},Y=Object(o["h"])(" 周邊景點 "),Q=Object(o["h"])(" 周邊餐廳 ");function X(t,e,n,c,a,i){var r=Object(o["H"])("font-awesome-icon");return Object(o["z"])(),Object(o["f"])("div",K,[Object(o["g"])("div",V,[Object(o["g"])("input",{type:"text",class:"form-control border-0 bg-transparent fs-5",placeholder:"找地方",onClick:e[0]||(e[0]=Object(o["O"])((function(){return t.test&&t.test.apply(t,arguments)}),["prevent","stop"]))}),Object(o["i"])(r,{icon:["fas","search"],class:"me-3 fs-4"})]),Object(o["g"])("div",W,[Object(o["g"])("button",{class:"border border-2 border-dark rounded-pill px-3 py-2 bg-white me-3","data-url":"ScenicSpot",onClick:e[1]||(e[1]=function(){return c.getTourism&&c.getTourism.apply(c,arguments)})},[Object(o["i"])(r,{icon:["fas","camera"],class:"me-1","data-url":"ScenicSpot"}),Y]),Object(o["g"])("button",{class:"border border-2 border-dark rounded-pill px-3 py-2 bg-white","data-url":"Restaurant",onClick:e[2]||(e[2]=function(){return c.getTourism&&c.getTourism.apply(c,arguments)})},[Object(o["i"])(r,{icon:["fas","utensils"],class:"me-1","data-url":"Restaurant"}),Q])])])}var tt=n("1da1"),et=(n("96cf"),{name:"Search",props:{center:Array},setup:function(t,e){var n=e.emit,c=Object(Z["b"])(),a=Object(o["K"])(t),i=a.center,r=function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.target.dataset.url,"ScenicSpot"!==a){t.next=6;break}return t.next=4,c.dispatch("getScenicSpots",i.value);case 4:t.next=9;break;case 6:if("Restaurant"!==a){t.next=9;break}return t.next=9,c.dispatch("getRestaurants",i.value);case 9:n("changeDetailSwiperShow",!0);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{getTourism:r}}});const nt=l()(et,[["render",X]]);var ct=nt;function at(t,e,n,c,a,i){var r=Object(o["H"])("l-tile-layer"),s=Object(o["H"])("l-control-zoom"),u=Object(o["H"])("l-icon"),l=Object(o["H"])("l-marker"),b=Object(o["H"])("l-map");return Object(o["z"])(),Object(o["d"])(b,{ref:"myMap",zoom:a.zoom,"onUpdate:zoom":e[0]||(e[0]=function(t){return a.zoom=t}),center:n.center,tap:!1,options:{zoomControl:!1}},{default:Object(o["N"])((function(){return[Object(o["i"])(r,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),Object(o["i"])(s,{position:"bottomleft"}),Object(o["i"])(l,{"lat-lng":n.center},{default:Object(o["N"])((function(){return[Object(o["i"])(u,Object(o["r"])(Object(o["l"])(c.locationMarkerIcon)),null,16)]})),_:1},8,["lat-lng"]),(Object(o["z"])(!0),Object(o["f"])(o["a"],null,Object(o["G"])(c.bikeMarkers,(function(t){return Object(o["z"])(),Object(o["d"])(l,{"lat-lng":[t.StationPosition.PositionLat,t.StationPosition.PositionLon],key:t.StationUID,options:{id:t.StationUID,StationPosition:t.StationPosition},onClick:c.getStationInfo},{default:Object(o["N"])((function(){return[Object(o["i"])(u,Object(o["o"])(t.icon,{"icon-size":[35,43]}),null,16)]})),_:2},1032,["lat-lng","options","onClick"])})),128)),c.scenicSpotMarkers[0].ScenicSpotID?(Object(o["z"])(!0),Object(o["f"])(o["a"],{key:0},Object(o["G"])(c.scenicSpotMarkers,(function(t){return Object(o["z"])(),Object(o["d"])(l,{"lat-lng":[t.Position.PositionLat,t.Position.PositionLon],key:t.ScenicSpotID,options:{id:t.ScenicSpotID,scenicSpotsPosition:t.Position}},{default:Object(o["N"])((function(){return[Object(o["i"])(u,Object(o["o"])(t.icon,{"icon-size":[50,50]}),null,16)]})),_:2},1032,["lat-lng","options"])})),128)):Object(o["e"])("",!0),c.restaurantMarkers[0].RestaurantID?(Object(o["z"])(!0),Object(o["f"])(o["a"],{key:1},Object(o["G"])(c.restaurantMarkers,(function(t){return Object(o["z"])(),Object(o["d"])(l,{"lat-lng":[t.Position.PositionLat,t.Position.PositionLon],key:t.RestaurantID,options:{id:t.RestaurantID,restaurantPosition:t.Position}},{default:Object(o["N"])((function(){return[Object(o["i"])(u,Object(o["o"])(t.icon,{"icon-size":[50,50]}),null,16)]})),_:2},1032,["lat-lng","options"])})),128)):Object(o["e"])("",!0)]})),_:1},8,["zoom","center"])}var it=n("5afd"),rt={components:{LMap:it["c"],LControlZoom:it["a"],LTileLayer:it["e"],LMarker:it["d"],LIcon:it["b"]},props:{center:Array},setup:function(t,e){var n=e.emit,c=Object(Z["b"])(),a=Object(o["E"])(null),i=Object(o["K"])(t),r=i.center,s=Object(o["D"])({"icon-url":"./assets/locationMarker.png","shadow-url":"./assets/locationMarkerShadow.png","icon-size":[20,20],"shadow-size":[40,40]}),u=Object(o["b"])((function(){return c.state.bikeStations})),l=function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e){var a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.target.options.id){t.next=5;break}return a=e.target.options,i=a.id,r=a.StationPosition,t.next=4,c.dispatch("getBikeAvailable",{id:i,StationPosition:r});case 4:n("changeStationInfoToTrue",!0);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(o["M"])(r,(function(t,e){t!==e&&a.value.leafletObject.flyTo(r.value)}));var b=Object(o["b"])((function(){return c.state.scenicSpots})),p=Object(o["b"])((function(){return c.state.restaurants}));return{myMap:a,locationMarkerIcon:s,bikeMarkers:u,getStationInfo:l,scenicSpotMarkers:b,restaurantMarkers:p}},data:function(){return{zoom:15}}};const ot=l()(rt,[["render",at]]);var st=ot,ut={class:"nav-footer w-100 d-flex justify-content-evenly align-items-center bg-danger py-3"};function lt(t,e){var n=Object(o["H"])("font-awesome-icon"),c=Object(o["H"])("router-link");return Object(o["z"])(),Object(o["f"])("div",ut,[Object(o["i"])(c,{to:"/bikeAvailable",class:Object(o["q"])(["border-0 nav-icon d-flex align-items-center justify-content-center","nav-icon-active text-danger"])},{default:Object(o["N"])((function(){return[Object(o["i"])(n,{icon:["fas","map-marked-alt"],class:"fs-3"})]})),_:1}),Object(o["i"])(c,{to:"/bikeAvailable",class:Object(o["q"])(["border-0 nav-icon d-flex align-items-center justify-content-center","text-white"])},{default:Object(o["N"])((function(){return[Object(o["i"])(n,{icon:["fas","bicycle"],class:"fs-2"})]})),_:1}),Object(o["i"])(c,{to:"/bikePath",class:Object(o["q"])(["border-0 nav-icon d-flex align-items-center justify-content-center","text-white"])},{default:Object(o["N"])((function(){return[Object(o["i"])(n,{icon:["fas","user"],class:"fs-3"})]})),_:1})])}n("ae20");const bt={},pt=l()(bt,[["render",lt],["__scopeId","data-v-2be4c7e9"]]);var ft=pt,dt={class:"container-fluid px-0"},Ot={class:"card bg-white shadow-lg rounded-3 h-100"},jt={class:"card-body lh-sm p-3"},gt=["src","alt"],vt={class:"small"},St={class:"text-muted"},mt={class:"card bg-white shadow-lg rounded-3 h-100"},ht={class:"card-body lh-sm p-3"},wt=["src","alt"],kt={class:"small"},yt={class:"text-muted"};function It(t,e,n,c,a,i){var r=Object(o["H"])("swiper-slide"),s=Object(o["H"])("swiper");return Object(o["z"])(),Object(o["f"])("div",dt,[Object(o["g"])("button",{type:"button",class:"btn-close btn-sm bg-white p-2 rounded-circle m-3","aria-label":"Close",onClick:e[0]||(e[0]=function(){return c.closeDetailSwiper&&c.closeDetailSwiper.apply(c,arguments)})}),Object(o["i"])(s,{modules:c.modules,centeredSlides:!0,slidesPerView:1.1,spaceBetween:20,freeMode:!0,onSwiper:c.onSwiper,onSlideChange:c.onSlideChange},{default:Object(o["N"])((function(){return[c.restaurants[0].RestaurantID?(Object(o["z"])(!0),Object(o["f"])(o["a"],{key:0},Object(o["G"])(c.restaurants,(function(t){return Object(o["z"])(),Object(o["d"])(r,{key:t.RestaurantID,"data-type":"restaurant","data-id":t.RestaurantID},{default:Object(o["N"])((function(){return[Object(o["g"])("div",Ot,[Object(o["g"])("div",jt,[Object(o["g"])("img",{src:t.Picture.PictureUrl1,class:"rounded-3 mb-2 w-100",alt:t.Picture.PictureDescription1,style:{height:"100px","object-fit":"cover"}},null,8,gt),Object(o["g"])("div",vt,Object(o["J"])(t.RestaurantName),1),Object(o["g"])("small",St,Object(o["J"])(t.Address),1)])])]})),_:2},1032,["data-id"])})),128)):Object(o["e"])("",!0),c.scenicSpots[0].ScenicSpotID?(Object(o["z"])(!0),Object(o["f"])(o["a"],{key:1},Object(o["G"])(c.scenicSpots,(function(t){return Object(o["z"])(),Object(o["d"])(r,{key:t.ScenicSpotID,"data-type":"scenicSpot","data-id":t.ScenicSpotID},{default:Object(o["N"])((function(){return[Object(o["g"])("div",mt,[Object(o["g"])("div",ht,[Object(o["g"])("img",{src:t.Picture.PictureUrl1,class:"rounded-3 mb-2 w-100",alt:t.Picture.PictureDescription1,style:{height:"100px","object-fit":"cover"}},null,8,wt),Object(o["g"])("div",kt,Object(o["J"])(t.ScenicSpotName),1),Object(o["g"])("small",yt,Object(o["J"])(t.Address||"未提供"),1)])])]})),_:2},1032,["data-id"])})),128)):Object(o["e"])("",!0)]})),_:1},8,["modules","slidesPerView","onSwiper","onSlideChange"])])}var xt=n("8349"),Pt=(n("e25d"),n("41fa"),n("d9ac"),n("4da1")),Dt={name:"DetailSwiper",components:{Swiper:xt["a"],SwiperSlide:xt["b"]},setup:function(t,e){var n=e.emit,c=Object(Z["b"])(),a=Object(o["b"])((function(){return c.state.restaurants})),i=Object(o["b"])((function(){return c.state.scenicSpots})),r=function(){c.commit("getRestaurants",[{RestaurantID:"",RestaurantName:"",Address:"",OpenTime:"",WebsiteUrl:"",Position:{PositionLon:"",PositionLat:""},Picture:{PictureUrl1:"",PictureDescription1:""},icon:{"icon-url":""}}]),c.commit("getScenicSpots",[{ScenicSpotID:"",ScenicSpotName:"",Position:{PositionLon:"",PositionLat:""},Picture:{PictureUrl1:"",PictureDescription1:""},icon:{"icon-url":""}}]),n("changeDetailSwiperShow",!1)},s=function(){var t=document.querySelector(".swiper-slide-active"),e=document.querySelector(".swiper-slide-prev"),n=document.querySelector(".swiper-slide-next"),a={id:"",type:""},i=a.id,r=a.type,o={id:"",type:""},s=o.id,u=o.type;if(e){var l=e.dataset,b=l.id,p=l.type;i=b,r=p}if(n){var f=n.dataset,d=f.id,O=f.type;s=d,u=O}var j=t.dataset,g=j.id,v=j.type;c.commit("changeTourismMarker",{prevID:i,prevType:r,nextID:s,nextType:u,newID:g,newType:v})},u=function(){""===a.value[0].RestaurantID&&void 0===a.value[0].RestaurantID&&""===i.value[0].ScenicSpotID&&void 0===i.value[0].ScenicSpotID?n("changeDetailSwiperShow",!1):Object(o["p"])((function(){s()}))},l=function(){Object(o["p"])((function(){s()}))};return{restaurants:a,scenicSpots:i,onSwiper:u,onSlideChange:l,closeDetailSwiper:r,modules:[Pt["a"]]}}};n("5934");const Rt=l()(Dt,[["render",It],["__scopeId","data-v-c5d9533a"]]);var Tt=Rt,Mt={components:{Map:st,Search:ct,Footer:ft,DetailSwiper:Tt},setup:function(){var t=Object(Z["b"])(),e=Object(o["E"])([25.047675,121.517055]),n=Object(o["E"])(!1),c=function(){var n={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};function c(n){var c=n.coords,a=c.latitude,i=c.longitude;e.value=[a,i],t.dispatch("getBikeStations",e.value)}function a(t){console.warn("ERROR(".concat(t.code,"): ").concat(t.message))}navigator.geolocation.getCurrentPosition(c,a,n)},a=function(){n.value=!1},i=function(t){n.value=t},r=Object(o["b"])((function(){return t.getters.stationInfo})),s=Object(o["E"])(!1),u=function(t){s.value=t};return{center:e,stationInfoIsShow:n,changeStationInfoToFalse:a,changeStationInfoToTrue:i,getUserLocation:c,stationInfo:r,detailSwiperisShow:s,changeDetailSwiperShow:u}}};n("1182");const zt=l()(Mt,[["render",G]]);var At=zt,_t=[{path:"/",name:"Home",component:A},{path:"/bikeAvailable",name:"BikeAvailable",component:At}],Ct=Object(d["a"])({history:Object(d["b"])(),routes:_t}),Lt=Ct,Ut=n("2909"),Nt=n("5530"),Ht=(n("7db0"),n("d3b7"),n("4de4"),n("159b"),n("1abe")),Bt=n.n(Ht),Et=n("1132"),Jt=n.n(Et),$t=Object(Z["a"])({state:{api:{bikeAvailable_url:"https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/NearBy?",bikeStation_url:"https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?",ScenicSpot_url:"https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?",Restaurant_url:"https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?",id:"0c672be3679e4f1e8441118a50a5d9f3",key:"ovFaA4lsqC5GyOKZHEEo_IS1Vt4"},bikeStations:[{AuthorityID:"",BikesCapacity:0,ServiceType:0,SrcUpdateTime:"",StationAddress:{},StationID:"0",StationPosition:{PositionLat:"",PositionLon:""},StationUID:"0",UpdateTime:"",icon:{"icon-url":"./assets/bikeMarker.png"}}],stationAvailable:{StationUID:"",StationName:{Zh_tw:""}},scenicSpots:[{ScenicSpotID:"",ScenicSpotName:"",Position:{PositionLon:"",PositionLat:""},Picture:{PictureUrl1:"",PictureDescription1:""},icon:{"icon-url":"./assets/scenicSpotMarker.png"}}],restaurants:[{RestaurantID:"",RestaurantName:"",Address:"",OpenTime:"",WebsiteUrl:"",Position:{PositionLon:"",PositionLat:""},Picture:{PictureUrl1:"",PictureDescription1:""},icon:{"icon-url":""}}],markerDetail:{id:"",icon:{"icon-url":""}}},getters:{headers:function(t){var e=t.api,n=e.key,c=e.id,a=(new Date).toUTCString(),i=Bt()("x-date: ".concat(a),n),r=Jt.a.stringify(i);return{methods:"GET",headers:{Authorization:'hmac username="'.concat(c,'", algorithm="hmac-sha1", headers="x-date", signature="').concat(r,'"'),"x-date":a}}},stationInfo:function(t){var e=t.bikeStations,n=t.stationAvailable,c=e.find((function(t){return t.StationUID===n.StationUID}));return void 0!==c&&(c.icon["icon-url"]="./assets/bikeMarkerActive.png"),Object(Nt["a"])(Object(Nt["a"])({},c),t.stationAvailable)}},mutations:{getBikeStations:function(t,e){t.bikeStations=e},getBikeAvailable:function(t,e){var n=t.stationAvailable.StationUID;if(t.stationAvailable.StationUID!==e.StationUID){var c=t.bikeStations.find((function(t){return t.StationUID===n}));void 0!==c&&(c.icon["icon-url"]="./assets/bikeMarker.png")}t.stationAvailable=e},getScenicSpots:function(t,e){t.scenicSpots=e},getRestaurants:function(t,e){t.restaurants=e},changeTourismMarker:function(t,e){var n=e.prevID,c=e.prevType,a=e.nextID,i=e.nextType,r=e.newID,o=e.newType,s=t.restaurants,u=t.scenicSpots;if(n&&n!==r||a&&a!==r){if("restaurant"===c||"restaurant"===i){var l=s.filter((function(t){return t.RestaurantID===n||t.RestaurantID===a}));l.forEach((function(t){var e=t;e.icon={"icon-url":"./assets/restaurantMarker.png"}}))}if("scenicSpot"===c||"scenicSpot"===i){var b=u.filter((function(t){return t.ScenicSpotID===n||t.ScenicSpotID===a}));b.forEach((function(t){var e=t;e.icon={"icon-url":"./assets/scenicSpotMarker.png"}}))}}if(t.markerDetail={id:"",icon:{"icon-url":""}},r)if("restaurant"===o){var p=s.find((function(t){return t.RestaurantID===r}));p.icon={"icon-url":"./assets/restaurantMarkerActive.png"},t.markerDetail=p}else if("scenicSpot"===o){var f=u.find((function(t){return t.ScenicSpotID===r}));f.icon={"icon-url":"./assets/scenicSpotMarkerActive.png"},t.markerDetail=f}}},actions:{getBikeStations:function(t,e){return Object(tt["a"])(regeneratorRuntime.mark((function n(){var c,a,i,r,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.state,a=t.getters,i=t.commit,r="".concat(c.api.bikeStation_url,"$top=30&$spatialFilter=nearby(").concat(e[0],",").concat(e[1],", 1000)&$format=JSON"),n.next=4,fetch(r,a.headers);case 4:return o=n.sent,n.next=7,o.json();case 7:s=n.sent,s.forEach((function(t){var e=t;e.icon={"icon-url":"./assets/bikeMarker.png"}})),i("getBikeStations",s);case 10:case"end":return n.stop()}}),n)})))()},getBikeAvailable:function(t,e){return Object(tt["a"])(regeneratorRuntime.mark((function n(){var c,a,i,r,o,s,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.state,a=t.getters,i=t.commit,r=e.id,o=e.StationPosition,s="".concat(c.api.bikeAvailable_url,"$filter=StationUID eq '").concat(r,"'&$spatialFilter=nearby(").concat(o.PositionLat,",").concat(o.PositionLon,", 100)&$format=JSON"),n.next=5,fetch(s,a.headers);case 5:return u=n.sent,n.next=8,u.json();case 8:l=n.sent,i.apply(void 0,["getBikeAvailable"].concat(Object(Ut["a"])(l)));case 10:case"end":return n.stop()}}),n)})))()},getScenicSpots:function(t,e){return Object(tt["a"])(regeneratorRuntime.mark((function n(){var c,a,i,r,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.state,a=t.getters,i=t.commit,r="".concat(c.api.ScenicSpot_url,"&select=ScenicSpotID,ScenicSpotName,Position,Picture&$top=30&$filter=Picture/PictureUrl1 ne null&$spatialFilter=nearby(").concat(e[0],",").concat(e[1],", 1000)&$format=JSON"),n.next=4,fetch(r,a.headers);case 4:return o=n.sent,n.next=7,o.json();case 7:s=n.sent,s.forEach((function(t){var e=t;e.icon={"icon-url":"./assets/scenicSpotMarker.png"}})),o.ok&&0!==s.length&&i("getScenicSpots",s);case 10:case"end":return n.stop()}}),n)})))()},getRestaurants:function(t,e){return Object(tt["a"])(regeneratorRuntime.mark((function n(){var c,a,i,r,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.state,a=t.getters,i=t.commit,r="".concat(c.api.Restaurant_url,"&select=RestaurantID,RestaurantName,Address,OpenTime,WebsiteUrl,Position,Picture&$top=30&$filter=Picture/PictureUrl1 ne null&$spatialFilter=nearby(").concat(e[0],",").concat(e[1],", 1000)&$format=JSON"),n.next=4,fetch(r,a.headers);case 4:return o=n.sent,n.next=7,o.json();case 7:s=n.sent,s.forEach((function(t){var e=t;e.icon={"icon-url":"./assets/restaurantMarker.png"}})),o.ok&&0!==s.length&&i("getRestaurants",s);case 10:case"end":return n.stop()}}),n)})))()}}});a["c"].add(i["c"],i["g"],i["f"],i["a"],i["h"],i["e"],i["b"],i["i"],i["d"]),Object(o["c"])(f).use(c).use($t).use(Lt).component("font-awesome-icon",r["a"]).mount("#app")},5934:function(t,e,n){"use strict";n("6127")},"5fed":function(t,e,n){},6127:function(t,e,n){},"61f5":function(t,e,n){t.exports=n.p+"img/logo.b3bdff03.svg"},7361:function(t,e,n){},"99ab":function(t,e,n){},"9ccc":function(t,e,n){"use strict";n("2916")},ae20:function(t,e,n){"use strict";n("99ab")},b107:function(t,e,n){},bee7:function(t,e,n){t.exports=n.p+"img/position.d3b3cb21.svg"},f541:function(t,e,n){"use strict";n("1081")}});
//# sourceMappingURL=app.57bbd6a8.js.map