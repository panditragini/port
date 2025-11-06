// 3D Tilt Effect
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;
  document.querySelector('.hero-content').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact alert
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for contacting Ragini 💌');
});
