(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1mUR":function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("q1tI"));a("2qtc");var u=l(a("kLXV"));a("DZo9");var r=l(a("8z0m"));a("Pwec");var d=l(a("CtXQ")),f=l(a("d6i3")),c=l(a("1l/V")),m=l(a("2Taf")),i=l(a("vZ4D")),s=l(a("l4Ni")),o=l(a("ujKo")),p=l(a("MhPg")),E=l(a("WLYE"));function v(e){return new Promise(function(t,a){var l=new FileReader;l.readAsDataURL(e),l.onload=function(){return t(l.result)},l.onerror=function(e){return a(e)}})}var h=function(e){function t(){var e,a;(0,m.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,s.default)(this,(e=(0,o.default)(t)).call.apply(e,[this].concat(n))),a.state={previewVisible:!1,previewImage:"",fileList:[{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]},a.handleCancel=function(){return a.setState({previewVisible:!1})},a.handlePreview=function(){var e=(0,c.default)(f.default.mark(function e(t){return f.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,v(t.originFileObj);case 3:t.preview=e.sent;case 4:a.setState({previewImage:t.url||t.preview,previewVisible:!0});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.fileList;return a.setState({fileList:t})},a}return(0,p.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.state,t=e.previewVisible,a=e.previewImage,l=e.fileList,f=n.default.createElement("div",null,n.default.createElement(d.default,{type:"plus"}),n.default.createElement("div",{className:"ant-upload-text"},"Upload"));return n.default.createElement("div",{className:E.default.clearfix},n.default.createElement(r.default,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",listType:"picture-card",fileList:l,onPreview:this.handlePreview,onChange:this.handleChange},l.length>=1?null:f),n.default.createElement(u.default,{visible:t,footer:null,onCancel:this.handleCancel},n.default.createElement("img",{alt:"example",style:{width:"100%"},src:a})))}}]),t}(n.default.Component),g=h;t.default=g},VuVi:function(e,t,a){e.exports={asset_in:"antd-pro-pages-home-asset-in-asset-in-asset_in",form_header:"antd-pro-pages-home-asset-in-asset-in-form_header",button_tool:"antd-pro-pages-home-asset-in-asset-in-button_tool",template_title:"antd-pro-pages-home-asset-in-asset-in-template_title",template_content:"antd-pro-pages-home-asset-in-asset-in-template_content",template_attention:"antd-pro-pages-home-asset-in-asset-in-template_attention"}},WLYE:function(e,t,a){e.exports={clearfix:"antd-pro-components-pictures-wall-index-clearfix"}},hDL1:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DZo9");var u=l(a("8z0m"));a("Pwec");var r=l(a("CtXQ"));a("+L6B");var d=l(a("2/Rp"));a("iQDF");var f=l(a("+eQT"));a("14J3");var c=l(a("BMrR"));a("jCWc");var m=l(a("kPKH")),i=l(a("2Taf")),s=l(a("vZ4D")),o=l(a("l4Ni")),p=l(a("ujKo")),E=l(a("MhPg"));a("y8nQ");var v=l(a("Vl3Y"));a("5NDa");var h=l(a("5rEg"));a("OaEy");var g=l(a("2fM7"));a("Znn+");var w,b,y,x=l(a("ZTPi")),I=n(a("q1tI")),_=(a("MuoO"),a("LLXN"),l(a("1mUR"))),z=l(a("VuVi")),N=x.default.TabPane,C=g.default.Option,D=h.default.TextArea,k=(w=v.default.create(),w((y=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,o.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(n))),a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})},a.reset=function(e){e.preventDefault(),a.props.form.resetFields()},a.getUploadProps=function(){return{name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?message.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&message.error("".concat(e.file.name," file upload failed."))}}},a.beginImport=function(){},a}return(0,E.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}}},t=this.props.form.getFieldDecorator;return I.default.createElement("div",{className:z.default.asset_in},I.default.createElement(x.default,{defaultActiveKey:"1"},I.default.createElement(N,{tab:"\u65b0\u589e\u8d44\u4ea7",key:"1"},I.default.createElement(v.default,e,I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement("span",{className:z.default.form_header},"\u57fa\u672c\u4fe1\u606f"))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u8d44\u4ea7\u7f16\u7801"},t("assetCode",{normalize:function(e){return e?e.trim():e},rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d44\u4ea7\u7f16\u7801"},{pattern:/^[a-zA-Z0-9\-]{2,30}$/,message:"\u8d44\u4ea7\u7f16\u7801\u53ea\u80fd\u8f93\u51652-30\u4f4d\uff0c\u53ef\u5305\u542b\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c\u7b26\u53f7\u201c-\u201d"}]})(I.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u8d44\u4ea7\u7f16\u7801"})))),I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u8d44\u4ea7\u540d\u79f0"},t("assetName",{normalize:function(e){return e?e.trim():e},rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d44\u4ea7\u540d\u79f0"},{pattern:/^[\s\S]{2,20}$/,message:"\u8d44\u4ea7\u540d\u79f0\u53ea\u80fd\u8f93\u51652-20\u4f4d"}]})(I.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u8d44\u4ea7\u540d\u79f0"}))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u8d44\u4ea7\u5206\u7c7b"},t("assetTypeID",{normalize:function(e){return e?e.trim():e},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d44\u4ea7\u5206\u7c7b"}]})(I.default.createElement(g.default,{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u8d44\u4ea7\u5206\u7c7b"},I.default.createElement(C,{value:"\u9ed8\u8ba4\u5206\u7c7b"},"\u9ed8\u8ba4\u5206\u7c7b"))))),I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u6240\u5c5e\u7ec4\u7ec7"},t("ownDepID",{normalize:function(e){return e?e.trim():e},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6240\u5c5e\u7ec4\u7ec7"}]})(I.default.createElement(g.default,{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u6240\u5c5e\u7ec4\u7ec7"},I.default.createElement(C,{value:"\u603b\u7ecf\u529e"},"\u603b\u7ecf\u529e"),I.default.createElement(C,{value:"\u4eba\u529b\u8d44\u6e90\u90e8"},"\u4eba\u529b\u8d44\u6e90\u90e8"),I.default.createElement(C,{value:"\u8d22\u52a1\u90e8"},"\u8d22\u52a1\u90e8"),I.default.createElement(C,{value:"\u884c\u653f\u90e8"},"\u884c\u653f\u90e8")))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u7ba1\u7406\u5458"},t("ownUserID",{normalize:function(e){return e?e.trim():e}})(I.default.createElement(g.default,{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"},I.default.createElement(C,{value:"xxxx"},"xxxx"))))),I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u4f7f\u7528\u7ec4\u7ec7"},t("occupyDepID",{normalize:function(e){return e?e.trim():e}})(I.default.createElement(g.default,{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u4f7f\u7528\u7ec4\u7ec7"},I.default.createElement(C,{value:"\u603b\u7ecf\u529e"},"\u603b\u7ecf\u529e"),I.default.createElement(C,{value:"\u4eba\u529b\u8d44\u6e90\u90e8"},"\u4eba\u529b\u8d44\u6e90\u90e8"),I.default.createElement(C,{value:"\u8d22\u52a1\u90e8"},"\u8d22\u52a1\u90e8"),I.default.createElement(C,{value:"\u884c\u653f\u90e8"},"\u884c\u653f\u90e8")))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u4f7f\u7528\u4eba"},t("occupyStfID",{normalize:function(e){return e?e.trim():e}})(I.default.createElement(g.default,{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u4f7f\u7528\u4eba"},I.default.createElement(C,{value:"xxxx"},"xxxx"))))),I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u533a\u57df"},t("area",{normalize:function(e){return e?e.trim():e},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6240\u5c5e\u7ec4\u7ec7"}]})(I.default.createElement(g.default,{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u533a\u57df"},I.default.createElement(C,{value:"\u9ed8\u8ba4\u533a\u57df"},"\u9ed8\u8ba4\u533a\u57df")))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement("span",{className:z.default.form_header},"\u5176\u4ed6\u4fe1\u606f"))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u5b58\u653e\u5730\u70b9"},t("location",{normalize:function(e){return e?e.trim():e}})(I.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u5b58\u653e\u5730\u70b9"})))),I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u89c4\u683c\u578b\u53f7"},t("specification",{normalize:function(e){return e?e.trim():e}})(I.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u89c4\u683c\u578b\u53f7"}))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u8ba1\u91cf\u5355\u4f4d"},t("unit",{normalize:function(e){return e?e.trim():e}})(I.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u8ba1\u91cf\u5355\u4f4d"})))),I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u4ef7\u503c(\u5143)"},t("price",{normalize:function(e){return e?e.trim():e},rules:[{pattern:/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u4ef7\u503c\uff08\u4fdd\u7559\u5c0f\u6570\u70b9\u540e\u4e24\u4f4d\uff09"}]})(I.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u4ef7\u503c(\u5143)"}))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u4f7f\u7528\u671f\u9650(\u6708)"},t("expire",{normalize:function(e){return e?e.trim():e},rules:[{pattern:/^([1-9][0-9]{0,2})$/,message:"\u4f7f\u7528\u671f\u9650(\u6708)\u53ea\u80fd\u8f93\u51651-999\u4e4b\u95f4\u6574\u578b"}]})(I.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u4f7f\u7528\u671f\u9650(\u6708)"})))),I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u8d2d\u4e70\u65e5\u671f"},t("purchasedAt",{})(I.default.createElement(f.default,{placeholder:"\u8bf7\u9009\u62e9\u8d2d\u4e70\u65e5\u671f",style:{width:"100%"}}))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u4f9b\u5e94\u5546"},t("supplier",{normalize:function(e){return e?e.trim():e}})(I.default.createElement(h.default,{placeholder:"\u8bf7\u8f93\u5165\u4f9b\u5e94\u5546"}))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u5907\u6ce8"},t("memo",{})(I.default.createElement(D,{rows:6,placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"})))),I.default.createElement(m.default,{span:9},I.default.createElement(v.default.Item,{label:"\u7167\u7247"},t("snapshot",{})(I.default.createElement(_.default,null)))))),I.default.createElement("div",{className:z.default.button_tool},I.default.createElement(d.default,{type:"primary",onClick:this.handleSubmit},"\u4fdd\u5b58"),I.default.createElement(d.default,{onClick:this.reset},"\u91cd\u7f6e"))),I.default.createElement(N,{tab:"\u6279\u91cf\u5bfc\u5165\u8d44\u4ea7",key:"2"},I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:24},I.default.createElement("div",{className:z.default.template_title},"1\u3001\u8bf7\u9009\u62e9\u81ea\u5b9a\u4e49\u6a21\u677f"),I.default.createElement("div",{className:z.default.template_content},I.default.createElement(g.default,{style:{width:"300px"},placeholder:"\u8bf7\u9009\u62e9\u81ea\u5b9a\u4e49\u6a21\u677f"},I.default.createElement(C,{value:"\u901a\u7528\u6a21\u677f"},"\u901a\u7528\u6a21\u677f"))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:24},I.default.createElement("div",{className:z.default.template_title},"2\u3001\u8bf7\u6309\u7167\u6570\u636e\u6a21\u677f\u7684\u683c\u5f0f\u51c6\u5907\u8981\u5bfc\u5165\u7684\u6570\u636e"),I.default.createElement("div",{className:z.default.template_content},I.default.createElement("a",null,"\u4e0b\u8f7d\u6570\u636e\u6a21\u677f"),I.default.createElement("div",{className:z.default.template_attention},I.default.createElement("h3",null,"\u6ce8\u610f\u4e8b\u9879:"),I.default.createElement("p",null,"1\u3001\u6a21\u677f\u4e2d\u7684\u8868\u5934\u540d\u79f0\u4e0d\u53ef\u66f4\u6539\uff0c\u8868\u5934\u884c\u4e0d\u80fd\u5220\u9664\uff1b"),I.default.createElement("p",null,"2\u3001\u9879\u76ee\u987a\u5e8f\u4e0d\u53ef\u4ee5\u8c03\u6574\uff0c\u4e0d\u9700\u8981\u7684\u9879\u76ee\u53ef\u4ee5\u4e0d\u586b\u5199\uff1b"),I.default.createElement("p",null,"3\u3001\u5176\u4e2d\u8868\u5934\u4e3a\u7ea2\u8272\u5b57\u4f53\u7684\u9879\u662f\u5fc5\u586b\u9879\uff0c\u5305\u62ec\u8d44\u4ea7\u7f16\u7801\u3001\u8d44\u4ea7\u540d\u79f0\u3001\u8d44\u4ea7\u5206\u7c7b\u3001\u6240\u5c5e\u7ec4\u7ec7\u3001\u533a\u57df\uff1b"),I.default.createElement("p",null,"4\u3001\u8d44\u4ea7\u5206\u7c7b\u3001\u533a\u57df\u8bf7\u8f93\u5165\u76f8\u5e94\u540d\u79f0\uff0c\u5982\uff1a\u9ed8\u8ba4\u533a\u57df\uff1b"),I.default.createElement("p",null,"5\u3001\u8f93\u5165\u7ec4\u7ec7\u65f6\uff0c\u76f8\u540c\u540d\u79f0\u7684\u5904\u7406\u65b9\u6cd5\uff0c\u5982\uff1a\u7cbe\u81e3\u96c6\u56e2>\u6b66\u6c49\u7cbe\u81e3\u79d1\u6280>\u8d22\u52a1\u90e8\uff1b"),I.default.createElement("p",null,"6\u3001\u6240\u6709\u5bfc\u5165\u7684\u6570\u636e\u4e0d\u53ef\u91cd\u590d\uff0c\u5224\u65ad\u4f9d\u636e\uff1a\u8d44\u4ea7\u7f16\u7801\uff1b"),I.default.createElement("p",null,"7\u3001\u5355\u6b21\u6700\u591a\u53ef\u5bfc\u51655000\u6761\u8d44\u4ea7\uff0c\u6587\u4ef6\u4e0d\u53ef\u8d85\u8fc71MB\u3002"))))),I.default.createElement(c.default,{gutter:24},I.default.createElement(m.default,{span:8},I.default.createElement("div",{className:z.default.template_title},"3\u3001\u9009\u62e9\u9700\u8981\u5bfc\u5165\u7684Excel\u6587\u4ef6"),I.default.createElement("div",{className:z.default.template_content},I.default.createElement(u.default,this.getUploadProps,I.default.createElement(d.default,null,I.default.createElement(r.default,{type:"upload"})," \u6dfb\u52a0\u6587\u4ef6"))))),I.default.createElement("div",{className:z.default.button_tool},I.default.createElement(d.default,{type:"primary",onClick:this.beginImport},"\u5f00\u59cb\u5bfc\u5165")))))}}]),t}(I.Component),b=y))||b),P=k;t.default=P}}]);