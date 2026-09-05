---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Aloft Server hinzu"
description: "Savegame auf einen Aloft Server hochladen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["aloft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 7
related: ["gameserver/aloft/activate-private-islands", "gameserver/aloft/add-admin", "gameserver/aloft/change-number-of-islands", "gameserver/aloft/change-server-name"]
---

Du kannst Dein lokales Savegame auf Deinen Server übertragen und dort weiterspielen.

## So findest Du Dein Savegame

Die Aloft-Savegames findest Du auf Deinem PC unter:

```text
%LOCALAPPDATA%\Aloft\Saved\SaveGames\
```

## So lädst Du das Savegame hoch

> [!WARNING]
> Stoppe Deinen Server bevor Du Dateien hochlädst, da diese sonst vom Server überschrieben werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deine Savegame-Dateien in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /Aloft/Saved/SaveGames/
   ```

> [!WARNING]
> Bestehende Dateien im Zielverzeichnis werden überschrieben. Erstelle vorher ein Backup, falls Du die aktuelle Welt behalten möchtest.

4. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.
