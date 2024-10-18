const { randomBytes } = await import("node:crypto");
const ws = new WebSocket("ws://localhost:8000");

const generateId = () => {
  return randomBytes(5).toString("hex").slice(0, 5);
};

const id = generateId();

const message = (id, content) => {
  const data = { id: id, message: content };
  return JSON.stringify(data);
}

ws.onopen = () => {
  const data = { id: id };
  console.log("Connected to WebSocket server");
  const msg = JSON.stringify(data);
  ws.send(msg);
  console.log(`Client: ${msg}`);
};
// TODO: make this client interactive

ws.onmessage = (event) => {
  console.log("Server:", event.data); // Log the response
  const input = message(id, prompt("Enter a message: "));
  ws.send(input);
  console.log(`Client: ${input}`);
};

ws.onclose = () => {
  console.log("Disconnected from WebSocket server");
};

