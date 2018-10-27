const $buttons = document.querySelectorAll(".app__item__button");
const $app = document.querySelector(".app");

$buttons.forEach(button => {
  button.addEventListener("click", e => {
    const { parentNode } = e.target.parentNode;
    $app.removeChild(parentNode);
  });
});
