"use strict";(self.webpackChunkrestaurant_page=self.webpackChunkrestaurant_page||[]).push([[179,933,42,177,860,631],{518:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(567),c=n(460),i=n(768),o=n(637);const d=function(){let e=document.createElement("div");const t=[];return{create:function(){const n=document.body,d=document.createElement("div");d.classList.add("background"),n.appendChild(d),function(n){const a=document.createElement("header"),d=document.createElement("div");d.classList.add("top");const s=document.createElement("h1");s.textContent="Un Restaurant Français Extraordinaire",d.appendChild(s),a.appendChild(d);const r=document.createElement("div");r.classList.add("bottom"),function(n){const a=document.createElement("div");a.setAttribute("role","navigation"),a.id="nav",[{name:"HOME",function:c.Z.generate,class:"button-blue"},{name:"MENU",function:i.Z.generate,class:"button-white"},{name:"CONTACT",function:o.Z.generate,class:"button-red"}].forEach((function(n){const c=document.createElement("button"),i=n.name.toLowerCase()+"-button";c.classList.add("nav-button",n.class,i),c.addEventListener("click",n.function.bind(e)),c.textContent=n.name,a.append(c);const o={name:i,text:n.name,element:c};t.push(o)})),n.append(a)}(r),a.appendChild(r),n.appendChild(a)}(n),function(t){e.id="content",t.appendChild(e)}(n),function(e){const t=document.createElement("footer"),n=document.createElement("h3");n.innerHTML=a.Z.generate(),t.appendChild(n),e.appendChild(t)}(n)},homePage:function(){c.Z.generate.bind(e)()},clearContent:function(){for(;e.firstChild;)e.removeChild(e.lastChild)},updateButtons:function(e){t.forEach((function(e){e.element.textContent=e.text}));const n=t.find((t=>t.name===e));n.element.textContent="> "+n.text+" <"}}}()},637:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(518);const c={generate:function(){a.Z.clearContent();const e=document.createElement("div");e.classList.add("content-card"),function(e){const t=document.createElement("h2");t.textContent="Contact",e.appendChild(t)}(e),function(e){const t=document.createElement("div");t.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250231.53021077602!2d-90.3397240556525!3d75.43219560738548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e27617cd8fd32fb%3A0xb74527db2b1f08d0!2sFlashline%20Mars%20Arctic%20Research%20Station!5e0!3m2!1sen!2sca!4v1670358353922!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',t.classList.add("map"),e.appendChild(t)}(e),function(e){const t=document.createElement("div"),n=document.createElement("p");n.textContent="We are located in the Mars Arctic Research base. These scientists just stay inside their fancy domes for months at a time, and only stop by at this restaurant once every week or two so we could use the business!",t.appendChild(n),e.appendChild(t)}(e),function(e){const t=document.createElement("div");t.classList.add("contact");const n=document.createElement("div");n.classList.add("contact-inner"),function(e){const t=document.createElement("div");t.classList.add("contact-element");const n=document.createElement("h3");n.textContent="Address:",t.appendChild(n);const a=document.createElement("h4");a.textContent="#2 Qikiqtaaluk Region, NU X0A 0J0",t.appendChild(a),e.appendChild(t)}(n),function(e){const t=document.createElement("div");t.classList.add("contact-element");const n=document.createElement("h3");n.textContent="Phone:",t.appendChild(n);const a=document.createElement("h4");a.textContent="867-EAT-FOOD",t.appendChild(a),e.appendChild(t)}(n),function(e){const t=document.createElement("div");t.classList.add("contact-element");const n=document.createElement("h3");n.textContent="E-mail:",t.appendChild(n);const a=document.createElement("h4"),c="eat@restaurantfrancais.fr";a.innerHTML=`<a href = "mailto: ${c}">${c}</a>`,t.appendChild(a),e.appendChild(t)}(n),t.appendChild(n),e.appendChild(t)}(e),this.appendChild(e),a.Z.updateButtons("contact-button")}}},567:(e,t,n)=>{n.d(t,{Z:()=>a});const a={generate:function(){return`Copyright &copy ${(new Date).getFullYear()} George Ciesinski <a href="https://github.com/GeorgeCiesinski"><i class="fa-brands github-link fa-github"></i></a>`}}},460:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(518);const c=n.p+"img/french-cuisine.c01cd7dbfceabfa5e06a.jpg",i={generate:function(){a.Z.clearContent();const e=document.createElement("div");e.classList.add("content-card"),function(e){const t=document.createElement("figure"),n=document.createElement("blockquote");n.textContent="The #1 most French restaurant on Earth",n.setAttribute("cite","#"),t.appendChild(n);const a=document.createElement("figcaption");a.textContent="Owner of Un Restaurant Français Extraordinaire",t.appendChild(a),e.appendChild(t)}(e),function(e){const t=new Image;t.src=c,e.appendChild(t)}(e),function(e){const t=document.createElement("h4");t.textContent="Established in 1791",e.appendChild(t)}(e),function(e){const t=document.createElement("h4");t.textContent="Taste the streets of France",e.appendChild(t)}(e),this.appendChild(e),a.Z.updateButtons("home-button")}}},138:(e,t,n)=>{var a=n(518);a.Z.create(),a.Z.homePage()},768:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(518);const c=JSON.parse('{"G":[{"course":"Hors D\'oeuvre","items":[{"name":"Croissant","description":"Best bread in the world","price":"$120"},{"name":"Huitres","description":"Delicious Oysters","price":"$300"}]},{"course":"Potage","items":[{"name":"Soupe à l\'oignon","description":"Onion Soup","price":"$175"},{"name":"Vichyssoise","description":"Thick chicken vegetable soup","price":"$200"},{"name":"Bouillabaisse","description":"Classic fish stew","price":"$230"}]},{"course":"Le Plat Principal","items":[{"name":"Coq au vin","description":"Chicken braised with Wine","price":"$500"},{"name":"Duck à l\'Orange","description":"Duck in orange sauce","price":"$525"}]},{"course":"Salades","items":[{"name":"Salade Niçoise","description":"Salad from the French city of Nice","price":"$350"},{"name":"Salade au chèvre chaud","description":"Green salad with goat cheese","price":"$375"}]},{"course":"Entremets","items":[{"name":"Crème brûlée","description":"Custard with caramelized top layer","price":"$200"},{"name":"Crêpe aux fraises","description":"A delicious crepe with strawberry","price":"$275"}]},{"course":"Boissons","items":[{"name":"L\'eau","description":"Pristine water from the finest taps in France","price":"$150"},{"name":"Châteauneuf-du-Pepe","description":"A fine wine known for its Grenache-based red blends","price":"$2500"}]}]}'),i={generate:function(){a.Z.clearContent();const e=document.createElement("div");e.classList.add("content-card"),function(e){const t=document.createElement("h2");t.textContent="Menu",e.appendChild(t)}(e),function(e){const t=document.createElement("div");t.classList.add("menu"),c.G.forEach((function(e){const n=document.createElement("div");n.classList.add("course");const a=document.createElement("h3");a.textContent=e.course,n.appendChild(a),function(e,t){t.forEach((function(t){const n=document.createElement("div");n.classList.add("course-item");const a=document.createElement("h4");a.classList.add("item-name"),a.textContent=t.name,n.appendChild(a);const c=document.createElement("h5");c.classList.add("item-description"),c.textContent=t.description,n.appendChild(c);const i=document.createElement("h4");i.classList.add("item-price"),i.textContent=t.price,n.appendChild(i),e.appendChild(n)}))}(n,e.items),t.appendChild(n)})),e.appendChild(t)}(e),this.appendChild(e),a.Z.updateButtons("menu-button")}}}},e=>{e(e.s=138)}]);