---
slug: "edit-config-files"
language: "en"
title: "How to Edit the Configuration Files on Your SCP: Secret Laboratory Server"
description: "Edit the configuration files on a SCP: Secret Laboratory server"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Edit Config Files"
sort: 5
related: ["gameserver/scp-secret-laboratory/configure-friendly-fire", "gameserver/scp-secret-laboratory/create-backup", "gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/install-exiled-plugins"]
---

On SCP: Secret Laboratory, the entire server configuration is handled through text files. This guide shows you where the files are located, which file is responsible for what, and how to make changes safely.

## Where are the configuration files?

All game configuration files are located in the following directory – replace `<Port>` with the game port of your server:

```text
/.config/SCP Secret Laboratory/config/<Port>/
```

You can find the game port in the dashboard under **Overview**.

> [!WARNING]
> The game port is assigned automatically. Because of this, multiple port folders can exist under `/.config/SCP Secret Laboratory/config/`, for example from a previous port assignment. The server only reads the folder whose name matches the current game port – changes made in an old port folder have no effect. Always check the current game port in the **Overview** of the dashboard before making changes.

## Which file does what?

| File | Purpose |
|------|---------|
| `config_gameplay.txt` | Gameplay settings of the server, e.g. game rules and round behavior |
| `config_remoteadmin.txt` | Ranks and permissions – see [Assign ranks](/tutorials/gameserver/scp-secret-laboratory/assign-ranks) |
| `UserIDWhitelist.txt` | Whitelisted players – see [Set up whitelist](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist) |

> [!NOTE]
> Plugin configurations are not stored in this directory. EXILED keeps its plugin configs under `/.config/EXILED/Configs/` – see the guide [Install EXILED plugins](/tutorials/gameserver/scp-secret-laboratory/install-exiled-plugins) for more details.

## File format

Settings are written in the format `key: value`, one setting per line. Lines starting with `#` are comments and are ignored by the server:

```text
# This line is a comment
friendly_fire: false
```

Only change the value after the colon and leave the key name untouched.

## Edit a configuration file

> [!IMPORTANT]
> Always stop your server before editing a configuration file. This is the only way to make sure the server reliably applies your changes on the next start.

1. **Find out the game port**\
   Open the dashboard of your server and note the game port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the configuration file**\
   Navigate to the following directory – replace `<Port>` with your game port – and open the file you want to edit:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

5. **Make your changes**\
   Adjust the values you want to change using the `key: value` format and save the file.

6. **Start the server**\
   Start your server via the dashboard. The changes only take effect with this start.

> [!NOTE]
> There is no hot-reload – changes to the configuration files are only applied after a restart via the dashboard.
