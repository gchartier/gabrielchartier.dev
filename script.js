const mobileNav     = document.querySelector(".navList")
const mobileNavIcon = document.querySelector(".mobileNavIcon")

function closeNav() {
    mobileNav.classList.remove('open')
    mobileNavIcon.classList.remove('mobileMenuOpen')
}

function toggleNav() {
    mobileNav.classList.toggle('open')
    mobileNavIcon.classList.toggle('mobileMenuOpen')
}