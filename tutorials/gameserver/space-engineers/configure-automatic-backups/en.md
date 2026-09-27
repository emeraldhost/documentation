---
slug: "configure-automatic-backups"
language: "en"
title: "How to Set Up Automatic Backups on Your Space Engineers Server"
description: "Set up automatic backups on a Space Engineers server"
tags: []
date: "2026-07-08"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Configure Automatic Backups"
sort: 7
related: ["gameserver/space-engineers/change-server-description", "gameserver/space-engineers/change-server-name", "gameserver/space-engineers/download-world", "gameserver/space-engineers/enable-experimental-mode"]
---

Your server automatically saves the world at regular intervals and creates a backup each time. Here is how to set how often this happens.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Set the interval**\
   Enter the desired interval in minutes in the **Automatic Backup Interval** field – this is how often the server saves the world (default: `5`). After every successful save, the server creates a backup in the `/config/Saves/World/Backup/` folder.

4. **Restart the server**\
   Save the settings and restart your server for the changes to take effect.

> [!WARNING]
> **Caution**
>
> With the value `0`, the server no longer saves the world automatically and therefore no longer creates automatic backups either. If the server crashes, everything that happened since the last save is lost.

> [!NOTE]
> The **Automatic Backup** option does **not** turn off automatic saving – even with `false`, the server keeps saving at the set interval. It sets the `EnableSaving` value, which Keen calls "Enable Saving from Menu". This value only controls whether saving via the menu is possible in a self-hosted game. Leave the option at its default value `true`.

To learn how to restore your world from one of these backups and how many backups your server keeps, see [Restore an Automatic Backup](/tutorials/gameserver/space-engineers/restore-automatic-backup).

> [!TIP]
> You can also create a manual backup at any time via the [backup function](/tutorials/gameserver/create-backup) in the dashboard.
