function displayMessage(widgetMessage) {

	const messageContent = document.getElementById(widgetMessage.widget);
	const messageBox = messageContent.closest(".message-box");
	const transition = { "type": null, "time": 0 };

	if (widgetMessage.type !== "reset") {
		messageBox.classList.remove("hidden-sm", "success-message", "warning-message", "error-message");
	}
	switch (widgetMessage.type) {
		case null:
			messageBox.classList.add("hidden-sm");
			return;
		case "success":
			messageBox.classList.add("success-message");
			transition.type = "scale-out"
			transition.time = 500;
			break;
		case "warning":
			messageBox.classList.add("warning-message");
			transition.type = "fade-out"
			transition.time = 1000;
			break;
		case "error":
			messageBox.classList.add("error-message");
			transition.type = "fade-out"
			transition.time = 5000;
			break;
		default:
			break;
	}

	messageContent.innerHTML = widgetMessage.text;

	const duration = widgetMessage.text.length * (50 + (transition.time / 10));
	if (transition.type === "scale-out") {
		messageBox.classList.add("scale");
	}
	setTimeout(function () {
		messageBox.classList.add(transition.type);
		setTimeout(function () {
			messageBox.classList.add("hidden-sm");
			messageBox.classList.remove("scale", transition.type);
		}, transition.time);
	}, duration);
}
