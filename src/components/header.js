import { getDate } from "../utils/getDate.js";

export function header() {
  const imageWrap = document.getElementById("header-image-wrap");
  const dateWrap = document.getElementById("header-date-wrap");

  if (imageWrap && dateWrap) {
    const headerImage = document.createElement("img");
    headerImage.src = `/src/assets/images/title.png`;
    headerImage.alt = "title";
    imageWrap.appendChild(headerImage);

    const headerDate = document.createElement("p");
    headerDate.textContent = getDate();
    dateWrap.appendChild(headerDate);
  }
};