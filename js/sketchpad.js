function hover(boxid) {
    const box = document.getElementById(boxid);
    box.classList.add("hovered");
}

function reset(container) {
    container.replaceChildren();
}

const parent = document.querySelector(".allparent");

let n = 80;

for (let i = 0; i < n; i++) {
    let tmphorz = document.createElement("div");
    tmphorz.classList.add("rowchild");
    for (let j = 0; j < n; j++) {
        let tmpbox = document.createElement("div");
        tmpbox.classList.add("boxchild");
        tmpbox.id = `${i}, ${j}`;
        tmpbox.addEventListener('mouseover', (e) => hover(e.target.id));
        tmphorz.appendChild(tmpbox);
    }
    parent.appendChild(tmphorz);
}
