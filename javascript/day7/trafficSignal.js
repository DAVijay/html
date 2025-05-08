let lights = document.querySelectorAll('.light')
const timers = document.querySelectorAll('.timer');
let currentlight = 0
let countdown = 10

// Initialize the first light
lights[currentlight].classList.add("active")
updateTimer()

// Start the countdown
const interval = setInterval(() => {
    countdown--;
    updateTimer();

    if (countdown <= 0) {
        changeLight();
        countdown = 10;
    }
}, 1000);

function updateTimer() {
    
        timers[currentlight].textContent = countdown;
}

function changeLight() {

    // Clear previous timer display
    timers[currentlight].textContent = '';

    //Turn off
    lights[currentlight].classList.remove("active")

    // move to next light 
    currentlight = (currentlight + 1) % lights.length;

    //turn on
    lights[currentlight].classList.add("active")
}