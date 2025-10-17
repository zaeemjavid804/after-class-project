function sendMessage() {
    const usernameInput = document.getElementById("username");
    const messageInput = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");

    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if (username === "" || message === "") {
        alert("Naam aur paigham dono zaroori hain!");
        return;
    }

    // Current time
    const now = new Date();
    const time = now.toLocaleTimeString();

    // Create message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<strong>${username}</strong> 🕒 ${time}<br>${message}`;

    // Add to chat box
    chatBox.appendChild(messageElement);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear message input
    messageInput.value = "";
}
