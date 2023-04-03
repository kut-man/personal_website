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
    document.querySelector(".mainToggleContainer").classList.add("toogleAnimation")
    document.querySelector(".toggleContainer").classList.add("toogleAnimation1")

    document.querySelector(".mainToggleContainer").classList.remove("unToogleAnimation")
    document.querySelector(".toggleContainer").classList.remove("unToogleAnimation1")

    document.querySelector(".burgerNav").classList.remove("menuDisappear");
    document.querySelector(".burgerNav").classList.add("menuAppear");

    document.querySelector(".contactIcons").classList.remove("contactMenuDisappear")
    document.querySelector(".contactIcons").classList.add("contactMenuAppear")

    document.querySelector(".xIcon").classList.remove("xIconDisappear")
    document.querySelector(".xIcon").classList.add("xIconAppear")
}

function unToggle() {
    document.querySelector(".mainToggleContainer").classList.add("unToogleAnimation")
    document.querySelector(".toggleContainer").classList.add("unToogleAnimation1")

    document.querySelector(".burgerNav").classList.replace("menuAppear", "menuDisappear");
    document.querySelector(".contactIcons").classList.replace("contactMenuAppear", "contactMenuDisappear"); 
    document.querySelector(".xIcon").classList.replace("xIconAppear", "xIconDisappear"); 
}