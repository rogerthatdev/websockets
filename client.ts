const ws = new WebSocket("ws://localhost:8000");

ws.onopen = () => {
  console.log("Connected to WebSocket server");
  ws.send("ping");  // Send a "ping" message to the server
};

ws.onmessage = (event) => {
  console.log("Received from server:", event.data);  // Log the response
};

ws.onclose = () => {
  console.log("Disconnected from WebSocket server");
};