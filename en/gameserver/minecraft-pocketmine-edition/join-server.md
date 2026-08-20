---
description: Join a Minecraft PocketMine Edition server
---

# How to Join Your Minecraft PocketMine Edition Server

PocketMine-MP is a server software for Minecraft Bedrock Edition. That means you connect with a regular Bedrock client, for example on Windows, Android or iOS. The server has to be added manually once.

## Find connection details

:::: info Note
You can find the IP address and the Game Port of your server in the **dashboard** of your server. Always enter exactly this Game Port in the game.
::::

:::: danger Important
PocketMine-MP answers server queries on the same UDP port the game itself runs on. There is no separate Query Port for connecting – entering a different port will not get you onto the server.
::::

## Add the server in the game

1. <b>Start Minecraft</b><br>
   Launch Minecraft Bedrock Edition on your device.

2. <b>Open Play</b><br>
   Select **Play** in the main menu.

3. <b>Open the Servers tab</b><br>
   Switch to the **Servers** tab.

4. <b>Add a server</b><br>
   Scroll down and select **Add Server**.

5. <b>Enter the connection details</b><br>
   Enter a server name of your choice as well as the IP address and the Game Port from the dashboard:

   ```
   Server Name:    My PocketMine Server
   Server Address: 123.45.67.89
   Port:           Game Port from the dashboard
   ```

6. <b>Save</b><br>
   Save the entry. Your server then appears in the list under **Additional Servers**.

7. <b>Join</b><br>
   Select your server and click **Join Server**.

## Why your server does not show up in the server list

:::: info Note
In the **Servers** tab Minecraft only lists the large Mojang partner servers under "Featured Servers". Your own server – whether rented or self-hosted – never shows up there. The only way to reach it is the manual entry with IP address and Game Port.
::::

## Sign in with a Microsoft account

:::: info Note
By default PocketMine-MP verifies the Xbox authentication of your players. Every player therefore has to be signed in with a Microsoft or Xbox account in their Minecraft client. This is controlled by the `xbox-auth` entry in the `server.properties` file in the main folder of your server.
::::

## Joining from consoles

:::: warning Warning
On Xbox, PlayStation and Nintendo Switch you cannot enter custom server addresses. Players on these consoles can only connect to your server through a custom DNS service or through a LAN connection.
::::

## Minecraft Java Edition

:::: danger Important
**Minecraft Java Edition** clients cannot join a PocketMine server. Both editions use different network protocols – Bedrock communicates over UDP, Java over TCP. Plugins exist that add partial support, but according to the official PocketMine documentation this support is explicitly only partial and no full replacement.
::::
