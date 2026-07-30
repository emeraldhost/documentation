---
description: Join an Abiotic Factor server
---

# How to Join Your Abiotic Factor Server

There is **no documented input field for a direct connection via IP address inside the game** for Abiotic Factor. You either find your server through the in-game server browser or add it to your Steam favorites.

## Find connection details

:::: danger Important
You can find the IP address, the **Game Port** and the **Query Port** of your server in the **dashboard**. Both ports are assigned to your server there – always use the values shown in your dashboard.
::::

## Via the in-game server browser

1. <b>Start Abiotic Factor</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the server list</b><br>
   Select **Join a Server** in the main menu. Depending on the version you only reach that entry after starting the game via **Enter the Facility**.

3. <b>Show dedicated servers</b><br>
   Enable the **Show Dedicated** option in the filters. Without this filter, dedicated servers are not listed.

4. <b>Search for your server</b><br>
   Enter the name of your server in the search bar.

5. <b>Refresh the list</b><br>
   Refresh the server list so the server is queried again.

6. <b>Join</b><br>
   Select your server from the list and click on **Join**. If a server password is set, you are asked for it now.

## Via Steam favorites

:::: info Note
If your dedicated server does not show up in the in-game server browser, the route through the Steam server browser is the most reliable solution: close the game, add the server in Steam and join from there.
::::

1. <b>Open Steam</b><br>
   Close Abiotic Factor and open the Steam client.

2. <b>Open the server browser</b><br>
   Click on **View** in the top left and select **Servers** or **Game Servers**.

3. <b>Add the server</b><br>
   Switch to the **Favorites** tab and click on **Add a Server**.

4. <b>Enter the server address</b><br>
   Enter the IP address and the **Game Port** of your server, separated by a colon:

   ```
   <IP address>:<Game Port>
   ```

   :::: tip Tip
   If Steam does not find the server that way, try the same entry with the **Query Port**. Which of the two ports works depends on the server configuration – both variants are worth a try.
   ::::

5. <b>Refresh the list</b><br>
   Click on **Refresh** so Steam queries the server.

6. <b>Join</b><br>
   Select the server in your favorites list and click on **Connect**. Steam starts Abiotic Factor and connects you to the server.

## Which ports does Abiotic Factor use?

:::: info Note
An Abiotic Factor server uses two ports:

| Port | Protocol | Purpose |
|------|----------|---------|
| **Game Port** | UDP | Carries the game traffic |
| **Query Port** | UDP | Steam and the server browser query your server through it |

You can see the values that apply to your server in the **dashboard**.
::::

:::: warning Server not found
Check the following in order:

- Is the **Show Dedicated** filter enabled in the server browser?
- Did you refresh the server list after starting the server? Freshly started servers appear there with a delay.
- Add the server to your **Steam favorites** instead. Through the favorites you find it regardless of whether it appears in the public list.
::::

:::: info Direct connection instead of Steam P2P
Dedicated Abiotic Factor servers do not use a Steam P2P connection but a direct connection to the IP address of your server. That is why joining works even if you are not Steam friends with the other players.
::::

:::: warning No direct connect in the game
A field in the game menu where you could enter `IP:Port` directly is not documented for Abiotic Factor. Every way of joining described here goes through the in-game server browser or through the Steam favorites.
::::
