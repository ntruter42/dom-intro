function displayMessage(widgetMessage) {

	
	const messageContent = document.getElementById(widgetMessage.widget);
	const messageBox = messageContent.closest(".message-box");
	
	messageBox.classList.remove("hidden-sm", "success-message", "warning-message", "error-message");
	switch (widgetMessage.type) {
		case null:
			console.log(messageBox);
			messageBox.classList.add("hidden-sm");
			return;
		case "success":
			messageBox.classList.add("success-message");
			break;
		case "warning":
			messageBox.classList.add("warning-message");
			break;
		case "error":
			messageBox.classList.add("error-message");
			break;
		default:
			break;
	}

	messageContent.innerHTML = widgetMessage.text;
	setTimeout(messageBox.classList.add("hidden-sm"), 5000);
}
