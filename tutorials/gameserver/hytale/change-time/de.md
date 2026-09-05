---
slug: "tageszeit-aendern"
language: "de"
title: "So änderst Du die Tageszeit auf einem Hytale Server"
description: "Tageszeit auf einem Hytale Server ändern"
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
short_title: "Tageszeit ändern"
sort: 20
related: ["gameserver/hytale/change-motd", "gameserver/hytale/change-server-name", "gameserver/hytale/change-weather", "gameserver/hytale/create-backup"]
---

Du kannst die Tageszeit auf Deinem Server per Befehl ändern oder komplett pausieren.

## So änderst Du die Tageszeit per Befehl

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   time <wert>
   ```

**Beispiele:**

```text
time morning
time noon
time evening
time 12
```

> [!TIP]
> **Hinweis**
>
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/time noon`).

## Verfügbare Zeit-Werte

| Wert | Beschreibung |
| ---- | ------------ |
| `morning` | Morgen |
| `noon` | Mittag |
| `evening` | Abend |
| `0-24` | Numerischer Wert (0 = Mitternacht, 12 = Mittag) |

## Aktuelle Zeit anzeigen

Um die aktuelle Weltzeit anzuzeigen:

```text
time
```

## Spielzeit pausieren

Um die Zeit komplett anzuhalten (z.B. für Bau-Server), siehe [Spielzeit pausieren](/tutorials/gameserver/hytale/pause-game-time).
