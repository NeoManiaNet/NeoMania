window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar-container").className = "navbar-container-light";
    document.getElementById("navbar").className = "navbar-light";
  } else {
    document.getElementById("navbar-container").className = "navbar-container-dark";
    document.getElementById("navbar").className = "navbar-dark";
  }
}