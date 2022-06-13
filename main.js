let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let notes = document.getElementById("notes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    // msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createNote();
};

let createNote = () => {
  notes.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editNote(this)" class="fas fa-edit"></i>
      <i onClick="deleteNote(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};

let deleteNote = (e) => {
  e.parentElement.parentElement.remove();
};

let editNote = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

