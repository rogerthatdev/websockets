```markdown
### Assignment: Expand the WebSocket Server and Client

**Objective:** Enhance your existing Deno WebSocket server and client to create a simple chat application.

#### Requirements:

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

#### Deliverables:
- A modified `server.ts` that meets the above requirements.
- A modified `client.ts` that meets the above requirements.
- Instructions for running the server and client together.

**Good luck!**
```