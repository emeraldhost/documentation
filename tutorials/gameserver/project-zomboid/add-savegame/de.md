---
slug: "savegame-hinzufuegen"
language: "de"
title: "So lädst Du ein Savegame auf Deinen Project Zomboid Server hoch"
description: "Savegame auf einen Project Zomboid Server hochladen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 6
related: ["gameserver/project-zomboid/add-admin", "gameserver/project-zomboid/add-mods", "gameserver/project-zomboid/change-max-players", "gameserver/project-zomboid/change-server-description"]
---

Du kannst Dein lokales Savegame auf Deinen Server übertragen und dort weiterspielen.

## So findest Du Dein Savegame

Die Project Zomboid Multiplayer-Savegames findest Du auf Deinem PC unter:

```text
%USERPROFILE%\Zomboid\Saves\Multiplayer\
```

## So lädst Du das Savegame hoch

> [!WARNING]
> Stoppe Deinen Server bevor Du Dateien hochlädst. Ein vorhandenes Savegame auf dem Server wird dabei überschrieben.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deinen Savegame-Ordner in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /Zomboid/Saves/Multiplayer/
   ```

4. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.

> [!TIP]
> Erstelle vor dem Hochladen ein Backup des bestehenden Savegames auf dem Server, falls Du es später wiederherstellen möchtest.
