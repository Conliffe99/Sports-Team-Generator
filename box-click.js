const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Add your logic for what happens when the box is clicked here
        console.log(`Box ${box.textContent} was clicked`);
    });
});
