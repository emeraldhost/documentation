---
slug: "disable-end"
language: "en"
title: "How to Disable the End on a Minecraft Java Edition Server"
description: "Disable the End on a Minecraft Java Edition server"
tags: []
date: "2026-05-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Disable End"
sort: 14
related: ["gameserver/minecraft/create-backup", "gameserver/minecraft/delete-world", "gameserver/minecraft/disable-nether", "gameserver/minecraft/disable-locator-bar"]
---

When the End is disabled, end portals stop working and players can no longer enter the End dimension. Players who are already in the End are moved back to the overworld on their next login.

> [!WARNING]
> This setting is only available on **Bukkit-based servers** (Paper, Spigot, Purpur, Folia). On **Vanilla, Forge, Fabric and NeoForge**, the End cannot be disabled via a server setting – those platforms require a datapack or mod.

## Disable the End (Paper / Spigot / Purpur / Folia)

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open bukkit.yml**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file `bukkit.yml`.

3. **Find the entry**\
   Inside the `settings` section, look for the following entry:

   ```yaml
   allow-end: true
   ```

4. **Change the value**\
   Change the value to `false`:

   ```yaml
   allow-end: false
   ```

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> To re-enable the End, set the value back to `true` and restart the server. Existing End worlds (`world_the_end`) are preserved.
