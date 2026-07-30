---
description: Join a Soldat 2 server
---

# How to Join Your Soldat 2 Server

Soldat 2 uses **a single port** for the connection – the **Game Port**. There is no separate **Query Port**. You can reach your server in two ways: through the in-game server list or through a direct connection using IP address and port.

## Find connection details

:::: danger Important
You can find the IP address and the Game Port of your server in the **dashboard**. That is exactly the port you enter in the game – with Soldat 2 there is nothing to add to it.
::::

## Via the server list

1. <b>Start Soldat 2</b><br>
   Launch Soldat 2 on your PC.

2. <b>Open the server list</b><br>
   In the main menu, open the multiplayer section with the list of public servers.

3. <b>Search for your server</b><br>
   Look for the name of your server in the list. The name you set in the **dashboard** is exactly the name shown here.

4. <b>Join</b><br>
   Select your server and join it.

:::: info Note
For your server to appear in the public list at all, `VisibleInGamesList` in the `autoconfig.ini` has to be set to `True`. If it is set to `False`, your server is still reachable – but only through a direct connection.
::::

## Connect directly via IP

A direct connection is the most reliable way onto your server and also works when it does not show up in the server list.

1. <b>Start Soldat 2</b><br>
   Launch Soldat 2 on your PC.

2. <b>Open the direct connection</b><br>
   Switch to the direct connection in the multiplayer section. Soldat 2 asks for the address and the port in separate fields.

3. <b>Enter the address</b><br>
   Enter the IP address of your server from the **dashboard** into the address field:

   ```
   123.45.67.89
   ```

4. <b>Enter the port</b><br>
   Enter the **Game Port** of your server into the port field – unchanged, exactly as shown in the **dashboard**.

5. <b>Connect</b><br>
   Confirm your input. You then drop straight into the running game.

## Password protected server

If a game password is set for your server, you are asked for it when joining. The game password only controls who is allowed on the server at all – it has nothing to do with the RCON password used for admin rights. How to grant admin rights is explained under [Add Admin](add-admin.md).

## Server cannot be found

:::: warning Warning
If your server does not appear in the list, check the following in order:

- Is the server running in the **dashboard** and has it finished starting?
- Is `VisibleInGamesList` in the `autoconfig.ini` set to `True`?
- Are you really using the IP address and Game Port from the **dashboard**?

Freshly started servers need a moment before they show up in the server list. Through a direct connection you reach your server immediately.
::::

## Which ports does Soldat 2 use?

:::: info Note
| Port | Protocol | Purpose |
|------|----------|---------|
| Game Port | TCP **and** UDP | Game data and server queries – all players connect through this one |
| WebSockets port | TCP | Optional WebSockets interface – not needed for normal play |
| WebSockets RCON port | TCP | Optional RCON interface over WebSockets – not needed for normal play |

Soldat 2 has no dedicated Query Port – server queries run through the same port as the game itself. You can see which ports apply to your server in the **dashboard**.
::::

:::: warning Warning
Ports, server name and game password are written from the **dashboard** into the `autoconfig.ini` on every server start. If you enter these values into the file by hand, they are overwritten on the next start – always change them in the dashboard instead.
::::
