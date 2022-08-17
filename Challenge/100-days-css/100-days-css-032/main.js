$minus = document.querySelector("#minus");
$plus = document.querySelector("#plus");
$text = document.querySelector("#text");
$number = 0;

$minus.addEventListener("click", function () {
  $number--;
  $text.textContent = $number;
  $text.style.color = "#fff";
  $text.style.transform = "scale(1.3)";
  setTimeout(() => {
    $text.style.color = "#222";
    $text.style.transform = "scale(1)";
  }, 60);
});
$plus.addEventListener("click", function () {
  $number++;
  $text.textContent = $number;
  $text.style.color = "#fff";
  $text.style.transform = "scale(1.3)";
  setTimeout(() => {
    $text.style.color = "#222";
    $text.style.transform = "scale(1)";
  }, 60);
});
