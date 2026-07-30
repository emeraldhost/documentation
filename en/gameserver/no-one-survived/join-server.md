---
description: Join a No One Survived server
---

# How to Join Your No One Survived Server

No One Survived does **not** offer a direct connection via the IP address. You find your server through the in-game server list under **Private Server** – and you search there by **server name** and **region**.

:::: danger Important
The server name and the region of your server are shown in the **dashboard**. You have to enter both in the game exactly as they are configured there – otherwise the result list stays empty. This is the most common reason why joining fails.
::::

:::: tip Tip
Since you search for your server by name, a distinctive server name pays off. With a very generic name such as `Server` you will have a hard time finding your server among all the other entries.
::::

## Join the server

1. <b>Note down the connection details</b><br>
   Open the **dashboard** of your server and note down the **server name** and the configured **region**.

2. <b>Start No One Survived</b><br>
   Start the game and wait until the main menu has loaded.

3. <b>Open Multiplayer</b><br>
   Select **Multiplayer** in the main menu.

4. <b>Choose a character</b><br>
   Select the character you want to play with or create a new one, then confirm your choice. Only after that do you get to the server selection.

5. <b>Open Private Server</b><br>
   Switch to the **Private Server** area. Private servers are listed there – including your own.

   :::: info Note
   If the game asks at this point whether the server mode should be switched, confirm it. The game closes afterwards – start it again and repeat steps 2 to 5.
   ::::

6. <b>Search for the server</b><br>
   Enter the **server name** and the **region** from step 1 and start the search.

7. <b>Join the server</b><br>
   Select your server from the results and confirm with **Join In**.

   :::: info Note
   If a password is set for your server, you are asked for it when joining. That is the server password – not the admin password.
   ::::

## The region is only a search filter

:::: info Note
The region of your server is purely a filter for the server search. It does not move your server to a different location and it does not change your ping.

The only thing that matters is that players select the same region during the search that is configured in your dashboard. If it is set to `All` there, `All` has to be selected in the game as well.
::::

## Which ports does No One Survived use?

:::: info Note
A No One Survived server uses two ports, both of which are addressed via **UDP**:

| Port | Purpose |
|------|---------|
| Game Port | Transfers the actual game data while playing |
| Query Port | Used to query your server – only then does it show up in the server list |

The ports assigned to your server are shown in the **dashboard**. Both ports have to be reachable: without the Query Port your server is not found, without the Game Port the connection drops while loading.
::::

:::: warning Warning
Do not rely on port numbers from other sources. The ports of your server are assigned when it is created and can differ from values quoted elsewhere as defaults. Only the values in your **dashboard** are authoritative.
::::

:::: warning No joining via IP address
There is **no** documented way to join a No One Survived server via its IP address – neither in the game nor through the Steam server browser. The only documented way is searching by server name and region under **Private Server**.
::::

## Server is not found

:::: warning Warning
If your server does not appear in the results, check the following in order:

- Has the server fully started in the **dashboard**? The server list only shows it once it has registered.
- Does the **region** in the game match the region in the dashboard? A mismatching region is the most common reason for an empty result list.
- Did you enter the **server name** exactly as it is configured in the dashboard? Watch out for capitalisation and spaces as well.
- Start the search again. After a server restart it takes a moment until the server reappears.
- Restart the game once. After switching the server mode, private servers sometimes only appear after a restart of the game.
::::
