// This function takes an element as a parameter and sets up a counter that increments when the element is clicked.
function setupCounter(element) {
  let counter = 0

  // This function sets the counter to the specified count.
  function setCounter(count) {
    counter = count
    element.innerHTML = `count is ${counter}`
  }

  // This function increments the counter by 1.
  function incrementCounter() {
    setCounter(counter + 1)
  }

  // This function adds a click event listener to the element.
  function addHandler() {
    element.addEventListener('click', incrementCounter)
  }

  addHandler()
  setCounter(0)
}
