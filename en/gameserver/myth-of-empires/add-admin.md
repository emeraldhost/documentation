---
description: Add an admin to a Myth of Empires server
---

# How to Add an Admin to Your Myth of Empires Server

Admins – called **GM accounts** in the game – are added to a Myth of Empires server by their **SteamID64**. That is a 17-digit number starting with `7656`. There is no admin file you could edit via SFTP: the list is passed to the server on startup.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

:::: danger Important
Separate multiple SteamID64 with a **semicolon** (`;`) – without any spaces in between. A comma does not work as a separator.
::::

## Add an admin

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **settings**.

2. <b>Enter the SteamID64</b><br>
   Enter your SteamID64 into the field for the admin or GM accounts. If your dashboard only offers a field for additional startup parameters, add the following there:

   ```
   -ServerAdminAccounts=76561198012345678;76561198087654321
   ```

3. <b>Enable the GM accounts</b><br>
   Check whether the settings additionally offer a switch for the GM accounts (`bUseServerAdmin`). If it is there, it has to be enabled, otherwise the list has no effect.

4. <b>Restart the server</b><br>
   Save the change and restart your server. The admin list is only read on server start.

## Use admin commands in the game

1. <b>Join the server</b><br>
   Join your server, see [Join Server](join-server.md).

2. <b>Open the console</b><br>
   Press the `~` or `` ` `` key – on an English keyboard the key to the left of the `1`. The console only opens if your account is listed as an admin.

   :::: tip Keyboard
   If the key does not react, switch your keyboard layout to English (US) and try again.
   ::::

3. <b>Enter a command</b><br>
   All admin commands start with `cheat`, for example:

   ```
   cheat SaveWorld
   ```

## Command overview

| Command | Description |
|---------|-------------|
| `cheat SaveWorld` | Save the world immediately |
| `cheat Fly` | Enable fly mode |
| `cheat Walk` | Leave fly mode again |
| `cheat Ghost` | Move through objects |
| `cheat God` | Toggle invulnerability |
| `cheat Hide` | Become invisible to other players |
| `cheat EnableSpectator` | Enable spectator mode |
| `cheat DisableSpectator` | Leave spectator mode |
| `cheat GotoPlayer <SteamID64>` | Teleport to a player |
| `cheat PullPlayer <SteamID64>` | Teleport a player to you |
| `cheat GotoPosition <x> <y> <z>` | Teleport to a coordinate |
| `cheat AttachPlayerForWatch <SteamID64>` | Watch a player |
| `cheat UnAttachPlayerForWatch` | Stop watching |
| `cheat DestroyTarget` | Remove the targeted object |
| `cheat StunTarget` | Stun the targeted entity |
| `cheat AddItem <ItemID> <amount> <quality>` | Put an item into your own inventory |
| `cheat AddItemToPlayer <SteamID64> <ItemID> <amount> <quality>` | Give an item to a player |
| `cheat AddCopper <SteamID64> <amount>` | Give copper coins to a player |
| `cheat AddExpToPlayer <SteamID64> <XP>` | Give experience to a player |
| `cheat EmptyPlayerInventory <SteamID64>` | Empty a player's inventory |
| `cheat SpawnNPCByIndex <index> <distance> <level> <amount>` | Spawn NPCs |
| `cheat KillAllSpawnedNPC` | Remove all spawned NPCs |
| `cheat SetServerLevel <level>` | Set the server level |
| `cheat setTime <HH:MM>` | Set the time of day in the world |
| `cheat setTimeSpeed <factor>` | Speed up or slow down the passing of time |
| `cheat setWeather <0-15>` | Set the weather |

:::: warning Warning
Admin rights can only be granted through the admin list read on server start. Widely circulated commands such as `cheat SetAdmin` do not work – a player who is not on the list cannot grant themselves admin rights in the game.
::::

:::: info Note
If an admin is added later on, the server has to be restarted. Save the world with `cheat SaveWorld` beforehand and wait about 30 to 45 seconds before stopping the server.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
