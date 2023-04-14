var message = {
	"widget": null,
	"type": null,
	"text": ""
};

function displayMessage(widgetMessage) {

	const messageContent = document.getElementById(widgetMessage.widget);
	const messageBox = messageContent.closest(".message-box");
	const transition = { "type": "scale-out", "time": 500 };

	if (widgetMessage.type !== "reset") {
		messageBox.classList.remove("hidden-sm", "success-message", "warning-message", "error-message");
	}
	switch (widgetMessage.type) {
		case null:
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

	const duration = widgetMessage.text.length * (50 + (transition.time / 10));
	messageBox.classList.add("scale");
	setTimeout(function () {
		messageBox.classList.add(transition.type);
		setTimeout(function () {
			messageBox.classList.add("hidden-sm");
			messageBox.classList.remove("scale", transition.type);
		}, transition.time);
	}, duration);

	widgetMessage.type = null;
}
