---
slug: "map-aendern"
language: "de"
title: "So änderst Du die Map auf Deinem DayZ Server"
description: "Map auf einem DayZ Server ändern"
tags: []
date: "2026-04-08"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Map ändern"
sort: 5
related: ["gameserver/dayz/add-savegame", "gameserver/dayz/adjust-loot", "gameserver/dayz/change-time", "gameserver/dayz/configure-pvp"]
---

Du kannst zwischen den offiziellen Maps **Chernarus** und **Livonia** wechseln.

> [!WARNING]
> Für die Livonia-Map benötigst Du das **Livonia DLC** in DayZ. Spieler ohne das DLC können dem Server nicht beitreten.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serverDZ.cfg öffnen**\
   Öffne die Datei `serverDZ.cfg` im Hauptverzeichnis Deines Servers.

4. **Map festlegen**\
   Suche den Abschnitt `class Missions` und ändere den `template`-Wert:

   ```text
   class Missions
   {
       class Mission1
       {
           template="dayzOffline.chernarusplus";
       };
   };
   ```

   | Wert | Map |
   |------|-----|
   | `dayzOffline.chernarusplus` | Chernarus (Standard) |
   | `dayzOffline.enoch` | Livonia (DLC) |

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Beim ersten Start mit einer neuen Map wird automatisch eine neue Welt generiert. Dein bisheriger Spielfortschritt der alten Map bleibt erhalten.
