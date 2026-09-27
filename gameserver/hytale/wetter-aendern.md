---
description: Wetter auf einem Hytale Server ändern
---

# So änderst du das Wetter auf einem Hytale Server

Du kannst das Wetter auf deinem Server per Befehl festlegen. Das festgelegte Wetter wird in der Konfiguration der Welt gespeichert und bleibt aktiv, bis du es zurücksetzt.

## So änderst du das Wetter per Befehl

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   weather set <wetter-id> --world <weltname>
   ```
   Ersetze `<weltname>` durch den Namen deiner Welt (z.B. `default`).

**Beispiele:**
```
weather set Zone1_Sunny --world default
weather set Zone1_Cloudy_Medium --world default
weather set Zone1_Storm --world default
```

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Angabe `--world`, sonst meldet der Server `Sender must be a player or provide the --world option!`. Im Spiel mit Admin-Rechten benötigst du den `/` und kannst `--world` weglassen, dann gilt der Befehl für die Welt, in der du dich befindest (z.B. `/weather set Zone1_Sunny`).
::::

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

:::: info Hinweis
Die vollständige Liste steht in der Datei `Assets.zip` im Hauptverzeichnis deines Servers im Ordner `Server/Weathers/` und seinen Unterordnern (z.B. `Server/Weathers/Zone1/`). Der Dateiname ohne `.json` ist die Wetter-ID (z.B. `Zone1_Sunny.json` → `Zone1_Sunny`). Die Datei ist allerdings mehrere GB groß.
::::

## Festgelegtes Wetter anzeigen

Um das aktuell festgelegte Wetter anzuzeigen:

```
weather get --world default
```

## Wetter zurücksetzen

Um das festgelegte Wetter zu entfernen, damit wieder das normale Wetter der Welt gilt:

```
weather reset --world default
```

## Alle Wetter-Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `weather set <wetter-id> [--world <weltname>]` | Wetter festlegen |
| `weather get [--world <weltname>]` | Festgelegtes Wetter anzeigen |
| `weather reset [--world <weltname>]` | Festgelegtes Wetter entfernen (alternativ `weather clear`) |
