const $numbers = document.querySelector(".numbers");

for (let i = 1; i <= 100; i++) {
  const $option = document.createElement("option");
  $option.value = option.text = i;
  if (i == 50) {
    $option.selected = true;
  }
  $numbers.add(option);
}
