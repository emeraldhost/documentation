---
description: Join a Soldat server
---

# How to Join Your Soldat Server

There are two ways onto your Soldat server: through the in-game **server browser** or through a **direct connection** using IP address and port. Both use the same port – Soldat does not have a separate Query Port.

## Find connection details

:::: danger Important
To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server. If your server has a game password, you also need that.
::::

## Connect directly via IP

A direct connection is the most reliable way onto your server because it works independently of the public server list.

1. <b>Start Soldat</b><br>
   Launch Soldat on your PC and wait for the main menu to load.

2. <b>Open Join Game</b><br>
   Select **Join Game** in the main menu.

3. <b>Enter the connection details</b><br>
   Fill in the **IP**, **Port** and **Password** fields with the details of your server:

   ```
   IP:       123.45.67.89
   Port:     <Game Port from the dashboard>
   Password: <game password, if set>
   ```

   :::: info Note
   The **Password** field is the game password of the server, not the admin password. If no game password is set on your server, leave the field empty.
   ::::

4. <b>Connect</b><br>
   Confirm your input and you land directly on your server.

## Via the server browser

1. <b>Open Join Game</b><br>
   Launch Soldat and select **Join Game** in the main menu.

2. <b>Request the server list</b><br>
   Click **Request Servers**. Soldat then loads the list of internet and LAN servers.

3. <b>Select your server</b><br>
   Look for your server by its name in the list and connect.

:::: warning Warning
Your server only shows up in the server browser if it registers with the lobby. How to enable that is described below under [Show your server in the server list](#show-your-server-in-the-server-list). If you cannot find your server, use the direct connection – it always works.
::::

## Via a shortcut or the command line

Soldat can connect to a server directly on startup. That works well for a desktop shortcut you hand to your friends.

1. <b>Use a launch parameter</b><br>
   Append the following parameter to the shortcut of your Soldat client:

   ```
   -join <IP address> <Game Port> <password>
   ```

2. <b>Or use a soldat address</b><br>
   Instead of individual parameters you can also pass a full address:

   ```
   -joinurl soldat://<IP address>:<Game Port>/<password>
   ```

:::: info Note
Port and password are optional. If you leave them out, Soldat falls back to fixed default values and usually will not reach your server – so always enter the Game Port from your **dashboard**.
::::

## Show your server in the server list

For your server to appear in the server browser it has to register with the lobby. How you enable this depends on your server version.

:::: info Two server versions
There are two Soldat server versions with different configuration files. You can tell which one you are running from the file manager or via [SFTP](../establish-sftp-connection.md):

| File in the main directory | Version |
|----------------------------|---------|
| `soldat.ini` and `server.ini` | classic Soldat server |
| `configs/server.cfg` | OpenSoldat |
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open the configuration</b><br>
   Open the configuration file of your server version via [SFTP](../establish-sftp-connection.md).

3. <b>Enable the lobby entry</b><br>
   Classic server – in the `[NETWORK]` section of `soldat.ini`:

   ```
   Lobby_Register=1
   ```

   OpenSoldat – in `configs/server.cfg`:

   ```
   set sv_lobby 1
   ```

4. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Lobby registration is disabled by default on **both** server versions. A freshly set up server is therefore only reachable through a direct connection at first.
::::

## Which ports does Soldat use?

:::: info Note
A Soldat server uses its Game Port for more than one purpose:

| Port | Protocol | Purpose |
|------|----------|---------|
| **Game Port** | UDP | Gameplay – this is the port you enter when joining |
| **Game Port** | TCP | Remote admin console |
| **Game Port + 10** | TCP | Transfer of maps, scenery and textures to the players |

There is no separate Query Port. The values that apply to your server are shown in the **dashboard**.
::::

:::: tip Tip
If players can join but your custom maps are not downloaded, check the file download setting. You can read more about it under [Add Mods](add-mods.md).
::::
