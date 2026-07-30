---
description: Join an Eco server
---

# How to Join Your Eco Server

Eco does not have a classic direct connect field in the main menu. Instead you add your server in the server browser using the **plus button** – or you look for it in the public server list. To connect you always use the **Game Port** of your server.

## Find connection details

:::: danger Important
To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server. Do not use the web server port – it only gives you access to the web client, not to the game.
::::

## Add the server via IP

Adding the server by IP address is the most reliable way onto your server. Once added, it stays in your list permanently.

1. <b>Start Eco</b><br>
   Launch Eco on your PC and sign in with your account.

2. <b>Open the server browser</b><br>
   Select **New Game** in the main menu. You end up in the **Your Worlds** overview showing the servers you have already visited.

3. <b>Add the server</b><br>
   Click the green **plus button**.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```
   <IP address>:<Game Port>
   ```

   :::: info Note
   Both values are listed in your **dashboard**. The address consists of the IP address, a colon and the Game Port – without any spaces in between.
   ::::

5. <b>Join</b><br>
   Confirm your input and click **Join**.

6. <b>Create your character</b><br>
   The first time you join you create your character and choose your starting point in the world. Your progress is stored on the server from then on.

:::: tip Tip
Servers you have visited afterwards appear permanently under **Your Worlds**. So you only have to enter the IP address once.
::::

## Via the public server list

1. <b>Open New Game</b><br>
   Select **New Game** in the main menu.

2. <b>Show all servers</b><br>
   Click **Browse All** in the top right corner to open the public server list.

3. <b>Search for your server</b><br>
   Click the magnifier icon and enter the name of your server.

4. <b>Join</b><br>
   Select your server and click **Join**.

## Account for Eco

:::: info Note
Playing Eco requires a free Strange Loop Games account. Sign in with it inside the game before joining a server.
::::

## Server does not show up in the list

For your server to appear in the public server list, it has to be published there. This is controlled in the file `/Configs/Network.eco`:

| Setting | Meaning |
|---------|---------|
| **Public Server** | Defines whether the server is posted to the public server listings of Strange Loop Games |
| **Server Category** | Category your server is listed under: `Beginner`, `Established`, `BeginnerHard` or `Strange` |

:::: info Mind the capitalisation
`Network.eco` is a JSON file. The category values are written exactly as shown above – `BeginnerHard` without a space and with a capital `B` and `H`. A differently spelled value is not recognised.
::::

:::: warning Warning
Changes to the configuration files only take effect after a **restart of the server**. A server that has a password set usually does not show up in the public listing either.
::::

:::: tip Your server is still reachable
Even if your server is not in the public list you can add it at any time via the plus button using the IP address and Game Port. Simply pass both on to your fellow players.
::::

## Which ports does Eco use?

:::: info Note
An Eco server uses several ports. In the file `/Configs/Network.eco` they are named:

| Configuration value | Protocol | Purpose |
|---------------------|----------|---------|
| `GameServerPort` | UDP | Game Port – players connect through this one |
| `WebServerPort` | TCP | Web server of the game, used for the web client among other things |
| `RconServerPort` | TCP | RCON |

Which values apply to your server is shown in the **dashboard**. Always enter the **Game Port** in the game.
::::
