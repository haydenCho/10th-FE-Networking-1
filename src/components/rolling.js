// 나중에 json 파일로 분리하기
const data = {
  rollingBar_1: [
    {press: "연합뉴스", title: `[긴급] 이란, 이스라엘에 미사일 대규모 발사…보복 개시`, link: "https://n.news.naver.com/mnews/article/001/0014959343?rc=N&ntype=RANKING"},
    {press: "매일경제", title: `[속보] 바이든, 미군에 “이스라엘 겨냥 이란 미사일 격추하라” 지시`, link: "https://n.news.naver.com/article/009/0005372924?cds=news_media_pc&type=breakingnews"},
    {press: "농민신문", title: `수요일(2일) 기온 ‘뚝’…한낮도 20℃ 안팎 쌀쌀`, link: "https://n.news.naver.com/article/662/0000053208?cds=news_media_pc"},
    {press: "시사IN", title: `공공돌봄이 가져온 것, 서사원 폐지가 앗아간 것`, link: "https://n.news.naver.com/article/308/0000035515?cds=news_media_pc"},
    {press: "이데일리", title: `징검다리 연휴 여행 떠난다면…이런 로밍·맵 연계 혜택 어때요`, link: "https://www.edaily.co.kr/News/Read?newsId=02305846639048656&mediaCodeNo=257"},
  ],
  rollingBar_2: [
    {press: "매일경제", title: `개발비만 수천억원 … 대작 게임 경쟁`, link: "https://n.news.naver.com/mnews/article/009/0005372817"},
    {press: "서울경제", title: `50만~60만원대 출시…AI폰도 '가성비 경쟁'`, link: "https://n.news.naver.com/mnews/article/011/0004398255"},
    {press: "연합뉴스", title: `[사이테크+] "서식지 파괴지역 이종 원숭이 교배…생물다양성 위기 신호"`, link: "https://n.news.naver.com/mnews/hotissue/article/001/0014955068?type=series&cid=1087298"},
    {press: "연합뉴스", title: `[사이테크+] 수십억년 후 태양·지구의 미래 보여주는 외계행성계 포착`, link: "https://n.news.naver.com/mnews/hotissue/article/001/0014951406?type=series&cid=1087298"},
    {press: "한국경제", title: `AI 오류 추적하는 '서버 내비게이션' 뜬다`, link: "https://n.news.naver.com/mnews/article/015/0005039142"},
  ]
};

export function renderRolling() {
  const rollingBarFirst = document.getElementById("rolling-bar-1");
  const rollingBarSecond = document.getElementById("rolling-bar-2");

  // 현재 보여지는 아이템은 .current, 위로 올라가는 아이템은 .prev, 다음 아이템은 .next
  rollingBarFirst.innerHTML = data.rollingBar_1
    .map((item) => 
      `<li class="rolling-item">
        <div class="press">${item.press}</div>
        <div class="title"><a href="${item.link}">${item.title}</a></div>
      </li>`
    )
    .join("");
  rollingBarSecond.innerHTML = data.rollingBar_2
    .map((item) => 
      `<li class="rolling-item">
        <div class="press">${item.press}</div>
        <div class="title"><a href="${item.link}">${item.title}</a></div>
      </li>`
    )
    .join("");

  createRolling(rollingBarFirst, data.rollingBar_1.length)
  createRolling(rollingBarSecond, data.rollingBar_2.length)

  function createRolling(rollingBar, length) {
    const rollingItems = rollingBar.querySelectorAll(".rolling-item");
    let currentIndex = 0;
    let nextIndex = 1;
    let prevIndex = length-1;

    // 첫 번째 아이템부터 보여주기(상태 초기화)
    rollingItems[currentIndex].classList.add("current");
    rollingItems[nextIndex].classList.add("next");
    rollingItems[prevIndex].classList.add("prev");

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

    setInterval(rollingItem, 5000);
  }
}