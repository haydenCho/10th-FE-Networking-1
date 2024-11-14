import { renderListCategory } from "../listCategory.js";
import createSubscribeButton from "../subscribeButton.js";

export default async function renderAllList() {
  // 데이터 불러오기(경로 주의)
  const response = await fetch("src/data/newsAllListData.json")
  const newsContentData = await response.json();

  const typeTabArea = document.querySelector('.news-content-area');
  typeTabArea.innerHTML = `
    <section class="news-category-area"></section>
    <section class="news-content-container">
      <section class="news-content-header">
        <img src=${newsContentData.press_image_url} alt="${newsContentData.press} 로고">
        <div class="news-content-editAt">${newsContentData.date}</div>
        <div class="news-content-subscribeBtn"></div>
      </section>
      <section class="news-content">
        <section class="left-content">
          <div class="main-news-image">
            <img src=${newsContentData.news_image_url} alt="메인 뉴스 이미지">
          </div>
          <div class="main-news-title">${newsContentData.title}</div>
        </section>
        <section class="right-content">
          <div class="sub-news-title">
            ${newsContentData.articles.map((article) => `<div class="sub-news-title-item">${article}</div>`).join('')}
          </div>
          <div class="edit-script">${newsContentData.press} 언론사에서 직접 편집한 뉴스입니다.</div>
        </section>
      </section>
    </section>
  `;

  // 구독하기 버튼 추가
  const subscribeContainer = typeTabArea.querySelector('.news-content-subscribeBtn');
  const subscribeButton = createSubscribeButton();
  subscribeContainer.appendChild(subscribeButton);

  // 카테고리바 렌더링
  renderListCategory();
};