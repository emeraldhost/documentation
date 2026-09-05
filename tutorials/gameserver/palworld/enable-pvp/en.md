---
slug: "enable-pvp"
language: "en"
title: "How to Enable PvP on Your Palworld Server"
description: "Enable PvP on a Palworld server"
tags: []
date: "2026-02-28"
visibility: "public"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable PvP"
sort: 25
related: ["gameserver/palworld/enable-fast-travel", "gameserver/palworld/enable-hardcore-mode", "gameserver/palworld/enable-raids", "gameserver/palworld/add-mods"]
---

You can enable PvP mode so that players can fight each other.

> [!WARNING]
> Make sure your server is stopped before editing the config file. Changes to the `PalWorldSettings.ini` will otherwise be overwritten by the game.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config file**\
   Open the file `PalWorldSettings.ini` at:

   ```text
   /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
   ```

4. **Enable PvP**\
   Find the parameter `bIsPvP` and set it to `True`:

   ```text
   bIsPvP=True
   ```

5. **Start the server**\
   Start your server.

## Additional PvP settings

| Parameter | Default | Description |
|-----------|---------|-------------|
| `bEnablePlayerToPlayerDamage` | `False` | Players can damage each other |
| `bEnableFriendlyFire` | `False` | Guild members can damage each other |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `False` | Other guilds can pick up death drops |
