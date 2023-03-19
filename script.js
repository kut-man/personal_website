function ParallaxEffect(e) {
    let moveX = e.clientX / 10;
    let moveY = e.clientY / 10;
    const leftElements = document.querySelectorAll(".leftDiv");
    const rightElements = document.querySelectorAll(".rightDiv");

    function Move() {
        leftElements.forEach(node => {
            node.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        rightElements.forEach(node => {
            node.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        });
    }

    setTimeout(Move, 200);
}

window.addEventListener("mousemove", ParallaxEffect)