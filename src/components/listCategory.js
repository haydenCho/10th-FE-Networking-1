const categoryList = [
  { name: "종합/경제", count: 81 },
  { name: "방송/통신", count: 24 },
  { name: "IT", count: 12 },
  { name: "영자지", count: 6 },
  { name: "스포츠/연애", count: 24 },
  { name: "매거진/전문지", count: 61 },
  { name: "지역", count: 36 },
];

// 현재 언론사가 몇번째인지 (일단 임시로)
let currentCount = 1;

export function renderListCategory() {
  const categoryHTML = categoryList.map((category, index) => `
    <div class="category-menu ${index === 0 ? 'active' : ''}" data-index="${index}">
      ${category.name} 
      <div class="category-count-area">
        <span class="category-current-count">${currentCount}</span>
        <span class="category-count">/${category.count}</span>
      </div>
    </div>
  `).join('');

  return `<div class="category-bar">${categoryHTML}</div>`;
}