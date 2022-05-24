function onClick() {
  const value = document.getElementById('input-box').value;
  const consoleBox = document.getElementById('console');

  if (value % 2 == 1) {
    consoleBox.innerHTML = '이 수는 <strong>홀수</strong> 입니다.';
  } else {
    consoleBox.innerHTML = '이 수는 <strong>짝수</strong> 입니다.';
  }
}
