/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.5",
   build: "0.9.0.109",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'_4',
            type:'image',
            rect:[157,183,73,160],
            fill:["rgba(0,0,0,0)",im+"4.png"],
            transform:[[-39,-63],[0,0],[0],[1,1]]
         },
         {
            id:'_2',
            type:'image',
            rect:[251,200,73,160],
            fill:["rgba(0,0,0,0)",im+"2.png"],
            transform:[[-45,-80],[0,0],[0],[1,1]]
         },
         {
            id:'_2point',
            type:'image',
            rect:[364,167,29,111],
            fill:["rgba(0,0,0,0)",im+"2point.png"],
            transform:[[-69,-23],[0,0],[0],[1,1]]
         },
         {
            id:'am',
            type:'image',
            rect:[403,200,92,160],
            fill:["rgba(0,0,0,0)",im+"am.png"],
            transform:[[-64,-80],[0,0],[0],[1,1]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__4}": [
            ["transform", "translateY", '-356px'],
            ["transform", "translateX", '-39px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${__2point}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-23px'],
            ["transform", "translateX", '-69px']
         ],
         "${__2}": [
            ["transform", "translateY", '-373px'],
            ["transform", "translateX", '-45px']
         ],
         "${_am}": [
            ["transform", "translateY", '-393px'],
            ["transform", "translateX", '-62.954px'],
            ["transform", "rotateZ", '-56deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4250,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid31", tween: [ "transform", "${__4}", "translateX", '-39px', { fromValue: '-39px'}], position: 1000, duration: 0 },
            { id: "eid35", tween: [ "transform", "${_am}", "translateY", '-170.826px', { fromValue: '-393px'}], position: 1000, duration: 500, easing: "easeInQuad" },
            { id: "eid46", tween: [ "transform", "${_am}", "translateY", '-80px', { fromValue: '-170.826px'}], position: 1500, duration: 750, easing: "easeOutBounce" },
            { id: "eid43", tween: [ "transform", "${_am}", "translateY", '-80px', { fromValue: '-80px'}], position: 2250, duration: 2000, easing: "easeOutBounce" },
            { id: "eid49", tween: [ "style", "${__2point}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid52", tween: [ "style", "${__2point}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 500, easing: "easeOutBounce" },
            { id: "eid34", tween: [ "transform", "${__4}", "translateY", '-63px', { fromValue: '-356px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid36", tween: [ "transform", "${__2}", "translateY", '-80px', { fromValue: '-373px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid44", tween: [ "transform", "${_am}", "rotateZ", '-64deg', { fromValue: '-56deg'}], position: 1000, duration: 500, easing: "easeInQuad" },
            { id: "eid47", tween: [ "transform", "${_am}", "rotateZ", '0deg', { fromValue: '-64deg'}], position: 1500, duration: 750, easing: "easeOutElastic" },
            { id: "eid29", tween: [ "transform", "${__2}", "translateX", '-45px', { fromValue: '-45px'}], position: 1000, duration: 0 },
            { id: "eid39", tween: [ "transform", "${_am}", "translateX", '-87.842px', { fromValue: '-62.954px'}], position: 1000, duration: 500, easing: "easeInQuad" },
            { id: "eid45", tween: [ "transform", "${_am}", "translateX", '-64.952px', { fromValue: '-87.842px'}], position: 1500, duration: 750, easing: "easeOutBounce" },
            { id: "eid42", tween: [ "transform", "${_am}", "translateX", '-64px', { fromValue: '-64.952px'}], position: 2250, duration: 2000, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-19145461");