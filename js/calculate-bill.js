const calculateString = document.querySelector("#calculate-string");
const calculateButton = document.querySelector("#calculate-button");
const calculateReset = document.querySelector("#calculate-reset");
const calculateTotal = document.querySelector("#calculate-total");


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

const textarea = document.querySelector('#calculate-string');
textarea.addEventListener('input', () => {
	textarea.style.height = 'auto';
	textarea.style.height = (textarea.scrollHeight) + 'px';
});
