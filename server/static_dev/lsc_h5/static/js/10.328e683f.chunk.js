(window.webpackJsonplsc_h5_ts=window.webpackJsonplsc_h5_ts||[]).push([[10],{818:function(e,t,a){},845:function(e,t,a){"use strict";a.r(t);a(23),a(30),a(28),a(198);var n=a(12),o=(a(82),a(25)),c=a(1),s=a.n(c),r=(a(39),a(2)),i=a(14),l=a(15),m=a(86),u=a(17),p=a(16),d=a(11),h=a(0),g=a.n(h),f=a(20),b=a(27),v=a(32),E=a(37),y=a(13);a(818);var _=[{text:"\u5546\u54c1",value:1},{text:"\u8be6\u60c5",value:2}],I=function(e){Object(u.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(d.a)(e);if(t()){var o=Object(d.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(p.a)(this,a)}}(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).nodeHeights=[],n.onTopTabChange=function(e,t){document.getElementsByClassName("tloader")[0].scrollTop=n.nodeHeights[t]},n.getInitData=function(){var e=Object(r.a)(s.a.mark((function e(t){var a,o,c,r,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,o=a.getGoodsDetail,c=a.match.params.shopId,r=a.getComments,e.next=3,o(t||c,3,!!t);case 3:return i=e.sent,i.shopName,l=i.storeId,e.next=8,r({storeId:l,page:1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getNodeHeights=function(){n.nodeHeights=[0,document.getElementsByClassName("goods_detail_component")[0].offsetTop]},n.onScroll=function(e){var t=e.scrollTop,a=(e.scrollHeight,e.clientHeight,Object(m.a)(n)),o=a.nodeHeights,c=(a.props.changeCommonData,0),s=1;switch(!0){case t<201||t<o[1]:s=t/200;break;default:c=1}n.setState({tabValue:c,opacity:s})},n.state={opacity:0,tabValue:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.goods,a=e.storeInfo,n=(e.comments,this.state),c=n.opacity,s=n.tabValue,r=this.onScroll,i=this.onTopTabChange;return g.a.createElement(o.a,{direction:"column",className:"product_goods_detail bg1"},g.a.createElement(o.a.Item,null,g.a.createElement(E.r,{onScroll:r},g.a.createElement(o.a,{className:"top_tab padding_lr bd_d item",style:{opacity:c}},g.a.createElement(o.a.Item,null,g.a.createElement(E.D,{options:_,value:s,onChange:i})),g.a.createElement("img",{src:"/lsc_h5/imgs/msg_0.png",alt:"",onClick:y.a.showDownloadModal})),g.a.createElement(E.y,{options:t.shopPriImg}),g.a.createElement("div",{className:"info item padding"},g.a.createElement(o.a,null,g.a.createElement(o.a.Item,{className:"price1"},"\uffe5",t.shopPrice),g.a.createElement(E.h,{id:t.shopId,type:3,state:parseInt(t.isFavorite)})),g.a.createElement("div",{className:"title"},t.shopName),g.a.createElement("div",{className:"explain "},t.explain),g.a.createElement(E.w,{className:"bd_u margin_u",store:a})),g.a.createElement(o.a,{className:"goods_num item padding margin_u bd_d"},g.a.createElement(o.a.Item,null,"\u6570\u91cf"),g.a.createElement(E.z,{name:"num",className:"num padding_lr",fieldType:"stepper",props:{min:1},defaultValue:1})),g.a.createElement(E.n,{goods:t,className:"",type:3}),g.a.createElement(E.u,{className:"margin_u",id:t.storeId}))),g.a.createElement(E.e,null),g.a.createElement(E.d,{hasBottom:!0}))}},{key:"componentDidMount",value:function(){document.title="\u4e00\u53e3\u4ef7\u5546\u54c1\u8be6\u60c5",this.nodeHeights=[],this.getInitData()}},{key:"shouldComponentUpdate",value:function(e,t,a){return!0}},{key:"componentDidUpdate",value:function(e,t,a){this.getNodeHeights()}},{key:"componentWillReceiveProps",value:function(e,t){var a=e.match.params.shopId;a!==this.props.match.params.shopId&&this.getInitData(a)}}]),a}(g.a.Component);t.default=Object(v.b)((function(e){var t=e.mallReducer.goods,a=e.commonReducer;return{goods:t,storeInfo:a.storeInfo,comments:a.comments}}),(function(e){var t=f.c.getGoodsDetail,a=f.c.getAuctionScenes,o=f.a.changeCommonData,c=f.a.getComments;return Object(n.a)(Object(n.a)({},Object(b.bindActionCreators)({getGoodsDetail:t,changeCommonData:o,getAuctionScenes:a,getComments:c},e)),{},{dispatch:e})}))(I)}}]);
//# sourceMappingURL=10.328e683f.chunk.js.map
