var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {

  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");

    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}
const cursor = document.querySelector('.cursor');

       document.addEventListener('mousemove', e => {
           cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
       })

       document.addEventListener('click', () => {
           cursor.classList.add("expand");

           setTimeout(() => {
               cursor.classList.remove("expand");
           }, 500)
       })

events();
// theme SECTION
function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }
        function toggleTheme() {
            if (localStorage.getItem('theme') === 'dark') {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        }
        (function () {
            if (localStorage.getItem('theme') === 'dark') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        })();
// window.onscroll=function(){
//   var pos = document.documentElement.scrollTop;
//   var calc_height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
//   var scroll=position*100/calc_height;
//   document.getElementById("progress").style.width=scroll+"%";
// }
window.addEventListener('scroll',()=> indicateScrollBar())

function indicateScrollBar() {
const distanceFromPageTop = document.body.scrollTop || document.documentElement.scrollTop;

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const scrolled = (distanceFromPageTop / height) * 100;

document.querySelector(".scroll-bar").style.width =  `${scrolled}%`;

}

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
