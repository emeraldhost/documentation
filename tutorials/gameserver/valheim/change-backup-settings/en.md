---
slug: "change-backup-settings"
language: "en"
title: "How to Change the Backup Settings on Your Valheim Server"
description: "Change backup settings on a Valheim server"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Backup Settings"
sort: 7
related: ["gameserver/valheim/add-savegame", "gameserver/valheim/change-branch", "gameserver/valheim/change-server-name", "gameserver/valheim/create-backup"]
---

You can configure how often and how many backups the server creates.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Adjust backup settings**\
   Adjust the following fields:

   | Field | Description | Default |
   |-------|-------------|---------|
   | **Backup Interval** | How often the server saves the world (in seconds). Despite its name, this is not the time between backups. | `1800` (30 minutes) |
   | **Backup Count** | Number of automatic backups to keep. The first backup follows the interval from **Backup Shorttime**, all further ones follow the interval from **Backup Longtime**. | `4` |
   | **Backup Shorttime** | Interval between the first automatic backups (in seconds) | `7200` (2 hours) |
   | **Backup Longtime** | Interval between the subsequent automatic backups (in seconds) | `43200` (12 hours) |

4. **Restart the server**\
   Save the settings and restart your server.

> [!NOTE]
> The server stores the automatic backups as separate folders in the directory `/.config/unity3d/IronGate/Valheim/worlds_local/`, right next to your world. To learn how to restore one of them, see [Restore an automatic backup](/tutorials/gameserver/valheim/restore-automatic-backup).
