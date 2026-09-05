---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Windrose Server hinzu"
description: "Savegame auf einem Windrose Server hinzufügen"
tags: []
date: "2026-04-14"
visibility: "public"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 8
related: ["gameserver/windrose/change-max-players", "gameserver/windrose/change-server-name", "gameserver/windrose/change-world-settings", "gameserver/windrose/create-backup"]
---

Du kannst einen lokalen Spielstand auf Deinen Server übertragen, um mit einer bestehenden Welt weiterzuspielen.

## Lokales Savegame finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %LOCALAPPDATA%\R5\Saved\SaveProfiles
   ```

2. **Zum Welt-Ordner navigieren**\
   Öffne Deinen SteamID-Ordner und navigiere dort zu:

   ```text
   RocksDB\<GameVersion>\Worlds\
   ```

3. **Welt-Ordner identifizieren**\
   Dort findest Du einen Ordner mit einer alphanumerischen Zeichenkette als Namen – der `<WorldID>`. Diese entspricht der Island ID Deiner Welt.

## Savegame hochladen und anwenden

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt-Ordner hochladen**\
   Lade den kompletten `<WorldID>`-Ordner in folgendes Verzeichnis hoch:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/
   ```

   Der Platzhalter `<GameVersion>` muss auf dem Server genauso heißen wie lokal.

4. **Island ID setzen**\
   Damit der Server die hochgeladene Welt lädt, setze die [Island ID](/tutorials/gameserver/windrose/set-island-id) auf den Namen des `<WorldID>`-Ordners.

5. **Server starten**\
   Starte Deinen Server.

> [!WARNING]
> Stelle sicher, dass die `<GameVersion>` Deines Savegames mit der Serverversion übereinstimmt. Saves älterer Versionen können inkompatibel sein.

> [!TIP]
> Erstelle vor dem Hochladen ein Backup Deines bisherigen Server-Savegames, falls Du später zurückwechseln möchtest.
