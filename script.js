// Animate skill bars when visible
const skillBars = document.querySelectorAll('.skill-bar span');

function showSkills() {
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    const barPos = bar.getBoundingClientRect().top;
    const screenPos = window.innerHeight - 50;

    if (barPos < screenPos) {
      bar.style.width = width;
    }
  });
}

window.addEventListener('scroll', showSkills);
