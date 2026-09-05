---
slug: "savegame-hinzufuegen"
language: "de"
title: "So lädst Du ein Savegame auf Deinen Soulmask Server hoch"
description: "Savegame auf einen Soulmask Server hochladen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 10
related: ["gameserver/soulmask/add-admin", "gameserver/soulmask/add-mods", "gameserver/soulmask/change-map", "gameserver/soulmask/change-max-players"]
---

Du kannst Dein lokales Savegame auf Deinen Server übertragen und dort weiterspielen.

## So findest Du Dein Savegame

Die Soulmask-Savegames findest Du auf Deinem PC unter:

```text
%LocalAppData%\WS\<SteamID>\2646460\AutoGames\<InviteCode>\
```

Ersetze `<SteamID>` durch Deine Steam-ID und `<InviteCode>` durch den Einladungscode Deiner Welt.

## So lädst Du das Savegame hoch

> [!WARNING]
> Stoppe Deinen Server bevor Du Dateien hochlädst, da diese sonst vom Server überschrieben werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Weltdaten hochladen**\
   Lade die Datei `world.db` in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /WS/Saved/Worlds/Dedicated/Level01_Main/
   ```

> [!WARNING]
> Bestehende Dateien im Zielverzeichnis werden überschrieben. Erstelle vorher ein Backup, falls Du die aktuelle Welt behalten möchtest.

4. **Spieleinstellungen hochladen (optional)**\
   Wenn Du Deine Spieleinstellungen übertragen möchtest, lade die Datei `GameXishu.json` in folgendes Verzeichnis hoch:

   ```text
   /WS/Saved/GameplaySettings/
   ```

5. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.

> [!TIP]
> Falls Deine Einstellungsdatei `GameXishu_2.json` heißt, benenne sie vor dem Hochladen in `GameXishu.json` um.
