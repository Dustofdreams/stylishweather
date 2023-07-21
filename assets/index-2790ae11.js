(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const Z="fea9fdbbf990c13d95937852f9791a2d",w=function(e,t){fetch(`${e}&appid=${Z}`).then(s=>s.json()).then(s=>t(s))},y={currentWeather(e,t){return`https://api.openweathermap.org/data/2.5/weather?${e}&${t}&units=metric&lang=bg`},forecast(e,t){return`https://api.openweathermap.org/data/2.5/forecast?${e}&${t}&units=metric&lang=bg`},airPollution(e,t){return`http://api.openweathermap.org/data/2.5/air_pollution?${e}&${t}&lang=bg`},reverseGeo(e,t){return`http://api.openweathermap.org/geo/1.0/reverse?${e}&${t}&limit=5&lang=bg`},geo(e){return`http://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=5&lang=bg`}},N=["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],O=["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],ee=function(e,t){const s=new Date((e+t)*1e3),c=N[s.getUTCDay()],a=O[s.getUTCMonth()];return`${c} ${s.getUTCDate()}, ${a}`},_=function(e,t){const s=new Date((e+t)*1e3),c=s.getUTCHours(),a=s.getUTCMinutes();return`${c%24||24}:${a}`},E=function(e,t){const s=new Date((e+t)*1e3);return`${String(s.getUTCHours()).padStart(2,"0")}:00`},te=e=>e*3600/1e3,x={1:{level:"Добро",message:"Качеството на въздуха е идеално за повечето хора; насладете се на вашите обичайни дейности на открито."},2:{level:"Приемливо",message:"Качеството на въздуха е приемливо за повечето хора. Хора от чувствителни групи, обаче, могат да изпитат леки до умерени симптоми при дълготрайно излагане."},3:{level:"Лошо",message:"Въздухът достигна високо ниво на замърсяване и е нездравословен за чувствителни групи. Намалете времето, прекарвано на открито, ако чувствате симптоми като затруднения с дишането или раздразнение на гърлото."},4:{level:"Нездравословно",message:"Ефектите върху здравето могат да бъдат почувствани незабавно от чувствителни групи. Здрави хора могат да изпитат трудности при дишане и раздразнение на гърлото при продължително излагане. Ограничете дейности на открито."},5:{level:"Много нездравословно",message:"Ефектите върху здравето могат да бъдат почувствани незабавно от чувствителни групи и те трябва да избягват дейности на открито. Здрави хора вероятно ще изпитат трудности при дишане и раздразнение на гърлото; обмислете да останете на закрито и да промените плановете си за дейности на открито."}},z=function(e,t,s){for(const c of e)c.addEventListener(t,s)},se=document.querySelector("[data-search-view]"),ae=document.querySelectorAll("[data-search-toggler]"),A=()=>se.classList.toggle("active");z(ae,"click",A);const d=document.querySelector("[data-search-field]"),m=document.querySelector("[data-search-result]");let U=null;const ie=500;d.addEventListener("input",function(){U??clearTimeout(U),d.value?d.classList.add("searching"):(m.classList.remove("active"),m.innerHTML="",d.classList.remove("searching")),d.value&&(U=setTimeout(()=>{w(y.geo(d.value),function(e){d.classList.remove("searching"),m.classList.add("active"),m.innerHTML=`
          <ul class="view-list" data-search-list></ul>
        `;const t=[];for(const{name:s,lat:c,lon:a,country:i,state:l}of e){const p=document.createElement("li");p.classList.add("view-item"),p.innerHTML=`
            <span class="m-icon">location_on</span>

            <div>
              <p class="item-title">${s}</p>

              <p class="label-2 item-subtitle">${l||""} ${i}</p>
            </div>

            <a href="#/weather?lat=${c}&lon=${a}" class="item-link has-state" aria-label="${s} weather" data-search-toggler></a>
          `,m.querySelector("[data-search-list]").appendChild(p),t.push(p.querySelector("[data-search-toggler]"))}z(t,"click",function(){A(),m.classList.remove("active")})})},ie))});const T=document.querySelector("[data-container]"),P=document.querySelector("[data-loading]"),k=document.querySelector("[data-current-location-btn]"),W=document.querySelector("[data-error-content]"),F=function(e,t){P.style.display="grid",T.style.overflowY="hidden",T.classList.remove("fade-in"),W.style.display="none";const s=document.querySelector("[data-current-weather]"),c=document.querySelector("[data-highlights]"),a=document.querySelector("[data-hourly-forecast]"),i=document.querySelector("[data-5-day-forecast]");s.innerHTML="",c.innerHTML="",a.innerHTML="",i.innerHTML="",window.location.hash==="#/current-location"?k.setAttribute("disabled",""):k.removeAttribute("disabled"),w(y.currentWeather(e,t),function(l){const{weather:p,dt:R,sys:{sunrise:Y,sunset:j},main:{temp:B,feels_like:K,pressure:V,humidity:J},visibility:Q,timezone:S}=l,[{description:D,icon:X}]=p,$=document.createElement("div");$.classList.add("card","card-lg","current-weather-card"),$.innerHTML=`
      <h2 class="title-2 card-title leading-title">Сега</h2>

      <div class="weapper">
        <p class="heading">${parseInt(B)}&deg;<sup>c</sup></p>

        <img src="images/${X}.png" width="64" height="64" alt="${D}"
          class="weather-icon">
      </div>

      <p class="body-3">${D}</p>

      <ul class="meta-list">

        <li class="meta-item">
          <span class="m-icon">calendar_today</span>

          <p class="title-3 meta-text">${ee(R,S)}</p>
        </li>

        <li class="meta-item">
          <span class="m-icon">location_on</span>

          <p class="title-3 meta-text" data-location></p>
        </li>

      </ul>
    `,w(y.reverseGeo(e,t),function([{name:g,country:n}]){$.querySelector("[data-location]").innerHTML=`${g}, ${n}`}),s.appendChild($),w(y.airPollution(e,t),function(g){const[{main:{aqi:n},components:{no2:L,co:r,so2:v,pm2_5:u}}]=g.list,o=document.createElement("div");o.classList.add("card","card-lg"),o.innerHTML=`
        <h2 class="title-2 leading-title" id="highlights-label">Дневна Информация</h2>

        <div class="highlight-list">

          <div class="card card-sm highlight-card one">

            <h3 class="title-3">Качество на Въздуха</h3>

            <div class="wrapper">

              <span class="m-icon nomobile">air</span>

              <ul class="card-list">

                <li class="card-item">
                  <p class="title-1">${u.toPrecision(2)}</p>

                  <p class="label-1">Прахови частици</p>
                </li>

                <li class="card-item">
                  <p class="title-1">${v.toPrecision(1)}</p>

                  <p class="label-1">Серен диоксид</p>
                </li>

                <li class="card-item">
                  <p class="title-1">${L.toPrecision(1)}</p>

                  <p class="label-1">Азотен диоксид</p>
                </li>

                <li class="card-item">
                  <p class="title-1">${Math.round(r)}</p>

                  <p class="label-1">Въглероден оксид</p>
                </li>

              </ul>

            </div>

            <span class="badge aqi-${n} label-${n}" title="${x[n].message}">
              ${x[n].level}
            </span>

          </div>

          <div class="card card-sm highlight-card two">

            <h3 class="title-3">Изгрев и Залез</h3>

            <div class="card-list">

              <div class="card-item">
                <span class="m-icon">clear_day</span>

                <div>
                  <p class="label-1">Изгрев</p>

                  <p class="title-1">${_(Y,S)}</p>
                </div>
              </div>

              <div class="card-item">
                <span class="m-icon">clear_night</span>

                <div>
                  <p class="label-1">Залез</p>

                  <p class="title-1">${_(j,S)}</p>
                </div>
              </div>

            </div>

          </div>

          <div class="card card-sm highlight-card">

          <h3 class="title-3">Усеща Се</h3>

          <div class="wrapper">
            <span class="m-icon">thermostat</span>

            <p class="title-1">${parseInt(K)}&deg;<sup>c</sup></p>
          </div>

        </div>

          <div class="card card-sm highlight-card">

            <h3 class="title-3">Влажност</h3>

            <div class="wrapper">
              <span class="m-icon">humidity_percentage</span>

              <p class="title-1">${J}<sub>%</sub></p>
            </div>

          </div>

          <div class="card card-sm highlight-card">

            <h3 class="title-3">Налягане</h3>

            <div class="wrapper">
              <span class="m-icon">airwave</span>

              <p class="title-1">${V}<sub>hPa</sub></p>
            </div>

          </div>

          <div class="card card-sm highlight-card">

            <h3 class="title-3">Видимост</h3>

            <div class="wrapper">
              <span class="m-icon">visibility</span>

              <p class="title-1">${Q/1e3}<sub>km</sub></p>
            </div>

          </div>



        </div>
      `,c.appendChild(o)}),w(y.forecast(e,t),function(g){const{list:n,city:{timezone:L}}=g;a.innerHTML=`
        <h2 class="title-2">Почасово</h2>

        <div class="slider-container">
          <ul class="slider-list" data-temp></ul>

          <ul class="slider-list" data-wind></ul>
        </div>
      `;for(const[r,v]of n.entries()){if(r>7)break;const{dt:u,main:{temp:o},weather:q,wind:{deg:M,speed:b}}=v,[{icon:f,description:h}]=q,H=document.createElement("li");H.classList.add("slider-item"),H.innerHTML=`
          <div class="card card-sm slider-card">

            <p class="body-3">${E(u,L)}</p>

            <img src="images/${f}.png" width="48" height="48" loading="lazy" alt="${h}"
              class="weather-icon" title="${h}">

            <p class="body-3">${parseInt(o)}&deg;</p>

          </div>
        `,a.querySelector("[data-temp]").appendChild(H);const C=document.createElement("li");C.classList.add("slider-item"),C.innerHTML=`
        <div class="card card-sm slider-card">

          <p class="body-3">${E(u,L)}</p>

          <img src="images/direction.png" width="48" height="48" loading="lazy" alt="direction"
            class="weather-icon" style="transform: rotate(${M-180}deg)">

          <p class="body-3">${parseInt(te(b))} km/h</p>

        </div>
        `,a.querySelector("[data-wind]").appendChild(C)}i.innerHTML=`
        <h2 class="title-2" id="forecast-label">5-Дневна Прогноза</h2>

        <div class="card card-lg forecast-card">
          <ul data-forecast-list></ul>
        </div>
      `;for(let r=7,v=n.length;r<v;r+=8){const{main:{temp_max:u},weather:o,dt_txt:q}=n[r],[{icon:M,description:b}]=o,f=new Date(q),h=document.createElement("li");h.classList.add("card-item"),h.innerHTML=`
          <div class="icon-wrapper">
            <img src="images/${M}.png" width="36" height="36" alt="${b}"
              class="weather-icon" title="${b}">

            <span class="span">
              <p class="title-2">${parseInt(u)}&deg;</p>
            </span>
          </div>

          <p class="label-1">${f.getDate()} ${O[f.getUTCMonth()]}</p>

          <p class="label-1">${N[f.getUTCDay()]}</p>
        `,i.querySelector("[data-forecast-list]").appendChild(h)}P.style.display="none",T.style.overflowY="overlay",T.classList.add("fade-in")})})},ce=()=>W.style.display="flex",ne="#/weather?lat=43.2073873&lon=27.9166653",le=function(){window.navigator.geolocation.getCurrentPosition(e=>{const{latitude:t,longitude:s}=e.coords;F(`lat=${t}`,`lon=${s}`)},e=>{window.location.hash=ne})},re=e=>F(...e.split("&")),I=new Map([["/current-location",le],["/weather",re]]),G=function(){const e=window.location.hash.slice(1),[t,s]=e.includes?e.split("?"):[e];I.get(t)?I.get(t)(s):ce()};window.addEventListener("hashchange",G);window.addEventListener("load",function(){window.location.hash?G():window.location.hash="#/current-location"});
