---
description: Join an Avorion server
---

# How to Join Your Avorion Server

Avorion gives you two ways onto your server: the in-game server browser or a direct connection via the IP address. The direct connection is the most reliable one, because your server does not have to be publicly listed for it.

## Find connection details

:::: danger Important
To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server. Use the Game Port – not the Query Port.
::::

## Connect directly via IP

1. <b>Start Avorion</b><br>
   Launch Avorion on your PC.

2. <b>Open Multiplayer</b><br>
   Select **Multiplayer** in the main menu.

3. <b>Choose Join via IP</b><br>
   Click on **Join via IP**.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```
   <IP address>:<Game Port>
   ```

   You can find the exact values in the **dashboard** of your server.

5. <b>Join</b><br>
   Confirm with **Add Server** or **Join**. The server then stays in your server list and you can select it directly next time.

## Via the server browser

1. <b>Open Multiplayer</b><br>
   Select **Multiplayer** in the main menu.

2. <b>Open the server browser</b><br>
   Click on **Browse Servers**.

3. <b>Look up your server</b><br>
   Search the list for your server name and join it with a double click or via **Join**.

:::: info Note
Your server only appears in the server browser if it is publicly listed. This is controlled by the startup parameter `--listed true` or the value `isListed=true` in the `server.ini`. If you cannot find your server there, use the direct connection via **Join via IP**.
::::

:::: warning Warning
After a restart or a change to the settings it takes a moment until the server is reachable again. Check in the **dashboard** whether the server has fully started before you connect.
::::

:::: tip Tip
Besides the Game Port, an Avorion server also uses a Query Port as well as ports for the Steam query. These ports are assigned to you in the **dashboard** – to connect in the game you only need the Game Port.
::::
