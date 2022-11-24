const toggleButton = document.getElementsByClassName("navmenu")[0]
const navLinks = document.getElementsByClassName("navbar-hidden")[0]
const question = document.querySelectorAll(".question")
const answer = document.getElementById("answer")
const faq = document.querySelectorAll(".faq")


toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

faq.forEach(i => {
    i.addEventListener('click', () =>{
        i.classList.toggle('active')
    })
});

