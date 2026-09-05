---
slug: "custom-welt-erstellen"
language: "de"
title: "So erstellst Du eine custom Welt auf Deinem RuneScape: Dragonwilds Server"
description: "Custom Welt auf einem RuneScape Dragonwilds Server erstellen"
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
short_title: "Custom Welt erstellen"
sort: 3
related: ["gameserver/runescape-dragonwilds/add-savegame", "gameserver/runescape-dragonwilds/create-backup", "gameserver/runescape-dragonwilds/download-savegame", "gameserver/runescape-dragonwilds/set-admin-password"]
---

Standardmäßig erstellt der Server automatisch eine Welt mit Standard-Einstellungen. Du kannst stattdessen eine Welt mit eigenen Einstellungen erstellen und auf den Server hochladen.

## Custom Welt erstellen

1. **Spiel starten**\
   Starte RuneScape: Dragonwilds lokal auf Deinem PC.

2. **Neue Welt erstellen**\
   Erstelle eine neue Welt und wähle die Option **Custom**. Im Tab **Advanced** kannst Du alle Einstellungen nach Deinen Wünschen anpassen.

3. **Welt betreten**\
   Betrete die Welt kurz, damit die Speicherdatei generiert wird. Verlasse die Welt anschließend wieder.

4. **Savegame finden**\
   Die erstellte `.sav`-Datei findest Du unter:

   ```text
   %LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames
   ```

## Welt auf den Server hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade die `.sav`-Datei in folgendes Verzeichnis hoch:

   ```text
   /RSDragonwilds/Saved/SaveGames/
   ```

4. **Welt-Namen eintragen**\
   Öffne die **Einstellungen** in der Verwaltung und trage den Dateinamen Deines Savegames (ohne `.sav`) im Feld **SaveGame** ein.

5. **Server starten**\
   Starte Deinen Server. Die custom Welt wird nun geladen.

> [!NOTE]
> Der Server lädt automatisch die neueste `.sav`-Datei im SaveGames-Ordner. Falls bereits eine Welt existiert, wird diese durch die hochgeladene Datei ersetzt.
