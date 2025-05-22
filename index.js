// import {label} from './data/data.js'

document.querySelector('button').addEventListener('click', ()=>{


  let inputValue = document.querySelector('.input-field').value

  const feetRatio = 3.28084
  const litRatio = 0.2641729
  const kilotRatio = 2.204623






  const conversionValues = {
    inFeet: inputValue*feetRatio,
    inMet: inputValue/feetRatio,
    inGal: inputValue*litRatio,
    inLit: inputValue/litRatio,
    inlbs: inputValue*kilotRatio, 
    inKil: inputValue/kilotRatio 
  }

  const label = [
    {
      title: 'Length (Meter/Feet)',
      subTitle: `${inputValue} meters = ${conversionValues.inFeet.toFixed(3)} feet | ${inputValue} feet = ${conversionValues.inMet.toFixed(3)} meters`
    },
    {
      title: 'Volume (Liters/Gallons)',
      subTitle: `${inputValue} liters = ${conversionValues.inGal.toFixed(3)} gallons | ${inputValue} gallons = ${conversionValues.inLit.toFixed(3)} liters`
    },
    {
      title: 'Mass (Kilograms/Pounds)',
      subTitle: `${inputValue} kilos = ${conversionValues.inlbs.toFixed(3)} pounds | ${inputValue} pounds = ${conversionValues.inKil.toFixed(3)} kilos`
    }
  ]




  const lowerPart = document.getElementById('lower-part')


  if(inputValue){
    render()
  }



  function render(){
    lowerPart.innerHTML = ''
    label.forEach(info=>{
      const div = document.createElement('div')
      div.classList.add('dimensions-section')

      let title = document.createElement('p')
      title.textContent = info.title
      title.classList.add('measurement-title')

      const subTitle = document.createElement('p')
      subTitle.textContent = info.subTitle
      subTitle.classList.add('conversion-ratio')

      div.append(title)
      div.append(subTitle)

      lowerPart.append(div)
    })
  }
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/