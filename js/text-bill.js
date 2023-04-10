// INPUT ELEMENTS
const textString = document.querySelector("#text-string");
const textButton = document.querySelector("#text-button");
const textReset = document.querySelector("#text-reset");

// OUTPUT ELEMENTS
const textCallTotal = document.querySelector("#text-call-total");
const textSmsTotal = document.querySelector("#text-sms-total");
const textTotal = document.querySelector("#text-total");

let callTotal = 0;
let smsTotal = 0;

function textButtonClicked() {
	const textItem = textString.value.trim();

	if (textItem === 'call') {
		callTotal += 2.75;
	} else if (textItem === 'sms') {
		smsTotal += 0.75;
	}
	const total = callTotal + smsTotal;

	textTotal.classList.remove("warning", "danger");
	if (total > 50) {
		textTotal.classList.add("danger");
	} else if (total > 30) {
		textTotal.classList.add("warning");
	}

	textCallTotal.innerHTML = "R" + callTotal.toFixed(2);
	textSmsTotal.innerHTML = "R" + smsTotal.toFixed(2);
	textTotal.innerHTML = "R" + total.toFixed(2);
}
textButton.addEventListener('click', textButtonClicked);

function resetTextTotals() {
	callTotal = 0;
	smsTotal = 0;
	textCallTotal.innerHTML = "R0.00";
	textSmsTotal.innerHTML = "R0.00";
	textTotal.innerHTML = "R0.00";
	textTotal.classList.remove("warning", "danger");
}
textReset.addEventListener('click', resetTextTotals);
