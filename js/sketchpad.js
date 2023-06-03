function hover(boxid) {
    const box = document.getElementById(boxid);
    let col = window.getComputedStyle(box).backgroundColor;

    col = col.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    let red = parseInt(col[1]);
    let green = parseInt(col[2]);
    let blue = parseInt(col[3]);

    box.style.backgroundColor = `rgb(${red-20}, ${green-20}, ${blue-20})`;

}

function reset(container, newsize) {
    container.replaceChildren();
    makegrid(newsize);
}
function makegrid(n) {
    const parent = document.querySelector(".allparent");

    for (let i = 0; i < n; i++) {
        let tmphorz = document.createElement("div");
        tmphorz.classList.add("rowchild");
        for (let j = 0; j < n; j++) {
            let tmpbox = document.createElement("div");
            tmpbox.classList.add("boxchild");
            tmpbox.id = `${i}, ${j}`;
            tmpbox.addEventListener('mouseover', (e) => hover(e.target.id));
            tmpbox.style.backgroundColor = "white";
            tmphorz.appendChild(tmpbox);
        }
        parent.appendChild(tmphorz);
    }
}

makegrid(16);

const btn = document.getElementById('reset');
btn.addEventListener('click', () => {
    n = prompt("Enter size of new grid: ");
    const parent = document.querySelector(".allparent");
    reset(parent, n);
})
