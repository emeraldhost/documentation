---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem RuneScape: Dragonwilds Server hinzu"
description: "Savegame auf einen RuneScape Dragonwilds Server hochladen"
tags: []
date: "2026-04-01"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 6
related: ["gameserver/runescape-dragonwilds/create-backup", "gameserver/runescape-dragonwilds/create-custom-world", "gameserver/runescape-dragonwilds/download-savegame", "gameserver/runescape-dragonwilds/set-admin-password"]
---

Du kannst eine bestehende Singleplayer-Welt auf Deinen Server hochladen.

## Savegame finden

Dein lokales Savegame findest Du auf Deinem PC unter:

```text
%LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames
```

> [!TIP]
> Drücke `Windows + R` und gib `%LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames` ein, um den Ordner direkt zu öffnen.

Die Welt-Datei hat die Endung `.sav`.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade die `.sav`-Datei in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /RSDragonwilds/Saved/SaveGames/
   ```

4. **Welt-Namen eintragen**\
   Öffne die **Einstellungen** in der Verwaltung und trage den Dateinamen Deines Savegames (ohne `.sav`) im Feld **SaveGame** ein.

5. **Server starten**\
   Starte Deinen Server.

> [!WARNING]
> Durch das Hochladen wird der bestehende Spielstand auf dem Server überschrieben.
