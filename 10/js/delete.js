const AddClickAllDeleteButtons = () => {
  const $buttonsDelete = document.querySelectorAll(
    ".app__tableusers__button__delete"
  );
  $buttonsDelete.forEach(button => {
    button.addEventListener("click", e => {
      const $tr = e.target.parentNode.parentNode;
      const { textContent: id } = $tr.querySelector("td");
      deleteUser(id);
    });
  });
  const deleteUser = id => {
    data = data.filter(user => user.id !== parseInt(id));
    render();
  };
};
AddClickAllDeleteButtons();
