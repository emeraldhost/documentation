---
slug: "neue-welt-erstellen"
language: "de"
title: "So erstellst Du eine neue Welt auf einem Hytale Server"
description: "Neue Welt auf einem Hytale Server erstellen"
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
short_title: "Neue Welt erstellen"
sort: 10
related: ["gameserver/hytale/change-weather", "gameserver/hytale/create-backup", "gameserver/hytale/disable-npcs", "gameserver/hytale/download-world"]
---

Auf Deinem Hytale Server können mehrere Welten gleichzeitig laufen. Jede Welt liegt als eigener Ordner unter `/universe/worlds/` und hat dort ihre eigene `config.json`, also auch eigene Einstellungen wie PvP, Seed oder Spawn-Punkt. Die Welt, die der Server beim ersten Start anlegt, heißt `default`.

## Verfügbare Weltgeneratoren

Beim Erstellen legst Du mit `--gen` fest, wie die neue Welt generiert wird:

| Generator | Beschreibung |
| --------- | ------------ |
| `Hytale` | Standard-Weltgenerator mit normaler Landschaft. Er wird verwendet, wenn Du `--gen` weglässt. |
| `Flat` | Flache Welt aus einer einzigen Lage Grasboden |
| `Void` | Leere Welt ohne Blöcke |

> [!NOTE]
> Zusätzlich gibt es den Generator `HytaleGenerator` (World Gen V2). Er soll den bisherigen Generator künftig ablösen, befindet sich aber noch in Entwicklung. Für eine normale Spielwelt verwendest Du den Standard-Generator.

## So erstellst Du eine neue Welt per Befehl

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   world add <name> --gen <Generator>
   ```

   Ersetze `<name>` durch den Namen der neuen Welt und `<Generator>` durch einen Generator aus der Tabelle oben. Lässt Du `--gen <Generator>` weg, erstellt der Server eine normale Welt mit dem Standard-Generator.

3. **Rückmeldung prüfen**\
   Hat alles geklappt, erscheint in der Konsole zum Beispiel:

   ```text
   Created world "arena" with generator type "Flat" and storage type "default"!
   ```

   Gibt es bereits eine Welt oder einen Ordner mit diesem Namen, bricht der Befehl mit einer Fehlermeldung ab.

**Beispiele:**

```text
world add arena --gen Flat
world add lobby --gen Void
world add survival
```

> [!NOTE]
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/world add arena --gen Flat`).

> [!TIP]
> Die neue Welt bekommt einen eigenen Ordner unter `/universe/worlds/<name>/`. Der Server lädt beim Start automatisch alle Welten aus diesem Verzeichnis, die neue Welt bleibt also auch nach einem Neustart erhalten.

## So wechselst Du zur neuen Welt

Im Spiel wechselst Du mit Admin-Rechten über diesen Befehl in eine andere Welt:

```text
/tp world <name>
```

> [!NOTE]
> Dieser Befehl funktioniert nur im Spiel, nicht in der Konsole.

## So setzt Du die neue Welt als Standard

In der Standardwelt landen Spieler, wenn sie Deinem Server zum ersten Mal beitreten. Um die neue Welt als Standard zu setzen, gib in der Konsole ein:

```text
world setdefault <name>
```

Die Konsole bestätigt das mit „Set default world to ...“. Der Server übernimmt die Änderung automatisch in die `config.json`.

Alternativ kannst Du die Standardwelt bei gestopptem Server in der `config.json` im Hauptverzeichnis festlegen. Suche dort den Block `Defaults` und ändere den Wert von `World`, die übrigen Einträge lässt Du unverändert:

```json
"Defaults": {
  "World": "arena",
  "GameMode": "Adventure"
}
```

> [!TIP]
> Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.

> [!NOTE]
> Spieler, die schon einmal auf dem Server waren, betreten ihn weiterhin in der Welt, in der sie sich zuletzt aufgehalten haben. Die Standardwelt gilt für neue Spieler und für Spieler, deren letzte Welt nicht mehr geladen ist.

## So löschst Du eine Welt

Mit `world remove <name>` entlädst Du eine Welt nur. Ihr Ordner bleibt erhalten und der Server lädt sie beim nächsten Start wieder. Um eine Welt dauerhaft zu löschen, gehst Du so vor:

1. **Andere Standardwelt setzen**\
   Ist die Welt, die Du löschen möchtest, aktuell die Standardwelt, lege vorher eine andere Welt als Standard fest, zum Beispiel mit `world setdefault arena`. Sonst erstellt der Server beim nächsten Start eine neu generierte Welt mit dem alten Namen.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Welt-Ordner löschen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lösche den Ordner der Welt unter `/universe/worlds/<name>/`.

4. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Das Löschen des Ordners entfernt die Welt mit allen Bauwerken unwiderruflich. Erstelle vorher ein [Backup](/tutorials/gameserver/hytale/create-backup)!

## Alle Welt-Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `world list` | Alle geladenen Welten anzeigen |
| `world add <name> [--gen <Generator>]` | Neue Welt erstellen |
| `world load <name>` | Vorhandenen Welt-Ordner aus `/universe/worlds/` laden |
| `world remove <name>` | Welt entladen (der Ordner bleibt erhalten) |
| `world setdefault <name>` | Welt als Standard setzen |
| `world prune --confirm` | Alle Welten außer der Standardwelt, in denen sich gerade kein Spieler befindet, endgültig löschen |
| `/tp world <name>` | Im Spiel in eine andere Welt wechseln |

> [!IMPORTANT]
> `world prune --confirm` löscht die betroffenen Welten samt Ordner dauerhaft. Erstelle vorher ein [Backup](/tutorials/gameserver/hytale/create-backup)!

> [!TIP]
> Die Einstellungen einer einzelnen Welt änderst Du in ihrer `config.json` unter `/universe/worlds/<name>/` oder in der Konsole mit `world settings` bzw. `world config` und dem Zusatz `--world <name>`, zum Beispiel `world config pvp true --world arena`.
