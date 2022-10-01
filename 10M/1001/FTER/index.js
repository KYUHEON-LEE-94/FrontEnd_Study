let sw = 0;
const body = document.querySelector("body");
const allBtn = document.querySelector(".allBtn");
const prev = document.querySelector("a.prev");
const next = document.querySelector("a.next");
const container = document.querySelector(".container");
const slideWrap = document.querySelector(".slideWrap");
slideWrap.style.left = "-100%";
const slideElems = slideWrap.querySelectorAll('.slide')
let timerId;
// all버튼//////////////////////////////////////
allBtn.addEventListener("click", function () {
  sw = !sw;
  if (sw) {
    this.classList.add("on");
    prev.style.opacity = "0";
    next.style.opacity = "0";
    allList();
  } else {
    this.classList.remove("on");
    prev.style.opacity = "1";
    next.style.opacity = "1";
  }
});
//allList보기////////////////////////////////
function allList() {
  container.style.width = "100%";
  slideWrap.style.width = "100%";
  slideWrap.style.flexWrap = "wrap";

  let slideElems = slideWrap.querySelectorAll(".slide");
  slideElems.forEach((slide) => {
    slide.style.width = "25%";
  });
  body.style.overflow = "auto";
}
//Next 버튼////////////////////////////////////
next.addEventListener("click", function (e) {
  e.preventDefault();
  nextSlide();
});

//Prev버튼////////////////////////////////////
prev.addEventListener("click", function (e) {
  e.preventDefault();
  prevSlide();
});

//Next 슬라이드////////////////////////////////////
function nextSlide() {
  slideWrap.style.transition = 500 + "ms";
  slideWrap.style.left = -200 + "%";
  throttling(callBackNext, 500);
}
function callBackNext() {
  slideWrap.append(slideWrap.firstElementChild);
  slideWrap.style.transition = 0 + "ms";
  slideWrap.style.left = -100 + "%";
}
//Prev 슬라이드////////////////////////////////////
function prevSlide() {
  slideWrap.style.transition = 500 + "ms";
  slideWrap.style.left = 0 + "%";
  throttling(callBackPrev, 500);
}
function callBackPrev() {
  slideWrap.prepend(slideWrap.lastElementChild);
  slideWrap.style.transition = 0 + "ms";
  slideWrap.style.left = -100 + "%";
}
// 쓸로틀링 반복 제어//////////////////////////////
function throttling(callback, timeout) {
  if (timerId) {
    return;
  }
  timerId = true;
  setTimeout(() => {
    callback();
    timerId = false;
  }, timeout);
}

function desktopWheel() {
  container.addEventListener("wheel", function (e) {

    if (e.deltaY < 0) {
      prevSlide();
    } else if (e.deltaY > 0) {
      nextSlide();
    }
  });

}

window.addEventListener('resize', function () {
  let deviceWid = this.window.outerWidth
  console.log(deviceWid)
  deviceCheck()
})

function deviceCheck() {
  let deviceWid = this.window.outerWidth


  if (deviceWid <= 580) {
    prev.style.opacity = "0";
    next.style.opacity = "0";
    slideWrap.append(slideWrap.firstElementChild)
    mobile()
    mobileWheel()
  } else if (deviceWid > 581 && deviceWid < 1020) {
    prev.style.opacity = "1";
    next.style.opacity = "1";
    tabPad();
    desktopWheel();
  }
  else if (deviceWid >= 1020) {
    prev.style.opacity = "1";
    next.style.opacity = "1";
    desktop();
    desktopWheel();
  }
}

deviceCheck()

function desktop() {
  container.style.width = "25%";
  slideWrap.style.width = "1000%";
  slideWrap.style.left = 0

  slideElems.forEach(slide => {
    slide.style.width = "10%"
  });
  body.style.overflow = "none";

}

function tabPad() {
  container.style.width = "33%";
  slideWrap.style.width = "1000%";
  slideWrap.style.left = 0

  slideElems.forEach(slide => {
    slide.style.width = "10%"
  });
  body.style.overflow = "none";

}

//mobile
function mobile() {
  container.style.width = "100%";
  slideWrap.style.width = "100%";
  slideWrap.style.left = 0

  slideElems.forEach(slide => {
    slide.style.width = "100%"
  });
  body.style.overflow = "auto";

}
function mobileWheel() {
  container.addEventListener("wheel", function (e) {

    if (e.deltaY < 0) {
      MprevSlide();
    } else if (e.deltaY > 0) {
      MnextSlide();
    }
  });

}


function MnextSlide() {
  slideWrap.style.transition = 500 + "ms";
  slideWrap.style.top = -200 + "%";
}


function MprevSlide() {
  slideWrap.style.transition = 500 + "ms";
  slideWrap.style.top = 0 + "%";
}

