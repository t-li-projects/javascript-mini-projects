// lever imgs
const levers = document.querySelectorAll('.lever')

// output cells
const binaryOut = document.querySelector('#binary')
const decimalOut = document.querySelector('#decimal')
const hexadecimalOut = document.querySelector('#hexadecimal')

// array of the values of currently active levers
const activeLevers = []


// listen for 'click' on all levers
levers.forEach(lever => {
  lever.addEventListener('click', (e) => {

    // declare lever and its value
    const lever = e.target
    const leverValue = lever.getAttribute('value')

    //  if value of current lever is in `activeLevers`, remove it from the array
    if (activeLevers.includes(leverValue)) {
      lever.src = 'assets/img/lever_up.png' // turn lever up
      activeLevers.splice(activeLevers.indexOf(leverValue), 1)
    } else {
      // if value of current lever is not in `activeLevers`, add it to the array
      lever.src = 'assets/img/lever_down.png' // turn lever down
      activeLevers.push(leverValue)
    }

    // update output cells
    updateOutput()
  })
})


const updateOutput = () => {

  // get decimal value by summing up elements from `activeLevers` using reduce
  const valueDecimal = activeLevers.reduce((sum, cur) => sum + parseInt(cur), 0)

  // change the text content of output cells accordingly, `.toString(n)` is used to convert to different systems
  binaryOut.textContent = valueDecimal.toString('2')
  decimalOut.textContent = valueDecimal
  hexadecimalOut.textContent = valueDecimal.toString('16').toUpperCase()
}