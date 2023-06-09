function hover(boxid) {
    const box = document.getElementById(boxid);
    box.classList.add("hovered");
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
    if (n > 100 || n < 0) {
        alert('Enter a number from 0 to 100');
        return;
    }
    reset(parent, n);
})
