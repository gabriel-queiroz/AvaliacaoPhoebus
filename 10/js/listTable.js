const render = () => {
  const $table = document.querySelector(".app__tableusers__body");
  $table.innerHTML = "";
  data.forEach(user => {
    const $tr = document.createElement("tr");
    const $action = document.createElement("td");
    const $buttonEdit = document.createElement("button");
    const $buttonDelete = document.createElement("button");
    $buttonEdit.textContent = "edit";
    $buttonDelete.textContent = "delete";
    $buttonEdit.classList.add("app__tableusers__button__edit");
    $buttonDelete.classList.add("app__tableusers__button__delete");
    $action.appendChild($buttonEdit);
    $action.appendChild($buttonDelete);
    Object.keys(user).forEach(key => {
      const $td = document.createElement("td");
      $td.textContent = user[key];
      $tr.appendChild($td);
    });
    if ($tr.childNodes.length === 3) {
      $tr.appendChild(document.createElement("td"));
    }
    $tr.appendChild($action);
    $table.appendChild($tr);
  });
  AddClickAllDeleteButtons();
  AddClickAllEditButtons();
};
render();
