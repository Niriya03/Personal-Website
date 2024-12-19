let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Software Development Student', 'Former IELTS Trainer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });

function toggleContent(button) {
    const content = button.previousElementSibling;
    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Read Less";
    } else {
        content.style.display = "none";
        button.textContent = "Read More";
    }
}


/*                   References
1. Youtube Video: https://youtu.be/T8XzrXRu-rA
2. ChatGPT: I used ChatGPT to help me do this assignment. To do tasks like adding the toogleContent button in the hobbies section and adding a hover effect on cheat sheets. */ 