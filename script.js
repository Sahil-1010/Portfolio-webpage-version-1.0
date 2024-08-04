'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-form]');
  
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxGNthtdVZVfxVOigR7SWBNl6cKZdXRdN8UgX5I_COA0Qvx9PrmaT2kMnctda8nWode/exec', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      
      const data = new URLSearchParams();
      for (const pair of formData.entries()) {
          data.append(pair[0], pair[1]);
      }

      xhr.send(data.toString());

      xhr.onload = function() {
          if (xhr.status === 200) {
              console.log('Email sent successfully!');
          } else {
              console.error('Error sending email:', xhr.statusText);
          }
      };
  });
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
// let more=document.querySelectorAll('.more');
// let info=document.querySelectorAll('.blog-text');
// function showInfo(){
//   info.style.display='block';
// }
// document.addEventListener('DOMContentLoaded', () => {
//   const hoverDiv = document.getElementByIdAll('hoverDiv');
//   const infoParagraph =document.querySelectorALL('.info');
//   let post=document.querySelectorAll('.pic');
//   hoverDiv.addEventListener('mouseover', () => {
//     infoParagraph.style.display='block';
//     pic.style.filter = 'blur(20px)';
//   });
//   hoverDiv.addEventListener('mouseout', () => {
//     infoParagraph.style.display='none';
// });

// });

document.addEventListener('DOMContentLoaded', () => {
  const hoverDivs = document.querySelectorAll('.hoverDiv');

  hoverDivs.forEach(hoverDiv => {
    hoverDiv.addEventListener('mouseover', () => {
      const infoParagraph = hoverDiv.querySelector('.info');
      const pic = hoverDiv.querySelector('.pic');

      infoParagraph.style.display = 'block';
      pic.style.filter = 'blur(20px)';
    });
    hoverDiv.addEventListener('mouseout', () => {
      const infoParagraph = hoverDiv.querySelector('.info');
      const pic = hoverDiv.querySelector('.pic');

      infoParagraph.style.display = 'none';
      pic.style.filter = 'blur(0px)';
    });
  });
});
const rainContainer = document.getElementById('rain-container');
let isRaining = false;
let rainInterval;

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
    rainContainer.appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 1000);
}

function toggleRain() {
    if (isRaining) {
        clearInterval(rainInterval);
        isRaining = false;
    } else {
        rainInterval = setInterval(createRaindrop, 100);
        isRaining = true;
    }
}

// Attach the toggleRain function to a button or the rainContainer
toggaleRain.addEventListener('click', toggleRain);


setInterval(createRaindrop, 100);
function toggleTheme() {
  const body = document.body;
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (body.classList.contains('light')) {
      body.classList.remove('light');
      body.classList.add('dark');
      // themeToggleBtn.textContent = 'Switch to Light Theme';
  } else {
      body.classList.remove('dark');
      body.classList.add('light');
      // themeToggleBtn.textContent = 'Switch to Dark Theme';
  }
}

