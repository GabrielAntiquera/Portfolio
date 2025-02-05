let Main = document.getElementById("robo");

const Sandbox = () => {
  Main.src = "Content/Sandbox.webp";
}

const Bloom = () => {
  Main.src = "Content/Bloom_Icon.webp";
}

const Adrik = () => {
  Main.src = "Content/Evening With Adrik.webp";
}

const Petro = () => {
  Main.src = "Content/Petroglyph.jpg";
}

const Chow = () => {
  Main.src = "Content/SG CHOW.webp";
}

const School = () => {
  Main.src = "Content/Nile Front.webp";
}

const Personal = () => {
  Main.src = "Content/Summer.webp";
}

// Robo animation//
let paths = ["Content/Robo2.png","Content/Robo1.png","Content/Robo1.png","Content/Robo1.png"]
  
  let img = document.getElementById("robo");
  let i = 0;
  let timer = setInterval(function(){
  // If we've reached the end of the array...
  if(i >= paths.length){
  i=0;
  }
  img.src = paths[i++]; // Sete the path to the current counter and then increase the counter
  }, 400);

  const StopRobo =  () => {
    clearInterval(timer);
  }

//Image Popup
document.querySelectorAll('img').forEach(image => {
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

document.querySelector('.imagePopUp .overlay').onclick = () => {
  document.querySelector('.imagePopUp').style.display = 'none';
  document.querySelector('.imagePopUp').classList.remove('popupEnter');
  document.querySelector('html').style.overflow = 'auto';
}
