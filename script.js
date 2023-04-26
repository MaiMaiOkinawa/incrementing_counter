const counters = document.querySelectorAll('.counter')

// Add numbers betweens the 'counter' divs
counters.forEach(counter => {
  counter.innerText = '0'

  // Convert the attribute into a number
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    // Other ways to conver attributes into a number
    // const target = Number(counter.getAttribute('data-target'))
    // const target = parseInt(counter.getAttribute)('data-target'))

    // Conver the counter text into a number
    const c = +counter.innerText

    // By how much you want numbers to increment
    const increment = target / 200

    // Display the total number if c is less than target
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      
      // Keep calling the update counter
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target // Max of numbers
    }
    
  }
  updateCounter()
})


