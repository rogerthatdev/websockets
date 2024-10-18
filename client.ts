// TODO: add types!
const { randomBytes } = await import("node:crypto");
const ws = new WebSocket("ws://localhost:8000");

const generateId = () => {
  return randomBytes(5).toString("hex").slice(0, 5);
};

const id = generateId();

const message = (id: string, content: string): string => {
  const data = { id: id, message: content };
  return JSON.stringify(data);
}

ws.onopen = () => {
  const data = { id: id, message: "Hello"};
  console.log("Connected to WebSocket server");
  const msg = JSON.stringify(data);
  ws.send(msg);
  console.log(`Client: ${msg}`);
};
// TODO: make this client interactive

ws.onmessage = (event) => {
  console.log("Server:", event.data); // Log the response
  // TODO: Right now, the prompt only triggers after the server sends a message,
  // and not immediately when the client connects. This can be okay depending on
  // the flow you're aiming for, but if you want the client to send a message 
  // right after connection (before receiving anything from the server), you 
  // might want to call the message() function inside ws.onopen or create a loop
  // to continuously accept input from the user.
  const input = message(id, prompt("Enter a message: "));
  ws.send(input);
  console.log(`Client: ${input}`);
};

ws.onclose = () => {
  console.log("Disconnected from WebSocket server");
};

// TODO: Error handling: add a ws.onerror block to catch and log WebSocket errors.