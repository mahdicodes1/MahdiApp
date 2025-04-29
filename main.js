// import bay from "https://cdn.jsdelivr.net/npm/@dunks1980/bay.js@3.4.2/bay.min.mjs";
// //import bay from "http://127.0.0.1:3001/bay.mjs";
// import modal from "https://cdn.jsdelivr.net/npm/@dunks1980/bay.js@3.4.2/components/modal.mjs";
import bay from "./script/bay.min.mjs";
import modal from "./script/modal.mjs";

bay();
bay.create("bay-modal", modal, ["open"]);

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(async () => {
    const shadowHost = document.querySelector("bay-component");
    if (shadowHost && shadowHost.shadowRoot) {
      const response = await fetch(
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      );
      const fontAwesomeCSS = await response.text();
      const styleElem = document.createElement("style");
      styleElem.textContent = fontAwesomeCSS;
      shadowHost.shadowRoot.prepend(styleElem);
    }
  }, 500); // Delay 500ms
});

window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".project-img");

  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      let data = e.target.dataset;
      console.log("Clicked!", data.img);
      if (data.img) {
        this.img = data.img;
        this.open_modal = true;
        // Update modal manually if needed
      }
    });
  });
});

setTimeout(() => {
  const hasRefreshed = localStorage.getItem("hasRefreshed");

  if (!document.querySelector(".project-card")) {
    if (!hasRefreshed) {
      console.warn("No project cards found — refreshing once.");
      localStorage.setItem("hasRefreshed", "true");
      location.reload();
    } else {
      console.error(
        "Still no project cards after refresh. Not refreshing again."
      );
      localStorage.removeItem("hasRefreshed");
    }
  } else {
    localStorage.removeItem("hasRefreshed"); // reset if everything is fine
  }
}, 1500);
