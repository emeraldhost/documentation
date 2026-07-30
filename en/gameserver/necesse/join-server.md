---
description: Join a Necesse server
---

# How to Join Your Necesse Server

Necesse has **no public server browser**. You add your server manually in the multiplayer menu once and can then connect any time with a double click.

## Find connection details

:::: danger Important
You can find the IP address and the port of your server in the **dashboard**. Use exactly the **Game Port** shown there – Necesse does not use a different port for joining.
::::

## Add the server and join

1. <b>Start Necesse</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open Multiplayer</b><br>
   Select **Multiplayer** in the main menu.

3. <b>Add the server</b><br>
   Click on **Add Server**.

4. <b>Enter the connection details</b><br>
   Fill in the details of your server:

   - **Name** – a display name of your choice for your server list
   - **IP** – the IPv4 address from your dashboard
   - **Port** – the **Game Port** from your dashboard

   :::: tip Example
   ```
   Name:  My Necesse Server
   IP:    123.45.67.89
   Port:  Game Port from the dashboard
   ```
   ::::

5. <b>Save the entry</b><br>
   Confirm with **Add**. Your server now stays in your server list permanently.

6. <b>Join</b><br>
   Double-click the entry to connect.

:::: tip Tip
If you only want to connect once without saving the server permanently, you can use the direct connection instead. It asks for the same details but does not create a list entry.
::::

## Password protected server

If a password is set for your server, Necesse asks for it when connecting. Enter the password exactly as stored in your dashboard – it is case sensitive.

## Which port does Necesse use?

:::: info Note
A Necesse server uses only a single port, the **Game Port** (UDP). There is no separate **Query Port** – which is why you enter exactly the Game Port shown in your dashboard.
::::

:::: warning Server not reachable
First check in the dashboard whether your server is actually running. Then make sure the IP address and the Game Port were copied exactly – a typo in the port is the most common reason for a failed connection.
::::

:::: warning Check the version
Client and server must run the same game version. After updating your game, connecting can fail until your server is on the same version as well.
::::
