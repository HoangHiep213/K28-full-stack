
/* Hiệu ứng di chuột vào banner */
const parents = document.querySelectorAll('#parent');
const children = document.querySelectorAll('#child');

parents.forEach((parent, index) => {
  parent.addEventListener('mouseenter', () => {
    children[index].style.display = 'flex';
  });

  parent.addEventListener('mouseleave', () => {
    children[index].style.display = 'none';
  });
});
/* END */



/* Đồng hồ đếm ngược */
const countdownHours = document.querySelector('.countdown-hours');
const countdownMinutes = document.querySelector('.countdown-minutes');
const countdownSeconds = document.querySelector('.countdown-seconds');

let countdownTime = 3600; // 1 giờ (3600 giây)

function updateCountdown() {
  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;

  countdownHours.textContent = String(hours).padStart(2, '0');
  countdownMinutes.textContent = String(minutes).padStart(2, '0');
  countdownSeconds.textContent = String(seconds).padStart(2, '0');

  if (countdownTime === 0) {
    clearInterval(countdownInterval);
    // Thực hiện các hành động khi đếm ngược kết thúc
  } else {
    countdownTime--;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
/* END */
