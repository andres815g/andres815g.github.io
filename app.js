const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "numeric", month: "long", year: "numeric"
});
const sortedEntries = [...(window.ENTRIES || [])].sort((a, b) => b.date.localeCompare(a.date));

function safeDate(dateString) {
  const [y, m, d] = dateString.split("-").map(Number);
  return new Date(y, m - 1, d, 12);
}
function formatDate(dateString) {
  return dateFormatter.format(safeDate(dateString));
}
function mediaMarkup(entry) {
  let html = "";
  if (entry.image) html += `<img class="entry-image" src="${entry.image}" alt="Imagen dedicada" loading="lazy">`;
  if (entry.audio) html += `<div class="audio-wrap"><audio controls preload="none" src="${entry.audio}">Tu navegador no puede reproducir este audio.</audio></div>`;
  return html;
}
function renderEntry(entry, detailed = false) {
  return `<div class="entry-date">${formatDate(entry.date)}</div>
    <blockquote>${escapeHTML(entry.text || "")}</blockquote>
    ${mediaMarkup(entry)}
    ${entry.author ? `<p class="entry-author">${escapeHTML(entry.author)}</p>` : ""}`;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

const today = new Date();
const localToday = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
const todaysEntry = sortedEntries.find(entry => entry.date === localToday);
const todayContainer = document.getElementById("today-entry");
todayContainer.innerHTML = todaysEntry
  ? renderEntry(todaysEntry)
  : `<p class="empty">Todavía no hay un mensaje publicado. Vuelve pronto. ♡</p>`;

const list = document.getElementById("entry-list");
document.getElementById("entry-count").textContent =
  `${sortedEntries.length} ${sortedEntries.length === 1 ? "detalle" : "detalles"}`;

if (!sortedEntries.length) {
  list.innerHTML = `<p class="empty">Aquí aparecerán los mensajes conforme se vayan publicando.</p>`;
} else {
  list.innerHTML = sortedEntries.map((entry, index) => `
    <article class="archive-card ${index === 0 ? "open" : ""}">
      <button class="archive-toggle" type="button" aria-expanded="${index === 0}">
        <span>
          <span class="archive-card-title">${escapeHTML(entry.title || "Un detalle para ti")}</span>
          <span class="archive-card-date">${formatDate(entry.date)}</span>
        </span>
        <span class="chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="archive-content">${renderEntry(entry, true)}</div>
    </article>`).join("");

  list.querySelectorAll(".archive-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".archive-card");
      card.classList.toggle("open");
      button.setAttribute("aria-expanded", card.classList.contains("open"));
    });
  });
}
