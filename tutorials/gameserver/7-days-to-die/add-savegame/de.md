---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem 7 Days to Die Server hinzu"
description: "Savegame auf einen 7 Days to Die Server hochladen"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 8
related: ["gameserver/7-days-to-die/add-admin", "gameserver/7-days-to-die/add-mods", "gameserver/7-days-to-die/change-map", "gameserver/7-days-to-die/create-backup"]
---

Du kannst eine bestehende Singleplayer-Welt auf Deinen Server hochladen.

## Savegame finden

Dein lokales Savegame findest Du auf Deinem PC unter:

```text
%AppData%/7DaysToDie/
```

Dort befinden sich zwei wichtige Ordner:

- `GeneratedWorlds/` – enthält die Weltdaten (Terrain, Gebäude)
- `Saves/` – enthält die Spielstände (Spielerfortschritt, Platzierungen)

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Weltdaten hochladen**\
   Lade den Ordner Deiner Welt aus `GeneratedWorlds/` in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /.local/share/7DaysToDie/GeneratedWorlds/
   ```

4. **Spielstand hochladen**\
   Lade den Ordner Deines Spielstands aus `Saves/` in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /Saves/
   ```

5. **serverconfig.xml anpassen**\
   Öffne die Datei `serverconfig.xml` und passe die folgenden Werte an:

   ```xml
   <property name="GameWorld" value="DeinWeltName"/>
   <property name="GameName" value="DeinSpielstandName"/>
   ```

   Ersetze `DeinWeltName` mit dem Namen Deines Welt-Ordners und `DeinSpielstandName` mit dem Namen Deines Spielstand-Ordners.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Die Ordnernamen müssen exakt mit den Werten in der `serverconfig.xml` übereinstimmen.
