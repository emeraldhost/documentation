---
slug: "restrict-crossplay"
language: "en"
title: "How to Restrict Crossplay on Your RuneScape: Dragonwilds Server"
description: "Restrict crossplay on a RuneScape Dragonwilds server"
tags: []
date: "2026-09-15"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Restrict Crossplay"
sort: 10
related: ["gameserver/runescape-dragonwilds/join-server", "gameserver/runescape-dragonwilds/set-server-password", "gameserver/runescape-dragonwilds/set-owner-id", "gameserver/runescape-dragonwilds/kick-ban-players"]
---
Since the 1.0 update, your server is automatically a crossplay server. Players on PC, PlayStation 5, Xbox Series X|S and Nintendo Switch 2 can [join](/tutorials/gameserver/runescape-dragonwilds/join-server) together without you having to configure anything in the dashboard. If you want to limit your server to a single platform, you can optionally do so via SFTP in the configuration file.

> [!NOTE]
> There is no crossplay field in the settings of the dashboard. The restriction is done exclusively via the `DedicatedServer.ini` file. If only a specific group of players should be able to join, you can additionally set a [server password](/tutorials/gameserver/runescape-dragonwilds/set-server-password).

## Possible values

The `PlatformPolicy` setting defines which platform is allowed to join your server:

| Value | Meaning |
| ----- | ------- |
| `Crossplay` | All platforms can join (default) |
| `PC` | Only PC players can join |
| `PlayStation` | Only PlayStation players can join |
| `Xbox` | Only Xbox players can join |
| `Nintendo` | Only Nintendo Switch players can join |

## Restrict crossplay

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open configuration file**\
   Open the following file:

   ```text
   /RSDragonwilds/Saved/Config/LinuxServer/DedicatedServer.ini
   ```

4. **Enter PlatformPolicy**\
   Under the `[/Script/Dominion.DedicatedServerSettings]` section, add the line `PlatformPolicy=` with the desired value from the table. If the line already exists, only change the value.

   > [!TIP]
   > **Example**
   >
   > ```text
   > [/Script/Dominion.DedicatedServerSettings]
   > PlatformPolicy=PC
   > ```

   > [!WARNING]
   > Use exactly the spelling from the table. With an invalid value, the server will not start and the log shows the message `The [PlatformPolicy] value [...] is invalid. Valid values: ...` with the valid values. In this case, correct the value and restart the server.

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> On startup, the dashboard only writes the values from the settings (Owner ID, names and passwords) to the file. Your `PlatformPolicy` line is kept.

## Verify the setting

You can check whether the setting has been applied in the log of your server at `/RSDragonwilds/Saved/Logs/RSDragonwilds.log`:

- `Session crossplay set to [...]` – shows the active crossplay setting of your server
- `PlatformPolicy not set - defaulting to Crossplay` – no value is set, all platforms can join

## Re-open crossplay for everyone

Set the value back to `PlatformPolicy=Crossplay` or remove the line from the file and restart your server.

> [!TIP]
> **Troubleshooting**
>
> If a player is rejected from your crossplay server with a crossplay error message, they have disabled crossplay in the settings of the game and need to enable it there again. In this case, the log of your server shows `PreLogin rejected crossplay-disabled client from a crossplay server`.
