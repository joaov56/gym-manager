const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const close = document.querySelector(".close-modal");
const cursos = document.querySelectorAll(".card_curso");

for (let curso of cursos) {
  curso.addEventListener("click", function () {
    const id = curso.getAttribute("id");
    window.location.href = `/courses/${id}`;
  });
}
for (let card of cards) {
  card.addEventListener("click", function () {
    const videoid = card.getAttribute("id");
    window.location.href = `/video?id=${videoid}`;
  });
}

const iframe = modalOverlay.querySelector("iframe");
