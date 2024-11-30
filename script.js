// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".cards-container");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const themeToggle = document.getElementById("themeToggle");
  const currentDate = new Date().getDate();

  // Mensajes únicos para cada tarjeta
  const messages = [
    "🕯️ Hoy encendemos la primera vela de la Corona de Adviento y recordamos que la luz de la VIDA ya está cerca.",
    "🙏 Hoy rezamos para que el Espíritu ilumine este exámen tan importante.",
    "🎶 Armamos una playlist bien argenta?",
    "🙏 Hacemos una oración a Santa Lucía y le pedimos que ilumine nuestro nuevo camino.",
    "✍️ Escribimos una carta de agradecimiento.",
    "🍕 Hacemos pizza y comemos disfrutando la noche.",
    "🎄 Buscamos los adornos de Navidad y comenzamos a decorar.",
    "🙏 Rezamos el Rosario, armamos el arbolito y vemos a la Mari.",
    "🍪 Cocinamos algo rico para que se lleve el P.",
    "🧉 Tomamos unos ricos mates",
    "♥️ Ordenamos nuestras cosas y llevamos algo a Cáritas.",
    "🙏 Rezamos el rosario a nuestra Madre de Guadalupe.",
    "🙏 Vamos a la Fiesta de Santa Lucía.",
    "😎 Visitamos un lugar que nos guste.",
    "🍦 Comemos un helado.",
    "📷 Nos sacamos fotos bonitas.",
    "🥳 Cumpleaños de la Aba. Comienza la Novena de Navidad.",
    "🎁 Preparamos regalitos para Navidad.",
    "♥️ Visitamos y nos despedimos del Dani.",
    "🥳 Cumple P! Fiesta con perritos.",
    "📷 Armamos el álbum de fotos.",
    "🧹 Ayudamos en la casa.",
    "🎬 Vemos una película bonita.",
    "🎄 Preparamos la NocheBuena y saludamos al P.",
    "🌟 Comida de Navidad."
  ];

  // Crear tarjetas
  for (let i = 1; i <= 25; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">📅 ${i}</div>
        <div class="card-back hidden">${messages[i - 1]}</div>
      </div>
    `;
    card.addEventListener("click", () => handleCardClick(card, i));
    cardsContainer.appendChild(card);
  }

  // Función para manejar el clic en las tarjetas
  function handleCardClick(card, day) {
    const inner = card.querySelector(".card-inner");
    const back = card.querySelector(".card-back");

    if (day <= currentDate) {
      // Alternar entre número y mensaje
      if (inner.style.transform === "rotateY(180deg)") {
        inner.style.transform = "rotateY(0deg)"; // Volver a mostrar el número
      } else {
        inner.style.transform = "rotateY(180deg)"; // Mostrar el mensaje
        back.classList.remove("hidden");
      }
    } else {
      // Mostrar modal si el día no coincide
      modal.classList.remove("hidden");
    }
  }

  // Cerrar modal
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Alternar modo oscuro
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
