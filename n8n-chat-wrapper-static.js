(function () {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@n8n/chat@latest";
  script.onload = function () {
    if (window.Chat) {
      window.Chat.init({
        api: "https://nsiefken.app.n8n.cloud/webhook/aea0f361-c6f0-4d4e-89a9-6e552cf603f7/chat",
        title: "Need help?",
        inputPlaceholder: "Ask us anything...",
      });
    } else {
      console.error("Chat library not available.");
    }
  };
  document.head.appendChild(script);
})();
