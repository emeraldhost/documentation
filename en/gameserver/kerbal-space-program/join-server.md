---
description: Join a Kerbal Space Program server
---

# How to Join Your Kerbal Space Program Server

Kerbal Space Program has **no built-in multiplayer mode**. Your server uses the community modification **DarkMultiPlayer (DMP)** for that. Every player needs the matching DMP client in their KSP installation – without the mod there is no way to join a server from inside the game.

## Find connection details

:::: danger Important
You need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server. DarkMultiPlayer does not use a Query Port – the server only uses a single port.
::::

## Install the DMP client

1. <b>Download the client</b><br>
   Open [d-mp.org/downloads](https://d-mp.org/downloads) and download the file **DMPClient.zip**.

2. <b>Open the KSP folder</b><br>
   Open the installation folder of Kerbal Space Program. On Steam you get there by right-clicking the game in your library and choosing **Manage** → **Browse local files**.

3. <b>Extract the mod</b><br>
   Extract the archive and copy the folder `DarkMultiPlayer` from `DMPClient/GameData/` into the `GameData` folder of your KSP installation. The resulting path looks like this:

   ```
   [KSP folder]/GameData/DarkMultiPlayer/
   ```

4. <b>Start the game</b><br>
   Launch Kerbal Space Program. The **DarkMultiPlayer** window with the installed version now appears in the **main menu**.

:::: warning Warning
Client and server have to use the same DMP version. If they do not match, the server rejects the connection with the message **Protocol mismatch**. Always download the client from d-mp.org again after your server has been updated.
::::

:::: info Note
The current DMP version is built for **KSP 1.12.x** only. On any other game version the mod disables itself – instead of the DMP window, the main menu then shows a compatibility warning from Kerbal Space Program.
::::

## Add the server and join

1. <b>Set your player name</b><br>
   Enter your name in the **Player name** field of the DMP window. It can be up to 32 characters long.

   :::: info Note
   The characters `< > : " / \ | ? * $` are not allowed in a player name. The names `Initial`, `Shared` and the console name of the server (`Server` by default) are reserved as well.
   ::::

2. <b>Add the server</b><br>
   Click on **Add**. Three input fields appear:

   | Field | Value |
   |-------|-------|
   | **Name** | Any display name you like for your server |
   | **Address** | The IP address of your server from the dashboard |
   | **Port** | The Game Port of your server from the dashboard |

   :::: warning Warning
   The fields come pre-filled with default values (`127.0.0.1` and a default port). Replace both values with the details from your dashboard.
   ::::

3. <b>Save the entry</b><br>
   Click on **Add server**. Your server then shows up in the server list of the client.

4. <b>Connect</b><br>
   Select the entry in the list and click on **Connect**. The entry is saved – next time you only have to select it and click **Connect**.

## Server does not show up in the public list

The **Servers** button in the DMP client shows a public server list. That list comes from central master servers a server has to report to actively. Your server is **not** listed there by default.

:::: info Note
Add your server manually with its IP address and Game Port as described above. This is the intended way and works regardless of the public list.
::::

## Player name and keys

The first time you join, the server creates a file containing your public key:

```
/Universe/Players/<player name>.txt
```

From that moment on the player name is tied to your key pair and nobody else can use it. Your keys are stored locally at:

```
[KSP folder]/GameData/DarkMultiPlayer/Plugins/Data/publickey.txt
[KSP folder]/GameData/DarkMultiPlayer/Plugins/Data/privatekey.txt
```

:::: tip Tip
If you switch to a different PC or reinstall KSP, copy both key files along – otherwise you can no longer use your existing player name. The mod also stores a backup in `saves/DarkMultiPlayer/`. If the keys are lost, an admin can delete the file `/Universe/Players/<player name>.txt` on the server – the name is free again afterwards.
::::

## Connection is rejected

| Message | Cause |
|---------|-------|
| `Protocol mismatch` | Client and server use different DMP versions |
| `Invalid username` | The player name is empty or contains forbidden characters |
| `Kicked for using a reserved name` | The name is reserved (`Initial`, `Shared` or the console name of the server) |
| `Client already connected` | A player with that name is already connected |
| `Public/private key mismatch` or `Invalid key for user` | The player name belongs to a different key pair on this server |
| `You were banned from the server!` | You are banned, see [Kick & Ban Players](kick-ban-players.md) |
| `Server is full` | The maximum number of players has been reached |

:::: info Which ports does DarkMultiPlayer use?
A DMP server uses exactly one port: the **Game Port** over TCP. Connection handling and all game data run through it. There is no separate Query Port. You can see the Game Port that applies to your server in the **dashboard**.
::::

:::: tip Tip
If your server uses mods, all players need the same mods locally in their `GameData` folder. How that is set up is described in [Add Mods](add-mods.md).
::::
