const categoryList = [
  { name: "종합/경제", count: 81 },
  { name: "방송/통신", count: 24 },
  { name: "IT", count: 12 },
  { name: "영자지", count: 6 },
  { name: "스포츠/연애", count: 24 },
  { name: "매거진/전문지", count: 61 },
  { name: "지역", count: 36 },
];

// 현재 언론사가 몇번째인지 (일단 임시로), 카테고리는 인덱스로
let currentCount = 1;

export function renderListCategory() {
  const categoryArea = document.querySelector('.news-category-area');

  categoryArea.innerHTML = categoryList.map((category, index) => `
    <div class="category-menu ${index === 0 ? 'active' : ''}" data-index="${index}">
      <div class="category-name">${category.name}</div>
      <div class="category-count-area">
        <span class="category-current-count">${currentCount}</span>
        <span class="category-count">/${category.count}</span>
      </div>
      <div class="progressbar-guage"></div>
    </div>
  `).join("");

  const categoryMenus = document.querySelectorAll('.category-menu');
  categoryMenus.forEach(menu => {
    // 마우스 오버 시 밑줄
    menu.addEventListener('mouseover', () => {
      menu.classList.add('hover');
    });

    // 마우스 아웃 시 밑줄 제거
    menu.addEventListener('mouseout', () => {
      menu.classList.remove('hover');
    });

    // 클릭 시 active 클래스 변경
    menu.addEventListener('click', () => {
      categoryMenus.forEach(item => item.classList.remove('active'));
      menu.classList.add('active');
    });
  });
}