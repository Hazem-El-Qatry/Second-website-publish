// get slider items
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of slides
var slidesCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// auto slider

setInterval(() => {
  if (currentSlide <= 4) {
    removeAllActive();
    sliderImages[currentSlide].classList.add("active");
    currentSlide++;
  }
}, 3000);

// previous and next buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// on click previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// triger the checker function
theChecker();

//  functions
/****************************************************** */
// next slide function
function nextSlide() {
  if (
    nextButton.classList.contains("disabled") ||
    sliderImages[4].classList.contains("active")
  ) {
    // do nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// previous slide function
function prevSlide() {
  if (sliderImages[0].classList.contains("active")) {
    // do nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// create checker function
function theChecker() {
  // remove all active classes
  removeAllActive();

  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");

  //   check if the current slide is the first
  if (sliderImages[0].classList.contains("active")) {
    // add disabled class
    prevButton.classList.add("disabled");
  } else {
    // add disabled class
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == 5) {
    // add class disabled
    nextButton.classList.add("disabled");
  } else {
    // remove class disabled
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes from images and pagination bullets
function removeAllActive() {
  // loop through images
  sliderImages.forEach(function (image) {
    image.classList.remove("active");
  });
}

/* ------------------------------------------------------------------------ */
/* nav bar */

let toggler = document.querySelector(".toggle");
let nav = document.querySelector(".nav-links");
// let close = document.querySelector(".close");

toggler.onclick = function () {
  if (nav.classList.contains("close")) {
    nav.classList.remove("close");
    nav.classList.add("open");
    toggler.classList.add("active");
  } else if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    nav.classList.add("close");
    toggler.classList.remove("active");
  }
};

/* -------------------------------------------------------------------------- */
/* scroll up button */

let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY > 740
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*--------------------------------------------------------------------------- */
/* animation */

// progress skills animation
let skillsSection = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".prog span");
// statistics animation
let nums = document.querySelectorAll(".box .number");
let section = document.querySelector(".stats");
let started = false;
let timeCounter = 2000;

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 350) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  if (window.scrollY >= section.offsetTop - 200) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, timeCounter / goal);
}
