---
description: Join a Factorio server
---

# How to Join Your Factorio Server

Factorio does not have a Steam server browser for rented servers. Instead, you connect directly using the IP address and port of your server.

## Find connection details

:::: warning Important
To connect you need the **IP address** and the **port** of your server. You can find both in the **dashboard** of your server. Factorio only uses a single port over **UDP** (default: `34197`) – there is no separate query port.
::::

## Via Connect to address

1. <b>Start Factorio</b><br>
   Launch Factorio on your PC.

2. <b>Open Multiplayer</b><br>
   Select **Multiplayer** in the main menu.

3. <b>Select Connect to address</b><br>
   Click on **Connect to address**.

4. <b>Enter server address</b><br>
   Enter the IP address and the port of your server, separated by a colon:

   :::: tip Example
   ```
   123.45.67.89:34197
   ```
   ::::

5. <b>Connect</b><br>
   Confirm your input. If a password is set on the server, you will be prompted for it afterwards.

## Via the public server list

If your server is listed publicly, you can also find and join it via **Multiplayer** → **Browse public games**.

:::: info Note
For your server to appear there, you need valid factorio.com credentials. Enter them in the dashboard under **Settings** in the fields **Server Benutzername** and **Server Token**. The token is safer than the password and can be retrieved from your profile on factorio.com.

In addition, the visibility must be set to public in the file `data/server-settings.json`. You can edit the file via [SFTP](../establish-sftp-connection.md):

```json
"visibility":
{
  "public": true
}
```

Afterwards, restart your server.
::::

:::: warning Warning
Do not enter `username` and `token` directly in the file `data/server-settings.json`. Both values are overwritten on every server start from the **Server Benutzername** and **Server Token** fields in the dashboard.
::::

:::: danger Important
Client and server must use the **exact same game version** and the **same mods**. Factorio verifies this by checksum and refuses the connection if anything differs.
::::

:::: info Note
By default the option `require_user_verification` is enabled on a Factorio server. Players therefore need a valid factorio.com account in order to join.
::::
