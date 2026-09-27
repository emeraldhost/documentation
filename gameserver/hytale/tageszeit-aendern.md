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
   time <wert> --world <weltname>
   ```
   Ersetze `<weltname>` durch den Namen deiner Welt (z.B. `default`).

**Beispiele:**
```
time dawn --world default
time noon --world default
time dusk --world default
time set 18 --world default
```

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Angabe `--world`, sonst meldet der Server `Sender must be a player or provide the --world option!`. Im Spiel mit Admin-Rechten benötigst du den `/` und kannst `--world` weglassen, dann gilt der Befehl für die Welt, in der du dich befindest (z.B. `/time noon`).
::::

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

```
time --world default
```

## Spielzeit pausieren

Mit `time pause --world default` hältst du die Zeit an. Gibst du den Befehl erneut ein, läuft sie weiter. Der Zustand wird in der Konfiguration der Welt gespeichert und bleibt auch nach einem Neustart erhalten. Weitere Möglichkeiten, z.B. eine feste Uhrzeit für Bau-Server, findest du unter [Spielzeit pausieren](spielzeit-pausieren.md).
