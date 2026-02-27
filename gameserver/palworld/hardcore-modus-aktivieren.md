---
description: Hardcore-Modus auf einem Palworld Server aktivieren
---

# So aktivierst du den Hardcore-Modus auf deinem Palworld Server

Im Hardcore-Modus können Spieler nicht respawnen und Pals gehen beim Tod dauerhaft verloren.

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

4. <b>Hardcore-Modus aktivieren</b><br>
   Suche die folgenden Parameter und setze sie auf `True`:

   ```
   bHardcore=True
   bPalLost=True
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

## Alle Parameter

| Parameter | Standard | Beschreibung |
|-----------|----------|-------------|
| `bHardcore` | `False` | Spieler können nicht respawnen |
| `bPalLost` | `False` | Pals gehen beim Tod dauerhaft verloren |

:::: tip Tipp
Du kannst die Parameter auch einzeln aktivieren, z.B. nur `bPalLost=True` ohne Hardcore-Modus.
::::
