
const btnPrevSlideExpert = document.querySelector("#btn-prev-expert-slide");
const btnNextSlideExpert = document.querySelector("#btn-next-expert-slide");
const boxSlidesExperts = [...document.querySelectorAll(".box-slide-experts")];

const showNextSlideExpert = () => {
  const firstSlide = boxSlidesExperts[0];
  firstSlide.classList.add("hide");
  btnNextSlideExpert.removeEventListener("click", showNextSlideExpert);

  function slide() {
    firstSlide.style.order = +firstSlide.style.order + 1;
    firstSlide.classList.remove("hide");
    firstSlide.removeEventListener("animationend", slide);
    boxSlidesExperts.push(boxSlidesExperts.shift());
    btnNextSlideExpert.addEventListener("click", showNextSlideExpert);
  }
  firstSlide.addEventListener("animationend", slide);
};

const showPrevSlideExpert = () => {
  const lastSlide = boxSlidesExperts[boxSlidesExperts.length - 1];
  lastSlide.style.order = +lastSlide.style.order - 1;
  lastSlide.classList.add("show");
  btnPrevSlideExpert.removeEventListener("click", showPrevSlideExpert);
  function slide() {
    lastSlide.classList.remove("show");
    lastSlide.removeEventListener("animationend", slide);
    boxSlidesExperts.unshift(boxSlidesExperts.pop());
    btnPrevSlideExpert.addEventListener("click", showPrevSlideExpert);
  }
  lastSlide.addEventListener("animationend", slide);
};

btnPrevSlideExpert.addEventListener("click", showPrevSlideExpert);
btnNextSlideExpert.addEventListener("click", showNextSlideExpert);