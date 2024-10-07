let timerIds = [] // массив для хранения ID таймеров

const startButton = document.getElementById('start')

startButton.addEventListener('click', function () {
  const timerId = setInterval(updateClock, 1000) // запускаем  updateClock() каждую секунду
  timerIds.push(timerId) // сохраняем ID таймера в массив
})

const stopButton = document.getElementById('stop')
stopButton.addEventListener('click', function () {
  // останавливаем все таймеры
  timerIds.forEach((id) => clearInterval(id))
  timerIds = [] // очищаем массив таймеров
})

function updateClock() {
  const clock = document.getElementById('clock')
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0') // добавляем 0 перед одиночными числами
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  clock.textContent = `${hours}:${minutes}:${seconds}` // выводим текущее время
}
