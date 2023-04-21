// Get all box elements
const boxes = document.querySelectorAll('.box');

// Add event listener to each box
boxes.forEach(box => {
  box.addEventListener('click', () => {
    console.log(`You clicked box ${box.innerText}`);
    // Add your desired behavior here
  });
});
