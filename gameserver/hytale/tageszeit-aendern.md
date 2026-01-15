---
description: Tageszeit auf einem Hytale Server ändern
---

# So änderst du die Tageszeit auf einem Hytale Server

Du kannst die Tageszeit auf deinem Server per Befehl ändern oder komplett pausieren.

## So änderst du die Tageszeit per Befehl

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   time <wert>
   ```

**Beispiele:**
```
time morning
time noon
time evening
time 12
```

:::: tip Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/time noon`).
::::

## Verfügbare Zeit-Werte

| Wert | Beschreibung |
| ---- | ------------ |
| `morning` | Morgen |
| `noon` | Mittag |
| `evening` | Abend |
| `0-24` | Numerischer Wert (0 = Mitternacht, 12 = Mittag) |

## Aktuelle Zeit anzeigen

Um die aktuelle Weltzeit anzuzeigen:

```
time
```

## Spielzeit pausieren

Um die Zeit komplett anzuhalten (z.B. für Bau-Server), siehe [Spielzeit pausieren](spielzeit-pausieren.md).
