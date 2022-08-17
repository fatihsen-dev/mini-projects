const renderKeyboard = () => {
  const keyboard = document.querySelector(".keyboard");
  for (let i = 0; i < 36; i++) {
    const key = document.createElement("LI");
    const letter = document.createElement("DIV");
    letter.innerHTML = i.toString(36).toUpperCase();

    if (letter.innerHTML === "Z") {
      key.style.flexBasis = "50%";
      key.style.justifyContent = "flex-start";
    }

    if (i < 10) {
      key.style.order = `${26 + i}`;
    }

    key.appendChild(letter);
    keyboard.appendChild(key);
  }
};

const triggerBeep = () => {
  const mapping = {
    A: ["short", "long"],
    B: ["long", "short", "short", "short"],
    C: ["long", "short", "long", "short"],
    D: ["long", "short", "short"],
    E: ["short"],
    F: ["short", "short", "long", "short"],
    G: ["long", "long", "short"],
    H: ["short", "short", "short", "short"],
    I: ["short", "short"],
    J: ["short", "long", "long", "long"],
    K: ["long", "short", "long"],
    L: ["short", "long", "short", "short"],
    M: ["long", "long"],
    N: ["long", "short"],
    O: ["long", "long", "long"],
    P: ["short", "long", "long", "short"],
    Q: ["long", "long", "short", "long"],
    R: ["short", "long", "short"],
    S: ["short", "short", "short"],
    T: ["long"],
    U: ["short", "short", "long"],
    V: ["short", "short", "short", "long"],
    W: ["short", "long", "long"],
    X: ["long", "short", "short", "long"],
    Y: ["long", "short", "long", "long"],
    Z: ["long", "long", "short", "short"],
    0: ["long", "long", "long", "long", "long"],
    1: ["short", "long", "long", "long", "long"],
    2: ["short", "short", "long", "long", "long"],
    3: ["short", "short", "short", "long", "long"],
    4: ["short", "short", "short", "short", "long"],
    5: ["short", "short", "short", "short", "short"],
    6: ["long", "short", "short", "short", "short"],
    7: ["long", "long", "short", "short", "short"],
    8: ["long", "long", "long", "short", "short"],
    9: ["long", "long", "long", "long", "short"],
    0: ["long", "long", "long", "long", "long"],
  };
  const keys = document.querySelectorAll(".keyboard div");
  const beep = document.querySelector(".beep");

  Array.from(keys).forEach((key, index) => {
    key.addEventListener("click", () => {
      let delay = 0;
      let animation = "";

      mapping[key.innerHTML].forEach((type, index) => {
        const duration = type === "long" ? 2 : 0.7;
        const prevDuration =
          mapping[key.innerHTML][index - 1] === "long" ? 2 : 0.7;
        const comma = index !== mapping[key.innerHTML].length - 1 ? ", " : "";

        delay += index !== 0 ? prevDuration : 0;
        animation += `beep ${duration}s ease ${delay}s 1 forwards${comma}`;
      });

      window.requestAnimationFrame(() => {
        beep.style.animation = "";
        window.requestAnimationFrame(() => {
          beep.style.animation = animation;
        });
      });
    });
  });
};

renderKeyboard();
triggerBeep();
