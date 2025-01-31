const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
hiddenElements.forEach((el) => observer.observe(el));

// Code for the toggling of the website Nav Menu
const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  }

let Home_Page = document.querySelector(".Home");
let About_Page = document.querySelector(".About_Me");
let Contact_Page = document.querySelector(".Contacts");
let backButton = document.querySelector(".backButton");
let homePage = document.querySelector(".Home");

const Home = () => {
  Home_Page.dataset.page = About_Page.dataset.page === "true" ? "false" : "true";
}
const About = () => {
  About_Page.dataset.page = About_Page.dataset.page === "true" ? "false" : "true";
}

const About_Nav = () => {
  About_Page.dataset.page = "true"; 
  Contact_Page.dataset.page = "false";
  Sandbox_Page.dataset.page = "false";
  Bloom_Page.dataset.page = "false"; 
  Adrik_Page.dataset.page = "false"; 
  Petro_Page.dataset.page = "false"; 
  Chow_Page.dataset.page = "false"; 
  TC_Page.dataset.page = "false"; 
  School_Page.dataset.page = "false"; 
  Personal_Page.dataset.page = "false";
  document.querySelector('.imagePopUp').style.display = 'none';
  document.querySelector('.imagePopUp').classList.remove('popupEnter');
  document.querySelector('html').style.overflow = 'auto'; 
}

const Contact = () => {
  Contact_Page.dataset.page = Contact_Page.dataset.page === "true" ? "false" : "true";
}

const Contact_Nav = () => {
  Contact_Page.dataset.page = "true"; 
  About_Page.dataset.page = "false";
  Sandbox_Page.dataset.page = "false";
  Bloom_Page.dataset.page = "false"; 
  Adrik_Page.dataset.page = "false"; 
  Petro_Page.dataset.page = "false"; 
  Chow_Page.dataset.page = "false"; 
  TC_Page.dataset.page = "false"; 
  School_Page.dataset.page = "false"; 
  Personal_Page.dataset.page = "false";
  document.querySelector('.imagePopUp').style.display = 'none';
  document.querySelector('.imagePopUp').classList.remove('popupEnter');
  document.querySelector('html').style.overflow = 'auto';  
}

//Buttons and Page Change Events
const Button_Appear = () => {
  backButton.style.display = "block";
  Home_Page.dataset.page = "false";
}

let Sandbox_Page = document.querySelector(".Sandbox_Page");
let Bloom_Page = document.querySelector(".Bloom_Page");
let Adrik_Page = document.querySelector(".Adrik_Page");
let Petro_Page = document.querySelector(".Petro_Page");
let Chow_Page = document.querySelector(".Chow_Page");
let TC_Page = document.querySelector(".TC_Page");
let School_Page = document.querySelector(".School_Page");
let Personal_Page = document.querySelector(".Personal_Page");

const SandBox = () => {
  Sandbox_Page.dataset.page = Sandbox_Page.dataset.page === "true" ? "false" : "true";
}

const Bloom = () => {
  Bloom_Page.dataset.page = Bloom_Page.dataset.page === "true" ? "false" : "true";
}

const Adrik = () => {
  Adrik_Page.dataset.page = Adrik_Page.dataset.page === "true" ? "false" : "true";
}


const Petro = () => {
  Petro_Page.dataset.page = Petro_Page.dataset.page === "true" ? "false" : "true";
}

const Chow = () => {
  Chow_Page.dataset.page = Chow_Page.dataset.page === "true" ? "false" : "true";
}

const TC = () => {
  TC_Page.dataset.page = TC_Page.dataset.page === "true" ? "false" : "true";
}

const School = () => {
  School_Page.dataset.page = School_Page.dataset.page === "true" ? "false" : "true";
}

const Personal = () => {
  Personal_Page.dataset.page = Personal_Page.dataset.page === "true" ? "false" : "true";
}

const backButtonAction = () => {
  backButton.style.display = "none";
  Home_Page.dataset.page = "true";
  Sandbox_Page.dataset.page = "false";
  Bloom_Page.dataset.page = "false"; 
  Adrik_Page.dataset.page = "false"; 
  Petro_Page.dataset.page = "false"; 
  Chow_Page.dataset.page = "false"; 
  TC_Page.dataset.page = "false"; 
  School_Page.dataset.page = "false"; 
  Personal_Page.dataset.page = "false";
  About_Page.dataset.page = "false"; 
  Contact_Page.dataset.page = "false";
  document.querySelector('.imagePopUp').style.display = 'none';
  document.querySelector('.imagePopUp').classList.remove('popupEnter');
  document.querySelector('html').style.overflow = 'auto';
}

//Image Popup
document.querySelectorAll('.Works_Pages img').forEach(image => {
  image.onclick = () => {
  document.querySelector('.imagePopUp').style.display = 'block';
  document.querySelector('.imagePopUp img').src = image.getAttribute("src");
  document.querySelector('.imagePopUp').classList.add('popupEnter');
  document.querySelector('html').style.overflow = 'hidden';
  document.querySelector('#nav-toggle').style.display = 'none';
  document.querySelector('.backButton').style.display = 'none';
  }
});

document.querySelector('.imagePopUp span').onclick = () => {
  document.querySelector('.imagePopUp').style.display = 'none';
  document.querySelector('.imagePopUp').classList.remove('popupEnter');
  document.querySelector('html').style.overflow = 'auto';
  document.querySelector('#nav-toggle').style.display = 'block';
  document.querySelector('.backButton').style.display = 'block';
}

document.querySelector('.imagePopUp .overlay').onclick = () => {
  document.querySelector('.imagePopUp').style.display = 'none';
  document.querySelector('.imagePopUp').classList.remove('popupEnter');
  document.querySelector('html').style.overflow = 'auto';
  document.querySelector('#nav-toggle').style.display = 'block';
  document.querySelector('.backButton').style.display = 'block';
}

//Robo Animation
