
const grid = document.getElementById('room-grid');
const frame = document.getElementById('content-frame');

function loadRoom(url) {

  // 방 목록 숨기기
  grid.style.display = 'none';

  // iframe 표시
  frame.style.display = 'block';

  // 선택한 방 HTML 파일 불러오기
  frame.src = url;

}
