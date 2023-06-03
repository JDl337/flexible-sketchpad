function getRandomRGBA() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function hover(boxid) {
    const box = document.getElementById(boxid);
    box.style.backgroundColor = getRandomRGBA();
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
    reset(parent, n);
})
