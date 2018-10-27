const $as = document.querySelectorAll("a");
$as.forEach((a, index) => {
  a.addEventListener("click", e => {
    e.preventDefault();
    alert(index);
  });
});
