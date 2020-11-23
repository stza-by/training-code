const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = navLinks.querySelectorAll('a');

const toggleNav = () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('toggle');
}

burger.addEventListener('click', toggleNav);

console.log(links);

links.forEach(link => {
    link.addEventListener('click', toggleNav)
})