"use strict";var e=document.querySelector(".form-application");e&&e.addEventListener("submit",function(e){e.preventDefault();var t=document.getElementById("cat-name"),n=document.getElementById("cat-weight"),a=document.getElementById("owner-email"),i=document.getElementById("owner-tel"),l=document.getElementById("cat-age"),r=document.getElementById("message"),o=0;!function(e){var t=document.getElementById(e).value;if(!t)return!1;return!!(2<t.length&&""!=t&&/^[a-zA-Zа-яА-Я0-9_-\s]+$/.test(t))}("cat-name")?t.classList.add("form-application__field--error"):(t.classList.remove("form-application__field--error"),o++),!function(e){var t=document.getElementById(e).value;if(!t)return!1;return!(""==t||!/^[0-9]{1,2}$/.test(t))}("cat-weight")?n.classList.add("form-application__field--error"):(n.classList.remove("form-application__field--error"),o++),!function(e){var t=document.getElementById(e).value;if(!t)return!1;return!(""==t||!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(t))}("owner-tel")?i.classList.add("form-application__field--error"):(i.classList.remove("form-application__field--error"),o++),!function(e){var t=document.getElementById(e).value;if(!t)return!1;return!(""==t||!/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/.test(t))}("owner-email")?a.classList.add("form-application__field--error"):(a.classList.remove("form-application__field--error"),o++),4===o&&(t.value="",n.value="",a.value="",i.value="",l.value="",r.value="")});var t=document.querySelector(".page-footer__map");if(t){var a,i,l,r,o,n=function(e){i=e<768?(a={lat:59.939032,lng:30.323229},l="./img/map-pin.png",r=62,o=53,17):768<=e&&e<1440?(a={lat:59.938932,lng:30.323229},l="./img/map-pin-tablet.png",r=124,o=106,18):(a={lat:59.939132,lng:30.319229},l="./img/map-pin-tablet.png",r=124,o=106,17);var t=a,n=new google.maps.Map(document.querySelector(".page-footer__map-map"),{zoom:i,center:t});new google.maps.Marker({position:{lat:59.938832,lng:30.323229},map:n,icon:{url:l,scaledSize:new google.maps.Size(r,o)}})};t.classList.remove("page-footer__map--nojs");var c=window.innerWidth;n(c),window.addEventListener("resize",function(){var e=window.innerWidth;n(e)})}var s=document.querySelector(".image-comparison");if(s){var d=function(e){var t=document.querySelector(".image-comparison__wrapper"),n=t.querySelector(".compare"),a=t.offsetWidth/100*e,i=parseInt(getComputedStyle(n).height);n.style.clip="rect(0px ".concat(a,"px ").concat(i,"px 0px)")},u=document.querySelector(".image-comparison__scale-indicator"),m=document.querySelector(".image-comparison__range-input"),p=document.querySelector(".image-comparison__range-button--before"),v=document.querySelector(".image-comparison__range-button--after"),f=document.querySelector(".image-comparison__scale-point");s.offsetWidth<=609?(p.addEventListener("click",function(e){e.preventDefault(),u.style.width="0",m.value="0",d(100)}),v.addEventListener("click",function(e){e.preventDefault(),u.style.width="100%",m.value="100",d(0)})):(p.addEventListener("click",function(e){e.preventDefault(),f.style.left="-17px",u.style.width="100%",m.value="0",d(100)}),v.addEventListener("click",function(e){e.preventDefault(),f.style.left="411px",u.style.width="100%",m.value="100",d(0)})),m.oninput=function(){var e=m.value;d(e);var t=document.querySelector(".image-comparison__scale");if(s.offsetWidth<=609)e=(t.offsetWidth-14)/100*e+2,u.style.width=e+"px";else{var n=t.offsetWidth/100*e-17;f.style.left=n+"px"}},window.onresize=function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;e<768?(d(50),m.value="50",u.style.width="50px",p.addEventListener("click",function(e){e.preventDefault(),u.style.width="0",m.value="0",d(100)}),v.addEventListener("click",function(e){e.preventDefault(),u.style.width="100%",m.value="100",d(0)})):768<=e&&e<1440?(d(50),m.value="50",f.style.left="197px",u.style.width="428px",p.addEventListener("click",function(e){e.preventDefault(),f.style.left="-17px",u.style.width="100%",m.value="0",d(100)}),v.addEventListener("click",function(e){e.preventDefault(),f.style.left="411px",u.style.width="100%",m.value="100",d(0)})):(d(53),m.value="53",f.style.left="209px",p.addEventListener("click",function(e){e.preventDefault(),f.style.left="-17px",u.style.width="100%",m.value="0",d(100)}),v.addEventListener("click",function(e){e.preventDefault(),f.style.left="411px",u.style.width="100%",m.value="100",d(0)}))}}var g=document.querySelector(".main-nav"),y=document.querySelector(".main-nav__toggle");g.classList.remove("main-nav--nojs"),y.addEventListener("click",function(){g.classList.contains("main-nav--closed")?(g.classList.remove("main-nav--closed"),g.classList.add("main-nav--opened")):(g.classList.add("main-nav--closed"),g.classList.remove("main-nav--opened"))});