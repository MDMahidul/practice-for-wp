function showComponent(componentNum) {
  var components = document.getElementsByClassName("component-section");
  for (var i = 0; i < components.length; i++) {
    components[i].classList.add("hidden");
  }
  document.getElementById("component" + componentNum).classList.remove("hidden");
  
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document.getElementsByTagName("button")[componentNum-1].classList.add("active");
}

/* carousel */
document.addEventListener( 'DOMContentLoaded', function () {
  var progress = document.querySelector('.splide__progress');
  var progressBar = document.querySelector('.splide__progress__bar');
  var progressNumber = document.querySelector('.splide__progress__number');

  var splide = new Splide('.splide', {
    type   : 'fade',
    perPage: 1,
    autoplay: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    pagination: false,
    arrows : true,
    speed:1000, 
  });

  splide.on('move', function() {
      var progressNumber = document.querySelector('.splide__progress__number');
      let pr =  parseInt(progressNumber.innerHTML);
    var current = splide.index + 1;
    var total = splide.length;       
    var width = (current / total) * 100;

    progressBar.style.width = width + '%';
    progressNumber.innerHTML = current; 
    if(current === total){
      progressNumber.innerHTML = "<i class='fa-solid fa-check'></i>"; 
    }
    const nextArrow = document.querySelector('.splide__arrow--next');
          const isLast = splide.index === splide.length - 1;
          nextArrow.classList.toggle('is-last', isLast);
  });

  splide.mount();
} );