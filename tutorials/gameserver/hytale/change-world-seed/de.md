---
slug: "world-seed-aendern"
language: "de"
title: "So änderst Du den World Seed auf einem Hytale Server"
description: "World Seed auf einem Hytale Server ändern"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "World Seed ändern"
sort: 24
related: ["gameserver/hytale/pause-game-time", "gameserver/hytale/set-password", "gameserver/hytale/set-spawn-point", "gameserver/hytale/upload-world"]
---

Der World Seed bestimmt, wie die Welt generiert wird. Mit demselben Seed wird immer dieselbe Welt erzeugt - gleiche Landschaften, Berge und Strukturen an den gleichen Koordinaten.

> [!NOTE]
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So zeigst Du den aktuellen Seed an

Gib folgenden Befehl in die Konsole Deiner Verwaltung ein:

```text
world config seed --world <weltname>
```

Die Konsole antwortet zum Beispiel mit `Seed: 1790539101340`. Die Welt, die der Server beim ersten Start anlegt, heißt `default`.

> [!NOTE]
> Einen Befehl zum Ändern des Seeds gibt es nicht. Den Seed änderst Du wie unten beschrieben in der Welt-Konfiguration.

## So änderst Du den World Seed

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Welt-Konfiguration öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und navigiere zum Ordner `/universe/worlds/<weltname>/` (für die Standardwelt `/universe/worlds/default/`). Öffne dort die Datei `config.json`.

3. **Seed anpassen**\
   Suche nach der Einstellung `Seed` und ändere den Wert:

   ```json
   "Seed": 123456789
   ```

   Du kannst eine beliebige ganze Zahl als Seed verwenden.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

4. **Welt-Daten löschen**\
   Lösche den `chunks` Ordner im gleichen Verzeichnis (`/universe/worlds/<weltname>/chunks/`), damit die Welt mit dem neuen Seed neu generiert wird.

5. **Server starten**\
   Starte Deinen Server, damit die Welt neu generiert wird.

> [!WARNING]
> Durch das Löschen des `chunks` Ordners gehen alle bisherigen Bauwerke und Fortschritte in dieser Welt verloren. Erstelle vorher ein [Backup](/tutorials/gameserver/hytale/create-backup)!
