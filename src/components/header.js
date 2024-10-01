import { getDate } from "../utils/getDate.js";

export function renderHeader() {
  const imageWrap = document.getElementById("header-image-wrap");
  const dateWrap = document.getElementById("header-date-wrap");

  const headerImage = document.createElement("img");
  headerImage.src = `/src/assets/images/title.png`;
  headerImage.alt = "title";
  imageWrap.appendChild(headerImage);

  const headerTitle = document.createElement("p");
  headerTitle.textContent = `뉴스스탠드`;
  imageWrap.appendChild(headerTitle);

  const headerDate = document.createElement("p");
  headerDate.textContent = getDate();
  dateWrap.appendChild(headerDate);
};