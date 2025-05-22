import {label} from './data/data.js'

const lowerPart = document.getElementById('lower-part')

let innerHTML = ''

label.forEach(info=>{
  const div = document.createElement('div')
  div.classList.add('dimensions-section')

  let title = document.createElement('p')
  title.textContent = info.title
  title.classList.add('measurement-title')

  const subTitle = document.createElement('p')
  subTitle.textContent = info.title
  subTitle.classList.add('conversion-ratio')

  div.append(title)
  div.append(subTitle)

  lowerPart.append(div)
})