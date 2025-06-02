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

/*-------send email----------*/

window.addEventListener("DOMContentLoaded", function () {
  emailjs.init("CEbgTN8sBT71dOOCP");

  const form = document.getElementById("contact-form");
  const message = document.getElementById("contact-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // إرسال النموذج
    emailjs.sendForm("service_yp0eyp3", "template_4xonj2g", this)
      .then(function () {
        message.innerText = "✅ Message sent successfully!";
        message.style.color = "green";
        form.reset();
      }, function (error) {
        message.innerText = "❌ Failed to send message.";
        message.style.color = "red";
        console.error("EmailJS Error:", error);
      });
  });
});
