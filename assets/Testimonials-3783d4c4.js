import{r as d,a as e,j as l,A as s}from"./index-34b02349.js";const h="/react-landing2/assets/Testimonials-img1-ddd2cf1a.webp",g="/react-landing2/assets/Testimonials-img2-419cb9fd.webp",u="/react-landing2/assets/Testimonials-img3-30ab0605.webp",a=i=>d.createElement("svg",{width:24,height:22,viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},d.createElement("path",{d:"M12 18L4.94658 21.7082L6.29366 13.8541L0.587322 8.2918L8.47329 7.1459L12 0L15.5267 7.1459L23.4127 8.2918L17.7063 13.8541L19.0534 21.7082L12 18Z",fill:"#F5A623"}));function r({img:i,title:n,text:o}){return l("div",{className:"Testimonials__rowelem",children:[e("img",{className:"Testimonials__rowelemimg",src:i,alt:""}),l("div",{className:"Testimonials__rowelemcontent",children:[l("div",{className:"Testimonials__rowelemstars",children:[e(a,{className:"Testimonials__rowelemstarselem"}),e(a,{className:"Testimonials__rowelemstarselem"}),e(a,{className:"Testimonials__rowelemstarselem"}),e(a,{className:"Testimonials__rowelemstarselem"}),e(a,{className:"Testimonials__rowelemstarselem"})]}),e("div",{className:"Testimonials__rowelemtitle",children:n}),e("div",{className:"Testimonials__rowelemtext",children:o})]})]})}function w(){const[i,n]=d.useState(1);let o=!1,m;return e("div",{className:"Testimonials",id:"Testimonials",children:l("div",{className:"Testimonials__container",children:[e(s,{className:"Testimonials__title",transition:1.3,triggerOnce:!0,moveAnimation:{bottom:{from:25,to:0}},opacityAnimation:{from:.01,to:1},children:e("div",{children:"People Say About Our Bakery"})}),e(s,{className:"Testimonials__subtitle",transitionDelay:.8,transition:1.3,triggerOnce:!0,moveAnimation:{bottom:{from:25,to:0}},opacityAnimation:{from:.01,to:1},children:e("div",{children:"Testimonials"})}),e("div",{className:"Testimonials__row",children:l("div",{className:"Testimonials__rowcontainer",onMouseDown:t=>{o=!0,m=t.clientX},onMouseUp:()=>{o=!1},onMouseMove:t=>{o&&(m>t.clientX&&i<3&&n(c=>c+1),m<t.clientX&&i>1&&n(c=>c-1))},style:{transform:`translateX(-${(i-1)*384}px)`},children:[e(s,{transition:1.3,triggerOnce:!0,moveAnimation:{left:{from:25,to:0}},opacityAnimation:{from:.01,to:1},children:e(r,{img:h,title:"Very, Very Delicious",text:"Nothing the copy said could convince her and so it didn’t take long. A small river named Duden flows by their"})}),e(s,{transition:1.3,transitionDelay:.6,triggerOnce:!0,moveAnimation:{left:{from:25,to:0}},opacityAnimation:{from:.01,to:1},children:e(r,{img:g,title:"Best Bakery in Town",text:"Copy Writers ambushed her, made her drunk with Longe and Parole. A small river named Duden flows by their place"})}),e(s,{transition:1.3,transitionDelay:1.2,triggerOnce:!0,moveAnimation:{left:{from:25,to:0}},opacityAnimation:{from:.01,to:1},children:e(r,{img:u,title:"Well Organized",text:"«And if she hasn’t been rewritten, then they are still using her. A small river named Duden flows by their place"})}),e(s,{transition:1.3,triggerOnce:!0,moveAnimation:{left:{from:25,to:0}},opacityAnimation:{from:.01,to:1},children:e(r,{img:h,title:"Very, Very Delicious",text:"Nothing the copy said could convince her and so it didn’t take long. A small river named Duden flows by their"})}),e(s,{transition:1.3,triggerOnce:!0,moveAnimation:{left:{from:25,to:0}},opacityAnimation:{from:.01,to:1},children:e(r,{img:g,title:"Best Bakery in Town",text:"Copy Writers ambushed her, made her drunk with Longe and Parole. A small river named Duden flows by their place"})})]})}),e("div",{className:"Testimonials__rowcarousel",children:[1,2,3].map(t=>e("div",{className:"Testimonials__rowcarouselelem",onClick:()=>{n(t)},style:{transition:"0.6s all ease",transform:i==t?"scale(1.5)":null,backgroundColor:i==t?"#171B1B":"#9EAD8D"}},t))})]})})}export{w as default};