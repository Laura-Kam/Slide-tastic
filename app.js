// selectors

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

//keeps track of the current slide being displayed
let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

//translateX shifts the slide in the
// slide-container by -0% or -100%, - 200% etc to the left

function carousel() {
  //working with slides
  //counter changes dependent on next/prev button event listener
  //slides variable holds all slides with class slide.

  //if counter exceeds the number of slides then go back to slide 1 (index 0)
  // if (counter === slides.length) {
  //   counter = 0;
  // }

  // //if the counter is negative back from one, goes back to last slide
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }

  // button visibility - whether to display next or previous based on counter value

  //can click next until last slide.

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  //can click previous if not first slide
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else prevBtn.style.display = "none";

  //translate (move each slide) based on counter variable (slide);
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
