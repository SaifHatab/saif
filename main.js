function myMenuFunction () {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    }else {
        menuBth.className = "nav-menu";
    }
}



/*----Dark mode---*/

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

/*----typing effect----*/

var typingEffect = new Typed(".typedText", {
    strings: ["Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

