---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on Your The Cenozoic Era Server"
description: "Add an admin on a The Cenozoic Era server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["the-cenozoic-era"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/the-cenozoic-era/create-backup", "gameserver/the-cenozoic-era/join-server", "gameserver/the-cenozoic-era/kick-ban-players"]
---

On your The Cenozoic Era server you grant admin rights through the configuration file `Game.ini`. That is where you enter the players who become **owners** and therefore get access to the admin commands in the game.

## Add owners in the Game.ini

1. **Stop the server**\
   Open the **dashboard** of your server and stop it before you edit the configuration.

2. **Open the configuration file**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file:

   ```text
   /TheCenozoicEra/Saved/Config/WindowsServer/Game.ini
   ```

3. **Find the "Admin Setup" section**\
   Scroll to the end of the file. There you will find the section with the empty `Owners=` entry:

   ```ini
   [/Game/GameCore/DefaultGame/GameInstance/TCEGameInstance.TCEGameInstance_C]

   Owners=
   ```

4. **Enter the player**\
   Add the Steam NetID of the player who should become an owner behind `Owners=`.

5. **Add more owners**\
   For every additional owner you add another line with `Owners=`. The entry may be repeated as often as you need owners.

6. **Save and start**\
   Save the file and start your server. The file is read at startup – without a restart the change has no effect.

> [!NOTE]
> According to the comment in the `Game.ini` you enter a **Steam NetID** at `Owners=`. An owner then has access to the commands and a highlighted name color in the game.

> [!WARNING]
> **Only `Owners=` is documented**
>
> Besides owners, the comment in the file also mentions admins and moderators, but the template only contains the `Owners=` entry. The key names for admins and moderators and the format they have to be entered in are not documented – do not enter anything there on a guess.

## Name colors of the roles

The "Colors" section of the `Game.ini` defines the color each role is displayed in inside the game. The values are given as hex sRGB:

| Entry | Role | Default value |
|-------|------|---------------|
| `OwnerColor` | Owner | `FF1CFAFF` (purple) |
| `AdminColor` | Admin | `FFD000FF` (yellow) |
| `ModeratorColor` | Moderator | `25FFF8FF` (blue) |
| `PlayerColor` | Player | `FFFFFFFF` (white) |
| `VIPColor` | VIP | `00FFB0FF` (teal) |
| `SupporterColor` | Supporter | `FFA100FF` (orange) |

> [!NOTE]
> VIP and supporter are purely cosmetic roles for players you want to highlight. Owner, admin and moderator are the roles for server administration.

## Admin command overview

Admins control the server through chat commands in the game. As the target you always enter the username or the Net ID of the player.

| Command | Description |
|---------|-------------|
| `/users` | Forces the display of name tags |
| `/kick <Username or Net ID>` | Disconnect a player from the server |
| `/ban <Username or Net ID>` | Ban a player |
| `/unban <Username or Net ID>` | Lift a ban |
| `/slay <Username or Net ID>` | Kill the given player |
| `/tp <Username or Net ID>` | Teleport to the given player |
| `/bring <Username or Net ID>` | Bring the given player to you |
| `/heal <Username or Net ID>` | Heal a player |
| `/grow <Username or Net ID>` | Grow the creature of the player |
| `/give <Username or Net ID>` | Give something to a player |
| `/giveprogressionpoints <Points> <Username or Net ID>` | Hand out progression points |
| `/weather <Weather>` | Set the weather |
| `/time <Time>` | Set the time of day |

> [!NOTE]
> What exactly `/give` hands out is not documented. If in doubt, test it on an empty server before you use it while players are online.

### Set the weather

The following values are documented for `/weather`:

```text
Clear, Partly Cloudy, Cloudy, Overcast, Foggy, Light Rain, Rain, Storm
```

### Set the time of day

`/time` expects a value between `0` and `2400`, where `1200` is noon:

```text
/time 1200
```

| Value | Effect |
|-------|--------|
| `0` – `2400` | Set the time of day |
| `-1` | Freeze the time of day |
| `-2` | Unfreeze the time of day again |

> [!WARNING]
> **Caution**
>
> Some values in the `Game.ini` are overwritten from the settings in your **dashboard** on every server start. Change those values there instead of in the file – otherwise your changes are gone again after the next start.

> [!NOTE]
> The configuration folder is called `WindowsServer` on your Linux server as well. The Cenozoic Era only ships a Windows server binary, which runs on Linux servers through a compatibility layer. A folder named `LinuxServer` does not exist.

> [!TIP]
> To learn how to remove players from your server and lift bans again, see [Kick & Ban Players](/tutorials/gameserver/the-cenozoic-era/kick-ban-players).
