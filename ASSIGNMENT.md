## Assignment: Expand the WebSocket Server and Client

**Objective:** Enhance your existing Deno WebSocket server and client to create a simple chat application.

### Requirements:

1. **Server Enhancements:**
   - Modify the server to handle multiple clients simultaneously.
   - Broadcast any received message (other than `"ping"`) to all connected clients.
   - Implement a simple way to notify clients when a new user connects and when a user disconnects.

2. **Client Enhancements:**
   - Allow the user to send custom messages to the server.
   - Display incoming messages in a user-friendly format.
   - Show a notification when a user connects or disconnects.
   - Implement a simple user interface (console-based) for sending messages.

3. **Additional Features (Optional):**
   - Allow clients to choose a username that will be displayed with their messages.
   - Implement a command to disconnect from the WebSocket server gracefully.
   - Add error handling for the WebSocket connection.

### Deliverables:
- A modified `server.ts` that meets the above requirements.
- A modified `client.ts` that meets the above requirements.
- Instructions for running the server and client together.

**Good luck!**

## Server Enhancements

### Modify the server to handle multiple clients simultaneously.

Prompt: share a use case i could think about to solve the first server enhancement: "Modify the server to handle multiple clients simultaneously"

#### Use Case: Multi-Client Chat Room

Imagine you're building a **real-time chat room** where multiple users can join, send messages, and see the messages of other users in the same room. The server should be able to:

- **Handle multiple clients connecting at the same time**: Each user who connects will open a new WebSocket connection.
- **Broadcast messages to all clients**: When one user sends a message, the server should send that message to all connected clients, ensuring everyone sees the conversation happening in real-time.
- **Notify users when others join or leave**: When a new user connects or a user disconnects, all clients should receive a message like “User X joined the chat” or “User X left the chat.”

This use case is common in applications like Slack, Discord, or any collaborative tool that requires instant communication among several users.

The goal is to have multiple clients talking to the same server and ensure the server is broadcasting to all connected clients. Think about managing the state of connected users and distributing messages efficiently across them.
