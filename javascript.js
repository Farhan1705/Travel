document.addEventListener("DOMContentLoaded", function () {
    const tombolMenu = document.querySelector(".tombol-menu");
    const menuList = document.getElementById("menu-list");

    tombolMenu.addEventListener("click", function (e) {
        e.preventDefault();
        menuList.classList.toggle("active");
    });

});

window.addEventListener("scroll", function () {
    const body = document.body;
    const nav = document.querySelector("nav");

    if (
        body.classList.contains("halaman-home") ||
        body.classList.contains("halaman-destination") ||
        body.classList.contains("halaman-contact") 
    ) {
        if (window.scrollY > 50) {
            nav.classList.add("putih");
        } else {
            nav.classList.remove("putih");
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        message.style.display = "block";

        form.reset();

        setTimeout(() => {
            message.style.display = "none";
        }, 5000); 
    });
});
  