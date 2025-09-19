function convertGoogleDriveLink(link) {
  try {
    const url = new URL(link);
    if (url.hostname.includes("drive.google.com")) {
      const match = url.pathname.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (match) {
        const fileId = match[1];
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    }
  } catch (e) {
  }
  return link;
}

document.addEventListener("DOMContentLoaded", async () => {
    
  const container = document.getElementById("level-container");

  try {
    const res = await fetch("/../assets/data/maps.json");
    const data = await res.json();

    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get("id");
    if (!targetId) {
    location.href = "/";
    return;
    }
    if (targetId) {
      let found = false;

      for (const team in data) {
        if (data[team][targetId]) {
          const map = data[team][targetId];
            const baseColor = map.color;
            document.querySelector("main").style.background = `linear-gradient(135deg,  #ffffff, ${baseColor})`;

          const wrapper = document.createElement("div");
          wrapper.className = "map-wrapper";

          const infoDiv = document.createElement("div");
          infoDiv.className = "map-info";
          infoDiv.innerHTML = `
            <h2 style="color:${map.color || "#000"}">${map.name}</h2>
            <p>
              <strong>Author:</strong> ${map.author || "?"}<br>
              <strong>BPM:</strong> ${map.bpm || "?"}<br>
              <strong>Difficulty:</strong> ${map.difficulty || "?"}<br>
              <a href="${convertGoogleDriveLink(map.download)}" target="_blank" class="dl-btn" style="background-color:${map.color}">Download</a>

            </p>
          `;

          const videoDiv = document.createElement("div");
          videoDiv.className = "map-video";
          videoDiv.innerHTML = `
            <iframe src="${map.youtube}" frameborder="0" allowfullscreen style="border-radius: 12px; overflow: hidden;"></iframe>
          `;

          wrapper.appendChild(infoDiv);
          wrapper.appendChild(videoDiv);
          container.appendChild(wrapper);

          found = true;
          break;
        }
      }

      if (!found) {
        container.innerHTML = "<p>Invalid map!</p>";
      }
    } else {
      for (const team in data) {
        const header = document.createElement("h2");
        header.textContent = team;
        container.appendChild(header);

        const ul = document.createElement("ul");
        for (const id in data[team]) {
          const map = data[team][id];
          const li = document.createElement("li");

          const link = document.createElement("a");
          link.href = `index.html?id=${id}`;
          link.textContent = map.name;
          link.style.color = map.color || "#000";

          li.appendChild(link);
          ul.appendChild(li);
        }

        container.appendChild(ul);
      }
    }
  } catch (err) {
    container.innerHTML = "<p>Error.</p>";
    console.error(err);
  }
});




