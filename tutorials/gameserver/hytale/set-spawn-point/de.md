---
slug: "spawn-punkt-setzen"
language: "de"
title: "So setzt Du den Spawn-Punkt auf einem Hytale Server"
description: "Spawn-Punkt auf einem Hytale Server setzen"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spawn-Punkt setzen"
sort: 17
related: ["gameserver/hytale/pause-game-time", "gameserver/hytale/set-password", "gameserver/hytale/upload-world", "gameserver/hytale/change-world-seed"]
---

Der Spawn-Punkt bestimmt, wo neue Spieler oder Spieler nach dem Tod erscheinen. Jede Welt auf Deinem Server hat ihren eigenen Spawn-Punkt.

## Zum Spawn teleportieren

Im Spiel teleportierst Du Dich mit Admin-Rechten zum Spawn-Punkt der Welt, in der Du Dich gerade befindest:

```text
/spawn
```

Über die Konsole Deiner Verwaltung kannst Du einen Spieler, der gerade online ist, zum Spawn teleportieren:

```text
spawn <Spielername>
```

> [!NOTE]
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/spawn`).

## So setzt Du den Spawn-Punkt im Spiel

1. **Position einnehmen**\
   Stelle Dich im Spiel an die Stelle, an der der Spawn-Punkt liegen soll, und schau in die Richtung, in die Spieler nach dem Spawnen blicken sollen.

2. **Befehl eingeben**\
   Gib mit Admin-Rechten folgenden Befehl ein:

   ```text
   /spawn set
   ```

   Der Spawn-Punkt der aktuellen Welt wird auf Deine Position gesetzt. Zur Bestätigung erscheint die Meldung „Set spawn to: ...“.

## So setzt Du den Spawn-Punkt über die Konsole

In der Konsole gibst Du die Welt und die Koordinaten mit an:

```text
spawn set --world <weltname> --position <x> <y> <z>
```

Beispiel für die Standardwelt `default`:

```text
spawn set --world default --position 10 120 10
```

> [!TIP]
> Der Server speichert den neuen Spawn-Punkt sofort in der `config.json` der Welt unter `/universe/worlds/<weltname>/`. Ein Neustart ist nicht nötig.

## So setzt Du den Spawn-Punkt zurück

Um den ursprünglichen Spawn-Punkt wiederherzustellen, den die Welt bei ihrer Erstellung hatte, gib im Spiel ein:

```text
/spawn set default
```

In der Konsole gibst Du zusätzlich die Welt an:

```text
spawn set default --world <weltname>
```

## Respawn-Verhalten konfigurieren

Wo Spieler nach dem Tod wieder erscheinen, kannst Du in der Welt-Konfiguration anpassen:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Welt-Konfiguration öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `/universe/worlds/<weltname>/config.json`.

3. **Death Block einfügen**\
   Standardmäßig enthält die Datei keinen `Death` Block. Suche nach der Zeile `"GameplayConfig": "Default",` und füge darunter den `Death` Block hinzu. Da danach weitere Einstellungen folgen, muss hinter der letzten schließenden Klammer `}` des `Death` Blocks ein Komma stehen:

   ```json
   "Death": {
     "RespawnController": {
       "Type": "WorldSpawnPoint"
     },
     "ItemsLossMode": "Configured",
     "ItemsAmountLossPercentage": 50.0,
     "ItemsDurabilityLossPercentage": 10.0
   }
   ```

4. **Server starten**\
   Starte Deinen Server.

**Verfügbare Respawn-Typen:**

- `HomeOrSpawnPoint` - Respawn am eigenen Respawn-Punkt des Spielers, sonst am Spawn-Punkt der Welt (Standard)
- `WorldSpawnPoint` - Respawn immer am Spawn-Punkt der Welt

> [!WARNING]
> Ein `Death` Block in der Welt-Konfiguration ersetzt die gesamten Tod-Einstellungen dieser Welt. Fehlen darin die Angaben zum Item-Verlust, verlieren Spieler beim Tod keine Items mehr. Die Werte im Beispiel entsprechen dem Standard von Hytale. Mehr dazu erfährst Du unter [Item-Verlust beim Tod](/tutorials/gameserver/hytale/item-loss-on-death).

> [!TIP]
> Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

> [!NOTE]
> Wie Du weitere Welten mit eigenem Spawn-Punkt erstellst, erfährst Du unter [Neue Welt erstellen](/tutorials/gameserver/hytale/create-new-world).
