let audio = document.querySelector("#audio");
let trackName = document.querySelector("#track");
let time = document.querySelector("#time");
let progres = document.querySelector("#progres");
let imgSrc = document.querySelector("#trackImg");
let animationSpan = document.querySelectorAll(".animation span");
let prevBtn = document.querySelector("#prevBtn");
let playBtn = document.querySelector("#playBtn");
let nextBtn = document.querySelector("#nextBtn");

let listCount = 0;
let truecontrol = true;
let icons = document.querySelectorAll("#playBtn ion-icon");

let list = [
  {
    trackName: "PaulWetz - Moment",
    trackSrc: "./music/moment.mp3",
    trackImg: "./image/moment.jpg",
  },
  {
    trackName: "Dadju - Bob Marley",
    trackSrc: "./music/bobMarley.mp3",
    trackImg: "./image/dadju-bob-marley.jpg",
  },
  {
    trackName: "Marina - Hermit the frog",
    trackSrc: "./music/hermitTheFrog.mp3",
    trackImg: "./image/marina-hermit-the-frog.jpg",
  },
];

function updateListCount() {
  progres.style.width = "0%";
  time.innerHTML = "00:00";
  icons[1].classList.remove("active");
  icons[0].classList.add("active");
  truecontrol = true;

  if (listCount == 0) {
    trackName.innerHTML = list[0].trackName;
    audio.src = list[0].trackSrc;
    imgSrc.src = list[0].trackImg;
  } else if (listCount == 1) {
    trackName.innerHTML = list[1].trackName;
    audio.src = list[1].trackSrc;
    imgSrc.src = list[1].trackImg;
  } else if (listCount == 2) {
    trackName.innerHTML = list[2].trackName;
    audio.src = list[2].trackSrc;
    imgSrc.src = list[2].trackImg;
  }
}
updateListCount();
playBtn.addEventListener("click", (e) => {
  if (truecontrol) {
    icons[1].classList.add("active");
    icons[0].classList.remove("active");
    truecontrol = false;

    audio.play();
    animationSpan.forEach((span) => {
      span.style.opacity = "1";
    });
  } else {
    icons[1].classList.remove("active");
    icons[0].classList.add("active");
    truecontrol = true;

    audio.pause();
    animationSpan.forEach((span) => {
      span.style.opacity = "0";
    });
  }
});

let timecount = 0;
audio.addEventListener("timeupdate", (e) => {
  let duration = audio.currentTime;

  let sec, min;
  sec = Math.floor(duration);
  min = Math.floor(sec / 60);
  min = min >= 10 ? min : "0" + min;
  sec = Math.floor(sec % 60);
  sec = sec >= 10 ? sec : "0" + sec;

  time.innerHTML = min + ":" + sec;

  var progressed = (audio.currentTime * 100) / audio.duration;

  progres.style.width = progressed + "%";

  if (progres.style.width == "100%") {
    progres.style.width = "0%";
    time.innerHTML = "00:00";
    icons[1].classList.remove("active");
    icons[0].classList.add("active");
    truecontrol = true;
  }
});

prevBtn.addEventListener("click", (e) => {
  if (listCount == 0) {
    listCount = list.length - 1;
  } else {
    listCount -= 1;
  }
  updateListCount();
  audio.play();
  animationSpan.forEach((span) => {
    span.style.opacity = "1";
  });
  icons[1].classList.add("active");
  icons[0].classList.remove("active");
  truecontrol = false;
});
nextBtn.addEventListener("click", (e) => {
  if (listCount == list.length - 1) {
    listCount = 0;
  } else {
    listCount += 1;
  }
  updateListCount();
  audio.play();
  animationSpan.forEach((span) => {
    span.style.opacity = "1";
  });
  icons[1].classList.add("active");
  icons[0].classList.remove("active");
  truecontrol = false;
});
