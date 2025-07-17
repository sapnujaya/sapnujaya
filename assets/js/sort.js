
document.getElementById("sortSelect").addEventListener("change", function () {
  const sortBy = this.value;
  const gallery = document.getElementById("gallery");
  const cards = Array.from(gallery.getElementsByClassName("thumbnail-card"));

  let sortedCards = cards;

  if (sortBy === "alphabetical") {
    sortedCards = cards.sort((a, b) =>
      a.dataset.name.localeCompare(b.dataset.name)
    );
  } else if (sortBy === "newest") {
    sortedCards = cards.sort((a, b) =>
      new Date(b.dataset.date) - new Date(a.dataset.date)
    );
  } else if (sortBy === "oldest") {
    sortedCards = cards.sort((a, b) =>
      new Date(a.dataset.date) - new Date(b.dataset.date)
    );
  }

  sortedCards.forEach(card => gallery.appendChild(card));
});
