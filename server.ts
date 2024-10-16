const handler: (req: Request) => Response | Promise<Response> = req => {
  // Check if the incoming request is asking to upgrade to a WebSocket
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, {status: 501});  // Return 501 Not Implemented if it's not a WebSocket request
  }

  // Upgrade the HTTP request to a WebSocket connection
  const { socket, response } = Deno.upgradeWebSocket(req);

  // Listen for "message" events on the WebSocket connection
  socket.addEventListener("message", (event) => {
    // If the received message is "ping", send back "pong"
    if (event.data === "ping") {
      socket.send("pong");
      socket.send("pong");
    }
  });

  // Return the WebSocket response, completing the upgrade
  return response;
};

Deno.serve(handler)