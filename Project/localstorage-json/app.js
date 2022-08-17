let rgx = /(^[ a-zA-Z]{3,20}$)/iu;
let list = document.querySelector("#list");
let inputName = document.querySelector("#inputName");
let inputAge = document.querySelector("#inputAge");
let addBtn = document.querySelector("#addBtn");
let selectStatus = document.querySelector("#selectStatus");
let storage = [
  {
    userId: 1,
    userName: "Fatih",
    userAge: 23,
    status: "Online",
  },
  {
    userId: 2,
    userName: "Mert",
    userAge: 22,
    status: "Online",
  },
  {
    userId: 3,
    userName: "Can",
    userAge: 25,
    status: "Online",
  },
  {
    userId: 4,
    userName: "Berkay",
    userAge: 19,
    status: "Offline",
  },
  {
    userId: 5,
    userName: "Büşra",
    userAge: 20,
    status: "Online",
  },
  {
    userId: 6,
    userName: "Cesi",
    userAge: 19,
    status: "Offline",
  },
];
let parse;

if (localStorage.getItem("person")) {
  parse = JSON.parse(localStorage.getItem("person"));
  function display() {
    parse = JSON.parse(localStorage.getItem("person"));
    parse.forEach((e) => {
      let item = document.createElement("div");
      item.classList.add("item");
      let onlineClass = "";

      if (e.status == "Online") {
        onlineClass = "online";
      } else if (e.status == "Offline") {
        onlineClass = "offline";
      }
      item.innerHTML = `
        <p>${e.userId}</p>
        <p>${e.userName}</p>
        <p>${e.userAge}</p>
        <p class="${onlineClass}">${e.status}</p>
      `;
      list.appendChild(item);
    });
  }
  display();
  addBtn.onclick = () => {
    var selectvalue =
      selectStatus.options[selectStatus.selectedIndex].innerHTML;
    if (
      rgx.test(inputName.value) &&
      inputAge.value.length > 0 &&
      inputAge.value.length <= 3
    ) {
      parse.push({
        userId: parse.length + 1,
        userName: inputName.value,
        userAge: inputAge.value,
        status: selectvalue,
      });
      list.innerHTML = "";
      localStorage.setItem("person", JSON.stringify(parse));
      display();
      inputName.value = "";
      inputAge.value = "";
      inputName.style.border = "";
      inputAge.style.border = "";
    }
  };
} else {
  let stringify = JSON.stringify(storage);
  localStorage.setItem("person", stringify);
  function display() {
    storage.forEach((e) => {
      let item = document.createElement("div");
      item.classList.add("item");
      let onlineClass = "";

      if (e.status == "Online") {
        onlineClass = "online";
      } else if (e.status == "Offline") {
        onlineClass = "offline";
      }
      item.innerHTML = `
        <p>${e.userId}</p>
        <p>${e.userName}</p>
        <p>${e.userAge}</p>
        <p class="${onlineClass}">${e.status}</p>
      `;
      list.appendChild(item);
    });
  }
  display();
}

inputName.addEventListener("input", () => {
  if (rgx.test(inputName.value)) {
    inputName.style.border = "1px solid green";
  } else {
    inputName.style.border = "1px solid red";
  }
});
inputAge.addEventListener("input", () => {
  if (inputAge.value.length > 0 && inputAge.value.length <= 3) {
    inputAge.style.border = "1px solid green";
  } else {
    inputAge.style.border = "1px solid red";
  }
});
