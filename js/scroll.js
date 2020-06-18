window.onscroll = function () {
  var scrollY = window.scrollY;
  var element = document.getElementById("header-content");
  console.log(scrollY);
  if (scrollY >= 150) {
    element.classList.add("header-content-scroll");
  } else {
    element.classList.remove("header-content-scroll");
  }
};

document.getElementById("teaser").play();
