---
slug: "tageszeit-aendern"
language: "de"
title: "So änderst Du die Tageszeit auf einem Hytale Server"
description: "Tageszeit auf einem Hytale Server ändern"
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
   time <wert> --world <weltname>
   ```

   Ersetze `<weltname>` durch den Namen Deiner Welt (z.B. `default`).

**Beispiele:**

```text
time dawn --world default
time noon --world default
time dusk --world default
time set 18 --world default
```

> [!NOTE]
> In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Angabe `--world`, sonst meldet der Server `Sender must be a player or provide the --world option!`. Im Spiel mit Admin-Rechten benötigst Du den `/` und kannst `--world` weglassen, dann gilt der Befehl für die Welt, in der Du Dich befindest (z.B. `/time noon`).

## Verfügbare Zeit-Werte

| Wert | Alternativ | Beschreibung |
| ---- | ---------- | ------------ |
| `dawn` | `morning`, `day` | Morgendämmerung |
| `midday` | `noon` | Mittag |
| `dusk` | `night` | Abenddämmerung |
| `midnight` | - | Mitternacht |
| `0-24` | `set 0-24` | Uhrzeit als Zahl (0 = Mitternacht, 12 = Mittag), z.B. `time 18` oder `time set 18` |

## Aktuelle Zeit anzeigen

Um die aktuelle Weltzeit anzuzeigen:

```text
time --world default
```

## Spielzeit pausieren

Mit `time pause --world default` hältst Du die Zeit an. Gibst Du den Befehl erneut ein, läuft sie weiter. Der Zustand wird in der Konfiguration der Welt gespeichert und bleibt auch nach einem Neustart erhalten. Weitere Möglichkeiten, z.B. eine feste Uhrzeit für Bau-Server, findest Du unter [Spielzeit pausieren](/tutorials/gameserver/hytale/pause-game-time).
