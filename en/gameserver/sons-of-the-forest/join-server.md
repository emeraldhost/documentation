---
description: Join a Sons Of The Forest server
---

# How to Join Your Sons Of The Forest Server

You can join your server directly via its IP address or search for it in the ingame server browser. The direct connection is the most reliable option because it works independently of the server list.

## Find connection details

:::: warning Important
You can find the **IP address** and the ports of your server in the **dashboard**. For the direct connection you need the **Game Port**, and for adding the server in the Steam server browser you need the **Query Port**. Always use the values shown there – the ports are assigned to your server and may differ from the game's default ports.
::::

## Via direct connection

1. <b>Start Sons Of The Forest</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open multiplayer</b><br>
   Select **Multiplayer** in the main menu and then **Join**.

3. <b>Select direct connection</b><br>
   Click on **Direct** at the bottom.

4. <b>Enter server address</b><br>
   Enter the IP address and the **Game Port** of your server.

   :::: tip Example
   ```
   123.45.67.89:8766
   ```
   ::::

5. <b>Join the server</b><br>
   Click **Join**. If a password is set on the server, enter it afterwards.

## Via the ingame server browser

1. <b>Start Sons Of The Forest</b><br>
   Launch the game.

2. <b>Open multiplayer</b><br>
   Select **Multiplayer** in the main menu and then **Join**.

3. <b>Change the source</b><br>
   Set **Source** to **Dedicated**. Your server will not be listed under the other sources (P2P, Friends, LAN).

4. <b>Search for the server</b><br>
   Enter the exact name of your server in the filter field.

5. <b>Join the server</b><br>
   Select your server from the list and click **Join**.

## Via Steam favorites

1. <b>Open Steam</b><br>
   Open the Steam client.

2. <b>Open server browser</b><br>
   Click on **View** in the top left and select **Game Servers**.

3. <b>Add server</b><br>
   Switch to the **Favorites** tab and click **Add a server**.

4. <b>Enter server address</b><br>
   Enter the IP address and the **Query Port** of your server.

   :::: tip Example
   ```
   123.45.67.89:27016
   ```
   ::::

5. <b>Join the server</b><br>
   Launch Sons Of The Forest and select your server from the favorites list.

:::: info Note
After a restart it takes a few minutes until your server appears in the server browser. Use the direct connection in the meantime – it works right away.
::::

:::: warning Server not found
If `LanOnly` is set to `true` in the server configuration, your server will never appear in the public server list. You can find this setting in the file `/serverconfig/dedicatedserver.cfg`, which you can edit via [SFTP](../establish-sftp-connection.md).
::::
