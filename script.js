//your JS code here. If required.
// Function to update the size information
function updateSize() {
    // Get the width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Get the h1 element inside the div with id 'sizeInfo'
    const sizeInfo = document.querySelector('#sizeInfo h1');
    
    // Set the text content with the width and height
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

// Call updateSize when the window is resized
window.addEventListener('resize', updateSize);

// Call updateSize initially to display the size on page load
updateSize();

