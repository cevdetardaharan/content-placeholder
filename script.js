const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="./project.webp" alt="Project image" />'
  title.innerHTML = 'From dream to reality'
  excerpt.innerHTML =
    'I can help you make your dream come true.'
  profile_img.innerHTML =
    '<img src="./cevdet.webp" alt="Cevdet Arda Haran profile picture" />'
  name.innerHTML = 'Cevdet Arda Haran'
  date.innerHTML = 'Apr 04, 20∞∞'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
