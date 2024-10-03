import { getDate } from "../utils/getDate.js";
import { HEADER_CONSTANTS } from "../utils/constants.js";

export function renderHeader() {
  const imageWrap = document.getElementById("header-image-wrap");
  const dateWrap = document.getElementById("header-date-wrap");

  const headerImage = document.createElement("img");
  headerImage.src = HEADER_CONSTANTS.IMAGE_SRC;
  headerImage.alt = HEADER_CONSTANTS.IMAGE_ALT;
  imageWrap.appendChild(headerImage);

  const headerTitle = document.createElement("p");
  headerTitle.textContent = HEADER_CONSTANTS.TITLE;
  imageWrap.appendChild(headerTitle);

  const headerDate = document.createElement("p");
  headerDate.textContent = getDate();
  dateWrap.appendChild(headerDate);
};