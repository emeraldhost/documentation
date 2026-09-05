---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Icarus Server hinzu"
description: "Savegame auf einem Icarus Server hinzufügen"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["icarus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/icarus/change-max-players", "gameserver/icarus/change-server-name", "gameserver/icarus/create-backup", "gameserver/icarus/download-savegame"]
---

Du kannst einen lokalen Prospect auf Deinen Server übertragen, um mit einem bestehenden Spielstand weiterzuspielen.

## Lokales Savegame finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %LOCALAPPDATA%\ICARUS\Saved\PlayerData
   ```

2. **Zum Prospects-Ordner navigieren**\
   Öffne Deinen SteamID64-Ordner und navigiere dort in den Ordner `Prospects`.

3. **Prospect-Datei identifizieren**\
   Dein Spielstand ist eine Datei im Format `<DeinProspect>.json`. Notiere Dir den genauen Dateinamen.

## Savegame hochladen und anwenden

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Prospect hochladen**\
   Lade die Datei `<DeinProspect>.json` in folgendes Verzeichnis hoch:

   ```text
   /ICARUS/Saved/PlayerData/DedicatedServer/Prospects/
   ```

4. **ServerSettings.ini anpassen**\
   Öffne folgende Datei:

   ```text
   /ICARUS/Saved/Config/WindowsServer/ServerSettings.ini
   ```

   Passe den Wert von `LoadProspect` an den Dateinamen Deines Prospects an (ohne `.json`):

   ```text
   LoadProspect=<DeinProspect>
   ```

5. **Server starten**\
   Starte Deinen Server über die Verwaltung.

> [!WARNING]
> Starte den Server einmal und erstelle über den Client einen neuen Prospect, bevor Du ein eigenes Savegame zum ersten Mal hochlädst. Erst dann wird die nötige Verzeichnisstruktur auf dem Server erzeugt.

> [!WARNING]
> Stelle sicher, dass die Version Deines Savegames mit der Serverversion übereinstimmt. Saves älterer Versionen können zu Fehlern oder inkompatiblen Daten führen.
