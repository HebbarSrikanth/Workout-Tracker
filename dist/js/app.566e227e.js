(function(e){function t(t){for(var n,o,l=t[0],s=t[1],u=t[2],b=0,d=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"38e9":function(e,t,r){e.exports=r.p+"img/dumbbell-light.ef471ab1.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"font-Poppins"};function c(e,t,r,c,o,l){var s=Object(n["y"])("Header"),u=Object(n["y"])("router-view");return Object(n["t"])(),Object(n["f"])("div",a,[Object(n["i"])(s),Object(n["i"])(u)])}var o=r("38e9"),l=r.n(o),s={class:"bg-at-light-green text-white"},u={class:"py-5 container gap-4 px-4 flex flex-col items-center sm:flex-row"},i=Object(n["g"])("img",{class:"w-16",src:l.a,alt:"App Pic"},null,-1),b=Object(n["g"])("div",null,"Workout",-1),d={key:0,class:"flex justify-end flex-1 gap-4"},g=Object(n["h"])("Home"),p=Object(n["h"])("Create"),f={key:1,class:"flex justify-end flex-1 gap-4"},j=Object(n["h"])("Login"),O=Object(n["h"])("Register");function x(e,t,r,a,c,o){var l=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["f"])("header",s,[Object(n["g"])("nav",u,[Object(n["i"])(l,{to:"/",class:"flex gap-4 items-center align-center cursor-pointer"},{default:Object(n["G"])((function(){return[i,b]})),_:1}),a.user?(Object(n["t"])(),Object(n["f"])("ul",d,[Object(n["i"])(l,{to:"/"},{default:Object(n["G"])((function(){return[g]})),_:1}),Object(n["i"])(l,{to:"/create"},{default:Object(n["G"])((function(){return[p]})),_:1}),Object(n["g"])("a",{onClick:t[0]||(t[0]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"cursor-pointer"},"Logout")])):(Object(n["t"])(),Object(n["f"])("ul",f,[Object(n["i"])(l,{to:"/login"},{default:Object(n["G"])((function(){return[j]})),_:1}),Object(n["i"])(l,{to:"/register"},{default:Object(n["G"])((function(){return[O]})),_:1})]))])])}var h=r("1da1"),v=(r("96cf"),r("940b")),m="https://trjsdcpoaocfhbtuyuxk.supabase.co",w="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjAyMzk2MiwiZXhwIjoxOTUxNTk5OTYyfQ.Z3QnB0ezPnKxpkuUz4r6uH92aeu7dx7aKIzeXRlQFRw",y=Object(v["a"])(m,w),k=Object(n["v"])({user:null}),U={setUser:function(e){k.user=(null===e||void 0===e?void 0:e.user)||null}},V={state:k,methods:U},E=r("6c02"),T={setup:function(){var e=Object(E["d"])(),t=Object(n["b"])((function(){return V.state.user})),r=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.auth.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{logout:r,user:t}}},A=r("d959"),R=r.n(A);const H=R()(T,[["render",x]]);var D=H,C={components:{Header:D},setup:function(){return y.auth.user(),y.auth.onAuthStateChange((function(e,t){V.methods.setUser(t)})),{}}};r("e9ef");const I=R()(C,[["render",c]]);var M=I,P=(r("b0c0"),r("45fc"),{key:0,class:"px-4 py-10 container"}),S={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},W={class:"bg-light-grey rounded px-4 py-6 gap-y-4 flex flex-col items-center align-center cursor-pointer duration-500 transform hover:-translate-1 hover:scale-110"},_=["src"],q={class:"text-2xl text-at-light-green"},N={key:1,class:"max-w-screen-md rounded mx-auto bg-red-200 p-2 m-2"};function L(e,t,a,c,o,l){var s=Object(n["y"])("router-link");return c.loadedData?(Object(n["t"])(),Object(n["f"])("div",P,[Object(n["g"])("div",S,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(c.workouts,(function(e){return Object(n["t"])(),Object(n["d"])(s,{class:"flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer",key:e.id,to:/view/+e.id},{default:Object(n["G"])((function(){return[Object(n["g"])("div",W,[Object(n["g"])("img",{src:["cardio"===e.workoutType?r("f7da"):r("a25c")],class:"w-auto h-24",alt:"cardio"},null,8,_),Object(n["g"])("h2",q,Object(n["A"])(e.workoutName),1)])]})),_:2},1032,["to"])})),128))])])):c.errorMessage?(Object(n["t"])(),Object(n["f"])("div",N,Object(n["A"])(c.errorMessage),1)):Object(n["e"])("",!0)}r("4795");var G={name:"Home",components:{},setup:function(){var e=Object(n["w"])([]),t=Object(n["w"])(null),r=Object(n["w"])(null);Object(n["r"])(Object(h["a"])(regeneratorRuntime.mark((function r(){var n,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,y.from("workouts").select();case 3:if(n=r.sent,c=n.data,o=n.error,!o){r.next=8;break}throw o;case 8:e.value=c,t.value=!0,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log("Error while fetching data ",r.t0.message),a("Error : ".concat(r.t0.message));case 16:case"end":return r.stop()}}),r,null,[[0,12]])}))));var a=function(e){console.log("called"),r.value=e,setTimeout((function(){r.value=null}),5e3)};return{workouts:e,loadedData:t,errorMessage:r}}};const z=R()(G,[["render",L]]);var J=z,B={class:"max-w-screen-sm mx-auto px-4 py-10"},K={key:0,class:"mb-5 p-2 rounded bg-red-200"},Q=Object(n["g"])("h1",{class:"text-3xl text-center text-at-light-green mb-2"},"Register",-1),X={class:"flex flex-col mb-2"},Y=Object(n["g"])("label",{for:"email",class:"text-at-light-green"},"Email",-1),Z={class:"flex flex-col mb-2"},F=Object(n["g"])("label",{for:"password",class:"text-at-light-green"},"Password",-1),$={class:"flex flex-col mb-2"},ee=Object(n["g"])("label",{for:"confirmPassword",class:"text-at-light-green"},"Confirm Password",-1),te=Object(n["g"])("div",null,[Object(n["g"])("button",{type:"submit",class:"mt-4 bg-at-light-green p-2 rounded text-white transition duration-500 ease-in-out hover:bg-white hover:text-at-light-green transform hover:scale-110 hover:-translate-y-1 hover:border-at-light-green"}," Register ")],-1),re={class:"text-center mt-3"},ne=Object(n["h"])("Already an user ? "),ae=Object(n["h"])("LogIn");function ce(e,t,r,a,c,o){var l=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["f"])("div",B,[a.errorMessage?(Object(n["t"])(),Object(n["f"])("div",K,Object(n["A"])(a.errorMessage),1)):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[3]||(t[3]=Object(n["I"])((function(){return a.register&&a.register.apply(a,arguments)}),["prevent"])),class:"py-10 px-4 shadow-xl bg-light-grey my-auto"},[Q,Object(n["g"])("div",X,[Y,Object(n["H"])(Object(n["g"])("input",{id:"email",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e}),required:""},null,512),[[n["D"],a.email]])]),Object(n["g"])("div",Z,[F,Object(n["H"])(Object(n["g"])("input",{id:"password",type:"password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["D"],a.password]])]),Object(n["g"])("div",$,[ee,Object(n["H"])(Object(n["g"])("input",{id:"confirmPassword",type:"password",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.confirmPassword=e})},null,512),[[n["D"],a.confirmPassword]])]),te,Object(n["g"])("p",re,[ne,Object(n["i"])(l,{to:"/login",class:"text-at-light-green"},{default:Object(n["G"])((function(){return[ae]})),_:1})])],32)])}r("498a");var oe={name:"register",setup:function(){var e=Object(n["w"])(null),t=Object(n["w"])(null),r=Object(n["w"])(null),a=Object(n["w"])(null),c=Object(E["d"])(),o=function(){var n=Object(h["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(t.value.trim()!==r.value.trim()||t.value.trim().length<=0)){n.next=3;break}return l("Error : Password won't match"),n.abrupt("return");case 3:return n.prev=3,n.next=6,y.auth.signUp({email:e.value,password:t.value});case 6:if(a=n.sent,console.log(a),!a.error){n.next=10;break}throw a.error;case 10:c.push("/"),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](3),console.log(n.t0),l("Error : ".concat(n.t0.message));case 17:case"end":return n.stop()}}),n,null,[[3,13]])})));return function(){return n.apply(this,arguments)}}(),l=function(e){a.value=e,setTimeout((function(){a.value=null}),5e3)};return{email:e,password:t,register:o,confirmPassword:r,errorMessage:a}}};const le=R()(oe,[["render",ce]]);var se=le,ue={class:"max-w-screen-sm mx-auto py-10 px-5"},ie={key:0,class:"bg-red-200 rounded p-2"},be=Object(n["g"])("h1",{class:"text-3xl text-at-light-green text-center"},"Login",-1),de={class:"flex flex-col mb-2"},ge=Object(n["g"])("label",{for:"email",class:"text-at-light-green"},"Email",-1),pe={class:"flex flex-col mb-2"},fe=Object(n["g"])("label",{for:"password",class:"text-at-light-green"},"Password",-1),je=Object(n["g"])("div",null,[Object(n["g"])("button",{class:"mt-4 bg-at-light-green p-2 rounded text-white transition duration-500 ease-in-out hover:bg-white hover:text-at-light-green transform hover:scale-110 hover:-translate-y-1 hover:border-at-light-green",type:"submit"},"LogIn")],-1),Oe={class:"text-center"},xe=Object(n["h"])("Dont have an account ? "),he=Object(n["h"])("Register");function ve(e,t,r,a,c,o){var l=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["f"])("div",ue,[a.errorMessage?(Object(n["t"])(),Object(n["f"])("div",ie,Object(n["A"])(a.errorMessage),1)):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["I"])((function(){return a.login&&a.login.apply(a,arguments)}),["prevent"])),class:"mt-5 shadow-xl rounded bg-light-grey py-10 px-5"},[be,Object(n["g"])("div",de,[ge,Object(n["H"])(Object(n["g"])("input",{type:"text",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[n["D"],a.email]])]),Object(n["g"])("div",pe,[fe,Object(n["H"])(Object(n["g"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["D"],a.password]])]),je,Object(n["g"])("p",Oe,[xe,Object(n["i"])(l,{to:"/register",class:"text-at-light-green"},{default:Object(n["G"])((function(){return[he]})),_:1})])],32)])}var me={name:"login",setup:function(){var e=Object(n["w"])(""),t=Object(n["w"])(""),r=Object(n["w"])(null),a=Object(E["d"])(),c=function(){var r=Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(""!==t.value.trim()&&""!==e.value.trim()){r.next=3;break}return o("Error : Email & Password is required"),r.abrupt("return");case 3:return r.prev=3,r.next=6,y.auth.signIn({email:e.value,password:t.value});case 6:if(n=r.sent,console.log("Successfully logged in"),!n.error){r.next=10;break}throw n.error;case 10:a.push("/"),r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](3),console.log(r.t0),o("Error : ".concat(r.t0.message));case 17:case"end":return r.stop()}}),r,null,[[3,13]])})));return function(){return r.apply(this,arguments)}}(),o=function(e){r.value=e,setTimeout((function(){r.value=""}),5e3)};return{email:e,password:t,errorMessage:r,login:c}}};const we=R()(me,[["render",ve]]);var ye=we,ke=r("6122"),Ue=r.n(ke),Ve=r("a407"),Ee=r.n(Ve),Te=r("9b82"),Ae=r.n(Te),Re={key:0,class:"max-w-screen-sm mx-auto flex flex-col gap-y-5 py-10 px-5"},He={key:0,class:"bg-red-200 p-2 mb-2"},De={class:"bg-light-grey flex flex-col py-6 px-3 relative rounded align-center items-center shadow-xl"},Ce={key:0,class:"flex flex-row absolute top-2 left-2 gap-x-2"},Ie=Object(n["g"])("img",{src:Ue.a,class:"h-3.5 w-auto",alt:"edit"},null,-1),Me=[Ie],Pe=Object(n["g"])("img",{src:Ee.a,class:"h-3.5 w-auto",alt:"delete"},null,-1),Se=[Pe],We=["src"],_e={class:"text-2xl text-at-light-green"},qe={class:"flex flex-col bg-light-grey rounded shadow-xl py-6 px-2"},Ne={key:0,class:"flex flex-col gap-y-4 w-full"},Le={class:"flex flex-col md:w-1/3"},Ge=Object(n["g"])("label",{class:"text-at-light-green"},"Type",-1),ze=["onUpdate:modelValue"],Je=Object(n["g"])("option",{value:"",disabled:""},"Select-Option",-1),Be=Object(n["g"])("option",{value:"walk"},"Walk",-1),Ke=Object(n["g"])("option",{value:"run"},"Run",-1),Qe=[Je,Be,Ke],Xe={key:1},Ye={class:"flex flex-col flex-1"},Ze=Object(n["g"])("label",{class:"text-at-light-green"},"Distance",-1),Fe=["onUpdate:modelValue"],$e={key:1},et={class:"flex flex-col flex-1"},tt=Object(n["g"])("label",{class:"text-at-light-green"},"Duration",-1),rt=["onUpdate:modelValue"],nt={key:1},at={class:"flex flex-col flex-1"},ct=Object(n["g"])("label",{class:"text-at-light-green"},"Pace",-1),ot=["onUpdate:modelValue"],lt={key:1},st=["onClick"],ut={key:1,class:"flex flex-col gap-y-4 w-full"},it={class:"flex flex-col w-1/3"},bt=Object(n["g"])("label",{class:"text-at-light-green"},"Exercise",-1),dt=["onUpdate:modelValue"],gt={key:1},pt={class:"flex flex-col flex-1"},ft=Object(n["g"])("label",{class:"text-at-light-green"},"Sets",-1),jt=["onUpdate:modelValue"],Ot={key:1},xt={class:"flex flex-col flex-1"},ht=Object(n["g"])("label",{class:"text-at-light-green"},"Reps",-1),vt=["onUpdate:modelValue"],mt={key:1},wt={class:"flex flex-col flex-1"},yt=Object(n["g"])("label",{class:"text-at-light-green"},"Weights(LB's)",-1),kt=["onUpdate:modelValue"],Ut={key:1},Vt=["onClick"],Et={key:2,class:"px-2"};function Tt(e,t,a,c,o,l){return c.isLoaded?(Object(n["t"])(),Object(n["f"])("div",Re,[c.status?(Object(n["t"])(),Object(n["f"])("div",He,Object(n["A"])(c.status.err),1)):Object(n["e"])("",!0),Object(n["g"])("div",De,[c.user?(Object(n["t"])(),Object(n["f"])("div",Ce,[Object(n["g"])("div",{class:"w-7 h-7 bg-at-light-green rounded-full flex justify-center items-center cursor-pointer",onClick:t[0]||(t[0]=function(){return c.onEdit&&c.onEdit.apply(c,arguments)})},Me),Object(n["g"])("div",{class:"w-7 h-7 bg-at-light-green rounded-full flex justify-center items-center cursor-pointer",onClick:t[1]||(t[1]=function(){return c.deleteWorkout&&c.deleteWorkout.apply(c,arguments)})},Se)])):Object(n["e"])("",!0),Object(n["g"])("img",{src:["cardio"===c.workout.workoutType?r("f7da"):r("a25c")],alt:"exercise-image",class:"w-16 my-5"},null,8,We),Object(n["g"])("h2",_e,Object(n["A"])(c.workout.workoutName),1)]),Object(n["g"])("div",qe,["cardio"===c.workout.workoutType?(Object(n["t"])(),Object(n["f"])("div",Ne,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(c.workout.exercises,(function(e){return Object(n["t"])(),Object(n["f"])("div",{key:e.id,class:"flex flex-col relative px-5 gap-x-6 gap-y-2 md:flex-row"},[Object(n["g"])("div",Le,[Ge,c.edit?Object(n["H"])((Object(n["t"])(),Object(n["f"])("select",{key:0,class:"w-full","onUpdate:modelValue":function(t){return e.cardioType=t}},Qe,8,ze)),[[n["C"],e.cardioType]]):(Object(n["t"])(),Object(n["f"])("p",Xe,Object(n["A"])(e.cardioType),1))]),Object(n["g"])("div",Ye,[Ze,c.edit?Object(n["H"])((Object(n["t"])(),Object(n["f"])("input",{key:0,type:"text",class:"w-full","onUpdate:modelValue":function(t){return e.distance=t}},null,8,Fe)),[[n["D"],e.distance]]):(Object(n["t"])(),Object(n["f"])("p",$e,Object(n["A"])(e.distance),1))]),Object(n["g"])("div",et,[tt,c.edit?Object(n["H"])((Object(n["t"])(),Object(n["f"])("input",{key:0,type:"text",class:"w-full","onUpdate:modelValue":function(t){return e.duration=t}},null,8,rt)),[[n["D"],e.duration]]):(Object(n["t"])(),Object(n["f"])("p",nt,Object(n["A"])(e.duration),1))]),Object(n["g"])("div",at,[ct,c.edit?Object(n["H"])((Object(n["t"])(),Object(n["f"])("input",{key:0,type:"text",class:"w-full","onUpdate:modelValue":function(t){return e.pace=t}},null,8,ot)),[[n["D"],e.pace]]):(Object(n["t"])(),Object(n["f"])("p",lt,Object(n["A"])(e.pace),1))]),c.edit?(Object(n["t"])(),Object(n["f"])("img",{key:0,src:Ae.a,class:"h-4 absolute cursor-pointer -left-1 top-1",alt:"delete",onClick:function(t){return c.onDelete(e.id)}},null,8,st)):Object(n["e"])("",!0)])})),128)),Object(n["H"])(Object(n["g"])("div",null,[Object(n["g"])("button",{type:"button",onClick:t[2]||(t[2]=function(){return c.onAdd&&c.onAdd.apply(c,arguments)}),class:"mt-4 bg-at-light-green p-2 rounded text-white transition duration-500 ease-in-out hover:bg-white hover:text-at-light-green transform hover:scale-110 hover:-translate-y-1 hover:border-at-light-green border-solid border-2"}," Add ")],512),[[n["E"],c.workout.exercises.length>0&&c.edit]])])):(Object(n["t"])(),Object(n["f"])("div",ut,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(c.workout.exercises,(function(e){return Object(n["t"])(),Object(n["f"])("div",{key:e.id,class:"flex flex-col relative px-5 gap-x-6 gap-y-2 md:flex-row"},[Object(n["g"])("div",it,[bt,c.edit?Object(n["H"])((Object(n["t"])(),Object(n["f"])("input",{key:0,type:"text","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,dt)),[[n["D"],e.exercise]]):(Object(n["t"])(),Object(n["f"])("p",gt,Object(n["A"])(e.exercise),1))]),Object(n["g"])("div",pt,[ft,c.edit?Object(n["H"])((Object(n["t"])(),Object(n["f"])("input",{key:0,type:"text",class:"w-full","onUpdate:modelValue":function(t){return e.sets=t}},null,8,jt)),[[n["D"],e.sets]]):(Object(n["t"])(),Object(n["f"])("p",Ot,Object(n["A"])(e.sets),1))]),Object(n["g"])("div",xt,[ht,c.edit?Object(n["H"])((Object(n["t"])(),Object(n["f"])("input",{key:0,type:"text",class:"w-full","onUpdate:modelValue":function(t){return e.reps=t}},null,8,vt)),[[n["D"],e.reps]]):(Object(n["t"])(),Object(n["f"])("p",mt,Object(n["A"])(e.reps),1))]),Object(n["g"])("div",wt,[yt,c.edit?Object(n["H"])((Object(n["t"])(),Object(n["f"])("input",{key:0,type:"text",class:"w-full","onUpdate:modelValue":function(t){return e.weights=t}},null,8,kt)),[[n["D"],e.weights]]):(Object(n["t"])(),Object(n["f"])("p",Ut,Object(n["A"])(e.weights),1))]),Object(n["g"])("img",{src:Ae.a,class:"h-4 absolute cursor-pointer -left-1 top-1",alt:"delete",onClick:function(t){return c.onDelete(e.id)}},null,8,Vt)])})),128)),Object(n["H"])(Object(n["g"])("div",null,[Object(n["g"])("button",{type:"button",onClick:t[3]||(t[3]=function(){return c.onAdd&&c.onAdd.apply(c,arguments)}),class:"mt-4 bg-at-light-green p-2 rounded text-white transition duration-500 ease-in-out hover:bg-white hover:text-at-light-green transform hover:scale-110 hover:-translate-y-1 hover:border-at-light-green border-solid border-2"}," Add ")],512),[[n["E"],c.workout.exercises.length>0&&c.edit]])])),c.edit?(Object(n["t"])(),Object(n["f"])("div",Et,[Object(n["g"])("button",{class:"mt-4 bg-at-light-green p-2 rounded text-white transition duration-500 ease-in-out hover:bg-white hover:text-at-light-green transform hover:scale-110 hover:-translate-y-1 hover:border-at-light-green border-solid border-2",onClick:t[4]||(t[4]=function(){return c.onUpdate&&c.onUpdate.apply(c,arguments)})}," Update Record ")])):Object(n["e"])("",!0)])])):Object(n["e"])("",!0)}r("4de4"),r("4160"),r("159b"),r("ac1f"),r("466d");var At=r("8a77"),Rt={name:"view-workout",setup:function(){var e=Object(n["w"])(null),t=Object(E["c"])(),r=Object(E["d"])(),a=t.params.workoutId,c=Object(n["w"])(!1),o=Object(n["w"])(!1),l=Object(n["w"])(null),s=Object(n["b"])((function(){return V.state.user}));Object(n["r"])(Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:case"end":return e.stop()}}),e)}))));var u=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.from("workouts").select().eq("id",a);case 3:if(r=t.sent,n=r.data,o=r.error,!o){t.next=8;break}throw o;case 8:e.value=n[0],console.log("Before",e.value.workoutType),c.value=!0,console.log("After",e.value.workoutType),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log("Error while fetching individual data",t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}(),i=function(){o.value=!o.value},b=function(){if("strength"===e.value.workoutType.value){var t={id:Object(At["a"])(),exercise:"",sets:"",reps:"",duration:""};e.value.exercises.push(t)}else{var r={id:Object(At["a"])(),cardioType:"",distance:"",pace:""};e.value.exercises.push(r)}},d=function(t){e.value.exercises.length>1?e.value.exercises=e.value.exercises.filter((function(e){return e.id!==t})):g("Error : Cannot delete,atleast one record should be provided","error")},g=function(e,t){l.value="error"===t?{err:e}:{status:e},setTimeout((function(){l.value=null}),5e3)},p=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,"cardio"!==e.value.workoutType){t.next=10;break}t.prev=2,e.value.exercises.forEach((function(e){if(""===e.cardioType)throw new Error("All the data in the workout is mandatory")})),t.next=10;break;case 6:throw t.prev=6,t.t0=t["catch"](2),console.log("Inside the cardio dropdwon not selected"),t.t0;case 10:return t.next=12,y.from("workouts").upsert({id:e.value.id,exercises:e.value.exercises});case 12:if(r=t.sent,n=r.data,a=r.error,!a){t.next=17;break}throw a;case 17:console.log(n),i(),t.next=24;break;case 21:t.prev=21,t.t1=t["catch"](0),g("Error : ".concat(t.t1.message),"error");case 24:case"end":return t.stop()}}),t,null,[[0,21],[2,6]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm("Delete workout?")){t.next=16;break}return t.prev=1,t.next=4,y.from("workouts")["delete"]().match({id:e.value.id});case 4:if(n=t.sent,a=n.data,c=n.error,!c){t.next=9;break}throw c;case 9:console.log(a),r.push("/"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),g("Error : ".concat(t.t0.message),"error");case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}();return{workout:e,isLoaded:c,onEdit:i,edit:o,onAdd:b,onDelete:d,status:l,onUpdate:p,deleteWorkout:f,user:s}}};const Ht=R()(Rt,[["render",Tt]]);var Dt=Ht,Ct={class:"max-w-screen-md mx-auto py-10 px-6"},It=Object(n["g"])("h1",{class:"text-3xl text-at-light-green text-center"},"Record",-1),Mt={class:"flex flex-col gap-x-2 mb-2 w-full"},Pt=Object(n["g"])("label",{class:"text-at-light-green"},"Workout Name",-1),St={class:"flex flex-col gap-x-2 mb-2 w-full"},Wt=Object(n["g"])("label",{class:"text-at-light-green"},"Workout Type",-1),_t=Object(n["g"])("option",{disabled:"",value:""},"Select workout",-1),qt=Object(n["g"])("option",{value:"strength"},"Strengthing",-1),Nt=Object(n["g"])("option",{value:"cardio"},"Cardio",-1),Lt=[_t,qt,Nt],Gt={key:0,class:"flex flex-col"},zt={class:"flex flex-col md:w-1/3"},Jt=Object(n["g"])("label",{class:"text-at-light-green"},"Exercise",-1),Bt=["onUpdate:modelValue"],Kt={class:"flex flex-col"},Qt=Object(n["g"])("label",{class:"text-at-light-green"},"Sets",-1),Xt=["onUpdate:modelValue"],Yt={class:"flex flex-col"},Zt=Object(n["g"])("label",{class:"text-at-light-green"},"Reps",-1),Ft=["onUpdate:modelValue"],$t={class:"flex flex-col"},er=Object(n["g"])("label",{class:"text-at-light-green"},"Weight(LB's)",-1),tr=["onUpdate:modelValue"],rr=["onClick"],nr={key:1,class:"flex flex-col"},ar={class:"flex flex-col md:w-1/3"},cr=Object(n["g"])("label",{class:"text-at-light-green"},"Type",-1),or=["onUpdate:modelValue"],lr=Object(n["g"])("option",{value:"",disabled:""},"Select-Type",-1),sr=Object(n["g"])("option",{value:"run"},"Runs",-1),ur=Object(n["g"])("option",{value:"walk"},"Walk",-1),ir=[lr,sr,ur],br={class:"flex flex-col"},dr=Object(n["g"])("label",{class:"text-at-light-green"},"Distance (Km)",-1),gr=["onUpdate:modelValue"],pr={class:"flex flex-col"},fr=Object(n["g"])("label",{class:"text-at-light-green"},"Duration (Hrs)",-1),jr=["onUpdate:modelValue"],Or={class:"flex flex-col"},xr=Object(n["g"])("label",{class:"text-at-light-green"},"Pace",-1),hr=["onUpdate:modelValue"],vr=["onClick"],mr=Object(n["g"])("div",null,[Object(n["g"])("button",{class:"mt-4 bg-at-light-green p-2 rounded text-white transition duration-500 ease-in-out hover:bg-white hover:text-at-light-green transform hover:scale-110 hover:-translate-y-1 hover:border-at-light-green"}," Save Exercise ")],-1);function wr(e,t,r,a,c,o){return Object(n["t"])(),Object(n["f"])("div",Ct,[a.statusMessage?(Object(n["t"])(),Object(n["f"])("div",{key:0,class:Object(n["o"])([a.statusMessage.err?"bg-red-200":"bg-at-light-green","rounded p-2 mb-2"])},Object(n["A"])(a.statusMessage.err?a.statusMessage.err:a.statusMessage.status),3)):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[5]||(t[5]=Object(n["I"])((function(){return a.onSave&&a.onSave.apply(a,arguments)}),["prevent"])),class:"flex flex-col py-10 px-6 rounded-md bg-light-grey gap-y-4"},[It,Object(n["g"])("div",Mt,[Pt,Object(n["H"])(Object(n["g"])("input",{type:"text",class:"p-2","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.workoutName=e}),required:""},null,512),[[n["D"],a.workoutName]])]),Object(n["g"])("div",St,[Wt,Object(n["H"])(Object(n["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.workoutType=e}),onChange:t[2]||(t[2]=function(){return a.onWorkoutChange&&a.onWorkoutChange.apply(a,arguments)}),class:"p-2"},Lt,544),[[n["C"],a.workoutType]])]),"strength"===a.workoutType?(Object(n["t"])(),Object(n["f"])("div",Gt,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(a.exercies,(function(e){return Object(n["t"])(),Object(n["f"])("div",{key:e.id,class:"flex flex-col gap-x-6 gap-y-6 relative md:flex-row"},[Object(n["g"])("div",zt,[Jt,Object(n["H"])(Object(n["g"])("input",{type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t},required:""},null,8,Bt),[[n["D"],e.exercise]])]),Object(n["g"])("div",Kt,[Qt,Object(n["H"])(Object(n["g"])("input",{type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t},required:""},null,8,Xt),[[n["D"],e.sets]])]),Object(n["g"])("div",Yt,[Zt,Object(n["H"])(Object(n["g"])("input",{type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t},required:""},null,8,Ft),[[n["D"],e.reps]])]),Object(n["g"])("div",$t,[er,Object(n["H"])(Object(n["g"])("input",{type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weights=t},required:""},null,8,tr),[[n["D"],e.weights]])]),Object(n["g"])("img",{src:Ae.a,class:"h-4 absolute cursor-pointer -left-5 top-1",alt:"delete",onClick:function(t){return a.deleteRecord(e.id)}},null,8,rr)])})),128)),Object(n["H"])(Object(n["g"])("div",null,[Object(n["g"])("button",{type:"button",onClick:t[3]||(t[3]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),class:"mt-4 bg-at-light-green p-2 rounded text-white transition duration-500 ease-in-out hover:bg-white hover:text-at-light-green transform hover:scale-110 hover:-translate-y-1 hover:border-at-light-green"}," Add ")],512),[[n["E"],a.exercies.length>0]])])):Object(n["e"])("",!0),"cardio"===a.workoutType?(Object(n["t"])(),Object(n["f"])("div",nr,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(a.exercies,(function(e){return Object(n["t"])(),Object(n["f"])("div",{key:e.id,class:"flex flex-col gap-x-6 gap-y-6 relative md:flex-row"},[Object(n["g"])("div",ar,[cr,Object(n["H"])(Object(n["g"])("select",{"onUpdate:modelValue":function(t){return e.cardioType=t},class:"p-2 text-gray-500 focus:outline-none"},ir,8,or),[[n["C"],e.cardioType]])]),Object(n["g"])("div",br,[dr,Object(n["H"])(Object(n["g"])("input",{type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t},required:""},null,8,gr),[[n["D"],e.distance]])]),Object(n["g"])("div",pr,[fr,Object(n["H"])(Object(n["g"])("input",{type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t},required:""},null,8,jr),[[n["D"],e.duration]])]),Object(n["g"])("div",Or,[xr,Object(n["H"])(Object(n["g"])("input",{type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t},required:""},null,8,hr),[[n["D"],e.pace]])]),Object(n["g"])("img",{src:Ae.a,class:"h-4 absolute cursor-pointer -left-5 top-1",alt:"delete",onClick:function(t){return a.deleteRecord(e.id)}},null,8,vr)])})),128)),Object(n["H"])(Object(n["g"])("div",null,[Object(n["g"])("button",{type:"button",onClick:t[4]||(t[4]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),class:"mt-4 bg-at-light-green p-2 rounded text-white transition duration-500 ease-in-out hover:bg-white hover:text-at-light-green transform hover:scale-110 hover:-translate-y-1 hover:border-at-light-green"}," Add ")],512),[[n["E"],a.exercies.length>0]])])):Object(n["e"])("",!0),mr],32)])}var yr={name:"create",setup:function(){var e=Object(n["w"])(null),t=Object(n["w"])(""),r=Object(n["w"])([]),a=Object(n["w"])(null),c=Object(E["d"])(),o=function(){if("strength"===t.value){var e={id:Object(At["a"])(),exercise:"",sets:"",reps:""};r.value.push(e)}else{var n={id:Object(At["a"])(),cardioType:"",distance:"",pace:""};r.value.push(n)}},l=function(e){r.value.length>1?r.value=r.value.filter((function(t){return t.id!==e})):i("Error : Atleast one workout data has to present","error")},s=function(){r.value=[],o()},u=function(){var n=Object(h["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,!(r.value.length<1)){n.next=3;break}throw new Error("Atleast one workout data has to be added");case 3:if(console.log("Atleast on exercise is present"),"cardio"!==t.value){n.next=13;break}n.prev=5,r.value.forEach((function(e){if(""===e.cardioType)throw new Error("All the data in the workout is mandatory")})),n.next=13;break;case 9:throw n.prev=9,n.t0=n["catch"](5),console.log("Inside the cardio dropdwon not selected"),n.t0;case 13:return console.log("Data seems to be all okay"),n.next=16,y.from("workouts").insert([{workoutName:e.value,workoutType:t.value,exercises:r.value}]);case 16:if(a=n.sent,o=a.error,!o){n.next=20;break}throw o;case 20:console.log("No error"),i("Status : Record has been updated successfully","status"),c.push("/"),n.next=29;break;case 25:n.prev=25,n.t1=n["catch"](0),console.log("Error while saving",n.t1.message),i("Error : ".concat(n.t1.message),"error");case 29:case"end":return n.stop()}}),n,null,[[0,25],[5,9]])})));return function(){return n.apply(this,arguments)}}(),i=function(e,t){a.value="error"===t?{err:e}:{status:e},setTimeout((function(){a.value=null}),5e3)};return{workoutName:e,workoutType:t,exercies:r,statusMessage:a,addExercise:o,onWorkoutChange:s,deleteRecord:l,onSave:u}}};const kr=R()(yr,[["render",wr]]);var Ur=kr,Vr=[{path:"/",name:"Home",component:J,meta:{auth:!1}},{path:"/register",name:"Singup",component:se,meta:{auth:!1}},{path:"/login",name:"LogIn",component:ye,meta:{auth:!1}},{path:"/view/:workoutId?",name:"View",component:Dt,meta:{auth:!1}},{path:"/create",name:"create",component:Ur,meta:{auth:!0}}],Er=Object(E["a"])({history:Object(E["b"])("/"),routes:Vr});Er.beforeEach((function(e,t,r){document.title="".concat(e.name," | Active-Tracker"),r()})),Er.beforeEach((function(e,t,r){var n=y.auth.user();if(e.matched.some((function(e){return e.meta.auth}))){if(n)return void r();Er.push("/login")}r()}));var Tr=Er;r("ba8c");Object(n["c"])(M).use(Tr).mount("#app")},6122:function(e,t,r){e.exports=r.p+"img/pencil-light.67a7865c.png"},"9b82":function(e,t,r){e.exports=r.p+"img/trash-light-green.f27ed677.png"},"9fb2":function(e,t,r){},a25c:function(e,t,r){e.exports=r.p+"img/dumbbell-light-green.e9869f64.png"},a407:function(e,t,r){e.exports=r.p+"img/trash-light.f5a99b6a.png"},ba8c:function(e,t,r){},e9ef:function(e,t,r){"use strict";r("9fb2")},f7da:function(e,t,r){e.exports=r.p+"img/running-light-green.599f4302.png"}});
//# sourceMappingURL=app.566e227e.js.map