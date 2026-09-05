---
slug: "savegame-hinzufuegen"
language: "de"
title: "So lädst Du ein Savegame auf Deinen Conan Exiles Server hoch"
description: "Savegame auf einen Conan Exiles Server hochladen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 9
related: ["gameserver/conan-exiles/add-admin", "gameserver/conan-exiles/add-mods", "gameserver/conan-exiles/change-map", "gameserver/conan-exiles/change-max-players"]
---

Du kannst Dein lokales Savegame auf Deinen Server übertragen und dort weiterspielen. Das Savegame besteht aus der Datei `game.db`.

> [!WARNING]
> Beim Hochladen wird das bestehende Savegame auf dem Server überschrieben. Erstelle vorher ein Backup, falls Du das aktuelle Savegame behalten möchtest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deine `game.db` Datei in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /ConanSandbox/Saved/game.db
   ```

4. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.

> [!TIP]
> Dein lokales Savegame findest Du auf Deinem PC im Conan Exiles Installationsverzeichnis unter `ConanSandbox/Saved/`.
