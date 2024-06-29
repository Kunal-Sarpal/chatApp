const socket = io();

let data = "";
function gettext(event) {
    data = event.target.value;
}

function senddata() {
    socket.emit("data", data);

    const chatContainer1 = document.getElementById("chatContainer1");
    const div = document.createElement("div");
    div.classList.add("chat", "me");
    const time = new Date().toLocaleTimeString(); // Get current time
    div.innerHTML = `<div>${data}</div><div>Me (${time})</div>`;
    chatContainer1.appendChild(div);
    data="";
}

socket.on("data", (data) => {
    const chatContainer = document.getElementById("chatContainer");
    const div = document.createElement("div");
    div.classList.add("chat", "user");
    const time = new Date().toLocaleTimeString(); // Get current time
    div.innerHTML = `<div>${data}</div><div>User (${time})</div>`;
    chatContainer.appendChild(div);
});