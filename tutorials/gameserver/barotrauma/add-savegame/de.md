---
slug: "savegame-hinzufuegen"
language: "de"
title: "So lädst Du ein Savegame auf Deinen Barotrauma Server hoch"
description: "Savegame auf einen Barotrauma Server hochladen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 8
related: ["gameserver/barotrauma/add-custom-ranks", "gameserver/barotrauma/add-mods", "gameserver/barotrauma/change-game-mode", "gameserver/barotrauma/change-max-players"]
---

Du kannst Dein lokales Savegame auf Deinen Server übertragen und dort weiterspielen.

## So findest Du Dein Savegame

Die Barotrauma-Savegames findest Du auf Deinem PC unter:

```text
%LOCALAPPDATA%\Daedalic Entertainment GmbH\Barotrauma\Multiplayer\
```

Die Savegames sind `.save`-Dateien in diesem Ordner.

## So lädst Du das Savegame hoch

> [!WARNING]
> Stoppe Deinen Server bevor Du Dateien hochlädst, da diese sonst vom Server überschrieben werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deine `.save`-Datei in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /config/Multiplayer/
   ```

4. **Server starten**\
   Starte Deinen Server und wähle das hochgeladene Savegame aus.
