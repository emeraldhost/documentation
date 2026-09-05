---
slug: "neue-welt-erstellen"
language: "de"
title: "So erstellst Du eine neue Welt auf einem Hytale Server"
description: "Neue Welt auf einem Hytale Server erstellen"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
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

Auf Deinem Hytale Server kannst Du mehrere Welten erstellen. Jede Welt läuft unabhängig und kann eigene Einstellungen haben.

## Verfügbare Welt-Typen

| Typ | Beschreibung |
| --- | ------------ |
| `normal` | Standard-Welt mit natürlicher Landschaft |
| `flat` | Flache Welt ohne Terrain |
| `void` | Leere Welt ohne Blöcke |

## So erstellst Du eine neue Welt per Befehl

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   world create <name> [typ]
   ```

   Ersetze `<name>` durch den Namen der neuen Welt und `[typ]` durch den gewünschten Welt-Typ.

**Beispiele:**

```text
world create arena flat
world create survival normal
world create creative void
```

> [!TIP]
> **Hinweis**
>
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/world create arena flat`).

## So wechselst Du zur neuen Welt

Nach dem Erstellen kannst Du zur Welt wechseln:

```text
world tp <name>
```

## So setzt Du die neue Welt als Standard

Damit Spieler beim Beitreten automatisch in der neuen Welt spawnen:

```text
world setdefault <name>
```

Oder in der `config.json` im Hauptverzeichnis:

```json
"Defaults": {
  "World": "arena",
  "GameMode": "Adventure"
}
```

> [!TIP]
> Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.

## Alle Welt-Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `world list` | Alle Welten anzeigen |
| `world create <name> [typ]` | Neue Welt erstellen |
| `world load <name>` | Welt laden |
| `world unload <name>` | Welt entladen |
| `world delete <name>` | Welt löschen (unwiderruflich!) |
| `world tp <name>` | Zur Welt teleportieren |
| `world setdefault <name>` | Welt als Standard setzen |
| `world config <setting> <wert>` | Welt-Einstellung ändern |

> [!WARNING]
> `world delete` löscht die Welt dauerhaft. Erstelle vorher ein Backup!
