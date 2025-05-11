let themeSwitchers = document.querySelectorAll('.theme-button'); 

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function () { 
        let theme = this.dataset.theme; 
        applyTheme(theme);
        localStorage.setItem("theme", this.dataset.theme);
    });
});

function applyTheme(themeName) {
    let themeUrl ="style-${themeName}.css";
    document.querySelector('[title="theme"]').setAttribute('href', `style-${themeName}.css`); 
}

let activeTheme = localStorage.getItem("theme");
if(activeTheme === null) {
    applyTheme("light");
} else {
    applyTheme(activeTheme);
};

const swiper = new Swiper('.swiper', {

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
 
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    grabCursor: true,
    
  });

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("nav-btm").addEventListener("click", function() {
      document.querySelector(".page-header").classList.toggle("open")
    })
})

// Закрыть меню при клике вне его
document.getElementById("nav").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("nav-btm").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".page-header").classList.remove("open")
});

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      // Действие при клике
      document.querySelector(".page-header").classList.remove("open")
  }
});