// SETTINGS ELEMENTS
const settingsCallCost = document.querySelector("#settings-call-cost");
const settingsSmsCost = document.querySelector("#settings-sms-cost");
const settingsWarningLevel = document.querySelector("#settings-warning-level");
const settingsCriticalLevel = document.querySelector("#settings-critical-level");

// INPUT ELEMENTS
const settingsButton = document.querySelector("#settings-button");
const settingsReset = document.querySelector("#settings-reset");
const settingsUpdate = document.querySelector("#settings-update");

// OUTPUT ELEMENTS
const settingsCallTotal = document.querySelector("#settings-call-total");
const settingsSmsTotal = document.querySelector("#settings-sms-total");
const settingsTotal = document.querySelector("#settings-total");

let callSettingsTotal = 0;
let smsSettingsTotal = 0;
let callSettingsCost = 0;
let smsSettingsCost = 0;
let warningLevel = 0;
let crtiticalLevel = 0;
let settingsTotalValue = 0;

function settingsButtonClicked() {
	const settingsChecked = document.querySelector("input[name='settings-bill-item']:checked").value.toLowerCase();

	if (settingsChecked) {
		if (settingsChecked === 'call') {
			callSettingsTotal += callSettingsCost;
		} else if (settingsChecked === 'sms') {
			smsSettingsTotal += smsSettingsCost;
		}

		settingsTotal.classList.remove("warning", "danger");
		if (settingsTotalValue > crtiticalLevel) {
			settingsTotal.classList.add("danger");
		} else if (total > warningLevel) {
			settingsTotalValue.classList.add("warning");
		}
		settingsTotalValue = callSettingsTotal + smsSettingsTotal;

		settingsCallTotal.innerHTML = "R" + callSettingsTotal.toFixed(2);
		settingsSmsTotal.innerHTML = "R" + smsSettingsTotal.toFixed(2);
		settingsTotal.innerHTML = "R" + settingsTotalValue.toFixed(2);
	}
}
settingsButton.addEventListener('click', settingsButtonClicked);

function resetSettingsTotals() {
	callSettingsTotal = 0;
	smsSettingsTotal = 0;
	settingsCallTotal.innerHTML = "R0.00";
	settingsSmsTotal.innerHTML = "R0.00";
	settingsTotal.innerHTML = "R0.00";
	settingsTotal.classList.remove("warning", "danger");
}
settingsReset.addEventListener('click', resetSettingsTotals);

function updateSettingsValues() {
	callSettingsCost = Number(settingsCallCost.value);
	smsSettingsCost = Number(settingsSmsCost.value);
	warningLevel = Number(settingsWarningLevel.value);
	crtiticalLevel = Number(settingsCriticalLevel.value);

	settingsTotal.classList.remove("warning", "danger");
	if (settingsTotalValue > crtiticalLevel) {
		settingsTotal.classList.add("danger");
	} else if (settingsTotalValue > warningLevel) {
		settingsTotal.classList.add("warning");
	}
}
settingsUpdate.addEventListener('click', updateSettingsValues);
