const form = document.querySelector(".app__form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const $name = form.querySelector("#name");
  const $location = form.querySelector("#location");
  const $year = form.querySelector("#year");
  const id = document.querySelector(".app_form__iduser").textContent;
  const $buttonSubmit = document.querySelector(".app__form__button");
  if ($buttonSubmit.textContent === "Update") {
    const index = data.findIndex(element => element.id === parseInt(id));
    const user = {
      id,
      name: $name.value,
      location: $location.value,
      year: $year.value
    };
    data[index] = user;
    render();
    $name.value = "";
    $location.value = "";
    $year.value = "";
    $buttonSubmit.textContent = "Save";
  } else {
    data.push({
      id: Math.floor(Math.random() * 100) + 100,
      name: $name.value,
      location: $location.value,
      year: $year.value
    });
    render();
    $name.value = "";
    $location.value = "";
    $year.value = "";
  }
});
