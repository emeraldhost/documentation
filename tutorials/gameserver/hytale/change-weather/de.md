---
slug: "wetter-aendern"
language: "de"
title: "So änderst Du das Wetter auf einem Hytale Server"
description: "Wetter auf einem Hytale Server ändern"
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
short_title: "Wetter ändern"
sort: 23
related: ["gameserver/hytale/change-server-name", "gameserver/hytale/change-time", "gameserver/hytale/create-backup", "gameserver/hytale/create-new-world"]
---

Du kannst das Wetter auf Deinem Server per Befehl festlegen. Das festgelegte Wetter wird in der Konfiguration der Welt gespeichert und bleibt aktiv, bis Du es zurücksetzt.

## So änderst Du das Wetter per Befehl

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   weather set <wetter-id> --world <weltname>
   ```

   Ersetze `<weltname>` durch den Namen Deiner Welt (z.B. `default`).

**Beispiele:**

```text
weather set Zone1_Sunny --world default
weather set Zone1_Cloudy_Medium --world default
weather set Zone1_Storm --world default
```

> [!NOTE]
> In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Angabe `--world`, sonst meldet der Server `Sender must be a player or provide the --world option!`. Im Spiel mit Admin-Rechten benötigst Du den `/` und kannst `--world` weglassen, dann gilt der Befehl für die Welt, in der Du Dich befindest (z.B. `/weather set Zone1_Sunny`).

## Wetter-IDs

Die Wetter-ID ist der Name eines Wetters aus den Spieldateien. Die meisten IDs beginnen mit der Zone, für die das Wetter gedacht ist. Eine Auswahl:

| Wetter-ID | Beschreibung |
| --------- | ------------ |
| `Zone1_Sunny` | Sonnig |
| `Zone1_Cloudy_Medium` | Bewölkt |
| `Zone1_Foggy_Light` | Leichter Nebel |
| `Zone1_Rain_Light` | Leichter Regen |
| `Zone1_Rain` | Regen |
| `Zone1_Storm` | Sturm |
| `Zone2_Sunny` | Sonnig (Zone 2) |
| `Zone2_Sand_Storm` | Sandsturm (Zone 2) |
| `Zone3_Snow` | Schnee (Zone 3) |
| `Zone3_Snow_Storm` | Schneesturm (Zone 3) |
| `Blood_Moon` | Blutmond |

> [!NOTE]
> Die vollständige Liste steht in der Datei `Assets.zip` im Hauptverzeichnis Deines Servers im Ordner `Server/Weathers/` und seinen Unterordnern (z.B. `Server/Weathers/Zone1/`). Der Dateiname ohne `.json` ist die Wetter-ID (z.B. `Zone1_Sunny.json` → `Zone1_Sunny`). Die Datei ist allerdings mehrere GB groß.

## Festgelegtes Wetter anzeigen

Um das aktuell festgelegte Wetter anzuzeigen:

```text
weather get --world default
```

## Wetter zurücksetzen

Um das festgelegte Wetter zu entfernen, damit wieder das normale Wetter der Welt gilt:

```text
weather reset --world default
```

## Alle Wetter-Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `weather set <wetter-id> [--world <weltname>]` | Wetter festlegen |
| `weather get [--world <weltname>]` | Festgelegtes Wetter anzeigen |
| `weather reset [--world <weltname>]` | Festgelegtes Wetter entfernen (alternativ `weather clear`) |
