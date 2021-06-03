let toggleNav = function () {
  let getMainUl = document.querySelector(".nav-main ul");

  if (getMainUl.style.visibility === "visible") {
    getMainUl.style.visibility = "hidden";
  } else {
    getMainUl.style.visibility = "visible";
  }
};

document.querySelector("#home").addEventListener("click", function () {
  document.body.style.backgroundColor = "#f1f1f1";
  toggleNav();
});

document.querySelector("#red").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  toggleNav();
});

document.querySelector("#orange").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
  toggleNav();
});

document.querySelector("#purple").addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
  toggleNav();
});

document.querySelector("#green").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  toggleNav();
});

document
  .querySelector("#home")
  .addEventListener("mouseHover", function (mouseHover) {
    mouseHover.target.style.backgroundColor = "#f1f1f1";
  });

document
  .querySelector("#red")
  .addEventListener("mouseHover", function (mouseHover) {
    mouseHover.target.style.backgroundColor = "red";
  });

document
  .querySelector("#orange")
  .addEventListener("mouseHover", function (mouseHover) {
    mouseHover.target.style.backgroundColor = "orange";
  });

document
  .querySelector("#purple")
  .addEventListener("mouseHover", function (mouseHover) {
    mouseHover.target.style.backgroundColor = "purple";
  });

document
  .querySelector("#green")
  .addEventListener("mouseHover", function (mouseHover) {
    mouseHover.target.style.backgroundColor = "green";
  });
