class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.element = this.querySelector(".splide");
    this.options = JSON.parse(this.element.dataset.sliderSettings);
    this.mountSplide();
  }

  mountSplide() {
    const splide = new Splide(this.element, this.options).mount();
    const desktopimage = Array.from(document.querySelectorAll(".desktopimgaes"));
    desktopimage.forEach(each => {
      if(desktopimage.indexOf(each) !== 0){
        each.classList.add('d-none');
      }
    });
    const slides = document.querySelectorAll('.splide__slide');
  slides.forEach(each => {
    if(each.classList.contains('is-active')){
      each.classList.add('active-slide');
    }else{
      each.classList.remove('active-slide');
    }
    each.removeAttribute('style');
  })
    splide.on('moved', function(index){
      //changing the image
      desktopimage.forEach(each => {
        if(index === desktopimage.indexOf(each)){
              each.classList.remove('d-none');
            }else{
              each.classList.add('d-none');
          }
      });
      //changing the color
      slides.forEach(each => {
        if(each.classList.contains('is-active')){
          each.classList.add('active-slide');
        }else{
          each.classList.remove('active-slide');
        }
      }) 
  })
  
  
  }
}

customElements.define("splider-component", CustomSlider);