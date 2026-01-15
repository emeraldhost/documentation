---
description: Wetter auf einem Hytale Server ändern
---

# So änderst du das Wetter auf einem Hytale Server

Du kannst das Wetter auf deinem Server per Befehl ändern. Das Wetter wird pro Zone und mit Intensität eingestellt.

## So änderst du das Wetter per Befehl

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   weather set <Zone_Wetter_Intensität>
   ```

**Beispiele:**
```
weather set Zone1_Clear_Light
weather set Zone1_Cloudy_Medium
weather set Zone1_Rainy_Heavy
```

:::: tip Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/weather set Zone1_Clear_Light`).
::::

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

```
weather get
```

## Wetter zurücksetzen

Um das Wetter auf den Standardwert zurückzusetzen:

```
weather reset
```

## Alle Wetter-Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `weather set <wetter> [--world=?]` | Wetter setzen |
| `weather get [--world=?]` | Aktuelles Wetter anzeigen |
| `weather reset [--world=?]` | Wetter zurücksetzen |

:::: tip Hinweis
Mit `--world=<name>` kannst du das Wetter für eine bestimmte Welt ändern. Ohne diese Option wird die aktuelle Welt verwendet.
::::
