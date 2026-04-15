---
description: Join an Astroneer server
---

# How to Join Your Astroneer Server

To join your server you need the IP address and port of your server as well as the server password if one is set.

1. <b>Launch Astroneer</b><br>
   Start Astroneer via Steam.

2. <b>Select CO-OP</b><br>
   In the main menu, select **CO-OP**.

3. <b>Choose Dedicated Server</b><br>
   Click **Dedicated Server** to join a dedicated server.

4. <b>Enter server address</b><br>
   Enter the IP address and port of your server in the following format:

   ```
   123.45.67.89:8777
   ```

5. <b>Enter password (optional)</b><br>
   If a password is set on your server, enter it here.

6. <b>Join</b><br>
   Confirm to join your server.

## Disable encryption

Some clients — in particular on Linux or Steam Deck, but occasionally also on Windows — cannot directly connect to an Astroneer dedicated server. In this case, encryption must be disabled both on the server and on all clients.

### On the server

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Disable encryption</b><br>
   Enable the **Disable Encryption** toggle.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

### On the client

1. <b>Open Engine.ini</b><br>
   Press `Windows Key + R`, enter the following path and confirm with Enter:

   ```
   %localappdata%\Astro\Saved\Config\WindowsNoEditor\Engine.ini
   ```

2. <b>Add entry</b><br>
   Append the following section at the end of the file:

   ```
   [SystemSettings]
   net.AllowEncryption=False
   ```

3. <b>Save the file</b><br>
   Save the file and restart Astroneer.

:::: warning Warning
Disabling encryption is not recommended as it reduces the security of the connection. Only use this option if there is no other way to connect to the server.
::::
