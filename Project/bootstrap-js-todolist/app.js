const container = document.querySelector("#container");
const popup = document.querySelector("#popup");
let editText = document.querySelector("#editText");
let editBtn2 = document.querySelector("#editBtn2");

let item;

function addItem() {
  item = document.createElement("div");
  if (inputText.value !== "") {
    item.classList =
      "item d-flex align-items-center bg-white justify-content-between text-dark fs-5 fw-semibold p-1";
    item.innerHTML = `
    <span id="outputText" class="mx-2">${inputText.value}</span>
        <div class="" role="group" aria-label="Basic example">
          <button
            id="markBtn"
            type="button"
            class="btn btn-success btn-sm pb-2"
          >
            <i class="bi bi-check2-circle"></i>
          </button>
          <button
            id="editBtn"
            type="button"
            class="btn btn-primary btn-sm pb-2"
          >
            <i class="bi bi-pencil-fill"></i>
          </button>

          <button
            id="trashBtn"
            type="button"
            class="btn btn-danger btn-sm pb-2 "
          >
            <i class="bi bi-trash2-fill"></i>
          </button>
        </div>
  `;
    container.appendChild(item);
    inputText.value = "";
  }
}

let control = true;
function markItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((e) => {
    e.addEventListener("click", (btn) => {
      let span1 = btn.target.parentNode.parentNode.children[0];
      let span2 = btn.target.parentNode.parentNode.parentNode.children[0];

      // Mark btn
      if (btn.target.id == "markBtn") {
        span1.style.textDecoration = "line-through";
        span1.style.textDecorationStyle = "wavy";
        span1.style.textDecorationColor = "#555";
      } else if (btn.target.parentNode.id == "markBtn") {
        span2.style.textDecoration = "line-through";
        span2.style.textDecorationStyle = "wavy";
        span2.style.textDecorationColor = "#555";
      }

      // Trash btn
      if (btn.target.id == "trashBtn") {
        btn.target.parentNode.parentNode.remove();
      } else if (btn.target.parentNode.id == "trashBtn") {
        btn.target.parentNode.parentNode.parentNode.remove();
      }

      // Edit btn
      if (btn.target.id == "editBtn") {
        editText.value = span1.innerHTML;

        popup.classList.remove("d-none");
        popup.classList.add("d-flex");

        editBtn2.onclick = () => {
          span1.innerHTML = editText.value;

          popup.classList.add("d-none");
          popup.classList.remove("d-flex");
        };
      } else if (btn.target.parentNode.id == "editBtn") {
        editText.value = span2.innerHTML;

        popup.classList.remove("d-none");
        popup.classList.add("d-flex");

        editBtn2.onclick = () => {
          span2.innerHTML = editText.value;

          popup.classList.add("d-none");
          popup.classList.remove("d-flex");
        };
      }
    });
  });
}

addBtn.onclick = () => {
  let inputText = document.querySelector("#inputText");
  inputText.focus();
  addItem();
  markItem();
};
