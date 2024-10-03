export function createRolling(rollingBar, length) {
  const rollingItems = rollingBar.querySelectorAll(".rolling-item");
  let currentIndex = 0;
  let nextIndex = 1;
  let prevIndex = length-1;
  let rollingTime;

  // 첫 번째 아이템부터 보여주기(상태 초기화)
  function initRollingItem() {
    rollingItems[currentIndex].classList.add("current");
    rollingItems[nextIndex].classList.add("next");
    rollingItems[prevIndex].classList.add("prev");
  }

  // 아이템 롤링 함수(classList 상태 변화)
  function rollingItem() {
    // 기존의 prev 아이템은 none
    prevIndex = (currentIndex - 1 + length) % length;
    rollingItems[prevIndex].classList.remove("prev");

    // 현재 아이템은 위로 올라가도록 prev
    rollingItems[currentIndex].classList.remove("current");
    rollingItems[currentIndex].classList.add("prev");

    // 다음 아이템이 보이도록 next 아이템을 current
    currentIndex = (currentIndex + 1) % length;
    rollingItems[currentIndex].classList.remove("next");
    rollingItems[currentIndex].classList.add("current");

    // current 아이템의 다음 아이템을 next
    nextIndex = (currentIndex + 1) % length;
    rollingItems[nextIndex].classList.add("next");
  }

  // 롤링 시작
  function startRolling() {
    rollingTime = setInterval(rollingItem, 5000);
  }

  // 롤링 멈춤
  function stopRolling() {
    clearInterval(rollingTime);
  }

  // 각각의 기사 타이틀에 마우스 오버 시 롤링을 멈춤, 아웃 시 롤링 재개
  rollingItems.forEach(item => {
    const newsLink = item.querySelector('.title a');
    newsLink.addEventListener('mouseover', stopRolling);
    newsLink.addEventListener('mouseout', startRolling);
  });

  // 페이지 로딩시 초기 롤링
  initRollingItem();
  startRolling();
}