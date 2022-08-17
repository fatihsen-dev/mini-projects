document.querySelector("#file").onchange = function () {
  $fileName = document.querySelector("#file");
  $fileName.style.color = "#aaa";

  $image = document.querySelector("#img");
  $image.style.opacity = "0";

  $btn = document.querySelector("#btn");
  $btn.onclick = function () {
    $line = document.querySelector("#line");
    line.style.transform = "translate(0,-14px)";

    $fileName = document.querySelector("#file");
    $fileName.style.color = "transparent";

    $label = document.querySelector("#label");
    $label.style.border = "1px solid transparent";

    $circle = document.querySelector("#circle");
    $circle.style.opacity = "1";
    $circle.style.animation = "cirlce 2.5s linear forwards";

    $ok = document.querySelector("#ok");
    $ok.style.animation = "ok 2.5s linear forwards";
  };
};
