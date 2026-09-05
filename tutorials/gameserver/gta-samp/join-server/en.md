---
slug: "join-server"
language: "en"
title: "How to Join Your GTA San Andreas Server"
description: "Join a GTA San Andreas server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["gta-samp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/gta-samp/add-admin", "gameserver/gta-samp/add-mods", "gameserver/gta-samp/create-backup", "gameserver/gta-samp/kick-ban-players"]
---

Multiplayer in GTA San Andreas runs on **SA-MP** or its successor **open.mp**. You need an installed PC version of GTA San Andreas plus the matching client.

> [!IMPORTANT]
> The old SA-MP browser is no longer maintained and does not find servers anymore. Use the [open.mp launcher](https://github.com/openmultiplayer/launcher/releases/latest) instead. It provides an up-to-date server list and connects to both SA-MP and open.mp servers.

## Find connection details

> [!NOTE]
> You can find the **IP address** and the **port** of your server in the **dashboard** of your server. SA-MP and open.mp use a single UDP port for gameplay and for server queries – the **Game Port and the Query Port are identical**. There is no separate Query Port.

## Connect through the open.mp launcher

1. **Download the launcher**\
   Download and install the [open.mp launcher](https://github.com/openmultiplayer/launcher/releases/latest).

2. **Select your game installation**\
   On first start, point the launcher to the folder of your GTA San Andreas installation so it can launch the game.

3. **Set your nickname**\
   Enter your player name. Keep the naming rules below in mind.

4. **Add the server by IP and port**\
   Add your server to the launcher's server list manually. Enter the IP address and the port together, separated by a colon:

   ```text
   123.45.67.89:7777
   ```

   > [!TIP]
   > This is only an example. Always use the IP address and the port shown in the dashboard of your server.

5. **Enter the password**\
   If you set a password on your server, you are asked for it while connecting.

6. **Connect**\
   Select your server and connect. The launcher starts GTA San Andreas and establishes the connection.

## Player name rules

An invalid player name is the most common reason why joining fails.

| Rule | Details |
|------|---------|
| Length | 3 to 20 characters when joining |
| Allowed characters | `0-9`, `a-z`, `A-Z` as well as `[` `]` `(` `)` `$` `@` `.` `_` `=` |
| Uniqueness | The name must not already be used by a connected player |

> [!WARNING]
> **Caution**
>
> If you get the message **Unacceptable NickName**, your name contains a forbidden character, is too short or too long – or another player is already on the server using the same name. Less commonly the message also appears after a very long server uptime; restarting your server helps in that case.

## Server does not show up in the server list

Whether your server is publicly visible is controlled by two settings. You can reach them via [SFTP](/tutorials/gameserver/establish-sftp-connection) in the configuration file of your server.

**open.mp – `config.json`:**

```json
{
    "announce": true,
    "enable_query": true
}
```

**SA-MP – `server.cfg`:**

```text
announce 1
query 1
```

| Setting | Purpose |
|---------|---------|
| `announce` | Registers the server with the public server list (masterlist) |
| `enable_query` or `query` | Defines whether server information is displayed in the server browser – `enable_query` in `config.json`, `query` in `server.cfg` |

> [!TIP]
> If you edit `config.json`, check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop your server from reading the configuration.

> [!NOTE]
> The server browser additionally shows the values `name` or `hostname`, `language`, `mapname` and `gamemodetext` as well as `weburl` from your configuration. Connecting via IP address and port works even if your server is not listed publicly.

> [!IMPORTANT]
> Do not change the port in the configuration file yourself. The port is assigned to your server through the panel – entering a different value there makes your server unreachable.

## Game does not start or does not connect

> [!WARNING]
> **Caution**
>
> Single-player mods prevent the multiplayer client from starting. Remove all `.asi` and `.cs` files, replaced vehicle and skin models as well as trainers from your game installation before connecting. Server-side content is downloaded from the server automatically anyway – see [Add Mods](/tutorials/gameserver/gta-samp/add-mods).

> [!NOTE]
> If the client gets stuck on **Connecting to IP:Port…**, first check whether your server is actually running in the dashboard and whether the IP address and port match exactly.
