"use strict";(self.webpackChunkcar_rental_app_ts=self.webpackChunkcar_rental_app_ts||[]).push([[844],{125:(n,e,i)=>{i.d(e,{Z:()=>t});i(791);const t=i.p+"static/media/sprite.53ff95ec62a8342e18aa220a801f53a2.svg"},44:(n,e,i)=>{i.d(e,{Z:()=>C});var t=i(791);const o=n=>n.map((n=>n.make)).filter(((n,e,i)=>i.indexOf(n)===e)),r=(n,e,i)=>{const t=[];for(let o=n;o<=e;o+=i)t.push(o);return t};var a,l,s,c,d,p,x,f,h=i(125),g=i(168),u=i(82);const m=u.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  width: 859px;\n  height: 74px;\n  align-items: flex-end;\n  gap: 18px;\n\n  margin-bottom: 50px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),b=u.ZP.form(l||(l=(0,g.Z)(["\n  display: flex;\n  gap: 18px;\n  padding-bottom: 50px;\n  align-items: flex-end;\n"]))),j=u.ZP.select(s||(s=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n\n  height: 48px;\n\n  border-radius: 14px;\n  background: #f7f7fb;\n  border-color: transparent;\n  appearance: none;\n\n  color: #121417;\n  font-size: 18px;\n  font-weight: 500;\n\n  &#brand {\n    padding: 14px 18px;\n    width: 224px;\n  }\n\n  &#price {\n    padding: 14px 18px;\n    width: 125px;\n  }\n"]))),Z=u.ZP.div(c||(c=(0,g.Z)(["\n  position: relative;\n\n  & .icon {\n    position: absolute;\n    right: 18px;\n    top: 32px;\n\n    width: 20px;\n    height: 20px;\n\n    pointer-events: none;\n\n    &:hover,\n    &:focus {\n      background-color: red;\n    }\n  }\n"]))),v=u.ZP.label(d||(d=(0,g.Z)(["\n  color: #8a8a89;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n"]))),w=u.ZP.div(p||(p=(0,g.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n"]))),y=u.ZP.input(x||(x=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n\n  border-radius: 14px;\n  background: #f7f7fb;\n  border-color: transparent;\n\n  color: #121417;\n  font-size: 18px;\n  font-weight: 500;\n\n  &#mileage {\n    width: 160px;\n    height: 48px;\n    padding: 14px 24px 14px 24px;\n\n    border-radius: 14px 0px 0px 14px;\n    border-right: 1px solid rgba(138, 138, 137, 0.2);\n    background: #f7f7fb;\n  }\n\n  &#endMileage {\n    width: 160px;\n    height: 48px;\n    padding: 14px 24px 14px 24px;\n\n    border-radius: 0px 14px 14px 0px;\n    background: #f7f7fb;\n  }\n"]))),k=u.ZP.button(f||(f=(0,g.Z)(["\n  display: flex;\n  width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  border-color: transparent;\n  background: #3470ff;\n\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"])));var P=i(184);const C=n=>{let{setVisibleCars:e,cars:i}=n;const[a,l]=(0,t.useState)(!1),[s,c]=(0,t.useState)(!1),d=()=>{l(!1)},p=()=>{c(!1)};return(0,t.useEffect)((()=>{e(i)}),[i,e]),(0,P.jsx)(m,{children:(0,P.jsxs)(b,{onSubmit:n=>{(n=>{n.preventDefault();const t=n.target,o="All"===t.make.value?"":t.make.value,r="All"===t.price.value?500:Number(t.price.value),a=0===t.mileageFrom.value.length?0:Number(t.mileageFrom.value),l=0===t.mileageTo.value.length?1e6:Number(t.mileageTo.value),s=i.filter((n=>-1!==n.make.toLowerCase().indexOf(o.toLowerCase())&&Number(n.rentalPrice.slice(1))<=r&&n.mileage>=a&&n.mileage<=l));e(s)})(n)},children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(v,{children:["Car brand",(0,P.jsxs)(j,{id:"make",onFocus:()=>{l(!0)},onBlur:d,onChange:d,children:[(0,P.jsx)("option",{defaultValue:"All",children:"All"}),o(i).map((n=>(0,P.jsx)("option",{value:n,children:n},n)))]})]}),(0,P.jsx)("svg",{className:"icon",children:(0,P.jsx)("use",{href:"".concat(h.Z).concat(a?"#icon-chevron-top":"#icon-chevron-down")})})]}),(0,P.jsxs)(Z,{children:[(0,P.jsxs)(v,{children:["Price/ 1 hour",(0,P.jsxs)(j,{id:"price",onFocus:()=>{c(!0)},onBlur:p,onChange:p,children:[(0,P.jsx)("option",{defaultValue:"All",children:"All"}),r(30,500,10).map((n=>(0,P.jsxs)("option",{value:n,children:["To ",n,"$"]},n)))]})]}),(0,P.jsx)("svg",{className:"icon",children:(0,P.jsx)("use",{href:"".concat(h.Z).concat(s?"#icon-chevron-top":"#icon-chevron-down")})})]}),(0,P.jsxs)(v,{children:["\u0421ar mileage / km",(0,P.jsxs)(w,{children:[(0,P.jsx)(y,{name:"mileageFrom",id:"mileage",placeholder:"From",type:"text"}),(0,P.jsx)(y,{name:"mileageTo",id:"endMileage",placeholder:"To",type:"text"})]})]}),(0,P.jsx)(k,{type:"submit",children:"Search"})]})})}},131:(n,e,i)=>{i.d(e,{Z:()=>xn});var t=i(791),o=i(164);var r,a,l,s,c,d,p,x,f,h,g,u,m,b,j,Z,v,w=i(168),y=i(82);const k=y.ZP.div(r||(r=(0,w.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(18, 20, 23, 0.5);\n  z-index: 2;\n\n  overflow: auto;\n"]))),P=y.ZP.div(a||(a=(0,w.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  margin: 0 auto;\n  border-radius: 24px;\n  background: #fff;\n\n  z-index: 3;\n"]))),C=y.ZP.div(l||(l=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  padding: 40px;\n  width: 541px;\n\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n"]))),z=y.ZP.button(s||(s=(0,w.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  background-color: transparent;\n  border: none;\n\n  & .icon {\n    width: 24px;\n    height: 24px;\n    stroke: #121417;\n\n    &:hover,\n    &:focus {\n      stroke: #3470ff;\n    }\n  }\n"]))),M=y.ZP.div(c||(c=(0,w.Z)(["\n  position: relative;\n  width: 460px;\n  min-height: 248px;\n  margin-bottom: 14px;\n\n  overflow: hidden;\n\n  border-radius: 14px;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n"]))),N=y.ZP.img(d||(d=(0,w.Z)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n\n  object-fit: cover;\n"]))),F=y.ZP.h2(p||(p=(0,w.Z)(["\n  color: #121417;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.5;\n\n  margin-bottom: 8px;\n\n  & .accent {\n    color: #3470ff;\n  }\n"]))),S=y.ZP.p(x||(x=(0,w.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n\n  width: 277px;\n  margin-bottom: 14px;\n"]))),A=y.ZP.p(f||(f=(0,w.Z)(["\n  color: #121417;\n\n  font-size: 14px;\n\n  font-weight: 400;\n  line-height: 1.43;\n\n  margin-bottom: 24px;\n"]))),T=y.ZP.div(h||(h=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n\n  margin-bottom: 24px;\n"]))),E=y.ZP.div(g||(g=(0,w.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43;\n"]))),L=y.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n"]))),_=y.ZP.p(m||(m=(0,w.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n"]))),B=(y.ZP.div(b||(b=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n\n  margin-bottom: 24px;\n"]))),y.ZP.div(j||(j=(0,w.Z)(["\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 8px;\n"])))),V=y.ZP.p(Z||(Z=(0,w.Z)(["\n  display: flex;\n  padding: 7px 14px;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 35px;\n  background: #f9f9f9;\n\n  color: #363535;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: -0.24px;\n\n  & span {\n    color: #3470ff;\n    font-weight: 600;\n  }\n"]))),I=y.ZP.a(v||(v=(0,w.Z)(["\n  padding: 12px 50px;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 12px;\n  background: #3470ff;\n\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.43;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    background: #0b44cd;\n  }\n"])));var O=i(125),R=i(184);const $=document.querySelector("#modal-root"),q=n=>{let{car:e,onCloseModal:i}=n;const{id:r,address:a,fuelConsumption:l,type:s,model:c,img:d,make:p,year:x,engineSize:f,description:h,accessories:g,functionalities:u,rentalConditions:m,mileage:b,rentalPrice:j}=e,Z=[a.split(", ")[1],a.split(", ")[2],"Id: ".concat(r),"Year: ".concat(x),"Type: ".concat(s.charAt(0).toUpperCase()).concat(s.slice(1).toLowerCase()),"Fuel Consumption: ".concat(l),"Engine Size: ".concat(f)],v=m.split("\n"),w=v[0].split(": ")[1],y=(0,t.useCallback)((n=>{"Escape"===n.code&&i()}),[i]);return(0,t.useEffect)((()=>(window.addEventListener("keydown",(()=>y)),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",(()=>y)),document.body.style.overflow="auto"})),[y]),(0,o.createPortal)((0,R.jsx)(k,{onClick:n=>{n.currentTarget===n.target&&i()},children:(0,R.jsx)(P,{children:(0,R.jsxs)(C,{children:[(0,R.jsx)(z,{onClick:i,children:(0,R.jsx)("svg",{className:"icon",children:(0,R.jsx)("use",{href:"".concat(O.Z,"#icon-close")})})}),(0,R.jsx)(M,{children:(0,R.jsx)(N,{src:d,alt:"".concat(p," ").concat(c)})}),(0,R.jsxs)(F,{children:[p," ",(0,R.jsx)("span",{className:"accent",children:c}),", ",x]}),(0,R.jsx)(S,{children:Z.join(" | ")}),(0,R.jsx)(A,{children:h}),(0,R.jsxs)(T,{children:[(0,R.jsx)(E,{children:"Accessories and functionalities:"}),(0,R.jsxs)(L,{children:[(0,R.jsx)(_,{children:g.join(" | ")}),(0,R.jsx)(_,{children:u.join(" | ")})]})]}),(0,R.jsxs)(T,{children:[(0,R.jsx)(E,{children:"Rental Conditions:"}),(0,R.jsxs)(B,{children:[(0,R.jsxs)(V,{children:["Minimum age: ",(0,R.jsx)("span",{children:w})]}),(0,R.jsx)(V,{children:v[1]}),(0,R.jsx)(V,{children:v[2]}),(0,R.jsxs)(V,{children:["Mileage: ",(0,R.jsx)("span",{children:(q=b,q.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})]}),(0,R.jsxs)(V,{children:["Price: ",(0,R.jsxs)("span",{children:[j.slice(1),"$"]})]})]})]}),(0,R.jsx)(I,{href:"tel:".concat("+380730000000"),children:"Rental car"})]})})}),$);var q};var D,U,Y,G,H,J,K,Q,W;const X=y.ZP.div(D||(D=(0,w.Z)(["\n  display: flex;\n  width: 274px;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  margin-bottom: 21px;\n"]))),nn=y.ZP.div(U||(U=(0,w.Z)(["\n  position: relative;\n  width: 274px;\n  min-height: 268px;\n  margin-bottom: 14px;\n\n  overflow: hidden;\n\n  border-radius: 14px;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n"]))),en=y.ZP.img(Y||(Y=(0,w.Z)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n\n  object-fit: cover;\n"]))),tn=y.ZP.button(G||(G=(0,w.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  background-color: transparent;\n  border: none;\n\n  & .icon {\n    width: 18px;\n    height: 18px;\n    stroke: #fff;\n    fill: transparent;\n\n    &:hover,\n    &:focus {\n      stroke: #3470ff;\n      fill: #3470ff;\n    }\n\n    &.favorite {\n      stroke: #3470ff;\n      fill: #3470ff;\n    }\n  }\n"]))),on=y.ZP.div(H||(H=(0,w.Z)(["\n  width: 265px;\n"]))),rn=y.ZP.div(J||(J=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),an=y.ZP.h2(K||(K=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  color: #121417;\n  font-family: Manrope, sans-serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.5;\n\n  & .make {\n    display: inline-block;\n  }\n\n  & .accent {\n    color: #3470ff;\n  }\n\n  & .price {\n    padding-left: 12px;\n    display: inline-block;\n  }\n"]))),ln=y.ZP.p(Q||(Q=(0,w.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n"]))),sn=y.ZP.button(W||(W=(0,w.Z)(["\n  display: flex;\n  width: 274px;\n  height: 44px;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n\n  border-color: transparent;\n  border-radius: 12px;\n  background: #3470ff;\n\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.43;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background: #0b44cd;\n  }\n"]))),cn=n=>{let{car:e,setFavorite:i}=n;const[o,r]=(0,t.useState)(!1),{id:a,address:l,rentalCompany:s,type:c,model:d,mileage:p,functionalities:x,img:f,make:h,rentalPrice:g,year:u,favorite:m}=e,b=Math.floor(Math.random()*x.length),j=[l.split(", ")[1],l.split(", ")[2],s,c,d,p,x[b]];return(0,R.jsxs)(X,{children:[(0,R.jsxs)(nn,{children:[(0,R.jsx)(en,{src:f,alt:"".concat(h," ").concat(d)}),(0,R.jsx)(tn,{type:"button",onClick:i,id:a.toString(),children:(0,R.jsx)("svg",{className:"icon ".concat(m?"favorite":""),children:(0,R.jsx)("use",{href:"".concat(O.Z,"#icon-heart")})})})]}),(0,R.jsxs)(rn,{children:[(0,R.jsx)(on,{children:(0,R.jsxs)(an,{children:[(0,R.jsxs)("span",{className:"make",children:[h," ",(0,R.jsx)("span",{className:"accent",children:d}),", ",u]}),(0,R.jsx)("span",{className:"price",children:g})]})}),(0,R.jsx)(ln,{children:j.join(" | ").slice(0,95)})]}),(0,R.jsx)(sn,{type:"button",onClick:()=>{r(!0)},children:"Learn more"}),o&&(0,R.jsx)(q,{car:e,onCloseModal:()=>{r(!o)}})]})};var dn;const pn=y.ZP.ul(dn||(dn=(0,w.Z)(["\n  display: flex;\n  list-style: none;\n  flex-wrap: wrap;\n  gap: 29px;\n  margin-bottom: 79px;\n"]))),xn=n=>{let{cars:e,visibleCars:i,setFavorite:t}=n;const o=i.filter(((n,e)=>i.findIndex((e=>e.location===n.location&&e.id===n.id))===e));return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(pn,{children:o.map((n=>(0,R.jsx)("li",{children:(0,R.jsx)(cn,{car:n,setFavorite:t})},n.id)))})})}}}]);
//# sourceMappingURL=844.d2546e94.chunk.js.map