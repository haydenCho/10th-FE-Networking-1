import renderAllGrid from "./contents/allGrid.js";
import renderAllList from "./contents/allList.js";
import renderSubscribedGrid from "./contents/subscribedGrid.js";
import renderSubscribedList from "./contents/subscibedList.js";
import { TAB_VIEW_CONSTANTS } from "../utils/constants.js";

let selectedType = "all";
let selectedView = "list";

export function renderTabBar() {
  const typeTabArea = document.querySelector('.type-tab-area');
  
  typeTabArea.innerHTML = `
    <div class="type-selector">
      <button class="type-btn active" data-type="all">전체 언론사</button>
      <button class="type-btn" data-type="subscribed">내가 구독한 언론사</button>
    </div>
    <div class="view-selector">
      <button class="view-btn active" data-view="list">
        <img src="${TAB_VIEW_CONSTANTS.LIST_ICON}" alt="${TAB_VIEW_CONSTANTS.LIST_ALT}" class="view-icon">
      </button>
      <button class="view-btn" data-view="grid">
        <img src="${TAB_VIEW_CONSTANTS.GRID_ICON}" alt="${TAB_VIEW_CONSTANTS.GRID_ALT}" class="view-icon">
      </button>
    </div>
  `;

  // 이벤트 리스너 따로 추가
  const typeBtns = typeTabArea.querySelectorAll('.type-btn');
  const viewBtns = typeTabArea.querySelectorAll('.view-btn');

  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => handleTypeChange(btn));
  });

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => handleViewChange(btn));
  });

  // 탭(컨텐츠) 초기화
  initializeNewsView();
}

function handleTypeChange(clickedBtn) {
  const typeBtns = document.querySelectorAll('.type-btn');
  typeBtns.forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');

  selectedType = clickedBtn.dataset.type;
  updateNewsContent(selectedType, selectedView);
}

function handleViewChange(clickedBtn) {
  const viewBtns = document.querySelectorAll('.view-btn');
  viewBtns.forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');

  selectedView = clickedBtn.dataset.view;
  updateNewsContent(selectedType, selectedView);
}

function updateNewsContent(type, view) {
  // 타입과 뷰에 따라 렌더링 함수 호출
  if (type === 'all') {
    if (view === 'grid') {
      renderAllGrid();
    } else {
      renderAllList();
    }
  } else if (type === 'subscribed') {
    if (view === 'grid') {
      renderSubscribedGrid();
    } else {
      renderSubscribedList();
    }
  }
}

// 초기 렌더링 (전체 언론사, 리스트 뷰)
export function initializeNewsView() {
  updateNewsContent('all', 'list');
}