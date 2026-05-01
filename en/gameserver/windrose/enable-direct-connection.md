---
description: Enable direct connection (UseDirectConnection) on a Windrose server
---

# How to Enable Direct Connection on Your Windrose Server

With the `UseDirectConnection` option, players can connect directly via IP address and port without using the invite code.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open ServerDescription.json</b><br>
   Open the file `ServerDescription.json` at:

   ```
   /R5/ServerDescription.json
   ```

4. <b>Adjust UseDirectConnection</b><br>
   Set `UseDirectConnection` to `true` and adjust the following fields:
   - `DirectConnectionServerAddress` — the host IP of your server
   - `DirectConnectionServerPort` — the default game port of your server (we already set this by default)
   - `DirectConnectionProxyAddress` — stays at `0.0.0.0`

   ```
   "UseDirectConnection": true,
   "DirectConnectionServerAddress": "YOUR_HOST_IP",
   "DirectConnectionServerPort": YOUR_GAME_PORT,
   "DirectConnectionProxyAddress": "0.0.0.0"
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## Join via direct connection

Once `UseDirectConnection` is enabled, players can connect to your server directly via its IP address.

1. <b>Start Windrose</b><br>
   Launch Windrose.

2. <b>Select Play</b><br>
   Click **Play** in the main menu.

3. <b>Connect to Server</b><br>
   Select the **Connect to Server** option.

4. <b>Enter IP address</b><br>
   Enter the IP address and port of your server in the format `IP:Port` and confirm.

   :::: tip Example
   ```
   123.45.67.89:7777
   ```
   ::::

:::: info Note
When `UseDirectConnection` is enabled, players can still connect using the invite code. The direct connection via IP address and port is available as an additional option.
::::
