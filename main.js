// Remover la clase container al cargar
window.onload = () => {
  document.body.classList.remove("container");

  // Intentar reproducir música automáticamente (PC)
  const musica = document.getElementById("musica");
  musica.play().catch(() => {
    // Si falla (como en móviles), esperaremos la interacción
    document.addEventListener("click", playMusicaOnInteraction);
    document.addEventListener("touchstart", playMusicaOnInteraction);
  });
};

// Función para reproducir música después de interacción (móvil)
function playMusicaOnInteraction() {
  const musica = document.getElementById("musica");
  musica.play().catch(() => {});
  // Quitar los listeners para que no se repita
  document.removeEventListener("click", playMusicaOnInteraction);
  document.removeEventListener("touchstart", playMusicaOnInteraction);
}
