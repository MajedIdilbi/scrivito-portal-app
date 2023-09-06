"use strict";(("undefined"!=typeof self?self:global).webpackChunk=("undefined"!=typeof self?self:global).webpackChunk||[]).push([[28,461],{7691:(t,e,i)=>{i.d(e,{$:()=>p,Z:()=>u});var r=i(9802),n=i(9541),o=Object.defineProperty,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,d=(t,e)=>{for(var i in e||(e={}))a.call(e,i)&&l(t,i,e[i]);if(s)for(var i of s(e))c.call(e,i)&&l(t,i,e[i]);return t};function u(t,e,i){return(0,r.Y3)((()=>g((r=>{r[t]={content:e,parentElementId:i}})))),()=>(0,r.Y3)((()=>g((e=>{delete e[t]}))))}function p(){const t=m();return Object.keys(t).map((e=>{const i=parseInt(e,10);return d({elementId:i},t[i])}))}const f=(0,n.JH)();function g(t){const e=d({},m());t(e),f.set(e)}function m(){return f.get()||{}}},7097:(t,e,i)=>{i.d(e,{so:()=>a,st:()=>c,ui:()=>s});var r=i(9802),n=i(7975);const o={};function s(t,e){o[t]=e}function a(t){delete o[t]}function c(t){return o[t]?l.get(t).get():null}const l=new n.X2({loadElement:t=>({stream:new r.fU((e=>{const i=()=>{const i=o[t];e.next(i?function(t){const{left:e,top:i,width:r,height:n}=t.getBoundingClientRect();return{x:e+window.pageXOffset,y:i+window.pageYOffset,width:r,height:n}}(i):null)};i();const r=window.setInterval(i,1e3);return()=>window.clearInterval(r)}))})})},1328:(t,e,i)=>{i.r(e),i.d(e,{Editor:()=>nt,Team:()=>rt,editorRegistrationFor:()=>d,getCachedValidationReportEntries:()=>W,getDataStackVariables:()=>X,getDataVariablesFor:()=>Y,getGlobalDataVariables:()=>z,installDndHandler:()=>o,installScrollHandler:()=>v,isAttributeValidationReportEntry:()=>y,openContentBrowser:()=>m,registerEditor:()=>l,reloadIfContextChangesFrom:()=>R,runValidationsFor:()=>x,setModeIndicators:()=>f,titleForBasicWidget:()=>w,validationResultsFor:()=>$});var r=i(7515),n=i(9802);function o(){const t=(0,n.Me)();t.addEventListener("dragover",(t=>function(t){t.dataTransfer.dropEffect="move",t.preventDefault();const e={x:t.pageX,y:t.pageY};(0,r.K)().dragTo(e)}(t))),t.addEventListener("drop",(()=>{(0,r.K)().drop()}))}var s=i(9541);let a=0,c={};function l(t){const e=(a++,a.toString());c[e]=t;const i=u.get()||[];u.set([...i,e])}function d({type:t,tag:e}){const i=u.get();if(i){const r=i.find((i=>c[i]&&c[i].canEdit({type:t,tag:e})));if(r){return{id:r,editorClass:c[r]}}}}const u=(0,s.JH)();var p=i(8084);function f(){const t=(0,n.Me)().body;t.classList.add("scrivito_editing_active"),(0,p.DG)()&&t.setAttribute("data-scrivito-editing",""),(0,p.rl)()&&t.setAttribute("data-scrivito-comparison","")}var g=i(3409);function m(t={}){return(0,r.K)().openContentBrowser((0,g.f)(t))}function v(){(0,n.Me)().addEventListener("dragover",(t=>{const e=t.clientY,i=(0,n.bY)(),r=(0,n.XO)();r>0&&e<30?(0,n.X5)(i,r-25):(0,n.aZ)()>r+(0,n.WS)()&&e>(0,n.WS)()-30&&(0,n.X5)(i,r+25)}))}var h=i(8611),b=i(5932);function w(t){return function(t){var e;const i=t.objClass(),r=null==(e=(0,h.xk)(i))?void 0:e.titleForContent;if("function"==typeof r)try{return r((0,b.pz)(t))}catch(t){(0,n.a6)(t)}}(t)||(e=t.objClass(),(null==(i=(0,h.xk)(e))?void 0:i.title)||(0,n.G8)(e));var e,i}function y(t){return!!t.attributeName}var j=i(426),C=i.n(j),O=i(6666),E=i(7975),_=i(506),k=Object.defineProperty,M=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,S=(t,e,i)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;const I={error:0,warning:1,info:2},N=(0,n.PJ)("validationResultsFor",[["model",n.pC.union([_.Bt,_.l9])],["attributeName",n.pC.String]],{docPermalink:"js-sdk/validationResultsFor"});function $(t,e,...i){return N(t,e,...i),W(t._scrivitoPrivateContent).filter((t=>y(t)&&t.attributeName===e)).sort((({severity:t},{severity:e})=>I[t]-I[e])).map((t=>({message:t.message,severity:t.severity})))}const W=(0,E.wV)([],(t=>t instanceof _.Jj?t.id():`${t.obj().id()}/${t.id()}`),x);function x(t){var e;const i=t instanceof _.Jj?t:t.obj();if(!i.isEdited()&&!i.isNew())return[];const r=t.objClass(),o=null==(e=(0,h.xk)(r))?void 0:e.validations;if(!o)return[];const s=(0,b.pz)(t);return C()(o.map((t=>(0,O.eK)(t)?function(t,e){return F(`Please check validations for the model ${e._scrivitoPrivateContent.objClass()}. `,t,e).map(T)}(t,s):function(t,e){const[i,...r]=t,o=e._scrivitoPrivateContent.objClass();if(!function(t){return!(0,n.mb)(t)||V(t)}(i))return(0,n.a6)(new n.ir(`Found an attribute validation callback for the system attribute ${i} of the model ${o}. Attribute validations can only be used for custom attributes and for the system attributes "_language" and "_permalink". For other system attributes please use class-based validations. Visit ${(0,n.m0)("js-sdk/provideEditingConfig#validations")} for more information.`)),[];let s;if(V(i)){const t=e._scrivitoPrivateContent;if(!(t instanceof _.Jj))return[];switch(i){case"_language":s=t.language();break;case"_permalink":s=t.permalink()}}else{const t=b.V_.basicFieldFor(e,i);if(!t)return[];s=(0,b.pz)(t.get())}const a=((t,e)=>{for(var i in e||(e={}))P.call(e,i)&&S(t,i,e[i]);if(M)for(var i of M(e))D.call(e,i)&&S(t,i,e[i]);return t})({name:i},(l=e,l._scrivitoPrivateContent instanceof _.Jj?{content:e,obj:e}:{content:e,widget:e})),c=`Please check validations for the attribute ${i} of the model ${o}. `;var l;return C()(r.map((t=>{var e;const r=(0,O.np)(t),n=(0,O.tj)(t)&&(null==(e=t[0])?void 0:e.severity);return F(c,r,s,a).map((t=>({attributeName:i,message:t.message,severity:n||t.severity||"error"})))})))}(t,s))))}function T(t){return{message:t.message,severity:t.severity||"error"}}function V(t){return["_language","_permalink"].includes(t)}function F(t,e,...i){let r;try{r=e(...i)}catch(t){return(0,n.a6)(t),[]}return r?"string"==typeof r?[{message:r}]:Array.isArray(r)&&r.every((t=>"string"==typeof t))?r.map((t=>({message:t}))):function(t){return!!t&&"object"==typeof t&&!!t.message&&(e=t.severity,"string"==typeof e&&-1!==O.bI.indexOf(e));var e}(r)?[r]:((0,n.a6)(new n.ir(`A validation must return a validation result or a falsy value. ${t}Visit ${(0,n.m0)("js-sdk/provideEditingConfig#validations")} for more information.`)),[]):[]}function R(t){(0,E.DU)((()=>(0,r.K)().currentEditingContext())).subscribe((e=>{const i=null==e?void 0:e.windowName;i&&i!==t&&((0,n.sy)(i),(0,n.H5)())}))}var A=i(9636),B=i.n(A),K=i(9145),L=Object.defineProperty,G=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,U=(t,e,i)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;const z=(0,E.wV)(void 0,(function(){let t;return(0,K.d$)().forEach((e=>{const i=e.dataClass().name(),r=(0,h.xk)(i),n=null==r?void 0:r.attributes;if(!n)return;const o=q(r.title,i);Object.entries(n).forEach((([r,{title:n}])=>{const s=e.get(r);t||(t={}),t[`${i}.${r}`]={dataClassTitle:o,title:q(n,r),value:"string"==typeof s?s:void 0}}))})),t}));const X=(0,E.wV)(void 0,(function(t){return t.filter(K.Fv).map((({_class:t,_id:e})=>`${t}:${e}`)).join()}),(function(t){const e=t.filter(K.Fv).map((({_class:t,_id:e})=>{var i;return null==(i=(0,K.KT)(t))?void 0:i.get(e)})).filter((t=>!!t)).map(Z).filter((t=>!!t));return 0===e.length?void 0:Object.assign({},...e)}));function Y(t,e){const i=Q(t);if(i)return function(t,e){return B()(t,((t,i)=>((t,e)=>{for(var i in e||(e={}))H.call(e,i)&&U(t,i,e[i]);if(G)for(var i of G(e))J.call(e,i)&&U(t,i,e[i]);return t})({title:t},function(t,e){if(!e)return;const i=e[t];return void 0===i?void 0:{value:i}}(i,e))))}(i,e)}function Z(t){let e;const i=t.obj();if(i){const t=i?(0,K.Gc)((0,b.bM)(i)):void 0;e=t?Object.keys(t):[]}const r=t.dataClass().name(),n=(0,h.xk)(r),o=null==n?void 0:n.attributes,s=q(null==n?void 0:n.title,r);if(!o)return;const a={};return Object.keys(o).forEach((i=>{var n;if(e&&!e.includes(i))return;const c=q(null==(n=o[i])?void 0:n.title,i),l=t.get(i);"string"==typeof l&&(a[`${r}.${i}`]={dataClassTitle:s,title:c,value:l})})),a}function q(t,e){return t||(0,n.G8)(e)}function Q(t){var e;const i=t.getContainer(),r=null==(e=(0,h.xk)(i.objClass()))?void 0:e.attributeDataContext;if(r){const e=r[t.name()];return"string"==typeof e?function(t,e){var i;const r=t.getContainer().get(e,"datalocator").class();if(null===r)return;const n=null==(i=(0,h.xk)(r))?void 0:i.attributes;if(!n)return;return B()(n,(({title:t},e)=>q(t,e)))}(t,e):e}if(i instanceof _.E8){const t=i.obj().fieldContainingWidget(i);if(t)return Q(t)}}var tt=i(3467),et=i(9470),it=i(1425);class rt{constructor(t){this.teamData=t}id(){return this.teamData.id}name(){return this.teamData.name}description(){return this.teamData.description||""}}class nt extends it.n{constructor(t,e){super(t),this.teamsData=e}teams(){return this.teamsData.map((t=>new rt(t)))}authToken(){var t;const e=null==(t=et.k)?void 0:t.getEditorAuthToken({treatLocalhostLike:(0,tt.XF)()});if(!e)return"";if("string"!=typeof e.token)throw new n.Ix(e.error);return e.token}}},2028:(t,e,i)=>{i.r(e),i.d(e,{AttributeValueWithEditing:()=>F,ChildListTagWithEditing:()=>Gt,OptionMarker:()=>mt,WidgetPlaceholder:()=>ne,WidgetTagWithEditing:()=>St,WidgetlistPlaceholder:()=>Zt});var r=i(4073),n=i(7007),o=i(8084),s=i(1328),a=i(2127),c=i(6375),l=i(5648),d=i(4183),u=i(180),p=i(9802),f=i(7975),g=i(4889),m=i(5725);var v,h=i(9541),b=Object.defineProperty,w=Object.defineProperties,y=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,E=(t,e,i)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,_=(t,e)=>{for(var i in e||(e={}))C.call(e,i)&&E(t,i,e[i]);if(j)for(var i of j(e))O.call(e,i)&&E(t,i,e[i]);return t},k=(t,e)=>w(t,y(e));const M=(0,a.$j)((function(t){const e=(0,g.uv)(),i=null==e?void 0:e.dataContext,n=(0,s.getGlobalDataVariables)(),o=(null==e?void 0:e.dataStack)?(0,s.getDataStackVariables)(e.dataStack):void 0;return r.createElement(P,k(_({},t),{dataContext:i,dataStackVariables:o,globalDataVariables:n}))})),P=(0,a.$j)(((v=class extends r.Component{constructor(t){super(t),this.stateChangeCausedByEditor=new p.AY,this.field=this.props.field,this.state={domMode:"None"};const e=this.props.editorClass;if(e){const t={getContent:this.getContent.bind(this),options:this.options.bind(this),setContent:this.setContent.bind(this),setDomMode:this.setDomMode.bind(this),validObjClasses:this.validObjClasses.bind(this)};this.editor=new e({controller:t})}}componentDidMount(){if(!this.editor)return;const t=this.editor;t.editorWillBeActivated();const e=(0,h.M5)((()=>this.getContent()),(()=>{this.stateChangeCausedByEditor.current()||t.contentDidChange()}));this.unsubscribe=e.unsubscribe,"Replace"===this.state.domMode&&this.editorDomWasMounted()}componentDidUpdate(t,e){var i;const r=e.domMode,n=this.state.domMode;r!==n&&("Replace"===n?this.editorDomWasMounted():this.editorDomWasUnmounted()),t.globalDataVariables===this.props.globalDataVariables&&t.dataStackVariables===this.props.dataStackVariables||null==(i=this.editor)||i.contentDidChange()}componentWillUnmount(){this.editor&&this.editor.editorWillBeDeactivated(),this.unsubscribe&&this.unsubscribe(),this.unregisterScrollTarget&&this.unregisterScrollTarget()}render(){if("Replace"===this.state.domMode){const t=this.props.customProps,{children:e,dangerouslySetInnerHTML:i}=t,n=((t,e)=>{var i={};for(var r in t)C.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(null!=t&&j)for(var r of j(t))e.indexOf(r)<0&&O.call(t,r)&&(i[r]=t[r]);return i})(t,["children","dangerouslySetInnerHTML"]),o=t=>{t.stopPropagation(),t.preventDefault()};return r.createElement(this.props.tag,k(_({},n),{ref:t=>{this.editorComponent=t},onClick:o}))}let t;const e=this.editor;return e&&e.onClick&&(t=t=>{t.stopPropagation(),t.preventDefault(),e.onClick()}),r.createElement(a.gH,{elementCallback:t=>{this.editorComponent=t},widgetProps:this.props.widgetProps,customProps:this.props.customProps,field:this.props.field,key:this.state.domMode,tag:this.props.tag,onClick:t})}editorDomWasMounted(){if(this.editor&&this.editorComponent){const t=(0,l.findDOMNode)(this.editorComponent);this.editor.editorDomWasMounted(t);const e=this.props.field.obj().id(),i=this.props.field.name();this.unregisterScrollTarget=(0,u.aL)({objId:e,attributeName:i},t)}}editorDomWasUnmounted(){this.editor&&this.editor.editorDomWasUnmounted()}setDomMode(t){this.setState({domMode:t})}getContent(){return(0,f.IE)((()=>{if("html"===this.field.type()){const e=this.field.get();return t=e,(0,m.q)(t,{preserveObjId:!0})}var t;return this.field.get()})).result}setContent(t){this.stateChangeCausedByEditor.runWith(!0,(()=>this.field.update(t)))}options(){const t=_({},(0,d.k)(this.field.getContainer().objClass(),this.field.name(),this.field.type())),e=(0,s.getDataVariablesFor)(this.field,this.props.dataContext),{dataStackVariables:i,globalDataVariables:r}=this.props;return(i||e||r)&&(t.dataVariables=_(_(_({},e),i),r)),t}validObjClasses(){return this.field.validClasses()}}).displayName="Scrivito.ContentTag.Editor",v));var D=i(506);var S=Object.defineProperty,I=Object.defineProperties,N=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,T=(t,e,i)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,V=(t,e)=>{for(var i in e||(e={}))W.call(e,i)&&T(t,i,e[i]);if($)for(var i of $(e))x.call(e,i)&&T(t,i,e[i]);return t};const F=(0,a.$j)((function(t){const e=(0,c.M)(),{field:i,tag:l}=t;if(!(0,o.DG)()||!(0,n.r)(i.obj().id()))return r.createElement(a.gH,V({},t));if(e){const e=(0,s.editorRegistrationFor)({type:i.type(),tag:l});if(e){const{id:n,editorClass:o}=e,s=[l,(u=i.getContainer(),u instanceof D.Jj?u.id():`${u.obj().id()}|${u.id()}`),i.name(),n].join("|");return r.createElement(M,(d=V({},t),I(d,N({key:s,editorClass:o}))))}}var d,u;return r.createElement(a.gH,V({},t))}));var R=i(2511),A=i(9470),B=i(1637),K=i(630),L=i(7515),G=i(7691),H=i(7097),J=i(4415),U=Object.defineProperty,z=Object.defineProperties,X=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,Q=(t,e,i)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,tt=(t,e)=>{for(var i in e||(e={}))Z.call(e,i)&&Q(t,i,e[i]);if(Y)for(var i of Y(e))q.call(e,i)&&Q(t,i,e[i]);return t},et=(t,e)=>z(t,X(e));function it(t){var e;return(e=class extends r.Component{constructor(t){super(t),this.registeredElement=new st}render(){return r.createElement(t,et(tt({},this.props),{registeredElement:this.registeredElement}))}}).displayName=`${(0,J.r)(t)}WithRegisteredElement`,e}function rt(t,e){var i;return(i=class extends r.Component{constructor(t){super(t),this.registeredElement=new st}componentDidMount(){this.unregisterContentZone=(0,G.Z)(this.registeredElement.id(),t(this.props),this.context)}componentWillUnmount(){this.unregisterContentZone&&this.unregisterContentZone()}render(){return r.createElement(nt.Provider,{value:this.registeredElement.id()},r.createElement(e,et(tt({},this.props),{registeredElement:this.registeredElement})))}}).displayName=`${(0,J.r)(e)}WithContentZone`,i.contextType=nt,i}const nt=r.createContext(void 0),ot=class{static generateId(){return this.currentId++,this.currentId}constructor(){this.elementId=ot.generateId()}id(){return this.elementId}set(t){t?(0,H.ui)(this.elementId,t):(0,H.so)(this.elementId)}};let st=ot;var at;st.currentId=0;const ct=it((0,a.$j)(((at=class extends r.Component{constructor(t){super(t),this.onClick=this.onClick.bind(this)}render(){const{markerClassName:t,tooltip:e,disableMenu:i}=function(t){switch(t.modification){case"new":return{tooltip:dt("widget_is_new")};case"edited":switch(t.placementModification){case"new":return{markerClassName:"scrivito_widget_moved_icon",tooltip:dt("widget_is_edited_and_dragged_here")};case"deleted":return{markerClassName:"scrivito_widget_moved_icon",tooltip:dt("widget_is_edited_and_dragged_away"),disableMenu:!0};default:return{tooltip:dt("widget_is_edited")}}case"deleted":return{tooltip:dt("widget_is_deleted")};default:switch(t.placementModification){case"new":return{tooltip:dt("widget_is_dragged_here")};case"deleted":return{tooltip:dt("widget_is_dragged_away")}}}}(this.props.widgetModification),n=i?void 0:this.onClick;return r.createElement("span",{ref:t=>this.props.registeredElement.set(t),className:`scrivito_editing_marker ${t} ${n?"":"scrivito_disabled"}`,title:e,onClick:n,onMouseOver:this.props.onMouseOver,onMouseOut:this.props.onMouseOut},r.createElement("i",{className:`scrivito_icon ${lt(this.props.widgetModification)}`}),r.createElement("span",{className:"scrivito_editing_marker_title"},(0,s.titleForBasicWidget)(this.props.widget)))}onClick(t){t.preventDefault(),t.stopPropagation(),(0,L.K)().showWidgetMenu(this.props.registeredElement.id(),this.props.widget.obj().id(),this.props.widget.id(),{objSpaceId:this.props.widget.objSpaceId()})}}).displayName="Scrivito.ContentTag.ComparisonMenuMarker",at)));function lt(t){switch(t.modification){case"new":return"scrivito_icon_inv_plus";case"edited":return"scrivito_icon_edited";case"deleted":return"scrivito_icon_trash";default:return"scrivito_icon_moved"}}function dt(t){return function(t){if(A.k)return A.k.translate(t)}(`widget_marker.${t}`)}var ut;const pt=it((0,a.$j)(((ut=class extends r.Component{constructor(t){super(t),this.onClick=this.onClick.bind(this),this.onDragStart=this.onDragStart.bind(this),this.onDragEnd=this.onDragEnd.bind(this)}render(){return r.createElement("span",{ref:t=>this.props.registeredElement.set(t),className:"scrivito_editing_marker",title:this.props.tooltip,onClick:this.onClick,onMouseOver:this.props.onMouseOver,onMouseOut:this.props.onMouseOut,draggable:!0,onDragStart:this.onDragStart,onDragEnd:this.onDragEnd},r.createElement("i",{className:"scrivito_icon"}),r.createElement("span",{className:"scrivito_editing_marker_title"},(0,s.titleForBasicWidget)(this.props.widget)))}onClick(t){t.preventDefault(),t.stopPropagation(),(0,L.K)().showWidgetMenu(this.props.registeredElement.id(),this.props.widget.obj().id(),this.props.widget.id(),{objSpaceId:this.props.widget.objSpaceId()})}onDragStart({dataTransfer:t,target:e}){t.effectAllowed="move",t.setData("text/plain",e.id),(0,L.K)().startDrag(this.props.widget.obj().id(),this.props.widget.id()),this.props.setDragState(!0)}onDragEnd(){(0,L.K)().endDrag(),this.props.setDragState(!1)}}).displayName="Scrivito.ContentTag.EditingMenuMarker",ut)));function ft(t){return t.map((t=>(0,p.Kw)(t.message)[0])).join("\n")}var gt;const mt=(0,a.$j)(((gt=class extends r.Component{constructor(t){super(t),this.onClick=this.onClick.bind(this)}render(){let t=`scrivito_option_marker scrivito_${this.props.position}`;return this.props.isAlwaysShown&&(t+=" scrivito_visible"),r.createElement("span",{className:t,onClick:this.onClick,onMouseOver:this.props.onMouseOver,onMouseOut:this.props.onMouseOut},r.createElement("i",{className:"scrivito_icon scrivito_icon_marker_plus"}))}onClick(t){t.stopPropagation(),this.props.insertWidget(this.props.widget,this.props.position)}}).displayName="Scrivito.OptionMarker",gt));let vt,ht=0,bt={};var wt=i(5932),yt=Object.defineProperty,jt=Object.defineProperties,Ct=Object.getOwnPropertyDescriptors,Ot=Object.getOwnPropertySymbols,Et=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,kt=(t,e,i)=>e in t?yt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Mt=(t,e)=>{for(var i in e||(e={}))Et.call(e,i)&&kt(t,i,e[i]);if(Ot)for(var i of Ot(e))_t.call(e,i)&&kt(t,i,e[i]);return t},Pt=(t,e)=>jt(t,Ct(e)),Dt=(t,e)=>{var i={};for(var r in t)Et.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(null!=t&&Ot)for(var r of Ot(t))e.indexOf(r)<0&&_t.call(t,r)&&(i[r]=t[r]);return i};const St=t=>r.createElement(K.R.Consumer,null,(e=>r.createElement(Nt,Mt(Mt({},e),t)))),It=(0,a.$j)((function(t){const e=(0,c.M)(),[i,a]=r.useState(!1),[l,d]=r.useState(!1),[p,f]=r.useState(!0),[g,m]=r.useState(!1),[v,h]=r.useState(!1),b=r.useRef(),w=r.useRef(),y=r.useRef(),j=r.useRef(!1),C=r.useRef(),O=r.useMemo((()=>{const e=wt.V_.forInstance((0,wt.pz)(t.widget));if(!e)return!1;const i=e.attributes();return Object.keys(i).some((t=>["widget","widgetlist"].includes(i[t][0])))}),[t.widget]);if(r.useEffect((()=>{const e=C.current;e&&(w.current=(0,u.aL)({objId:t.widget.obj().id(),widgetId:t.widget.id()},e,(()=>{m(!0),h((t=>!t))})))}),[t.widget]),r.useEffect((()=>(b.current=function(t){const e=ht;return bt[e]=t,ht+=1,e}({onFocus:()=>{a(!0),f(!1),I(),O||(y.current=window.setTimeout((()=>{j.current||f(!0)}),1e3))},onBlur:()=>a(!1)}),()=>{var t;I(),t=b.current,delete bt[t],w.current&&w.current()})),[O]),(0,o.DG)()){const i=t.widget.obj();if((0,n.r)(i.id()))return e?function(){const e=(0,s.getCachedValidationReportEntries)(t.widget);return r.createElement(t.tag,Mt(Pt(Mt({},k()),{ref:e=>{t.registeredElement.set(e),C.current=e},className:M(),style:P(),onMouseOver:D,onMouseOut:S,children:[r.createElement(pt,{key:"menuMarker",widget:t.widget,tooltip:ft(e),setDragState:d,onMouseOver:N,onMouseOut:$}),...r.Children.toArray(t.children),W("top"),W("bottom")]}),$t({validationResults:e,isStructureWidget:O})))}():E()}if((0,o.rl)()){const e=function(){const e=t.widget.modification((0,R.N)()),i=t.placementModification;if(e)return{modification:e,placementModification:i};if(i)return{placementModification:i}}();if(e&&!function({modification:t,placementModification:e}){return"deleted"===t&&!e}(e))return function(e){return r.createElement(t.tag,Mt(Pt(Mt({},k()),{ref:C,className:M(),style:P(),onMouseOver:D,onMouseOut:S,children:[r.createElement(ct,{key:"menuMarker",widget:t.widget,widgetModification:e,onMouseOver:N,onMouseOut:$}),...r.Children.toArray(t.children)]}),$t({modification:e.modification||e.placementModification,isStructureWidget:O})))}(e)}return E();function E(){return r.createElement(t.tag,Pt(Mt({},_()),{ref:C}))}function _(){const e=t,{tag:i,widget:r,placementModification:n,fieldType:o,registeredElement:s}=e;return Dt(e,["tag","widget","placementModification","fieldType","registeredElement"])}function k(){const t=_(),{className:e,style:i}=t;return Dt(t,["className","style"])}function M(){let e=t.className||"";const r=i&&!p;(0,o.DG)()&&r&&(e+=" scrivito_active scrivito_entered");const n="deleted"===t.placementModification||"deleted"===t.widget.modification((0,R.N)());return(0,o.rl)()&&n&&(e+=" scrivito_modification_opacity"),g&&(e+=v?" scrivito_wiggle_odd":" scrivito_wiggle_even"),e}function P(){return l?t.style?Pt(Mt({},t.style),{opacity:.5}):{opacity:.5}:t.style}function D(t){t.stopPropagation(),function(t){vt=t;const e=bt[vt];e&&e.onFocus()}(b.current)}function S(t){t.stopPropagation(),function(t){if(t===vt){const e=bt[t];e&&e.onBlur()}}(b.current)}function I(){y.current&&window.clearTimeout(y.current)}function N(){j.current=!0}function $(){j.current=!1}function W(e){return"widget"===t.fieldType?null:r.createElement(mt,{key:`optionMarker-${e}`,position:e,widget:t.widget,insertWidget:Wt,isAlwaysShown:B.D,onMouseOver:N,onMouseOut:$})}})),Nt=rt((({widget:t})=>{if(!t)throw new p.AQ;return{type:"widget",objId:t.obj().id(),widgetId:t.id()}}),(t=>{var e=t,{widget:i}=e,n=Dt(e,["widget"]);if(!i)throw new p.Ix("Detected inappropriate placing of Scrivito.WidgetTag: It is intended to be used exclusively as top-level element inside a Widget component.");return r.createElement(It,Mt({widget:i},n))}));function $t({modification:t,validationResults:e,isStructureWidget:i}){const r={"data-scrivito-private-widget":"true","data-scrivito-private-dropzone":"true"};i&&(r["data-scrivito-private-structure-widget"]="true"),t&&(r["data-scrivito-private-widget-modification"]=t);return["error","warning","info"].forEach((t=>{var i,n;i=t,(n=e)&&n.some((t=>t.severity===i))&&(r[`data-scrivito-private-widget-validation-${t}`]="true")})),r}function Wt(t,e){A.k.insertWidget(t.obj().id(),t.id(),e)}var xt=i(4557);function Tt({parent:t,registeredElement:e}){return r.createElement("span",{ref:t=>e.set(t),className:"scrivito_editing_marker",onClick:function(i){i.preventDefault(),i.stopPropagation(),(0,L.K)().showChildListMenu(e.id(),t.id())}},r.createElement("i",{className:"scrivito_icon"}),r.createElement("span",{className:"scrivito_editing_marker_title"},t.objClass()))}Tt.displayName="Scrivito.ChildListTag.MenuMarker";const Vt=it((0,xt.$j)(Tt));var Ft=Object.defineProperty,Rt=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable,Kt=(t,e,i)=>e in t?Ft(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Lt=(t,e)=>{for(var i in e||(e={}))At.call(e,i)&&Kt(t,i,e[i]);if(Rt)for(var i of Rt(e))Bt.call(e,i)&&Kt(t,i,e[i]);return t};const Gt=(0,xt.$j)((function(t){const e=(0,c.M)(),[i,n]=r.useState(!1),s=t,{basicParent:a,tag:l}=s,d=((t,e)=>{var i={};for(var r in t)At.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(null!=t&&Rt)for(var r of Rt(t))e.indexOf(r)<0&&Bt.call(t,r)&&(i[r]=t[r]);return i})(s,["basicParent","tag"]),u=(0,o.DG)()&&e,p=r.Children.toArray(t.children),f=u?[r.createElement(Vt,{parent:a,key:"menuMarker"}),...p]:p,g=u&&{onMouseOver:m,onMouseOut:v,"data-scrivito-private-child-list-path":!0,className:i?`scrivito_active scrivito_entered ${t.className}`:t.className};return r.createElement(l,Lt({},Lt(Lt({},g),d)),f);function m(t){t.stopPropagation(),n(!0)}function v(t){t.stopPropagation(),n(!1)}}));var Ht,Jt=Object.defineProperty,Ut=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable,Yt=(t,e,i)=>e in t?Jt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;const Zt=rt((t=>((t,e)=>{for(var i in e||(e={}))zt.call(e,i)&&Yt(t,i,e[i]);if(Ut)for(var i of Ut(e))Xt.call(e,i)&&Yt(t,i,e[i]);return t})({type:"widgetlist"},qt(t.field))),(0,xt.$j)(((Ht=class extends r.Component{constructor(t){super(t),this.onClick=this.onClick.bind(this)}render(){return r.createElement("div",{ref:t=>{this.widgetlistPlaceholder=t,this.props.registeredElement.set(t)},className:"scrivito_empty_widget_field","data-scrivito-private-dropzone":"true",onClick:this.onClick})}onClick(t){if(t.preventDefault(),t.stopPropagation(),this.widgetlistPlaceholder){const{objId:e,widgetId:i,attributeName:r}=qt(this.props.field);(0,L.K)().showWidgetlistMenu(this.props.registeredElement.id(),(0,p.jB)(t,this.widgetlistPlaceholder),e,r,i)}}}).displayName="Scrivito.ContentTag.WidgetlistPlaceholder",Ht)));function qt(t){const e=t.getContainer();return e instanceof D.Jj?{objId:e.id(),attributeName:t.name()}:{objId:e.obj().id(),widgetId:e.id(),attributeName:t.name()}}var Qt=Object.defineProperty,te=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,re=(t,e,i)=>e in t?Qt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;const ne=rt((({field:t})=>((t,e)=>{for(var i in e||(e={}))ee.call(e,i)&&re(t,i,e[i]);if(te)for(var i of te(e))ie.call(e,i)&&re(t,i,e[i]);return t})({type:"widgetField"},oe(t))),(0,xt.$j)((function({field:t,registeredElement:e}){const[i,n]=r.useState(null);return r.createElement("div",{ref:t=>{n(t),e.set(t)},className:"scrivito_empty_widget_field","data-scrivito-private-dropzone":"true",onClick:function(r){if(r.preventDefault(),r.stopPropagation(),i){const{objId:n,widgetId:o,attributeName:s}=oe(t);(0,L.K)().showWidgetlistMenu(e.id(),(0,p.jB)(r,i),n,s,o)}}})})));function oe(t){const e=t.getContainer();return e instanceof D.Jj?{objId:e.id(),attributeName:t.name()}:{objId:e.obj().id(),widgetId:e.id(),attributeName:t.name()}}}}]);