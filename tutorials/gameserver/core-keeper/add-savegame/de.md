---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Core Keeper Server hinzu"
description: "Savegame auf einen Core Keeper Server hochladen"
tags: []
date: "2026-03-22"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 7
related: ["gameserver/core-keeper/add-admin", "gameserver/core-keeper/add-mods", "gameserver/core-keeper/ban-players", "gameserver/core-keeper/change-content-bundle"]
---

Du kannst eine bestehende Singleplayer-Welt auf Deinen Server hochladen.

## Savegame finden

Dein lokales Savegame findest Du auf Deinem PC unter:

```text
%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\<SteamID>\worlds
```

> [!TIP]
> Drücke `Windows + R`, gib `%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\` ein und navigiere in den Ordner mit Deiner SteamID, dann in `worlds`.

Die Welt-Datei heißt z.B. `0.world.gzip`. Die Zahl vor `.world.gzip` ist der **World Index**.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt hochladen**\
   Lade die `.world.gzip`-Datei in folgendes Verzeichnis hoch:

   ```text
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/worlds/
   ```

4. **World Index anpassen**\
   Stelle sicher, dass der **World Index** in den Server-Einstellungen mit der Zahl Deiner Welt-Datei übereinstimmt.

   > [!TIP]
   > **Beispiel**
   >
   > Wenn Deine Datei `0.world.gzip` heißt, muss der World Index `0` sein. Bei `3.world.gzip` muss er `3` sein.

5. **Server starten**\
   Starte Deinen Server.

> [!WARNING]
> Durch das Hochladen wird der bestehende Spielstand auf dem Server überschrieben.
