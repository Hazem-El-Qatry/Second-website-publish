// get slider items
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of slides
var slidesCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// previous and next buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// on click previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// // create main ul element
// var paginationElement = document.createElement("ul");

// // set ID on created ul element
// paginationElement.setAttribute("id", "pagination-ul");

// // create li based on slides count
// for (var i = 1; i <= slidesCount; i++) {
//   // create the li
//   var paginationListItem = document.createElement("li");
//   // set custom attribute
//   paginationListItem.setAttribute("data-index", i);
//   //   set item content
//   paginationListItem.appendChild(document.createTextNode(i));
//   //   append lis to the main ul
//   paginationElement.appendChild(paginationListItem);
// }

// // add the created ul created to the page
// document.getElementById("indicators").appendChild(paginationElement);

// // get the new created ul
// var paginationCreatedUl = document.getElementById("pagination-ul");

// // get pagination items
// var paginationBullets = Array.from(
//   document.querySelectorAll("#pagination-ul li")
// );

// // loop through all bullets
// for (var i = 0; i < paginationBullets.length; i++) {
//   paginationBullets[i].onclick = function () {
//     currentSlide = parseInt(this.getAttribute("data-index"));

//     theChecker();
//   };
// }

// triger the checker function
theChecker();

//  functions
/****************************************************** */
// next slide function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// previous slide function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
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

  //   set active class on current pagination item
  //   paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  //   check if the current slide is the first
  if (currentSlide == 1) {
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

  //   loop through pagination bullets
  //   paginationBullets.forEach(function (bullet) {
  //     bullet.classList.remove("active");
  //   });
}
