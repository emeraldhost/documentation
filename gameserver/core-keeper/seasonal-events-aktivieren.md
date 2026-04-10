---
description: Seasonal Events auf einem Core Keeper Server aktivieren
---

# So aktivierst du Seasonal Events auf deinem Core Keeper Server

Standardmäßig folgt Core Keeper dem echten Kalender für saisonale Events. Du kannst ein bestimmtes Event aber auch manuell erzwingen.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Event auswählen</b><br>
   Trage bei den **Zusätzlichen Startparametern** folgenden Wert ein:

   ```
   -season EVENTNAME
   ```

   | Event | Wert |
   |-------|------|
   | Kein Override (Standard) | `None` |
   | Ostern | `Easter` |
   | Halloween | `Halloween` |
   | Weihnachten | `Christmas` |
   | Valentinstag | `Valentine` |
   | Jubiläum | `Anniversary` |
   | Kirschblüte | `CherryBlossom` |
   | Mondneujahr | `LunarNewYear` |

   :::: tip Beispiel
   ```
   -season Halloween
   ```
   ::::

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: info Hinweis
Um zum normalen Kalender zurückzukehren, entferne den `-season`-Parameter oder setze ihn auf `None`.
::::
