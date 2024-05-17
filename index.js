const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

let navToggle = document.querySelector('#nav-toggle');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer.observe(el));

document.querySelectorAll('.galleryGroup img').forEach(image => {
    image.onclick = () => {
    document.querySelector('.imagePopUp').style.display = 'block';
    document.querySelector('.imagePopUp img').src = image.getAttribute("src");
    document.querySelector('.imagePopUp').classList.add('popupEnter');
    document.querySelector('html').style.overflow = 'hidden';
    }
});

document.querySelector('.imagePopUp span').onclick = () => {
    document.querySelector('.imagePopUp').style.display = 'none';
    document.querySelector('.imagePopUp').classList.remove('popupEnter');
    document.querySelector('html').style.overflow = 'auto';
}

function findScrollValue(){
 
    let scrollValue = window.scrollY;
    console.log(scrollValue);

}

window.addEventListener("scroll",findScrollValue);

//Scroll back to Top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.animation ="FadeInBottom 300ms ease-in-out forwards";
  } else {
    mybutton.style.animation ="FadeOutBottom 300ms ease-in-out forwards";
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    window.scrollTo(0, 0);
}

function scrollToTop() {
    let width = window.innerWidth
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;

        if ( width > 1024 ) {
            if (position) {
                window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
                scrollAnimation = setTimeout("scrollToTop()", 30);
            } else clearTimeout(scrollAnimation);
        } else {
                topFunction();
        }
  }

// when scrolled to bottome move myBtn moves above footer

document.addEventListener('DOMContentLoaded', function(e) {
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        var footerHieght = document.querySelector('footer').offsetHeight + 15 ;
        // When the user is [modifier]px from the bottom, fire the event.

        let modifier = 25; 
            if(currentScroll + modifier > documentHeight) {
                mybutton.style.bottom = footerHieght + "px";
            } else {
                mybutton.style.bottom = "20px";
            }
    })
})
