---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem DayZ Server hinzu"
description: "Savegame auf einen DayZ Server hochladen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 9
related: ["gameserver/dayz/add-admin", "gameserver/dayz/add-mods", "gameserver/dayz/adjust-loot", "gameserver/dayz/change-map"]
---

Du kannst ein Savegame von einem anderen DayZ-Server auf Deinen Server übertragen. Das Savegame befindet sich im `storage_1` Ordner.

> [!NOTE]
> DayZ-Spielstände werden ausschließlich serverseitig gespeichert. Diese Anleitung beschreibt die Übertragung von Savegames zwischen DayZ-Servern, nicht aus einem Singleplayer-Spiel.

> [!WARNING]
> Beim Hochladen wird das bestehende Savegame auf dem Server überschrieben. Erstelle vorher ein Backup, falls Du das aktuelle Savegame behalten möchtest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deinen `storage_1` Ordner in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /mpmissions/dayzOffline.chernarusplus/storage_1/
   ```

   > [!TIP]
   > Wenn Du die Livonia-Map verwendest, lautet der Pfad stattdessen:
   >
   > ```text
   > /mpmissions/dayzOffline.enoch/storage_1/
   > ```

4. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.

> [!TIP]
> Um das Savegame von einem anderen Server zu erhalten, lade den `storage_1` Ordner per SFTP von dem Quellserver herunter.
