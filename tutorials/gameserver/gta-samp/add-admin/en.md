---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your GTA San Andreas Server"
description: "Add an admin to a GTA San Andreas server"
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
short_title: "Add Admin"
sort: 1
related: ["gameserver/gta-samp/add-mods", "gameserver/gta-samp/create-backup", "gameserver/gta-samp/join-server", "gameserver/gta-samp/kick-ban-players"]
---

SA-MP and open.mp have **no admin system based on player IDs**. There is no admin file you add an ID to and no permission system with multiple levels. The only built-in administration feature is **RCON** – whoever knows the RCON password is an admin.

> [!NOTE]
> Graded admin levels, logging in with an account or commands such as `/setadmin` always come from the **gamemode**, not from the server itself. How to add admins there is documented by the respective gamemode.

## Set the RCON password

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the configuration**\
   Open the configuration file in the main directory of your server. On **open.mp** this is `config.json`, on **SA-MP** it is `server.cfg`.

4. **Enter the password**

   **open.mp – `config.json`:**

   ```json
   {
       "rcon": {
           "password": "your-secure-password"
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   rcon_password your-secure-password
   ```

   > [!TIP]
   > If you edit `config.json`, check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop your server from reading the configuration.

5. **Start the server**\
   Save the file and start your server.

> [!IMPORTANT]
> The default value is `changeme`. As long as this value is set, your server **will not start**. Always set a password of your own.

> [!WARNING]
> **Caution**
>
> The RCON password is not the server password. The RCON password gives anyone full control over your server – only share it with people you trust and use a different password than the join password of your server.

## Log in as admin in the game

1. **Join the server**\
   Connect to your server as usual. See [Join Server](/tutorials/gameserver/gta-samp/join-server).

2. **Open the chat**\
   Press `T` to open the chat.

3. **Log in**\
   Log in with your RCON password:

   ```text
   /rcon login your-secure-password
   ```

4. **Use commands**\
   After logging in you run RCON commands with a leading `/rcon`:

   ```text
   /rcon players
   ```

## Useful RCON commands

| Command | Description |
|---------|-------------|
| `/rcon players` | Lists all connected players with ID, name, IP address and ping |
| `/rcon say <text>` | Sends a message to all players |
| `/rcon hostname <name>` | Changes the displayed server name |
| `/rcon password <password>` | Sets a join password – `password 0` removes it again |
| `/rcon mapname <name>` | Changes the map name shown in the server browser |
| `/rcon gmx` | Restarts the gamemode and loads the next entry from your gamemode list |
| `/rcon changemode <gamemode>` | Switches the gamemode |
| `/rcon weather <id>` | Changes the weather |
| `/rcon gravity <value>` | Changes the gravity |
| `/rcon exit` | Shuts the server down |

> [!TIP]
> How to remove players from your server with RCON is described under [Kick and Ban Players](/tutorials/gameserver/gta-samp/kick-ban-players).

## External remote console

Besides the chat there is the external remote console. It lets you issue RCON commands without being in the game – there the commands are entered **without** the `/rcon` prefix.

Whether this external access is active is controlled by two settings:

**open.mp – `config.json`:**

```json
{
    "rcon": {
        "enable": true
    }
}
```

**SA-MP – `server.cfg`:**

```text
rcon 1
```

> [!NOTE]
> On open.mp, `rcon.enable` defaults to `false` and is only read on server start. Since the documentation does not clearly separate whether this setting also affects the in-game login, you should set it and then test whether `/rcon login` still works.

> [!WARNING]
> **Caution**
>
> An enabled external RCON access is reachable from the internet. Only use it with a strong password and turn it off when you do not need it.
