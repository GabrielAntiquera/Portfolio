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
