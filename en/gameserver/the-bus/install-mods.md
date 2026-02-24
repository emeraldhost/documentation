---
description: Install mods on a The Bus server
---

# How to Install Mods on a The Bus Server

The Bus supports mods via the **Steam Workshop**. Mods are placed in the mods folder on the server.

:::: tip Tip
You can find mods for The Bus on the [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540).
::::

## How to install mods

1. <b>Download mod</b><br>
   Open the [Steam Workshop for The Bus](https://steamcommunity.com/workshop/browse/?appid=491540) and subscribe to the desired mods. The mods can then be found in the following folder:
   ```
   SteamLibrary/steamapps/workshop/content/491540/
   ```

2. <b>Upload mod</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the mod files to the `TheBus/Mods/` folder.

3. <b>Restart server</b><br>
   Restart your server so the mods are loaded.

:::: tip Tip
Use the `maplist` command in the server console to check if map mods have been detected correctly.
::::

## Mod Types

Pay attention to the mod type labels, as they determine where the mod needs to be installed:

| Type | Description |
|------|-------------|
| **Client and Server** | Must be installed on both the server and all players |
| **Client only** | Normally only required on the player's side – however, if the mod is installed on the server, all players must install it too |
| **Server only** | Only required on the server and is deactivated for players |

:::: warning Important
Compatible mods are automatically activated on the server. Make sure all players have installed the required client mods, otherwise they won't be able to join.
::::
