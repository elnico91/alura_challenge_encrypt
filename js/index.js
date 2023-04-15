const userText = document.querySelector('#input-user')
const encryptBtn = document.querySelector('.encrypt')
const desencryptBtn = document.querySelector('.desencrypt')
const copyBtn = document.querySelector('.copy-button')
const notFound = document.querySelector('.not-found')
const result = document.querySelector('.result')
const textResult = document.querySelector('#text-result')
const textInfo = document.querySelector('.text-info')

encryptBtn.addEventListener('click', () => {
  const text = userText.value
  const isInvalid = /[A-ZáéíóúüÁÉÍÓÚÜ]/.test(text)
  if (isInvalid || text === '') {
    notFound.classList.remove('hidden')
    result.classList.add('hidden')
    textInfo.classList.add('wrong')
  } else {
    notFound.classList.add('hidden')
    result.classList.remove('hidden')
    textInfo.classList.remove('wrong')
    textResult.value = text.replace(/[aeiou]/g, match => {
      if(match === 'a') return 'ai'
      if(match === 'e') return 'enter'
      if(match === 'i') return 'imes'
      if(match === 'o') return 'ober'
      if(match === 'u') return 'ufat'
    })
  }
})

desencryptBtn.addEventListener('click', () => {
  const text = userText.value
  const isInvalid = /[A-ZáéíóúüÁÉÍÓÚÜ]/.test(text)
  if (isInvalid || text === '') {
    notFound.classList.remove('hidden')
    result.classList.add('hidden')
    textInfo.classList.add('wrong')
  } else {
    notFound.classList.add('hidden')
    result.classList.remove('hidden')
    textInfo.classList.remove('wrong')
    textResult.value = text.replace(/ai|enter|imes|ober|ufat/g, match => {
      if(match === 'ai') return 'a'
      if(match === 'enter') return 'e'
      if(match === 'imes') return 'i'
      if(match === 'ober') return 'o'
      if(match === 'ufat') return 'u'
    })
  }
})

copyBtn.addEventListener('click', () => { 
  navigator.clipboard.writeText(textResult.value)
})