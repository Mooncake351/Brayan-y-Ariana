const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Niña pero me lo debes técnicamente',
  'Piénsalo bien',
  'Quisera verte en verdad',
  'Ya poes Ari',
  'Piénsalo muy bien',
  'Yo me encargaré de que todo salga perfecto ',
  'Niñaaaa ya perdón, aceptame:(',
  'Niñaaa🥹'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
