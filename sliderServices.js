const menuList = document.querySelector("#list-menu");
const btnIcon = document.querySelector("#btn-icon");

//slider elements
const btnPrev = document.querySelector("#btn-prev-slide");
const btnNext = document.querySelector("#btn-next-slide");
const boxSlides = [...document.querySelectorAll(".box-slide")];

btnIcon.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 800) {
    menuList.classList.remove("active");
  }
});

const nextSlide = () => {
  const firstSlide = boxSlides[0];
  firstSlide.classList.add("hide");
  btnNext.removeEventListener("click", nextSlide);

  function slide() {
    firstSlide.style.order = +firstSlide.style.order + 1;
    firstSlide.classList.remove("hide");
    firstSlide.removeEventListener("animationend", slide);
    boxSlides.push(boxSlides.shift());
    btnNext.addEventListener("click", nextSlide);
  }
  firstSlide.addEventListener("animationend", slide);
};

const prevSlide = () => {
  const lastSlide = boxSlides[boxSlides.length - 1];
  lastSlide.style.order = +lastSlide.style.order - 1;
  lastSlide.classList.add("show");
  btnPrev.removeEventListener("click", prevSlide);
  function slide() {
    lastSlide.classList.remove("show");
    lastSlide.removeEventListener("animationend", slide);
    boxSlides.unshift(boxSlides.pop());
    btnPrev.addEventListener("click", prevSlide);
  }
  lastSlide.addEventListener("animationend", slide);
};

btnPrev.addEventListener("click", prevSlide);
btnNext.addEventListener("click", nextSlide);
