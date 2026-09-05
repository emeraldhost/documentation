---
slug: "add-admin"
language: "en"
title: "How to Get Admin Rights on Your Frozen Flame Server"
description: "Use admin rights on a Frozen Flame server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/join-server"]
---

Frozen Flame has **no admin list and no admin file**. Your server is managed exclusively through **RCON**: anyone who knows the RCON password and the RCON port can run every admin command.

> [!WARNING]
> Treat the RCON password like an admin password and only share it with people you trust. There are no graduated permissions – everyone with RCON access has full control over your server.

## RCON credentials

RCON is already set up on your server. You only need three details:

- **IP address**\
  You can find the IP address of your server in the **dashboard**.

- **RCON Port**\
  The RCON Port is also listed in the **dashboard** in the port overview. It is not the same as the Game Port or the Query Port.

- **RCON password**\
  You can find and change the RCON password in the **dashboard**.

## Connect via RCON

1. **Open an RCON tool**\
   Open an RCON client. The developers mention **mcrcon** as an example, but any other RCON client works as well.

2. **Enter the connection details**\
   Enter the IP address of your server and the RCON Port from the dashboard.

3. **Enter the password**\
   Enter the password in the following format:

   ```text
   admin:<RCON password>
   ```

   > [!IMPORTANT]
   > The `admin:` prefix is mandatory in the password field. If you enter only the plain RCON password, the server rejects the connection. This is the most common reason why the RCON login fails in Frozen Flame.

4. **Run commands**\
   Once connected you can run the admin commands.

## Admin commands at a glance

| Command | Description |
|---------|-------------|
| `Admin_GetOnlinePlayers` | Shows all currently connected players with their PlayerID |
| `Admin_ListUserProfiles` | Lists the player profiles stored on the server |
| `Admin_ChatMessage [Message]` | Sends a message to all players |
| `Admin_SaveWorld` | Saves the world |
| `Admin_SaveAll` | Saves the world and the player data |
| `Admin_ScheduleMaintenanceMode <Seconds>` | Schedules maintenance mode after the given time |
| `Admin_CancelScheduledMaintenanceMode` | Cancels the scheduled maintenance mode |
| `Admin_Restart` | Restarts the server |
| `Admin_Shutdown` | Shuts the server down |

> [!NOTE]
> The angle and square brackets in the command overview are placeholders only. Do not type them – enter the value directly instead, for example `Admin_ScheduleMaintenanceMode 300`.

> [!TIP]
> Run `Admin_SaveAll` before creating a backup or downloading your savegame so the current state is written to disk – see [Download savegame](/tutorials/gameserver/frozen-flame/download-savegame).

> [!WARNING]
> `Admin_Shutdown` stops the server process. Whether your server starts up again afterwards depends on the settings in your **dashboard** – restart it manually there if in doubt.

## Admin rights for individual players

> [!IMPORTANT]
> Neither an admin file nor an admin password for the client exists: only people with RCON access have admin rights. The command `Admin_AddUserProfile <PlayerID> <Role>` does assign a role to a player, but which role names are valid is **not documented anywhere** – so there is no reliable way to grant admin rights to individual players. Guides that mention a file such as `AdminList.txt` or a chat command to unlock admin rights are not backed by the official documentation for Frozen Flame.

> [!TIP]
> To learn how to remove players from your server via RCON, see [Kick & Ban Players](/tutorials/gameserver/frozen-flame/kick-ban-players).
