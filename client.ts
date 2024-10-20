// TODO: add types!
const { randomBytes } = await import("node:crypto");
const ws: WebSocket = new WebSocket("ws://localhost:8000");

const generateId = (): string => {
  return randomBytes(5).toString("hex").slice(0, 5);
};

const id: string = generateId();

// Prompt the user for input and send the message to the server
const promptUserForMessage = (): void => {
  const userMessage = (prompt("Enter a message: ") || "").trim(); // Handle null from prompt
  if (userMessage) {  // Only send non-empty messages
    const input = message(id, userMessage);
    ws.send(input);
    console.log(`Client: ${input}`);
  } else {
    console.log("Message was empty, not sent.");
    promptUserForMessage();
  }
};

const message = (id: string, content: string): string => {
  const data = { id, message: content };
  return JSON.stringify(data);
};

ws.onopen = (): void => {
  const data: {id: string, message: string} = { id, message: "Hello"};
  console.log("Connected to WebSocket server");
  const msg: string = JSON.stringify(data);
  ws.send(msg);
  console.log(`Client: ${msg}`);
  promptUserForMessage();

};
// TODO: make this client interactive

ws.onmessage = (event: MessageEvent): void => {
  console.log("Server:", event.data); // Log the response
  promptUserForMessage();
};

ws.onclose = (): void => {
  console.log("Disconnected from WebSocket server");
};

ws.onerror = (error: Event): void => {
  console.error("WebSocket error:", error);
};
 