const messages = [
  '老師，謝謝您的用心教導。因為有您的陪伴，我們一步一步變得更勇敢、更有自信。',
  '謝謝老師不只是教我們課本，也教我們如何面對困難、相信自己。教師節快樂！',
  '每一次提醒、每一句鼓勵，都是我們成長路上的力量。祝老師教師節快樂！',
  '老師辛苦了！願您的每一天都充滿笑容，也願我們的進步成為您最溫暖的回饋。'
];
let messageIndex = 0;
const message = document.querySelector('#message');
const changeMessage = document.querySelector('#changeMessage');
const note = document.querySelector('#note');
const count = document.querySelector('#count');
const saveNote = document.querySelector('#saveNote');
const saved = document.querySelector('#saved');

changeMessage.addEventListener('click', () => {
  messageIndex = (messageIndex + 1) % messages.length;
  message.textContent = messages[messageIndex];
});

note.addEventListener('input', () => {
  count.textContent = `${note.value.length} / 120`;
});

saveNote.addEventListener('click', () => {
  const text = note.value.trim();
  if (!text) {
    saved.textContent = '請先寫下一句祝福 💜';
    return;
  }
  localStorage.setItem('teacherBlessing', text);
  saved.textContent = '已儲存！下次開啟也會保留這句祝福。 ✨';
});

const previous = localStorage.getItem('teacherBlessing');
if (previous) {
  note.value = previous;
  count.textContent = `${previous.length} / 120`;
  saved.textContent = '已載入上次儲存的祝福。 ✨';
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
