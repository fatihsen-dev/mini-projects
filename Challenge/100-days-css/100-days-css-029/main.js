$input = document.querySelector("#searchfield");
$textBox = document.querySelector(".text-box");
$output = document.querySelector(".output");
$outputText1 = document.querySelector(".output-text-1");
$outputText2 = document.querySelector(".output-text-2");
$outputText3 = document.querySelector(".output-text-3");

$input.addEventListener("keyup", function () {
  $text = $input.value;
  if ($text.length) {

    $textBox.classList.add("active");
    $output.classList.add("output-active");

    $outputText1.innerHTML = $text;
    $outputText2.innerHTML = $text;
    $outputText3.innerHTML = $text;
  } else {

    $output.classList.remove("output-active");
    $textBox.classList.remove("active");
  }
});
