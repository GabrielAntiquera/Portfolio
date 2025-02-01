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

const SandBox = () => {
  Sandbox_Page.dataset.page = Sandbox_Page.dataset.page === "true" ? "false" : "true";
}

const backButtonAction = () => {
  Sandbox_Page.dataset.page = "false";
  About_Page.dataset.page = "false"; 
  Contact_Page.dataset.page = "false";  
}

const backButtonAction2 = () => {
  Home_Page.dataset.page = "true";
  backButton.style.display = "none";
}

const backButtonAction3 = () => {
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
