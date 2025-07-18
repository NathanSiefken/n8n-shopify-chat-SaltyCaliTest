document.addEventListener("DOMContentLoaded", function () {
  const widget = document.getElementById("n8n-chat-widget");

  if (!widget) return;

  widget.innerHTML = `
    <div style="border:1px solid #ccc;padding:10px;border-radius:8px;width:100%;max-width:400px;">
      <div id="chat-log" style="height:200px;overflow-y:auto;margin-bottom:10px;font-family:sans-serif;font-size:14px;"></div>
      <input id="chat-input" type="text" placeholder="Ask a question..." style="width:75%;padding:6px;" />
      <button id="chat-send" style="padding:6px 10px;">Send</button>
    </div>
  `;

  const input = document.getElementById("chat-input");
  const send = document.getElementById("chat-send");
  const log = document.getElementById("chat-log");

  send.addEventListener("click", async () => {
    const message = input.value.trim();
    if (!message) return;

    log.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    input.value = "";

    try {
      const response = await fetch("document.addEventListener("DOMContentLoaded", function () {
  const widget = document.getElementById("n8n-chat-widget");

  if (!widget) return;

  widget.innerHTML = `
    <div style="border:1px solid #ccc;padding:10px;border-radius:8px;width:100%;max-width:400px;">
      <div id="chat-log" style="height:200px;overflow-y:auto;margin-bottom:10px;font-family:sans-serif;font-size:14px;"></div>
      <input id="chat-input" type="text" placeholder="Ask a question..." style="width:75%;padding:6px;" />
      <button id="chat-send" style="padding:6px 10px;">Send</button>
    </div>
  `;

  const input = document.getElementById("chat-input");
  const send = document.getElementById("chat-send");
  const log = document.getElementById("chat-log");

  send.addEventListener("click", async () => {
    const message = input.value.trim();
    if (!message) return;

    log.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    input.value = "";

    try {
      const response = await fetch("https://nsiefken.app.n8n.cloud/webhook/aea0f361-c6f0-4d4e-89a9-6e552cf603f7/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      log.innerHTML += `<div><strong>Bot:</strong> ${data.reply || "[No reply received]"}</div>`;
      log.scrollTop = log.scrollHeight;
    } catch (err) {
      log.innerHTML += `<div style="color:red;">Error: Could not reach chatbot.</div>`;
    }
  });
});
", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      log.innerHTML += `<div><strong>Bot:</strong> ${data.reply || "[No reply received]"}</div>`;
      log.scrollTop = log.scrollHeight;
    } catch (err) {
      log.innerHTML += `<div style="color:red;">Error: Could not reach chatbot.</div>`;
    }
  });
});
