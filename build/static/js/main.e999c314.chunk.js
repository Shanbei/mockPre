(this.webpackJsonpmockpre=this.webpackJsonpmockpre||[]).push([[0],{109:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),d=a(8),o=a.n(d),c=(a(84),a(52)),s=a(11),l=a(68),r=a(69),u=a(40),h=a(41),j=a(42),b=a(47),p=a(46),x=a(155),f=a(146),g=a(147),m=a(145),O=a(156),v=a(6),F=Object(x.a)(O.a)({background:"linear-gradient(45deg, #6d6bfe 30%, #53b8ff 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",height:60,margin:"0",padding:"0 30px","&.is-active":{background:"linear-gradient(45deg, #ff8257 30%, #ff5353 90%)"},"& span":{color:"white",lineHeight:"30px",fontSize:"16px"},"& p":{color:"white",lineHeight:"30px",paddingLeft:"20px",fontSize:"22px"}}),y=Object(x.a)(m.a)({color:"#b4f9bd",position:"absolute",width:"60px",height:"100%",backgroundColor:"#333333cc",right:"0",opacity:0,transition:".4s opacity","&:hover":{opacity:1}}),k=function(t){Object(b.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).addFun=function(){n.setState({index:-1}),n.props.addFun()},n.delFun=function(){n.props.delFun()},n.state={menuList:[],props:t,index:0},n}return Object(h.a)(a,[{key:"indexFun",value:function(t,e){this.setState({index:e}),this.props.indexFun(t)}},{key:"render",value:function(){var t=this;return Object(v.jsxs)(f.a,{component:"nav","aria-label":"main mailbox folders",children:[this.props.listData.map((function(e,a){return Object(v.jsxs)(g.a,{style:{padding:"0px",borderTop:"1px solid #fff",cursor:"pointer",position:"relative"},children:[Object(v.jsx)(y,{onClick:t.delFun}),Object(v.jsx)(F,{className:{"is-active":a===t.state.index},primary:"Method==>"+e.method,secondary:e.url,onClick:t.indexFun.bind(t,e.bW9ja2RhdGFjb2Rl,a)})]},a)})),Object(v.jsx)(g.a,{style:{padding:"0px",borderTop:"1px solid #fff",cursor:"pointer"},children:Object(v.jsx)(F,{className:{"is-active":-1===this.state.index},primary:"add",onClick:this.addFun})})]})}}]),a}(i.a.Component),w=a(48),S=a.n(w),C=a(148),D=a(149),R=a(157),T=a(153),G=a(159),I=a(152),M=0,W=[{path:"/",component:function(t){Object(b.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).gridText=function(t){var e,a={},i="",d="",o=Object(r.a)(n.state.data);try{for(o.s();!(e=o.n()).done;){var c=e.value;if(console.log(c.url,t),c.bW9ja2RhdGFjb2Rl===t){console.log(c),a=c.resquest,i=c.method,d=c.url;break}}}catch(s){o.e(s)}finally{o.f()}n.setState({code:t,viewData:JSON.stringify(a,null,4),method:i,url:d,add:!0}),console.log("gridText",M++,n.state)},n.save=function(){var t={};try{t.data=JSON.parse(n.state.viewData),t.method=n.state.method,t.url=n.state.url,t.bW9ja2RhdGFjb2Rl=n.state.code,S.a.post("/",{call:n.state.add?"add":"set",data:t}).then((function(t){console.log(t),n.setState({data:t.data.data,add:!1}),alert("\u6210\u529f")}))}catch(e){alert("\u6570\u636ejson\u5316\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u8c03\u6574")}},n.log=function(){console.log("this.state.viewData=>",Object(j.a)(n))},n.addFun=function(){console.log("1dd"),n.setState({viewData:"",method:"get",url:"",add:!0})},n.delFun=function(){S.a.post("/",{call:"del",data:{bW9ja2RhdGFjb2Rl:n.state.code}}).then((function(t){n.setState({data:t.data.data}),alert("\u6210\u529f")}))},n.state={code:0,method:"",url:"",data:[],viewData:"",add:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;S.a.post("/",{call:"get"}).then((function(e){e.data.data&&e.data.data.length&&(t.setState({data:e.data.data}),t.gridText(e.data.data[0].bW9ja2RhdGFjb2Rl))}))}},{key:"listIndex",value:function(t){this.gridText(t)}},{key:"render",value:function(){var t=this;return Object(v.jsxs)(C.a,{container:!0,alignContent:"center",children:[Object(v.jsx)(C.a,{item:!0,lg:2}),Object(v.jsx)(C.a,{item:!0,lg:2,children:this.state.data&&this.state.data.length?Object(v.jsx)(k,{delFun:this.delFun,listData:this.state.data,addFun:this.addFun,indexFun:this.listIndex.bind(this)}):void 0}),Object(v.jsxs)(C.a,{item:!0,lg:6,children:[Object(v.jsxs)(C.a,{item:!0,xs:12,children:[Object(v.jsxs)(D.a,{variant:"filled",children:[Object(v.jsx)(R.a,{id:"demo-simple-select-filled-label",children:"Method"}),Object(v.jsxs)(T.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:this.state.method,style:{width:120},onChange:function(e){t.setState({method:e.target.value})},children:[Object(v.jsx)("option",{value:"get",children:"get"}),Object(v.jsx)("option",{value:"post",children:"post"})]})]}),Object(v.jsx)(G.a,{id:"filled-basic",value:this.state.url,style:{width:520},onChange:function(e){t.setState({url:e.target.value})},label:"Filled",variant:"filled"}),Object(v.jsx)(I.a,{variant:"contained",color:"primary",onClick:this.save,children:"\u4fdd\u5b58"})]}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(G.a,{id:"filled-multiline-static",label:"Multiline",style:{width:900},multiline:!0,rows:20,value:this.state.viewData,onChange:function(e){t.setState({viewData:e.target.value})},variant:"filled"})})]}),Object(v.jsx)(C.a,{item:!0,lg:2})]})}}]),a}(i.a.Component)}],J=function t(e,a){var n=e.path,i=e.component,d=e.children;return d?Object(v.jsx)(s.b,{path:n,children:Object(v.jsxs)(s.d,{children:[d.map((function(e,i){return t(Object(c.a)(Object(c.a)({},e),{},{path:n+e.path}),"".concat(a,"-").concat(i))})),Object(v.jsx)(s.b,{path:n,component:i}),Object(v.jsx)(s.a,{to:"/404"})]})},a):Object(v.jsx)(s.b,{exact:!0,path:n,component:i},a)},L=function(){return Object(v.jsx)(l.a,{basename:"/",children:Object(v.jsxs)(s.d,{children:[W.map((function(t,e){return J(t,"key~".concat(e))})),Object(v.jsx)(s.a,{to:"/404"})]})})},N=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,160)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,d=e.getLCP,o=e.getTTFB;a(t),n(t),i(t),d(t),o(t)}))};o.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root")),N()},84:function(t,e,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.e999c314.chunk.js.map