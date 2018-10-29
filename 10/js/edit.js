const AddClickAllEditButtons = () => {
  const $buttonsEdit = document.querySelectorAll(
    ".app__tableusers__button__edit"
  );
  $buttonsEdit.forEach(button => {
    button.addEventListener("click", e => {
      const $tr = button.parentNode.parentNode;
      const id = $tr.childNodes[0].textContent;
      const name = $tr.childNodes[1].textContent;
      const location = $tr.childNodes[2].textContent;
      const year = $tr.childNodes[3].textContent;
      document.querySelector("#name").value = name;
      document.querySelector("#location").value = location;
      document.querySelector("#year").value = year;
      document.querySelector(".app_form__iduser").textContent = id;
      const $buttonSubmit = document.querySelector(".app__form__button");
      $buttonSubmit.textContent = "Update";
    });
  });
};

AddClickAllEditButtons();
