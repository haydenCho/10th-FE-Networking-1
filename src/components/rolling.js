import { createRolling } from "./createRolling.js";

export async function renderRolling() {
  const rollingBarFirst = document.getElementById("rolling-bar-1");
  const rollingBarSecond = document.getElementById("rolling-bar-2");

  // 데이터 불러오기(경로 주의)
  const response = await fetch("src/data/rollingNewsData.json")
  const rollingData = await response.json();

  // 현재 보여지는 아이템은 .current, 위로 올라가는 아이템은 .prev, 다음 아이템은 .next
  rollingBarFirst.innerHTML = rollingData.rollingBar_1
    .map((item) => 
      `<li class="rolling-item">
        <div class="press">${item.press}</div>
        <div class="title"><a href="${item.link}">${item.title}</a></div>
      </li>`
    )
    .join("");
  rollingBarSecond.innerHTML = rollingData.rollingBar_2
    .map((item) => 
      `<li class="rolling-item">
        <div class="press">${item.press}</div>
        <div class="title"><a href="${item.link}">${item.title}</a></div>
      </li>`
    )
    .join("");

  createRolling(rollingBarFirst, rollingData.rollingBar_1.length);
  setTimeout(createRolling, 1000, rollingBarSecond, rollingData.rollingBar_2.length);
}