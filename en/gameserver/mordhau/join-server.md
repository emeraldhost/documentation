---
description: Join a Mordhau server
---

# How to Join Your Mordhau Server

You either find your server through the in-game server browser or connect directly through Steam using your server's address.

## Find connection details

:::: danger Important
You can find the IP address and the ports of your server in the **dashboard**. For the connection through Steam you use the **Query Port**, not the Game Port. This is the most common reason why joining fails.
::::

## Via the in-game server browser

1. <b>Start Mordhau</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the server browser</b><br>
   Select **Fight** in the main menu. This takes you to the server browser with the list of all public servers.

3. <b>Search for your server</b><br>
   Enter the name of your server into the search field. This is much faster than scrolling through the full list.

4. <b>Join the server</b><br>
   Select your server from the list and join it.

:::: info Password protected server
If a password is set for your server, you are asked for it when joining. You can find the password in the **dashboard** of your server.
::::

## Connect through Steam

If you want to join using your server's address specifically, use a Steam connection link.

1. <b>Start Steam</b><br>
   Make sure Steam is running on your PC and that you are signed in.

2. <b>Build the connection link</b><br>
   Assemble the link from the IP address and the **Query Port** of your server:

   ```
   steam://connect/<IP address>:<Query Port>
   ```

   :::: warning Warning
   This is where the **Query Port** goes, not the Game Port. You can find both values in the **dashboard** of your server.
   ::::

3. <b>Open the link</b><br>
   Enter the link into your browser's address bar, or open it on Windows with `Win` + `R`. Steam launches Mordhau and connects you to your server.

:::: tip Tip
Save the finished link as a bookmark or pass it on to your fellow players – that way nobody has to search for the server in the browser.
::::

## Which ports does Mordhau use?

:::: info Note
A Mordhau server uses three ports:

| Port | Protocol | Purpose |
|------|----------|---------|
| Game Port | UDP | Carries the actual game traffic |
| Query Port | UDP | Server query: your server appears in the server list through it, and the Steam link connection runs through it |
| Beacon Port | UDP | Used while players are establishing the connection |

You can see the values that apply to your server in the **dashboard**. All three ports have to be reachable – if one of them is missing, joining can fail even though the server is running.
::::

## Server does not appear in the server browser

For your server to be listed publicly it has to register with Steam. This is controlled by the entry `bAdvertiseServerViaSteam` in the `Game.ini`.

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

   :::: warning Warning
   Only edit the `Game.ini` while the server is stopped. Mordhau rewrites the file on shutdown and overwrites changes you made while it was running.
   ::::

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the Game.ini</b><br>
   Open the following file:

   ```
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Set the entry</b><br>
   Look for the entry `bAdvertiseServerViaSteam` in the file and set it to `True`:

   ```ini
   bAdvertiseServerViaSteam=True
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
Freshly started servers take a few minutes before they show up in the server list. The Steam connection link gets you onto your server even while it is not listed yet.
::::

:::: info Note
The folder `LinuxServer` and the `Game.ini` are only created after your server has fully started once. If you cannot find the file, start your server once and stop it again.
::::
