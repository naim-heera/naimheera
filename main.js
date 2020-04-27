const toggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

toggle.addEventListener("click", function () {
  if (siteNav.classList.contains("site-nav--open")) {
    siteNav.classList.remove("site-nav--open");
    toggle.classList.remove("open");

    siteNav.classList.add("site-nav--closed");
  } else {
    siteNav.classList.remove("site-nav--closed");
    toggle.classList.add("open");

    siteNav.classList.add("site-nav--open");
  }
  // siteNav.classList.toggle("site-nav--open");
  // toggle.classList.toggle("open");
});


function myFunction() {
  var x = document.getElementById("mylinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 10;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #009999}";
  document.body.appendChild(css);
};
const progresses = document.querySelectorAll('.progress-done');
progresses.forEach(progress => {
  const done = progress.getAttribute('data-done');
  const duration = getComputedStyle(progress).transitionDuration;
  const timeoutDuration = +duration.slice(0, 1) * 1000;
  progress.style.width = done + "%";
  progress.style.opacity = 1;


  for (let i = 0; i <= done; i++) {
    setTimeout(() => {
      progress.innerText = i + "%";
    }, (timeoutDuration / done) * i);
  }

});