---
slug: "set-port"
language: "en"
title: "How to Set the Game Server Port Correctly on Your FiveM Server"
description: "Set the game server port correctly on a FiveM server"
tags: []
date: "2026-04-09"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Port"
sort: 9
related: ["gameserver/fivem/kick-ban-players", "gameserver/fivem/set-license-key", "gameserver/fivem/set-steam-web-api-key", "gameserver/fivem/set-up-database"]
---

If you did not use the `server.cfg` from the main directory `/home/container` during the **txAdmin setup**, the default port `30120` will be used. Since your game server uses a different port, the following error occurs:

```text
Connection refused - CURL error code 7
```

You need to manually enter the correct port of your game server in the `server.cfg`.

## Where is the server.cfg located?

Depending on how you set up txAdmin, the `server.cfg` can be located in different places:

| Setup | Path |
|-------|------|
| Default (recommended) | `/home/container/server.cfg` |
| txAdmin Recipe / Deployer | `/home/container/txData/<ProfileName>/server.cfg` |
| Manual import | The path you specified during import |

> [!TIP]
> You can also edit the `server.cfg` directly via the **CFG Editor** in the txAdmin web interface.

## Find the correct port

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Note the port**\
   Note the **Default Port** of your game server from the server information.

## Set the port in server.cfg

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open server.cfg**\
   Open the `server.cfg` you used during the txAdmin setup (see table above).

4. **Adjust endpoints**\
   Find the following lines and replace `30120` with your actual port:

   ```text
   endpoint_add_tcp "0.0.0.0:YOUR_PORT"
   endpoint_add_udp "0.0.0.0:YOUR_PORT"
   ```

   > [!WARNING]
   > The `endpoint_add_udp` must be placed **before** the `endpoint_add_tcp`, otherwise the port change will not work correctly.

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> We recommend always using the `server.cfg` from the main directory `/home/container` during the txAdmin setup. It is already pre-configured with the correct port of your game server.
