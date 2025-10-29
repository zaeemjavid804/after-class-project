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
// Asynchronous function to fetch user data
async function fetchUserData() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "Loading data...";
  
    try {
      // Fake API call
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
      // Check if request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const users = await response.json();
  
      // Display users on the page
      userList.innerHTML = "";
      users.forEach(user => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
        userList.appendChild(div);
      });
  
    } catch (error) {
      userList.innerHTML = `<span style="color:red;">Error: ${error.message}</span>`;
    }
  }
  
  // Button click event
  document.getElementById("loadDataBtn").addEventListener("click", fetchUserData);
// Asynchronous function to fetch user data
async function fetchUserData() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "Loading data...";
  
    try {
      // Fake API call
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
      // Check if request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const users = await response.json();
  
      // Display users on the page
      userList.innerHTML = "";
      users.forEach(user => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
        userList.appendChild(div);
      });
  
    } catch (error) {
      userList.innerHTML = `<span style="color:red;">Error: ${error.message}</span>`;
    }
  }
  
  // Button click event
  document.getElementById("loadDataBtn").addEventListener("click", fetchUserData);
    