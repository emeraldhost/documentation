---
description: Join a StarRupture server
---

# How to Join Your StarRupture Server

StarRupture does **not** have a server browser. You connect exclusively by entering the IP address and port directly. The connection itself runs through Epic Online Services (EOS) – even when you launched the game via Steam.

## Find connection details

:::: info Note
You can find the IP address and the Game Port of your server in the **dashboard** of your server.
::::

:::: danger Important
Always use the public IP address shown in the dashboard. Because the connection is established through Epic Online Services, a local network address (LAN) will not work.
::::

## Join the server

1. <b>Start StarRupture</b><br>
   Launch StarRupture and wait until the main menu has loaded.

2. <b>Open Join Game</b><br>
   Select **Join Game** in the main menu.

3. <b>Select Dedicated Server</b><br>
   Select **Dedicated Server**. This is the only place where you can enter an address.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   :::: tip Notation
   ```
   <IP address>:<Game Port>
   ```

   Replace the placeholders with the values shown in your dashboard.
   ::::

   :::: warning Caution
   The port always has to be included. Without a port the game will not reliably find your server.
   ::::

5. <b>Enter the password</b><br>
   If a join password is set for your server, enter it in the corresponding field. Leave the field empty if no password is set.

6. <b>Connect</b><br>
   Confirm your input with **Confirm**. You will then be loaded onto the server.

## Which ports does StarRupture use?

:::: info Note
A StarRupture server only needs a single port: the **Game Port**, and only via **UDP**. There is no separate **Query Port**. The Game Port that applies to your server is shown in the **dashboard**.
::::

:::: danger Why no TCP is opened
The dedicated server ships with an HTTP remote control interface (visible in game as **Manage Server**) that contains a known, unauthenticated security vulnerability: attackers could use it to change passwords, manipulate saves or crash the server. Your server is therefore run with the start parameters `-RCWebControlDisable` and `-RCWebInterfaceDisable` and is only reachable via UDP. As a result **Manage Server** is deliberately unavailable – you change server settings through the dashboard or the `DSSettings.txt` file instead.
::::

## Connection problems

:::: warning Message about multiple servers at this IP
If a message such as *"More than one server at this IP, please specify port"* appears when joining, your game client is still holding an outdated connection to your server. This mainly happens when the server was restarted while StarRupture stayed open. Close the game **completely**, start it again and enter the IP address and Game Port once more.
::::

:::: tip Tip
When troubleshooting, first check whether the server is actually running in the dashboard and whether you entered the IP address and port exactly as displayed there.
::::
