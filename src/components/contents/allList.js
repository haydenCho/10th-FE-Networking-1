import { renderListCategory } from "../listCategory.js";

export default function renderAllList() {
  const typeTabArea = document.querySelector('.news-content-area');
  typeTabArea.innerHTML = `
    <section class="news-category-area"></section>
    <section class="news-content-container">
      <section class="news-content-header">
        <div class="news-content-logo">신문사 로고</div>
        <div class="news-content-editAt">편집한 날짜</div>
        <div class="news-content-subscribeBtn">구독하기 버튼</div>
      </section>
      <section class="news-content">
        <section class="left-content">
          <div class="main-news-image"></div>
          <div class="main-news-title">메인 뉴스 타이틀</div>
        </section>
        <section class="right-content">
          <div class="sub-news-title"></div>
          <div class="edit-script">서울경제 언론사에서 직접 편집한 뉴스입니다.</div>
        </section>
      </section>
    </section>
  `;

  const categoryArea = document.querySelector('.news-category-area');
  categoryArea.innerHTML = renderListCategory();
};