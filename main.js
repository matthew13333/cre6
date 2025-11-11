    
    //index
    document.addEventListener('DOMContentLoaded', () => {
      const hero = document.querySelector('.hero-body');
      hero.style.opacity = 0;
      hero.style.transition = 'opacity 1s ease-out';
      setTimeout(() => hero.style.opacity = 1, 200);
    });

      const images = [
  "gambar1.png",
  "gambar2.png",
  "gambar3.png"
  ];

  const img = document.getElementById("slideshow");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function changeImage() {
    index = (index + 1) % images.length;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = images[index];
      img.style.opacity = 1;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }, 500);
  }

  setInterval(changeImage, 4000);


//gamedev

    document.addEventListener('DOMContentLoaded', () => {
      const burger = document.querySelector('.navbar-burger');
      const menu = document.querySelector('#navbarBasicExample');

      burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
      });
    });