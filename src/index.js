const tooltip = document.querySelector('.news-card__tooltip')
const popup = document.querySelector('.popup')
const popupReg = document.querySelector('.popup-registr')

const saveIcon = document.querySelectorAll('.news-card__save-icon')
const deleteIcon = document.querySelectorAll('.news-card__delete-icon')
const closePopup = document.querySelector('.popup__close')
const closePopupReg = document.querySelector('.popup-registr__close')
const closePopupSuccess = document.querySelector('.popup-success__close')
const footerPopupLogin = document.querySelector('.popup__footer-link')
const footerPopupReg = document.querySelector('.popup-registr__footer-link')
const buttonAuth = document.querySelector('.button-header')

const buttonAuthBurg = document.querySelector('.button-burger')
const burgerContent = document.querySelector('.header__menu-burger-content')
const closeBurger = document.querySelector('.header__menu-burger-close')
const headerBurger = document.querySelector('.header__menu-burger')


headerBurger.addEventListener('click', evt => {
  if (evt.target === headerBurger) {
    burgerContent.style.display = 'flex'
    return
  }
})

function closePP(evt) {
  evt.target.closest('.popup').style.display = 'none'
}


function authInBurger(evt) {
  closeBurger.closest('.header__menu-burger-content').style.display = 'none'
  popupReg.style.display = 'flex'

}
function open(evt) {
  popup.style.display = 'flex'
  console.log(evt.target)
}

function OpenRegPP(evt) {
  evt.target.closest('.popup').style.display = 'none'
  popupReg.style.display = 'flex'
}
function OpenLoginPP(evt) {
  evt.target.closest('.popup').style.display = 'none'
  popup.style.display = 'flex'
}

closeBurger.addEventListener('click', (evt) => {
  evt.target.closest('.header__menu-burger-content').style.display = 'none'
})

buttonAuthBurg.addEventListener('click', authInBurger)
closePopupSuccess.addEventListener('click', closePP)

footerPopupReg.addEventListener('click', OpenLoginPP)

footerPopupLogin.addEventListener('click', OpenRegPP)
closePopupReg.addEventListener('click', closePP)

buttonAuth.addEventListener('click', open)

closePopup.addEventListener('click', closePP)


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
deleteIcon.forEach(icon => {
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



