---
description: Join a Hytale server
---

# How to Join Your Hytale Server

You join your server via **Direct Connect** or save it to your server list for future connections.

## Find connection details

:::: info Note
You can find the IP address and the **Game Port** of your server in the **dashboard** of your server under the overview. In the game you enter both together, separated by a colon.
::::

## Via Direct Connect

1. <b>Launch Hytale</b><br>
   Open the Hytale Launcher and start the game.

2. <b>Open the server menu</b><br>
   Click on **Servers** in the main menu.

3. <b>Select Direct Connect</b><br>
   Click on **Direct Connect** in the bottom right corner.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server and click **Connect**:
   ```
   <IP address>:<Game Port>
   ```

5. <b>Enter the password</b><br>
   If a [password](set-password.md) is set for your server, Hytale asks for it now.

## Save the server

To save the server for future connections:

1. <b>Add server</b><br>
   Click on **Add Server** in the bottom right of the server menu.

2. <b>Enter server details</b><br>
   Enter the address in the format `<IP address>:<Game Port>` in the **Connection Address** field and choose a name.

3. <b>Save</b><br>
   Click **Add Server**. The server now appears in your server list.

:::: info Note
Hytale currently does not support SRV records. If you connect via your own domain, always include the port, e.g. `play.example.com:<Game Port>`.
::::

:::: info Note
Your server does not appear automatically in **Server Discovery**, the official in-game server list. Servers for this list are submitted under **Server Profiles** in the Hytale account and reviewed manually by Hytale. You do not need this to join via Direct Connect or your server list.
::::

## If the connection fails

:::: warning Warning
If you cannot connect, check the following in order:

- Is your server running? It is ready as soon as `Hytale Server Booted!` appears in the console of the **dashboard**. Right after a start or an update this can take a moment.
- Do the versions match? Your Hytale client and your server must use exactly the same protocol version. After a Hytale update you can only join again once your server has been updated as well. If the **Auto Update** field in the **dashboard** under **Settings** is enabled and the **Hytale Version** field is set to `latest` (both default), your server checks for a new version on every start. A restart is then enough.
- Does the patchline match? If you play the pre-release version in the launcher, your client usually does not match a server on the `release` patchline. You set your server's patchline in the **dashboard** under **Settings** in the **Hytale Patchline** field (`release` or `pre-release`).
- Is the [whitelist](enable-whitelist.md) active? Then only approved players can join.
::::

:::: danger Important
Create a [backup](create-backup.md) before you switch the patchline. A world that has been loaded on a newer pre-release version may no longer open on an older server.
::::
