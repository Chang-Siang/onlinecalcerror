(this.webpackJsonponlinecalcerror=this.webpackJsonponlinecalcerror||[]).push([[0],{379:function(e,t,a){e.exports=a(507)},384:function(e,t,a){},385:function(e,t,a){},391:function(e,t,a){},394:function(e,t){},396:function(e,t){},416:function(e,t,a){},417:function(e,t,a){},419:function(e,t,a){},507:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=a(116),i=(a(384),a(91)),s=a(102),m=a(129),u=(a(385),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title"},r.a.createElement(s.a,null,r.a.createElement("h1",null,"Error Calculator"))),r.a.createElement("div",{className:"header-nav"},r.a.createElement(s.a,null,r.a.createElement(m.a,{justify:!0,variant:"pills",defaultActiveKey:"/"},r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{eventKey:"0",as:c.b,to:"/",exact:!0,activeClassName:"active"},"Calculator")),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{eventKey:"1",as:c.b,to:"/ranking",activeClassName:"active"},"Ranking"))))),r.a.createElement("hr",null))}),d=(a(391),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(s.a,null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," www.flaticon.com")))}),f=a(20),h=a(31),p=a(29),E=a(39),v=a(40),g=a(41),D=a(186),y=a(67),w=a.n(y),b=function(e,t){return t-e},k=function(e){for(var t=0,a=e.length-1;a>=0;a--)t+=e[a];return t/e.length},C=function(e,t){return k(function(e,t){for(var a=[],n=e.length-1;n>=0;n--)a.push(Math.pow(b(e[n],t[n]),2));return a}(e,t))},x=function(e,t){return 100*k(function(e,t){for(var a=[],n=e.length-1;n>=0;n--)a.push(Math.abs(b(e[n],t[n])/e[n]));return a}(e,t))},S=a(105),O=a(42),M=a(127),N=a(250),F=a.n(N),j=a(147),Y=(a(415),a(416),["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]),I=null,T=null,R=function(e){var t=e.from,a=e.to,n=e.handleFromChange,l=e.handleToChange;!function(e,t){null===I&&""!==e&&(console.log("from :",e),I=e,T=t)}(t,a);var o={start:t,end:a};return r.a.createElement("div",null,r.a.createElement("div",{className:"InputFromTo"},r.a.createElement(F.a,{value:t,placeholder:"From",formatDate:j.formatDate,parseDate:j.parseDate,dayPickerProps:{modifiers:o,selectedDays:[t,{from:t,to:a}],months:Y,enableOutsideDays:!1,numberOfMonths:2,fromMonth:I,toMonth:a,disabledDays:{before:I,after:a},onDayClick:function(){return a.getInput().focus()}},onDayChange:n}),r.a.createElement("span",null," \u2014 "),r.a.createElement("span",{className:"InputFromTo-to"},r.a.createElement(F.a,{ref:function(e){return a=e},value:a,placeholder:"To",formatDate:j.formatDate,parseDate:j.parseDate,dayPickerProps:{month:t,modifiers:o,selectedDays:[t,{from:t,to:a}],months:Y,enableOutsideDays:!1,numberOfMonths:2,fromMonth:t,toMonth:T,disabledDays:{before:t,after:T}},onDayChange:l}))))},P=(a(417),{header:!0,dynamicTyping:!0,skipEmptyLines:!0,transformHeader:function(e){return e.toLowerCase().replace(/\W/g,"_")}}),A=function(e){var t=e.handleForce;return r.a.createElement("div",{className:"react-csv"},r.a.createElement(D.a,{onFileLoaded:t,parserOptions:P}))},U=a(255),L=a(251),W=function(e){var t=e.mape,a=e.rmse;return r.a.createElement("div",null,r.a.createElement(S.a,{className:"align-items-center rmse"},r.a.createElement(O.a,{xs:4,className:"score-type"},r.a.createElement(M.a,{pill:!0,variant:"danger"},"RMSE")),r.a.createElement(O.a,{xs:8,className:"score-value"},r.a.createElement(U.a,{overlay:r.a.createElement(L.a,null,a)},r.a.createElement("span",null,a.toFixed(4))))),r.a.createElement(S.a,{className:"align-items-center mape"},r.a.createElement(O.a,{xs:4,className:"score-type"},r.a.createElement(M.a,{pill:!0,variant:"primary"},"MAPE")),r.a.createElement(O.a,{xs:8,className:"score-value"},r.a.createElement(U.a,{overlay:r.a.createElement(L.a,null,t)},r.a.createElement("span",null,t.toFixed(4))))))},_=a(24),H=a(364),G=a(130),J=a(252),K=function(e){var t=e.username,a=e.handleChange,l=e.handleISaveResult,o=Object(n.useState)(!1),c=Object(_.a)(o,2),i=c[0],s=c[1];return r.a.createElement(G.a,{noValidate:!0,validated:i,onSubmit:function(e){!1===e.currentTarget.checkValidity()?(e.preventDefault(),e.stopPropagation()):l(),s(!0)}},r.a.createElement(G.a.Row,null,r.a.createElement(G.a.Group,{as:O.a,xs:"12",md:"6",controlId:"validationCustomUsername"},r.a.createElement(J.a,null,r.a.createElement(G.a.Control,{type:"text",placeholder:"Enter your name.","aria-describedby":"inputGroupPrepend",value:t,onChange:a,required:!0}),r.a.createElement(J.a.Append,null,r.a.createElement(H.a,{type:"submit",variant:"outline-primary"},"Save Result")),r.a.createElement(G.a.Control.Feedback,{type:"invalid"},"Please enter your name.")))))},V=(a(419),""),q="",B=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(E.a)(this,Object(v.a)(t).call(this))).loadOriginData=function(){Object(D.b)("https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/elec_data/elec_merge_20160101_20190930.csv",{download:!0,header:!0,complete:function(t){V=new Date(t.data[0].date),q=new Date(t.data[t.data.length-2].date),e.setState({originData:t.data,from:V,to:q})}})},e.ajaxServerItemAdd=function(e){var t=e;fetch("http://localhost:3020/ranking",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){alert("\u5132\u5b58\u6210\u529f")})).catch((function(e){console.error("error:",e)}))},e.getOriginData=function(){return Object(f.a)(e.state.originData).filter((function(t){return e.state.from<=new Date(t.date)&&new Date(t.date)<=e.state.to})).map((function(e){return e.kW}))},e.forecastDataCleaning=function(e){var t,a=(t=[]).concat.apply(t,Object(f.a)(e));return isNaN(a[0])&&a.splice(0,1),a.filter((function(e){return e}))},e.dataCheck=function(t){var a=e.getOriginData();a.length===t.length?e.calculateScore(a,t):alert("\u4e0a\u50b3\u8cc7\u6599\u9577\u5ea6\u932f\u8aa4")},e.calculateScore=function(t,a){var n,r,l=(n=t,r=a,Math.sqrt(C(n,r))),o=x(t,a);e.setState({isFileUpload:!0,rmse:l,mape:o})},e.handleFromChange=function(t){var a=new Date(t);isNaN(a.valueOf())||(t=new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0),V>t&&(alert("Out of Range."),t=V)),e.setState({from:t})},e.handleToChange=function(t){var a=new Date(t);isNaN(a.valueOf())||(t=new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0),q<t&&(t=q,alert("Out of Range."))),e.setState({to:t})},e.handleForce=function(t,a){var n=[".xlsx",".xls",".csv"],r=a.substring(a.lastIndexOf("."));if(n.indexOf(r)<0)alert("\u6a94\u6848\u985e\u578b\u932f\u8aa4\uff0c\u53ef\u63a5\u53d7\u7684\u526f\u6a94\u540d\u6709\uff1a"+n.toString());else{var l=e.forecastDataCleaning(t.data);e.dataCheck(l)}},e.handleChange=function(t){e.setState({username:t.target.value})},e.handleISaveResult=function(){var t={id:+new Date,name:e.state.username,from:e.state.from,to:e.state.to,mape:e.state.mape,rmse:e.state.rmse};e.state.isFileUpload?(e.ajaxServerItemAdd(t),e.setState({isFileUpload:!1})):alert("\u8acb\u91cd\u65b0\u4e0a\u50b3\u6a94\u6848")},e.state={isFileUpload:!1,originData:[],username:"",from:"",to:"",mape:0,rmse:0},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount()"),this.loadOriginData()}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate()")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount()")}},{key:"showFromMonth",value:function(){var e=this.state,t=e.from,a=e.to;t&&w()(a).diff(w()(t),"months")<2&&this.to.getDayPicker().showMonth(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Calculator"},r.a.createElement(S.a,{className:"align-items-center calculator-date-range"},r.a.createElement(O.a,{xs:12,md:4,className:"row-title"},r.a.createElement("h2",null,"Select a Date Range")),r.a.createElement(O.a,{xs:12,md:8},r.a.createElement(R,{from:this.state.from,to:this.state.to,handleFromChange:this.handleFromChange,handleToChange:this.handleToChange}),r.a.createElement(M.a,{pill:!0,variant:"primary"},(this.state.to-this.state.from)/864e5+1," Days"))),r.a.createElement("hr",null),r.a.createElement(S.a,{className:"align-items-center calculator-csv-reader"},r.a.createElement(O.a,{xs:12,md:4,className:"row-title"},r.a.createElement("h2",null,"Select CSV File")),r.a.createElement(O.a,{xs:12,md:8},r.a.createElement(A,{handleForce:this.handleForce}),r.a.createElement(M.a,{pill:!0,variant:"secondary"},r.a.createElement("a",{href:"https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/elec_data/Sample(273Days).csv"},r.a.createElement("span",{className:"glyphicon glyphicon-download-alt","aria-hidden":"true"}),"File format template")))),r.a.createElement("hr",null),r.a.createElement(S.a,{className:"align-items-center calculator-score"},r.a.createElement(O.a,{xs:12,md:4,className:"row-title"},r.a.createElement(W,{rmse:this.state.rmse,mape:this.state.mape})),r.a.createElement(O.a,{xs:12,md:8},r.a.createElement(K,{username:this.state.username,handleChange:this.handleChange,handleISaveResult:this.handleISaveResult}))))}}]),t}(n.Component),$=a(365),z=a.n($),Q=function(e){var t=e.rankingData,a=e.onItemDelClick;return r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement(z.a,{title:"Ranking",columns:[{title:"\u4e0a\u50b3\u8005",field:"name"},{title:"\u9810\u6e2c\u7bc4\u570d",field:"range",render:function(e){return r.a.createElement("div",null,"[",w()(e.from).format("YYYY-MM-DD"),"] - [",w()(e.to).format("YYYY-MM-DD"),"]")},customFilterAndSearch:function(e,t){return-1!==w()(t.from).format("YYYY-MM-DD").indexOf(e)||-1!==w()(t.to).format("YYYY-MM-DD").indexOf(e)}},{title:"RMSE",field:"rmse",type:"numeric",render:function(e){return r.a.createElement("div",null,e.rmse.toFixed(6))}},{title:"MAPE",field:"mape",type:"numeric",render:function(e){return r.a.createElement("div",null,e.mape.toFixed(6))}},{title:"\u4e0a\u50b3\u6642\u9593",field:"id",render:function(e){return r.a.createElement("div",null,w()(e.id).format("YYYY-MM-DD HH:mm"))},customFilterAndSearch:function(e,t){return-1!==w()(t.id).format("YYYY-MM-DD HH:mm").indexOf(e)}}],data:t,options:{actionsColumnIndex:-1,filtering:!0},editable:{onRowDelete:function(e){return new Promise((function(t,n){setTimeout((function(){a(e.tableData.id),t()}),1e3)}))}}}))},X=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(E.a)(this,Object(v.a)(t).call(this))).ajaxServerItemsLoad=function(){fetch("http://localhost:3020/ranking",{method:"GET"}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(t){var a=t.map((function(e){return Object.assign({},e,{range:new Date(e.to)-new Date(e.from)})}));console.log("items :",a),e.setState({items:a,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1,error:!0})}))},e.ajaxServerItemDelete=function(e){var t=e.id;fetch("http://localhost:3020/"+"ranking/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){console.log("item:",e)})).catch((function(e){console.error("error:",e)}))},e.handleDelItem=function(t){var a=Object(f.a)(e.state.items);e.ajaxServerItemDelete(a[t]),a.splice(t,1),e.setState({items:a})},e.state={items:[],loading:!1,error:!1},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.ajaxServerItemsLoad()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Q,{rankingData:this.state.items,onItemDelClick:this.handleDelItem}))}}]),t}(n.Component);a(505),a(506);var Z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main"},r.a.createElement(u,null),r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:B}),r.a.createElement(i.a,{path:"/ranking",component:X})))),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[379,1,2]]]);
//# sourceMappingURL=main.0b90e0a3.chunk.js.map