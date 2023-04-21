// Get all box elements
const boxes = document.querySelectorAll('.box');

// Add ID of 'boxclick' to each box element
boxes.forEach(box => {
  box.setAttribute('id', 'boxclick');

  // Add event listener for click event
  box.addEventListener('click', () => {
    console.log(`You clicked box ${box.innerText}`);
    // Add your desired behavior here
  });

  // Add event listener for mouseover event
  box.addEventListener('mouseover', () => {
    console.log(`You moused over box ${box.innerText}`);
    // Add your desired behavior here
  });
});
