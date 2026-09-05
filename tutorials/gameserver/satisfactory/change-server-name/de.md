---
slug: "server-name-aendern"
language: "de"
title: "So änderst Du den Server Namen Deines Satisfactory Servers"
description: "Server Namen auf einem Satisfactory Server ändern"
tags: []
date: "2026-04-12"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server Name ändern"
sort: 8
related: ["gameserver/satisfactory/add-savegame", "gameserver/satisfactory/change-max-players", "gameserver/satisfactory/create-backup", "gameserver/satisfactory/download-savegame"]
---

Der Server Name wird in der Datei `Game.ini` festgelegt.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne die Datei `Game.ini` unter:

   ```text
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. **Server Name ändern**\
   Trage folgenden Inhalt ein und passe den Namen an:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Dein Server Name")
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Falls die Datei bereits einen `mServerGameState`-Eintrag enthält, ändere dort nur den Wert von `ServerSessionName`. Füge keinen zweiten Eintrag hinzu.
