function iniciarCelebracion() {
  reproducirMusica();
  mostrarMensajeLenta();
  lanzarCorazones();
  crearGlobos();
  crearRosas();
}

function reproducirMusica() {
  const audio = document.getElementById('musica');

  if (audio.paused) {
      audio.play().catch((err) => {
          console.log("Debe haber una interacción primero para reproducir audio.");
          alert("Haz clic para activar el sonido 🎵");
      });
  }
}

function mostrarMensajeLenta() {
  const mensaje = document.getElementById('mensaje');
  const texto = `Querida mamá:

Hoy celebro mucho más que una fecha, celebro tu existencia, tu entrega, tu ternura infinita.
Gracias por cada sacrificio, cada abrazo que curó mi alma, cada palabra que me enseñó a ser fuerte.
Eres el corazón de esta familia, la raíz que nos sostiene.
En cada paso que doy está tu amor guiándome.

Te mereces el mundo, y aún así, das más de lo que recibes.
Que este día te devuelva un poco del amor inmenso que nos das cada día.

Feliz Día de las Madres, con todo mi amor. ❤️`;

  let index = 0;
  mensaje.textContent = "";

  const escribir = () => {
      if (index < texto.length) {
          mensaje.textContent += texto.charAt(index);
          index++;
          setTimeout(escribir, 40); // velocidad de escritura
      }
  };

  escribir();
}

function lanzarCorazones() {
  const colores = ['#ff4d6d', '#ff6b81', '#ff7f7f', '#ff99aa', '#ffb6c1'];
  const interval = setInterval(() => {
      let heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.background = colores[Math.floor(Math.random() * colores.length)];
      heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
  }, 200);

  setTimeout(() => clearInterval(interval), 10000);
}

function crearGlobos() {
  const globo = document.createElement("div");
  globo.classList.add("globo");
  globo.style.left = Math.random() * 100 + "vw";
  globo.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.body.appendChild(globo);
  setTimeout(() => globo.remove(), 9000);
}

function crearRosas() {
  const rosa = document.createElement("div");
  rosa.classList.add("rosa");
  rosa.style.left = Math.random() * 100 + "vw";
  rosa.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.body.appendChild(rosa);
  setTimeout(() => rosa.remove(), 9000);
}

// Intervalos para generar los elementos
setInterval(lanzarCorazones, 600);
setInterval(crearGlobos, 1200);
setInterval(crearRosas, 1500);
