(window.webpackJsonplsc_h5_ts=window.webpackJsonplsc_h5_ts||[]).push([[17],{824:function(e,t,a){},849:function(e,t,a){"use strict";a.r(t);a(83),a(59),a(23),a(30),a(28),a(198),a(82);var n=a(25),c=a(38),i=(a(121),a(41)),l=a(1),r=a.n(l),s=a(12),m=(a(39),a(2)),o=a(14),d=a(15),u=a(17),b=a(16),p=a(11),h=a(0),f=a.n(h),E=(a(824),a(20)),g=a(27),v=a(32),j=a(37);var N=function(e){Object(u.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(p.a)(e);if(t()){var c=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(b.a)(this,a)}}(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).init=Object(m.a)(r.a.mark((function e(){var t,a,c,i,l,m,o,d,u,b,p,h,f,E,g,v,j,N,w,I,z,O,y,D,U;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props,a=t.match.params,c=a.id,i=a.typeId,a.museumId,l=t.getCollectionDetail,t.changeMuseumData,m=t.formFields,o=t.changeCommonData,t.collection,d={},"edit"!==i){e.next=8;break}return e.next=5,l(c);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=d;case 9:return u=e.t0,b=u.name,p=u.objectPriImg,h=void 0===p?[]:p,f=u.objectDetImg,E=void 0===f?[]:f,g=u.objectVideo,v=void 0===g?[]:g,j=u.number,N=u.era,w=u.size,I=u.sizeUnit,z=u.weight,O=u.weightUnit,y=u.place,D=u.describe,U=u.location,Object.assign(m,{name:b,objectPriImg:h,objectDetImg:E,objectVideo:v,number:j,era:N,size:w,sizeUnit:I,weight:z,weightUnit:O,place:y,describe:D,location:U}),e.next=29,o({formFields:Object(s.a)({},m)});case 29:case"end":return e.stop()}}),e)}))),n.onSave=Object(m.a)(r.a.mark((function e(){var t,a,c,l,m,o,d,u,b,p,h,f,E,g,v,j,N,w,I,z,O,y,D,U;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props,a=t.history,c=t.match.params,l=c.id,m=c.typeId,o=c.museumId,d=t.addCollection,u=t.updateCollection,b=t.formFields,p=b.name,h=b.objectPriImg,f=b.objectDetImg,E=b.objectVideo,g=b.number,v=b.era,j=b.size,N=b.sizeUnit,w=b.weight,I=b.weightUnit,z=b.place,O=b.describe,y=b.location,p&&g){e.next=4;break}return i.a.fail("\u85cf\u54c1\u6807\u9898\u548c\u7f16\u53f7\u4e0d\u80fd\u4e3a\u7a7a!"),e.abrupt("return");case 4:if(D={name:p,objectPriImg:h,objectDetImg:f,objectVideo:E,number:g,era:v,size:j,sizeUnit:N,weight:w,weightUnit:I,place:z,describe:O,location:y},"edit"!==m){e.next=11;break}return e.next=8,u(Object(s.a)(Object(s.a)({},D),{},{id:l}));case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,d(Object(s.a)(Object(s.a)({},D),{},{stairTwoId:l,stairOneId:m,museumId:o}));case 13:e.t0=e.sent;case 14:U=e.t0,U.isOk&&a.goBack();case 17:case"end":return e.stop()}}),e)}))),n.state={},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.className,e.sizeUnits),a=e.weightUnits,i=e.match.params.typeId;Object(c.a)(this.state);var l=this.onSave;return f.a.createElement("div",{className:"collection_edit_page"},f.a.createElement(n.a,{className:"item"},f.a.createElement("div",{className:"label"},"\u85cf\u54c1\u6807\u9898"),f.a.createElement(n.a.Item,null,f.a.createElement(j.z,{name:"name",placeholder:"\u8bf7\u8f93\u5165\u85cf\u54c1\u6807\u9898"}))),f.a.createElement("div",{className:"info_header"},"\u85cf\u54c1\u56fe\u7247"),f.a.createElement("div",{className:"item"},f.a.createElement("div",{className:"label padding_u"},"\u85cf\u54c1\u4e3b\u56fe(1-9\u5f20):"),f.a.createElement(j.E,{limit:9,name:"objectPriImg"}),f.a.createElement("div",{className:"label"},"\u85cf\u54c1\u8be6\u60c5\u56fe(1-9\u5f20):"),f.a.createElement(j.E,{limit:9,name:"objectDetImg"}),f.a.createElement("div",{className:"label"},"3D\u52a8\u753b\u6216\u89c6\u9891(1\u5f20,\u53ef\u9009):"),f.a.createElement(j.E,{name:"objectVideo",type:"video"})),f.a.createElement("div",{className:"info_header"},"\u85cf\u54c1\u8be6\u7ec6\u53c2\u6570"),f.a.createElement("div",{className:"item"},f.a.createElement(n.a,{className:" right"},f.a.createElement("div",{className:"label "},"\u7f16\u53f7"),f.a.createElement(n.a.Item,null,f.a.createElement(j.z,{name:"number",placeholder:"\u8bf7\u8f93\u5165\u85cf\u54c1\u7f16\u53f7"}))),f.a.createElement(n.a,{className:"bd_ud right"},f.a.createElement("div",{className:"label"},"\u5e74\u4ee3"),f.a.createElement(n.a.Item,null,f.a.createElement(j.z,{name:"era",placeholder:"\u8bf7\u8f93\u5165\u85cf\u54c1\u5e74\u4ee3"}))),f.a.createElement(n.a,{className:" right"},f.a.createElement("div",{className:"label"},"\u5c3a\u5bf8"),f.a.createElement(n.a.Item,null,f.a.createElement(j.z,{name:"size",placeholder:"\u8bf7\u8f93\u5165\u85cf\u54c1\u5c3a\u5bf8"}))),f.a.createElement(j.z,{className:"bd_ud",fieldType:"select",name:"sizeUnit",options:t,props:{title:"\u5c3a\u5bf8\u5355\u4f4d",extra:"\u8bf7\u9009\u62e9\u5c3a\u5bf8\u5355\u4f4d"}}),f.a.createElement(n.a,{className:" right"},f.a.createElement("div",{className:"label"},"\u91cd\u91cf"),f.a.createElement(n.a.Item,null,f.a.createElement(j.z,{name:"weight",placeholder:"\u8bf7\u8f93\u5165\u85cf\u54c1\u91cd\u91cf"}))),f.a.createElement(j.z,{className:"bd_ud",fieldType:"select",name:"weightUnit",options:a,props:{title:"\u91cd\u91cf\u5355\u4f4d",extra:"\u8bf7\u9009\u62e9\u91cd\u91cf\u5355\u4f4d"}}),f.a.createElement(n.a,{className:"bd_d right"},f.a.createElement("div",{className:"label"},"\u4ea7\u5730"),f.a.createElement(n.a.Item,null,f.a.createElement(j.z,{name:"place",placeholder:"\u8bf7\u8f93\u5165\u85cf\u54c1\u4ea7\u5730"}))),f.a.createElement("div",{className:"label padding_u"},"\u85cf\u54c1\u63cf\u8ff0:"),f.a.createElement(j.z,{name:"describe",fieldType:"textarea",placeholder:"\u8bf7\u8f93\u5165\u85cf\u54c1\u63cf\u8ff0"}),f.a.createElement("div",{className:"label bd_u padding_u"},"\u85cf\u54c1\u4f4d\u7f6e:"),f.a.createElement(j.z,{name:"location",fieldType:"textarea",placeholder:"\u8bf7\u8f93\u5165\u85cf\u54c1\u4f4d\u7f6e"})),f.a.createElement("div",{className:"state2",onClick:l},"edit"===i?"\u4fdd\u5b58":"\u521b\u5efa"))}},{key:"componentDidMount",value:function(){document.title="\u85cf\u54c1\u7f16\u8f91",this.init()}},{key:"shouldComponentUpdate",value:function(e,t,a){return!0}}]),a}(f.a.Component);t.default=Object(v.b)((function(e){var t=e.museumReducer.collection,a=e.commonReducer;return{collection:t,formFields:a.formFields,sizeUnits:a.sizeUnits,weightUnits:a.weightUnits}}),(function(e){var t=E.a.changeCommonData,a=E.e.getCollectionDetail,n=E.e.addCollection,c=E.e.updateCollection,i=E.e.changeMuseumData;return Object(s.a)(Object(s.a)({},Object(g.bindActionCreators)({getCollectionDetail:a,changeCommonData:t,addCollection:n,changeMuseumData:i,updateCollection:c},e)),{},{dispatch:e})}))(N)}}]);
//# sourceMappingURL=17.8456bcbf.chunk.js.map