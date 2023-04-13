// INPUT ELEMENTS
const calculateString = document.querySelector("#calculate-string");
const calculateButton = document.querySelector("#calculate-button");
const calculateReset = document.querySelector("#calculate-reset");

// OUTPUT ELEMENTS
const calculateTotal = document.querySelector("#calculate-total");
const calculateMessage = document.querySelector("#calculate-message");
const calculateMessageBox = calculateMessage.closest(".message-box");
// const calculateMessageBox = calculateMessage.parentElement;

// FUNCTIONALITY
let message = {"type":null, "text":""};

function calculateButtonClicked() {
	const calculateItems = calculateString.value.split(",");
	
	let total = 0;
	for (let item of calculateItems) {
		item = item.trim().toLowerCase();
		if (item === "call") {
			total += 2.75;
		} else if (item === "sms") {
			total += 0.75;
		}
	}

	calculateTotal.classList.remove("warning", "danger");
	if (total > 30) {
		calculateTotal.classList.add("danger");
	} else if (total > 20) {
		calculateTotal.classList.add("warning");
	}

	calculateTotal.innerHTML = "R" + total.toFixed(2);
	calculateString.focus();
}
calculateButton.addEventListener('click', calculateButtonClicked);

function resetCalculateTotals() {
	total = 0;
	calculateTotal.innerHTML = "R0.00";
	calculateTotal.classList.remove("warning", "danger");
}
calculateReset.addEventListener('click', resetCalculateTotals);
calculateReset.addEventListener('click', displayCalculateMessage);

function displayCalculateMessage() {
	calculateMessageBox.classList.remove("message-box", "success-message", "warning-message", "error-message");
	switch (message.type) {
		case null:
			break;
		case "success":
			calculateMessageBox.classList.add("success-message");
			break;
		case "warning":
			calculateMessageBox.classList.add("warning-message");
			break;
		case "error":
			calculateMessageBox.classList.add("error-message");
			break;
		default:
			break;
	}

	calculateMessage.innerHTML = message.text;
}

calculateString.addEventListener('input', () => {
	calculateString.style.height = 'auto';
	calculateString.style.height = (calculateString.scrollHeight) + 'px';
});
