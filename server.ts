const handler: (req: Request) => Response | Promise<Response> = (req) => {
  // Check if the incoming request is asking to upgrade to a WebSocket
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 }); // Return 501 Not Implemented if it's not a WebSocket request
  }

  // Upgrade the HTTP request to a WebSocket connection
  const { socket, response } = Deno.upgradeWebSocket(req);

  // Listen for "message" events on the WebSocket connection
  socket.addEventListener("message", (event) => {
    console.log("Client:", event.data);
    if (JSON.parse(event.data).id != undefined) {
      const clientId = JSON.parse(event.data).id;
      const msg = `welcome ${clientId}`;
      socket.send(msg);
      console.log(`Server: ${msg}`);
    } else {
      socket.send(`no ID provided. Closing.`);
      socket.close();
    }
  });

  // Return the WebSocket response, completing the upgrade
  return response;
};

Deno.serve(handler);
