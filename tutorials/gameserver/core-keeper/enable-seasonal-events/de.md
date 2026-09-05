---
slug: "seasonal-events-aktivieren"
language: "de"
title: "So aktivierst Du Seasonal Events auf Deinem Core Keeper Server"
description: "Seasonal Events auf einem Core Keeper Server aktivieren"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Seasonal Events aktivieren"
sort: 8
related: ["gameserver/core-keeper/create-backup", "gameserver/core-keeper/download-savegame", "gameserver/core-keeper/join-server", "gameserver/core-keeper/set-server-password"]
---

Standardmäßig folgt Core Keeper dem echten Kalender für saisonale Events. Du kannst ein bestimmtes Event aber auch manuell erzwingen.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Event auswählen**\
   Trage bei den **Zusätzlichen Startparametern** folgenden Wert ein:

   ```text
   -season EVENTNAME
   ```

   | Event | Wert |
   |-------|------|
   | Kein Override (Standard) | `None` |
   | Ostern | `Easter` |
   | Halloween | `Halloween` |
   | Weihnachten | `Christmas` |
   | Valentinstag | `Valentine` |
   | Jubiläum | `Anniversary` |
   | Kirschblüte | `CherryBlossom` |
   | Mondneujahr | `LunarNewYear` |

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > -season Halloween
   > ```

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!NOTE]
> Um zum normalen Kalender zurückzukehren, entferne den `-season`-Parameter oder setze ihn auf `None`.
