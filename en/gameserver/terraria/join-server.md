---
description: Join a Terraria server
---

# How to Join Your Terraria Server

Terraria does not have an in-game server browser for dedicated servers. Instead, you connect directly using the IP address and port of your server.

## Find connection details

:::: warning Important
To connect you need the **IP address** and the **port** of your server. You can find both in the **dashboard** of your server. Terraria only uses a single port over **TCP** (default: `7777`) – there is no separate query port.
::::

## Via Join via IP

1. <b>Start Terraria</b><br>
   Launch Terraria on your PC.

2. <b>Open Multiplayer</b><br>
   Select **Multiplayer** in the main menu.

3. <b>Select Join via IP</b><br>
   Click on **Join via IP**.

4. <b>Select your character</b><br>
   Choose the character you want to play with on the server.

5. <b>Enter the IP address</b><br>
   Enter the IP address of your server – **without** the port:

   :::: tip Example
   ```
   123.45.67.89
   ```
   ::::

6. <b>Enter the port</b><br>
   In the next field, enter the port of your server:

   :::: tip Example
   ```
   7777
   ```
   ::::

7. <b>Connect</b><br>
   Confirm your input to join the server. If a password is set on the server, you will be prompted for it afterwards.

:::: info Note
The options **Join** and **Join via Steam** in the multiplayer menu are meant for games hosted by a friend directly from within the game. For your dedicated server you always need **Join via IP**.
::::

:::: warning Caution
The client and the server have to run **the same game version**. If your Terraria version differs from the server's version, the server rejects the connection with a version message. Make sure both are on the same version.
::::

:::: danger Important
Regular Terraria and tModLoader are two entirely separate programs. A regular Terraria client **cannot join a tModLoader server** – and vice versa. For a tModLoader server you need the tModLoader client: [Join Terraria tModLoader server](../terraria-tmodloader/join-server.md).
::::
