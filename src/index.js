const tooltip = document.querySelector('.news-card__tooltip')
const saveIcon = document.querySelectorAll('.news-card__save-icon')


saveIcon.forEach(icon => {
  icon.addEventListener('mouseover', (evt) => {
    const tip = evt.relatedTarget.querySelector('.news-card__tooltip')
    console.log(tip)
    tip.style.display = 'flex'

  })
  icon.addEventListener('mouseout', (evt) => {
    const tip = evt.relatedTarget.querySelector('.news-card__tooltip')
    console.log(tip)
    tip.style.display = 'none'
  })
})


