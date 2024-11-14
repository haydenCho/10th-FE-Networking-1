export default function createSubscribeButton() {
  // 버튼 요소 생성
  const button = document.createElement('button');
  button.className = 'subscribe-button';
  button.innerHTML = `
    <span class="subscribe-text">+ 구독하기</span>
  `;

  // 클릭 이벤트 핸들러 추가
  button.addEventListener('click', () => {
    if (button.classList.contains('subscribed')) {
      button.classList.remove('subscribed');
      button.querySelector('.subscribe-text').textContent = '+ 구독하기';
    } else {
      button.classList.add('subscribed');
      button.querySelector('.subscribe-text').textContent = '×';
    }
  });

  return button;
}