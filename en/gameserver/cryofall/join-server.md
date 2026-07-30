---
description: Join a CryoFall server
---

# How to Join Your CryoFall Server

To connect, CryoFall uses **only a single port** – the Game Port of your server. There is no separate Query Port. Inside the game two paths lead onto your server: the public server list (**Community servers list**) or an entry by address (**Custom servers list**).

## Find connection details

:::: danger Important
To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server.
::::

:::: info Note
You never have to enter the port yourself. On every start your server automatically writes the port from the dashboard into its configuration.
::::

## Join via the Custom servers list

This is the most reliable way – it works even when your server is not listed publicly.

1. <b>Start CryoFall</b><br>
   Launch CryoFall and wait for the main menu to load.

2. <b>Open the server list</b><br>
   Select **SERVERS** in the main menu.

3. <b>Switch to the Custom servers list</b><br>
   Open the **Custom servers list** section. This is where you add servers manually.

4. <b>Add the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```
   123.45.67.89:6000
   ```

   :::: tip Tip
   The values in the example are placeholders. Use the IP address and the Game Port shown in your dashboard.
   ::::

5. <b>Join the server</b><br>
   Confirm your input. Your server then stays in this list permanently and you can join it from there.

## Join via the Community servers list

Your server only shows up in the public server list if it is registered as a public server.

1. <b>Enable the server list</b><br>
   In the **dashboard** of your server, set the **Server List** option to enabled and restart the server.

2. <b>Search for the server</b><br>
   Select **SERVERS** in the main menu and then **Community servers list**. Search for the name of your server there.

3. <b>Join the server</b><br>
   Select your server from the list to join it.

:::: warning Warning
It can take a few minutes before a freshly started server appears in the public list. Use the **Custom servers list** entry in the meantime.
::::

## Join via the server GUID

Instead of the IP address you can also give your players the GUID of your server. It is assigned by the master server on the first start and stays the same even if the IP address changes.

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open the configuration</b><br>
   Open the following file:

   ```
   /Data/SettingsServer.xml
   ```

3. <b>Read out the GUID</b><br>
   Look for the following entry and copy its value:

   ```xml
   <server_public_guid></server_public_guid>
   ```

4. <b>Share the GUID</b><br>
   Your players enter the GUID in the game under **SERVERS → Custom servers list** – exactly like an address.

:::: danger Important
Never change the value of `server_public_guid` yourself. It is assigned by the master server; you may only share it.
::::

## Which ports does CryoFall use?

:::: info Note
A CryoFall server uses exactly **one port**:

| Port | Protocol | Purpose |
|------|----------|---------|
| Game Port | UDP | Game data and connection handling – all players connect through this one |

CryoFall has no separate Query Port. You can see which Game Port applies to your server in the **dashboard**.
::::

## Reserve the server for specific players

:::: warning No server password
CryoFall has **no server password**. If you want to open your server only for selected players, use the whitelist instead – see [Kick & Ban Players](kick-ban-players.md).
::::
