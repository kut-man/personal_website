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

function toggle() {
    document.querySelector(".burgerNav").classList.toggle("menuAppear");
    document.querySelector(".toggleContainer>.contactIcons").classList.toggle("contactMenuAppear")
    document.querySelector(".xIcon").classList.toggle("xIconAppear")
    document.querySelector(".mainToggleContainer").classList.toggle("toogleAnimation")
    document.querySelector(".toggleContainer").classList.toggle("toogleAnimation1")

    if (document.querySelector(".xIcon").classList.contains("xIconAppear")) {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = null;
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(`.${entry.target.className}>revealer`);
            document.querySelector(`.${entry.target.className}>.revealer`).classList.add("show")
        }
        else {
            document.querySelector(`.${entry.target.className}>.revealer`).classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll('.firstProjectContainer');
console.log(hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));