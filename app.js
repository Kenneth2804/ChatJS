document.addEventListener("DOMContentLoaded", function () {
const chatLogs = document.querySelectorAll(".chat-log");
const messageInputs = document.querySelectorAll(".message-input");
const sendButtons = document.querySelectorAll(".send-button");


sendButtons.forEach((button, index) =>{

	button.addEventListener("click", function () {
		
		const senderChatLog = chatLogs[index];
		const receiverChatLog = chatLogs[(index+1) % 2];

		const messageInput = messageInputs[index];
		const userMessage = messageInput.value;

		if (userMessage.trim() !== "") {
			appendMessage(senderChatLog, "You/Tú", userMessage);
			messageInput.value = "";

			setTimeout( function () {
				appendMessage(receiverChatLog, "Friend/Amigo", userMessage);
			}, 500);
		}

	});
});

function appendMessage(chatLog, sender, message) {
	
	const messageElement = document.createElement("div");
	messageElement.innerHTML = `<strong>${sender}:</strong>${message}`;
	chatLog.appendChild(messageElement);
	chatLog.scrollTop = chatLog.scrollHeight;
}

})
