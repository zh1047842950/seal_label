(window.webpackJsonplsc_h5_ts=window.webpackJsonplsc_h5_ts||[]).push([[4],{823:function(e,t,a){},824:function(e,t,a){},871:function(e,t,a){"use strict";a.r(t);a(46),a(23),a(31),a(28),a(202);var n=a(12),r=(a(61),a(823),a(3)),o=a.n(r),s=a(6),c=a.n(s),l=a(7),i=a.n(l),m=a(10),p=a.n(m),u=a(8),d=a.n(u),f=a(9),h=a.n(f),g=a(18),E=a.n(g),v=a(0),b=a.n(v),_=function(e){function t(){return i()(this,t),d()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h()(t,e),p()(t,[{key:"componentWillReceiveProps",value:function(){this.noAppearTransition=!0}},{key:"componentDidMount",value:function(){var e=this;this.props.appearTransition&&setTimeout((function(){e.barRef&&(e.barRef.style.width=e.props.percent+"%")}),10)}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.className,r=a.prefixCls,s=a.position,l=a.unfilled,i=a.style,m=void 0===i?{}:i,p=a.barStyle,u=void 0===p?{}:p,d={width:this.noAppearTransition||!this.props.appearTransition?this.props.percent+"%":0,height:0},f=E()(r+"-outer",n,(e={},c()(e,r+"-fixed-outer","fixed"===s),c()(e,r+"-hide-outer",!l),e));return v.createElement("div",{style:m,className:f,role:"progressbar","aria-valuenow":this.props.percent,"aria-valuemin":0,"aria-valuemax":100},v.createElement("div",{ref:function(e){return t.barRef=e},className:r+"-bar",style:o()({},u,d)}))}}]),t}(v.Component),y=_;_.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed",unfilled:!0,appearTransition:!1};a(82);var N=a(25),I=a(1),w=a.n(I),C=(a(39),a(2)),D=a(14),O=a(15),k=a(86),x=a(17),T=a(16),j=a(11),R=a(20),H=a(27),P=a(30),S=a(37),A=a(13);a(824);var V=[{text:"\u5546\u54c1",value:1},{text:"\u8be6\u60c5",value:2}],B=function(e){Object(x.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(j.a)(e);if(t()){var r=Object(j.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(T.a)(this,a)}}(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).nodeHeights=[],n.onTopTabChange=function(e,t){document.getElementsByClassName("tloader")[0].scrollTop=n.nodeHeights[t]},n.getInitData=function(){var e=Object(C.a)(w.a.mark((function e(t){var a,r,o,s,c,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,r=a.getGoodsDetail,o=a.match.params.shopId,s=a.getComments,e.next=3,r(t||o,4,!!t);case 3:return c=e.sent,c.shopName,l=c.storeId,e.next=8,s({storeId:l,page:1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getNodeHeights=function(){n.nodeHeights=[0,document.getElementsByClassName("goods_detail_component")[0].offsetTop]},n.onScroll=function(e){var t=e.scrollTop,a=(e.scrollHeight,e.clientHeight,Object(k.a)(n)),r=a.nodeHeights,o=(a.props.changeCommonData,0),s=1;switch(!0){case t<201||t<r[1]:s=t/200;break;default:o=1}n.setState({tabValue:o,opacity:s})},n.state={opacity:0,tabValue:0},n}return Object(O.a)(a,[{key:"render",value:function(){var e=this.props,t=e.goods,a=e.storeInfo,n=this.state,r=n.opacity,o=n.tabValue,s=this.onScroll,c=this.onTopTabChange,l=t.tariff,i=void 0===l?[]:l;return b.a.createElement(N.a,{direction:"column",className:"crowd_funding_detail bg1"},b.a.createElement(N.a.Item,null,b.a.createElement(S.r,{onScroll:s},b.a.createElement(N.a,{className:"top_tab padding_lr bd_d item",style:{opacity:r}},b.a.createElement(N.a.Item,null,b.a.createElement(S.D,{options:V,value:o,onChange:c})),b.a.createElement("img",{src:"/lsc_h5_hash/imgs/msg_0.png",alt:"",onClick:A.a.showDownloadModal})),b.a.createElement(S.y,{options:t.shopPriImg}),b.a.createElement("div",{className:"info item padding"},b.a.createElement(N.a,null,b.a.createElement(N.a.Item,null,b.a.createElement("span",{className:"price1"},"\uffe5",t.minPrice),"\u8d77"),b.a.createElement(S.h,{id:t.shopCode,type:4,state:parseInt(t.isFavorite)})),b.a.createElement("div",{className:"title"},t.shopName),b.a.createElement("div",{className:"explain "},t.explain),b.a.createElement(S.w,{className:"bd_u margin_u",store:a})),b.a.createElement("div",{className:"item crowd_funding"},b.a.createElement("div",{className:"total"},"\u5df2\u7b79\u5230\uffe5",t.alreadyPrice),b.a.createElement(y,{className:"crowd_progress",position:"normal",percent:t.percent}),b.a.createElement(N.a,null,b.a.createElement(N.a.Item,{className:"blue"},"\u5f53\u524d\u8fdb\u5ea6:",t.percent,"%"),b.a.createElement("span",null,t.supporter,"\u540d\u652f\u6301\u8005")),b.a.createElement(N.a,null,"(\u4f17\u7b79\u76ee\u6807\u91d1\u989d\uff1a",b.a.createElement("span",{className:"price1"},t.targetPrice," ")," \u5269\u4f59\u65f6\u95f4\uff1a",!!t.leftDay&&b.a.createElement("div",null,b.a.createElement("span",{className:"price1"},t.leftDay),"\u5929"),!!t.leftHour&&b.a.createElement("div",null,b.a.createElement("span",{className:"price1"},t.leftHour),"\u5c0f\u65f6"),")"),b.a.createElement(N.a,null,b.a.createElement(N.a.Item,null,"\u5546\u54c1\u539f\u4ef7:",b.a.createElement("span",{className:"price1"},t.shopOriginalCost)," \u5143/\u4ef6"),"\u4f17\u7b79\u4ef7\uff1a",b.a.createElement("span",{className:"price1"},t.minPrice," ")," \u5143/\u4ef6\u8d77"),b.a.createElement(N.a,{className:"tariff_row bd_ud"},b.a.createElement("div",{className:"tariff_num bd_lr"},"\u5e8f\u53f7"),b.a.createElement(N.a.Item,null,"\u8d2d\u4e70\u6570\u91cf"),b.a.createElement("div",{className:"tariff_price bd_lr"},"\u5355\u4ef7(\u5143)")),i.map((function(e,t){return b.a.createElement(N.a,{key:t,className:"tariff_row bd_d"},b.a.createElement("div",{className:"tariff_num bd_lr"},t+1),b.a.createElement(N.a.Item,{className:""},e.str),b.a.createElement("div",{className:"tariff_price bd_lr"},e.price))}))),b.a.createElement(N.a,{className:"goods_num item padding margin_u bd_d"},b.a.createElement(N.a.Item,null,"\u6570\u91cf"),b.a.createElement(S.z,{name:"num",className:"num ",fieldType:"stepper",props:{min:1},defaultValue:1})),b.a.createElement(S.n,{goods:t,className:"",type:3}),b.a.createElement(S.u,{className:"margin_u",id:t.storeId}))),b.a.createElement(S.e,null),b.a.createElement(S.d,{hasBottom:!0}))}},{key:"componentDidMount",value:function(){document.title="\u4f17\u7b79\u5546\u54c1\u8be6\u60c5",this.nodeHeights=[],this.getInitData()}},{key:"shouldComponentUpdate",value:function(e,t,a){return!0}},{key:"componentDidUpdate",value:function(e,t,a){this.getNodeHeights()}},{key:"componentWillReceiveProps",value:function(e,t){var a=e.match.params.shopId;a!==this.props.match.params.shopId&&this.getInitData(a)}}]),a}(b.a.Component);t.default=Object(P.b)((function(e){var t=e.mallReducer.goods,a=e.commonReducer;return{goods:t,storeInfo:a.storeInfo,comments:a.comments}}),(function(e){var t=R.c.getGoodsDetail,a=R.c.getAuctionScenes,r=R.a.changeCommonData,o=R.a.getComments;return Object(n.a)(Object(n.a)({},Object(H.bindActionCreators)({getGoodsDetail:t,changeCommonData:r,getAuctionScenes:a,getComments:o},e)),{},{dispatch:e})}))(B)}}]);
//# sourceMappingURL=4.a6c4321b.chunk.js.map