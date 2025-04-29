// import bay from "https://cdn.jsdelivr.net/npm/@dunks1980/bay.js@3.4.2/bay.min.mjs";
// //import bay from "http://127.0.0.1:3001/bay.mjs";
// import modal from "https://cdn.jsdelivr.net/npm/@dunks1980/bay.js@3.4.2/components/modal.mjs";
import bay from "./script/bay.min.mjs";
import modal from "./script/modal.mjs";

bay();
bay.create("bay-modal", modal, ["open"]);

window.addEventListener("DOMContentLoaded", async () => {
  const shadowHost = document.querySelector("bay-component");
  if (shadowHost && shadowHost.shadowRoot) {
    // Load Font Awesome CSS
    const response = await fetch(
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    );
    const fontAwesomeCSS = await response.text();

    // Create a <style> tag inside Shadow DOM
    const styleElem = document.createElement("style");
    styleElem.textContent = fontAwesomeCSS;

    shadowHost.shadowRoot.prepend(styleElem);
  }
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
