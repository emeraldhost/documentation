---
description: Join a The Forest server
---

# How to Join Your The Forest Server

The Forest has **no direct connection via IP address inside the game menu**. You either find your server through the in-game server browser or add it to your Steam favorites. For the Steam entry you need the **Query Port** – not the Game Port.

## Find connection details

:::: danger Important
You can find the IP address and the ports of your server in the **dashboard**. For the entry in your Steam favorites always use the **Query Port**, not the Game Port. This is the most common reason why joining fails.
::::

## Via the in-game server browser

1. <b>Start The Forest</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open Multiplayer</b><br>
   Select **Multiplayer** in the main menu and then **Join Game**.

3. <b>Change the source</b><br>
   Set the source on the left to **Dedicated (Internet)**. Your server is not listed under the other sources.

4. <b>Search for your server</b><br>
   Enter the name of your server in the search bar.

5. <b>Join the server</b><br>
   Select your server from the list:

   - **Join** starts with a new character.
   - **Continue** loads the character you already saved on this server.

## Via Steam favorites

If you want to join via the IP address specifically, add the server in Steam. This replaces the missing direct connection in the game.

:::: info Note
This step can only be done in Steam, not inside the game itself.
::::

1. <b>Open Steam</b><br>
   Open the Steam client.

2. <b>Open the server browser</b><br>
   Click on **View** in the top left and select **Servers** or **Game Servers**.

3. <b>Add the server</b><br>
   Switch to the **Favorites** tab and click on **Add a Server**.

4. <b>Enter the server address</b><br>
   Enter the IP address and the **Query Port** of your server:

   :::: tip Example
   ```
   123.45.67.89:27016
   ```
   ::::

5. <b>Refresh the list</b><br>
   Click on **Refresh** so Steam queries the server.

6. <b>Join the server</b><br>
   Start The Forest, open **Multiplayer → Join Game** and set the source to **Favorites**. Your server appears there.

## Password protected server

If a password is set for your server, a lock icon is shown in the server list. You are asked for the password every time you join.

:::: tip Tip
The same window also contains a field for the **admin password**. If you enter the admin password of your server there, you join as an admin – see [Add Admin](add-admin.md).
::::

## Which ports does The Forest use?

:::: info Note
A The Forest server uses three ports:

| Configuration value | Default | Purpose |
|---------------------|---------|---------|
| `serverSteamPort` | `8766` | Communication with Steam |
| `serverGamePort` | `27015` | Game port used for the game traffic |
| `serverQueryPort` | `27016` | Query port – Steam and the server browser query the server through it, and players connect through it |

You can see the values that apply to your server in the **dashboard**.
::::

:::: warning Server not found
If your server does not show up in the server browser, add it to your Steam favorites using the query port. Through the favorites you find it regardless of whether it appears in the public list.
::::
