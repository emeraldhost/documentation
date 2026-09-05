---
slug: "wetter-aendern"
language: "de"
title: "So änderst Du das Wetter auf einem Hytale Server"
description: "Wetter auf einem Hytale Server ändern"
tags: []
date: "2026-01-15"
visibility: "public"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Wetter ändern"
sort: 23
related: ["gameserver/hytale/change-server-name", "gameserver/hytale/change-time", "gameserver/hytale/create-backup", "gameserver/hytale/create-new-world"]
---

Du kannst das Wetter auf Deinem Server per Befehl ändern. Das Wetter wird pro Zone und mit Intensität eingestellt.

## So änderst Du das Wetter per Befehl

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   weather set <Zone_Wetter_Intensität>
   ```

**Beispiele:**

```text
weather set Zone1_Clear_Light
weather set Zone1_Cloudy_Medium
weather set Zone1_Rainy_Heavy
```

> [!TIP]
> **Hinweis**
>
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/weather set Zone1_Clear_Light`).

## Wetter-Format

Das Wetter wird im Format `Zone_Wetter_Intensität` angegeben:

**Wetter-Typen:**

- `Clear` - Klar/Sonnig
- `Cloudy` - Bewölkt
- `Rainy` - Regnerisch
- `Stormy` - Stürmisch

**Intensitäten:**

- `Light` - Leicht
- `Medium` - Mittel
- `Heavy` - Stark

## Aktuelles Wetter anzeigen

Um das aktuelle Wetter anzuzeigen:

```text
weather get
```

## Wetter zurücksetzen

Um das Wetter auf den Standardwert zurückzusetzen:

```text
weather reset
```

## Alle Wetter-Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `weather set <wetter> [--world=?]` | Wetter setzen |
| `weather get [--world=?]` | Aktuelles Wetter anzeigen |
| `weather reset [--world=?]` | Wetter zurücksetzen |

> [!TIP]
> **Hinweis**
>
> Mit `--world=<name>` kannst Du das Wetter für eine bestimmte Welt ändern. Ohne diese Option wird die aktuelle Welt verwendet.
