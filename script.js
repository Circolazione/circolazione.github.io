// Initialize counters
const counters = {
    car_left: 0, car_center: 0, car_right: 0,
    truck_left: 0, truck_center: 0, truck_right: 0,
    pedestrian: 0, bicycle: 0, monopattino: 0,
    motorcycle: 0, bus: 0, extra: 0
};

// Function to increment counter
function incrementCounter(letter) {
    counters[letter]++;
    document.getElementById(`count-${letter}`).innerText = counters[letter];
}

// Function to reset all counters
function resetCounters() {
    for (let key in counters) {
        counters[key] = 0;
        document.getElementById(`count-${key}`).innerText = counters[key];
    }
}

// Adjust the height of the text area and font size based on content
function adjustTextArea() {
    const textArea = document.getElementById("textInput");
    
    // Reset height to allow automatic resizing
    textArea.style.height = "auto";
    
    // Adjust height based on content
    textArea.style.height = textArea.scrollHeight + "px";
    
    // Change font size if text is long
    if (textArea.value.length > 50) {
        textArea.style.fontSize = "1.2rem"; // Larger font for long text
    } else {
        textArea.style.fontSize = "1.4rem"; // Default font size
    }
}
