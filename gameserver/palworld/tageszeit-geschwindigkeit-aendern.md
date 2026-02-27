---
description: Tageszeit-Geschwindigkeit auf einem Palworld Server ändern
---

# So änderst du die Tageszeit-Geschwindigkeit auf deinem Palworld Server

Du kannst die Geschwindigkeit des Tag-Nacht-Zyklus für Tag und Nacht getrennt anpassen.

:::: warning Achtung
Stelle sicher, dass dein Server gestoppt ist, bevor du die Config-Datei bearbeitest. Änderungen an der `PalWorldSettings.ini` werden sonst vom Spiel überschrieben.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Config-Datei öffnen</b><br>
   Öffne die Datei `PalWorldSettings.ini` unter:

   ```
   /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
   ```

4. <b>Geschwindigkeit anpassen</b><br>
   Suche die Parameter `DayTimeSpeedRate` und `NightTimeSpeedRate`:

   ```
   DayTimeSpeedRate=1.000000
   NightTimeSpeedRate=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Doppelt so lange Tages-/Nachtzeit |
| `1.0` | Standard |
| `2.0` | Halb so lange Tages-/Nachtzeit |

:::: tip Tipp
Ein niedrigerer Wert bedeutet längere Tage/Nächte, ein höherer Wert kürzere.
::::
