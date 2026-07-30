---
description: Join an IOSoccer server
---

# How to Join Your IOSoccer Server

There are two ways onto your IOSoccer server: through the in-game **server browser** or through a **direct connection** using the developer console. There is no lobby system — joining via IP and port always works.

## Find connection details

:::: info Note
You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. IOSoccer uses the same port for gameplay and for server queries — there is **no separate Query Port**.
::::

:::: warning Warning
Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.
::::

## Enable the developer console in the game

You need the developer console for the direct connection. If it does not respond, enable it like this:

1. <b>Start IOSoccer</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the options</b><br>
   Open the **Options** from the main menu and switch to the **Keyboard** tab.

3. <b>Open the advanced settings</b><br>
   Click the **Advanced** button.

4. <b>Enable the console</b><br>
   Tick **Enable Developer Console** and confirm the setting.

## Connect through the game console

1. <b>Open the console</b><br>
   Press `~` or `` ` `` in the game to open the console.

2. <b>Connect</b><br>
   Enter the following command:

   ```
   connect IP:Port
   ```

   :::: tip Example
   ```
   connect 123.45.67.89:27015
   ```

   Use the IP address and the Game Port from your dashboard here.
   ::::

3. <b>Reconnect</b><br>
   If the connection drops, the command `retry` brings you back to the same server without typing the address again.

:::: tip Tip
You can also reach your server directly through Steam. Enter the following address in your browser or in the Windows Run dialog — Steam launches the game and connects you automatically:

```
steam://connect/123.45.67.89:27015
```
::::

## Via the in-game server browser

1. <b>Open the server browser</b><br>
   Start IOSoccer and open the server browser in the main menu.

2. <b>Search for your server</b><br>
   Switch to the **Internet** tab and search for the name of your server.

3. <b>Join</b><br>
   Select your server and connect.

:::: info Note
By default the **Internet** tab of the server browser hides servers that run a different game version. If your server does not show up there even though it is running, first check whether server and game are on the same version. You can still reach it through the direct connection.
::::

## Via Steam favorites

If you cannot find your server in the list, add it directly in Steam.

1. <b>Open Steam</b><br>
   Open the Steam client.

2. <b>Open the server browser</b><br>
   Click on **View** in the top left and select **Game Servers**.

3. <b>Add the server</b><br>
   Click on the **Favorites** tab and then on **+** at the bottom right.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server and confirm.

5. <b>Join</b><br>
   Select the server and connect. The server then also appears in the favorites section of the in-game server browser.

## Show the server in the public server list

Add these values via [SFTP](../establish-sftp-connection.md) to the following file. If it does not exist yet, create it:

```
/iosoccer/cfg/server.cfg
```

| Setting | Meaning |
|---------|---------|
| `sv_lan 0` | Server is publicly reachable and logs in to Steam (`1` = LAN only) |
| `sv_region` | Region for the server browser (default value `255` = worldwide) |
| `sv_tags` | Custom tags players can filter by in the server browser |

:::: info Note
You do not need a **Steam Game Server Login Token (GSLT)** for IOSoccer — the server does not support login tokens because it runs on an older branch of the Source Engine. With `sv_lan 0` it registers with the Steam master servers without a token. If it ever fails to register in time, trigger the registration again with `heartbeat` in the server console.
::::

:::: tip Tip
After changing the `server.cfg` you have to restart your server for the values to be applied.
::::

## Which ports does IOSoccer use?

:::: info Note
| Port | Purpose |
|------|---------|
| **Game Port** | Gameplay, server queries and RCON — this is the port you enter when joining |
| Client port `27005` | Local port on the player's PC, not a server address |
| SourceTV port | Only relevant if you use SourceTV for spectators |

You can see the values that apply to your server in the **dashboard**.
::::
