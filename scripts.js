const addBtn = document.getElementById("add");
const deleteAllBtn = document.getElementById("deleteAll");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

deleteAllBtn.addEventListener("click", () => {
  localStorage.clear();
});

addBtn.addEventListener("click", () => {
  addNewNote();
});

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main ${text ? "" : "hidden"} "></div>
      <textarea class=" ${text ? "hidden" : ""} "></textarea>`;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  textarea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateNote();
  });
  editBtn.addEventListener("click", () => {
    editBtn.firstElementChild.classList.toggle("fa-save");

    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);

    updateNote();
  });
  document.body.appendChild(note);
}

function updateNote() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
  // notes is the key and stringified version is the value of the note
}
