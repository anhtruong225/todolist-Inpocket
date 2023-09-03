const form = document.querySelector("#header-form");
const input = document.querySelector("#form-input");
const submit = document.querySelector("#submit-btn");
const listItem = document.querySelector("#list-item");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
});

function addItem() {
  const inputText = input.value;
  if (!inputText) {
    alert("Please add a valid item to the list");
    return;
  }
  //Create a div 'items', container of one list
  const items = document.createElement("div");
  items.classList.add("item-container");
  listItem.appendChild(items);

  //Create checkbox, a div 'checkbox-container' -> div 'uncheck', div 'check'

  const checkbox_container = document.createElement("div");
  checkbox_container.classList.add("checkbox-container");
  items.appendChild(checkbox_container);

  const uncheck = document.createElement("button");
  uncheck.classList.add("uncheck");
  uncheck.innerHTML = "&#x2610";
  checkbox_container.appendChild(uncheck);

  const check = document.createElement("div");
  check.classList.add("check");
  checkbox_container.appendChild(check);

  // Create text of the list which come from header, div 'output-container'-> input 'output-text'
  const output_container = document.createElement("div");
  output_container.classList.add("output-container");
  items.appendChild(output_container);

  const output_text = document.createElement("input");
  output_text.classList.add("output-text");
  output_text.type = "text";
  output_text.value = inputText;
  output_text.setAttribute("readonly", "readonly");
  output_container.appendChild(output_text);

  //Create a div 'actions-container' to contain delete button and edit button, div'actions-container' -> div 'edit', div'delete'

  const actions_container = document.createElement("div");
  actions_container.classList.add("actions-container");
  items.appendChild(actions_container);

  const edit_icon = document.createElement("button");
  edit_icon.classList.add("edit-icon");
  edit_icon.innerHTML = "&#x270E";
  actions_container.appendChild(edit_icon);

  const delete_icon = document.createElement("button");
  delete_icon.classList.add("delete-icon");
  delete_icon.innerHTML = "&#128465";
  actions_container.appendChild(delete_icon);
  input.value = "";

  //add event Handlers. click at button 'Edit' to edit the task, click delete to delete the task

  edit_icon.addEventListener("click", () => {
    output_text.removeAttribute("readonly");
  });
  delete_icon.addEventListener("click", () => {
    listItem.removeChild(items);
  });

  uncheck.addEventListener("click", () => {
    checkbox_container.removeChild(uncheck);
    checkbox_container.appendChild(check);
    check.innerHTML = "&#9989";
  });
}
