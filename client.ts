const { randomBytes } = await import('node:crypto')
const ws = new WebSocket("ws://localhost:8000");

const generateId = () => {
  return randomBytes(5).toString('hex').slice(0, 5);
}

ws.onopen = () => {
  const id = generateId()
  const data = {id: id}
  console.log("Connected to WebSocket server");
  ws.send(JSON.stringify(data));  // Send a "ping" message to the server
};
// TODO: make this client interactive

ws.onmessage = (event) => {
  console.log("Received from server:", event.data);  // Log the response
};

ws.onclose = () => {
  console.log("Disconnected from WebSocket server");
};