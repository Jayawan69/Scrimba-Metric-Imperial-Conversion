// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

document.querySelector('button').addEventListener('click', ()=>{

})


const inputValue = document.querySelector('.input-field').value
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

export const label = [
  {
    title: 'Length (Meter/Feet)',
    subTitle: `20 meters = ${conversionValues.inFeet.toFixed(3)} feet | 20 feet = ${conversionValues.inMet.toFixed(3)} meters`
  },
  {
    title: 'Volume (Liters/Gallons)',
    subTitle: `20 liters = ${conversionValues.inGal.toFixed(3)} gallons | 20 gallons = ${conversionValues.inLit.toFixed(3)} liters`
  },
  {
    title: 'Mass (Kilograms/Pounds)',
    subTitle: `20 kilos = ${conversionValues.inlbs.toFixed(3)} pounds | 20 pounds = ${conversionValues.inKil.toFixed(3)} kilos`
  }
]