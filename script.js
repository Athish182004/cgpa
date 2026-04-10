function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    });
}

const sections = document.querySelectorAll(".slide");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add("active");
        }
    });
});