// n8n-chat-wrapper.js

(async () => {
  const Chat = await import('https://cdn.jsdelivr.net/npm/@n8n/chat@latest/+esm');
  Chat.default.init({
    api: 'https://nsiefken.app.n8n.cloud/webhook/aea0f361-c6f0-4d4e-89a9-6e552cf603f7/chat',  // ⬅️ Replace this with your real N8N webhook
    title: 'Need help?',
    inputPlaceholder: 'Ask us anything...',
  });
})();
