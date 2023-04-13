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

// TOTALS
let callSettingsTotal = 0;
let smsSettingsTotal = 0;
let totalSettingsValue = 0;

// SETTINGS
let callSettingsCost = 2.75;
let smsSettingsCost = 0.75;
let warningLevel = 30;
let criticalLevel = 50;

// SET DEFAULT VALUES
updateSettingsValues();

// ADD BUTTON
function settingsButtonClicked() {
	if (totalSettingsValue <= criticalLevel) {
		const settingsChecked = document.querySelector("input[name='settings-bill-item']:checked").value;

		if (settingsChecked) {
			if (settingsChecked === 'call') {
				callSettingsTotal += callSettingsCost;
			} else if (settingsChecked === 'sms') {
				smsSettingsTotal += smsSettingsCost;
			}
			totalSettingsValue = callSettingsTotal + smsSettingsTotal;

			settingsTotal.classList.remove("warning", "danger");
			if (totalSettingsValue > criticalLevel) {
				settingsTotal.classList.add("danger");
			} else if (totalSettingsValue > warningLevel) {
				settingsTotal.classList.add("warning");
			}

			settingsCallTotal.innerHTML = "R" + callSettingsTotal.toFixed(2);
			settingsSmsTotal.innerHTML = "R" + smsSettingsTotal.toFixed(2);
			settingsTotal.innerHTML = "R" + totalSettingsValue.toFixed(2);
		}
	}
}
settingsButton.addEventListener('click', settingsButtonClicked);

// RESET BUTTON
function resetSettingsTotals() {
	callSettingsTotal = 0;
	smsSettingsTotal = 0;
	totalSettingsValue = 0;
	settingsCallTotal.innerHTML = "R0.00";
	settingsSmsTotal.innerHTML = "R0.00";
	settingsTotal.innerHTML = "R0.00";
	settingsTotal.classList.remove("warning", "danger");
}
settingsReset.addEventListener('click', resetSettingsTotals);

// UPDATE BUTTON
function updateSettingsValues() {
	if (Number(settingsCallCost.value) > 0 &&
		Number(settingsSmsCost.value) > 0 &&
		Number(settingsWarningLevel.value) > 0 &&
		Number(settingsCriticalLevel.value) > 0) {
		callSettingsCost = Number(settingsCallCost.value);
		smsSettingsCost = Number(settingsSmsCost.value);
		warningLevel = Number(settingsWarningLevel.value);
		criticalLevel = Number(settingsCriticalLevel.value);
	} else {
		settingsCallCost.value = callSettingsCost;
		settingsSmsCost.value = smsSettingsCost;
		settingsWarningLevel.value = warningLevel;
		settingsCriticalLevel.value = criticalLevel;
	}

	settingsTotal.classList.remove("warning", "danger");
	if (totalSettingsValue > criticalLevel) {
		settingsTotal.classList.add("danger");
	} else if (totalSettingsValue > warningLevel) {
		settingsTotal.classList.add("warning");
	}
}
settingsUpdate.addEventListener('click', updateSettingsValues);
