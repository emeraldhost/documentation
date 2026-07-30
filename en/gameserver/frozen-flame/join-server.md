---
description: Join a Frozen Flame server
---

# How to Join Your Frozen Flame Server

You connect to your Frozen Flame server through the private server list: you add your server there once with its IP address and then connect directly. To do that you use the **Game Port**, not the Query Port.

## Find connection details

:::: danger Important
You can find the IP address and the ports of your server in the **dashboard**. To join you need the IP address and the **Game Port**. The Query Port is only used for server queries – you do not connect through it.
::::

## Add the server in the game

1. <b>Start Frozen Flame</b><br>
   Launch Frozen Flame and wait until the main menu has loaded.

2. <b>Open Play</b><br>
   Select **Play** in the main menu.

3. <b>Open Private Server</b><br>
   Switch to the **Private Server** section.

4. <b>Add the server</b><br>
   Click on **Add** in the private server list to create a new entry.

5. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```
   <IP address>:<Game Port>
   ```

   :::: warning Warning
   Enter the **Game Port** from the dashboard here. The connection will fail with the Query Port.
   ::::

6. <b>Confirm the entry</b><br>
   Confirm your input with **Enter**. Your server then appears in the list of private servers.

7. <b>Connect</b><br>
   Select your server from the list and click on **Connect**.

:::: tip Tip
The entry is stored in the game. Next time you simply pick your server from the list and click **Connect**.
::::

## The connection drops after 20 to 30 seconds

:::: warning EasyAntiCheat
If you get disconnected from the server after roughly 20 to 30 seconds, the developers point to EasyAntiCheat as the cause. If your server runs without EasyAntiCheat (startup parameter `-noeac`), **every player has to launch the game without EasyAntiCheat as well**. To do so, choose the second launch option without EasyAntiCheat when starting the game in Steam. Server and client always have to match.
::::

## Public server list

:::: info Note
Your server does not show up in a public server list automatically. The official server documentation provides a separate service for that, which is connected through additional entries in the `Engine.ini`. Whether that service is still running cannot be confirmed. Always connect directly via the IP address – that method works regardless of whether your server is listed anywhere.
::::

## Which ports does Frozen Flame use?

:::: info Note
A Frozen Flame server uses several ports:

| Port | Protocol | Purpose |
|------|----------|---------|
| Game Port | TCP and UDP | Game data – players connect to your server through this one |
| Query Port | UDP | Server queries, for example for server information through Steam |
| RCON Port | TCP | Remote control of the server – see [Add Admin](add-admin.md) |

You can see which values apply to your server in the **dashboard**.
::::
