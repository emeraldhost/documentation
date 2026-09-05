---
slug: "assign-ranks"
language: "en"
title: "How to Assign Ranks on Your SCP: Secret Laboratory Server"
description: "Assign ranks on a SCP: Secret Laboratory server"
tags: []
date: "2026-04-15"
visibility: "public"
updated: "2026-08-24"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Assign Ranks"
sort: 2
related: ["gameserver/scp-secret-laboratory/adjust-gameplay-settings", "gameserver/scp-secret-laboratory/configure-friendly-fire", "gameserver/scp-secret-laboratory/create-backup", "gameserver/scp-secret-laboratory/edit-config-files"]
---

Using the `config_remoteadmin.txt` file you can grant players admin, moderator or owner rights on your server.

> [!WARNING]
> The path to the configuration file contains the Game Port of your server: `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt`. Replace `<Port>` with the actual port of your server. You can find the port in the dashboard under **Overview**.

## Assign a rank

1. **Find out the Game Port**\
   Open the dashboard of your server and note the Game Port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the configuration file**\
   Open the following file – replace `<Port>` with your Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt
   ```

5. **Add an entry to the Members section**\
   Find the `Members:` section and add your player using the following format:

   ```text
   Members:
   - '76561198012345678@steam: owner'
   ```

   Replace the SteamID64 with your player's ID and set the desired rank (e.g. `owner`, `admin`, `moderator`). You can find your [SteamID64](/tutorials/gameserver/steamid64-find-out) using the linked guide.

6. **Start the server**\
   Save the file and start your server via the dashboard.

## Default roles

| Role | Description |
|------|-------------|
| `owner` | Full access to all features |
| `admin` | Extensive admin rights |
| `moderator` | Limited moderation rights |

> [!WARNING]
> The file `config_remoteadmin.txt` is picky about formatting. Make sure the indentation, quotes and dashes of each entry are correct, otherwise the server will fail to load the file properly.

> [!NOTE]
> Changes to the rank configuration only take effect after a server restart – there is no hot-reload.
