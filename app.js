function updateClock() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	// Calculate the rotation degrees for each hand
	const hoursRotation = hours * 30 + minutes / 2;
	const minutesRotation = minutes * 6 + seconds / 10;
	const secondsRotation = seconds * 6;

	// Apply the rotation transform to each hand
	hoursHand.style.transform = `rotate(${hoursRotation}deg)`;
	minutesHand.style.transform = `rotate(${minutesRotation}deg)`;
	secondsHand.style.transform = `rotate(${secondsRotation}deg)`;
}
const button = document.querySelector('.btn');

const themeStylesheet = document.querySelector('#themeStylesheet');

button.addEventListener('click', () => {
	if (themeStylesheet.href.includes('light-theme.css')) {
		themeStylesheet.href = 'dark-theme.css';
		button.innerHTML = 'dark mode';
	} else {
		themeStylesheet.href = 'light-theme.css';
		button.innerHTML = 'light mode';
	}
});

// Get the clock hands elements
const hoursHand = document.querySelector('.clock-analog .hours');
const minutesHand = document.querySelector('.clock-analog .minutes');
const secondsHand = document.querySelector('.clock-analog .seconds');

// Get date spans
const dateSpan = document.querySelector('.date');
const daySpan = document.querySelector('.day');
const monthSpan = document.querySelector('.month');

console.log(dateSpan);

// Define the updateClock function only once

// Define the updateDate function only once
function updateDate() {
	const now = new Date();
	const date = now.getDate(); // Get the current day of the month (1-31)
	const month = now.toLocaleString('default', { month: 'short' }); // Get the current month as a short string (e.g., "Jan", "Feb", etc.)
	const day = now.toLocaleString('default', { weekday: 'long' }); // Get the current day of the week as a long string (e.g., "Monday", "Tuesday", etc.)
	dateSpan.textContent = date;
	monthSpan.textContent = month;
	daySpan.textContent = day;
}

// Call the updateClock function initially to set the initial position of the hands
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// Update the date
updateDate();
