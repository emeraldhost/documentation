---
description: Join a Craftopia server
---

# How to Join Your Craftopia Server

Craftopia has **no server browser and no server list**. You always connect directly using the IP address and the port of your server.

## Find connection details

:::: danger Important
You can find the IP address and the **Game Port** of your server in the **dashboard**. Use exactly the values shown there – Craftopia does not use a different port for joining.
::::

## Join via the IP address

1. <b>Start Craftopia</b><br>
   Launch the game and wait until the main menu has loaded.

2. <b>Open Multiplayer</b><br>
   Select **Multiplayer** in the main menu.

3. <b>Choose your character</b><br>
   If Craftopia asks for a character, select the one you want to join the server with, or create a new one.

4. <b>Select Join via IP</b><br>
   Click on **Join via IP**.

5. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```
   <IP address>:<Game Port>
   ```

   :::: tip Example
   ```
   123.45.67.89:<Game Port from the dashboard>
   ```
   ::::

6. <b>Connect</b><br>
   Confirm your input and start the game. You will then load straight into the world of your server.

:::: info Note
Instead of the IP address you can also use a domain name that points to your server. The port still has to be specified.
::::

## Password protected server

If a password is set for your server, Craftopia asks for it when connecting.

:::: warning Warning
The Craftopia server password is **a plain number with a maximum of eight digits**. Letters or special characters are not possible – a password like `12345678` is valid, `MyPassword` is not.
::::

## Which port does Craftopia use?

:::: info Note
A Craftopia server uses only a single port, the **Game Port** (UDP). There is no separate **Query Port** and no TCP port either. In the game you therefore enter exactly the Game Port listed in your dashboard.
::::

:::: warning Server not reachable
Check the following one by one:

- Is your server actually running according to the dashboard? The first start takes a little longer because the world is being generated.
- Have the IP address and the Game Port been copied exactly? A typo in the port is the most common cause of a failed connection.
- Is a password set for your server? Then you have to enter it correctly when connecting.
::::

:::: warning Check the version
Client and server have to run the same game version. After a game update a connection can fail until your server is on the same version as well.
::::
