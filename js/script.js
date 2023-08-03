let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.nextElementSibling;
    const icon = button.children[1];

    faq.classList.toggle('show');
    icon.classList.toggle('rotate');
  })
})


const typedTitle = document.getElementById("typed-title");
const text = typedTitle.innerText;
typedTitle.innerText = "";

let hasTyped = false;

function typeOnScroll() {
  const section = document.querySelector(".about");
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > sectionTop - sectionHeight / 2 && !hasTyped) {
    let index = 0;

    function type() {
      if (index < text.length) {
        typedTitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Pas de typsnelheid aan naar wens (in milliseconden)
      }
    }

    type();
    hasTyped = true;
  }
}

window.addEventListener("scroll", typeOnScroll);


