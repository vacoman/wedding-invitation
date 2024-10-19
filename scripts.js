// Ejecutar cuando el DOM esté listo
// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const animatedContent = document.querySelector('.animated-content');

    // Agregar la clase 'show' para iniciar la animación
    animatedContent.classList.add('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedContents = document.querySelectorAll('.animated-content');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Dejar de observar una vez se ha mostrado
            }
        });
    }, {
        threshold: 0.2 // El porcentaje del elemento que debe ser visible antes de la animación
    });

    animatedContents.forEach(content => {
        observer.observe(content);
    });
});

// Configura la fecha del evento (aquí puedes colocar la fecha de tu boda)
const weddingDate = new Date('December 18, 2024 17:00:00').getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    // Cálculos de días, horas, minutos y segundos
    const dias = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const horas = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Actualiza el contenido en el HTML
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

    // Si el tiempo se acaba
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById('countdown-timer').innerHTML = "Ya es hora del gran dia";
    }
}, 1000);

document.getElementById('reserva').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const asistente = document.getElementById('asistente').value;

    if (asistente === 'Si') {
        alert(`Gracias, ${nombre}! Estamos emocionados de verte en la boda`);
    } else {
        alert(`Sentimos que no puedas venir, ${nombre}.`);
    }
});

document.getElementById('reserva').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const asistente = document.getElementById('asistente').value;

    const data = {
      nombre: nombre,
      asistente: asistente
    };

    fetch('https://script.google.com/macros/s/AKfycbyxfbfo7rgIy2_2L8nCY8bRpjdKcq6rOmHg61tf8C32xlzzj9gBMcICfzJ3aqDCk97Nug/exec', {  // Reemplaza con la URL de tu Web App
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => console.log('Datos enviados correctamente'))
    .catch(error => console.error('Error:', error));
  });