import{u as e,a$ as t,r as a,R as n,J as i}from"./index.js";import{T as r}from"./Table.js";import"./index9.js";import"./Dropdown.js";const l=undefined,c=undefined;var o="_headContainer_c2yys_1",d="_button_c2yys_7";const{Column:s}=r,{Search:u}=i;function m(){const{data:i,loading:l,request:c}=e(t,{}),d={pageNum:1,pageSize:10,content:""};a.exports.useEffect((()=>{!async function(){await c(d)}()}),[]);const m=(e,t)=>{let a=null;return n=>{a&&clearTimeout(a),a=setTimeout((()=>{e.call(this,n)}),t)}};return n.createElement("div",null,n.createElement("div",{className:o},n.createElement(u,{placeholder:"\u8bf7\u8f93\u5165\u6e90IP",onSearch:async e=>{d.content=e,await c(d)},onChange:m((async e=>{d.content=e.target.value,await c(d)}),500),style:{width:200}})),n.createElement(r,{dataSource:null==i?void 0:i.data,loading:l,rowKey:e=>e.id,pagination:{defaultCurrent:1,total:null==i?void 0:i.total,pageSize:null==i?void 0:i.pageSize,async onChange(e,t){await c({pageNum:e,pageSize:t,content:""})}}},n.createElement(s,{title:"\u6e90IP",dataIndex:"originIP",key:"originIP",align:"center"}),n.createElement(s,{title:"\u6e90\u8bbf\u95ee\u8def\u5f84",dataIndex:"originuri",key:"originuri",align:"center"}),n.createElement(s,{title:"\u4ee3\u7406uri",dataIndex:"proxyuri",key:"proxyuri",align:"center"}),n.createElement(s,{title:"\u8def\u7531\u65ad\u8a00",dataIndex:"routeName",key:"routeName",align:"center"}),n.createElement(s,{title:"\u76ee\u6807\u670d\u52a1",dataIndex:"targetService",key:"targetService",align:"center"}),n.createElement(s,{title:"\u76ee\u6807\u670d\u52a1\u5b9e\u4f8b",dataIndex:"serviceInstance",key:"serviceInstance",align:"center"}),n.createElement(s,{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createdTime",key:"createdTime",align:"center"})))}const g=m;export{g as default};
