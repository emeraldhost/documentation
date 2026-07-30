---
description: Join a PixARK server
---

# How to Join Your PixARK Server

The most reliable way onto your own PixARK server is to add it to your Steam favorites first and then join from the favorites list inside the game. The key detail: in Steam you enter the **Query Port**, **not** the Game Port.

## Find connection details

:::: danger Important
To connect you need the **IP address** and the **Query Port** of your server. You can find both in the **dashboard** of your server. The ports are assigned to you there – always use the values from the dashboard and never default values found online.
::::

## Add the server to your Steam favorites

1. <b>Open Steam</b><br>
   Open the Steam client on your PC.

2. <b>Open the server browser</b><br>
   Click on **View** in the top left and select **Game Servers**.

3. <b>Add the server</b><br>
   Switch to the **Favorites** tab and click on **+** at the bottom right.

4. <b>Enter the server address</b><br>
   Enter the IP address and the **Query Port** of your server, separated by a colon:

   ```
   123.45.67.89:QUERYPORT
   ```

   :::: warning Warning
   The Game Port does not work here. Steam queries the server exclusively through the Query Port – if you enter the wrong port, the server stays offline or does not show up at all.
   ::::

5. <b>Confirm the entry</b><br>
   Confirm your input. Your server then appears in the favorites list. If it is running, you will also see the server name and the player count there.

## Join from inside the game

1. <b>Start PixARK</b><br>
   Launch PixARK on your PC.

2. <b>Open the server list</b><br>
   Open the multiplayer server overview in the main menu.

3. <b>Filter by favorites</b><br>
   Set the filter to **Favorites**. Your server now appears in the list.

4. <b>Join</b><br>
   Select your server and join it.

## Servers with a password

:::: warning Warning
If a password is set on your server, enter it **inside the game only**, after you started joining. If you enter the password in the Steam server browser instead, you may get connected but the world will not load properly.
::::

## Which ports does PixARK use?

:::: info Note
A PixARK server occupies four ports. You can see the numbers your server uses in the **dashboard**:

| Port | Protocol | Purpose |
|------|----------|---------|
| Game Port | UDP | The actual game connection |
| Query Port | UDP | Server query – Steam finds your server through this one, and this is the port you add to your favorites |
| RCON Port | TCP | Remote administration of the server via RCON |
| Cube Port | TCP | Transfers the changes to the voxel world (terrain) |

The Cube Port is a PixARK speciality: if it is unreachable, you can still connect, but the block world will not be transferred or only partially so.
::::

:::: tip Tip
If your server does not show up in your favorites after adding it, first check in the dashboard whether it is actually running, then verify that you really entered the Query Port and not the Game Port.
::::
