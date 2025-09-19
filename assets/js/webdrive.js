document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("level-container");

  try {
    const res = await fetch("assets/data/maps.json");
    const data = await res.json();

    for (const team in data) {
      const header = document.createElement("h2");
      header.textContent = team;
      container.appendChild(header);

      const ul = document.createElement("ul");
      for (const id in data[team]) {
        const map = data[team][id];
        const li = document.createElement("li");

        const link = document.createElement("a");
        link.href = `map.html?id=${id}`;
        link.textContent = map.name;
        link.style.color = map.color || "#000";

        li.appendChild(link);
        ul.appendChild(li);
      }

      container.appendChild(ul);
    }
  } catch (err) {
    container.innerHTML = "<p>Lỗi khi tải dữ liệu</p>";
    console.error(err);
  }
});





