---
description: Pal-Spawnrate auf einem Palworld Server ändern
---

# So änderst du die Pal-Spawnrate auf deinem Palworld Server

Du kannst anpassen, wie viele Pals auf der Karte spawnen.

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

4. <b>Spawnrate anpassen</b><br>
   Suche den Parameter `PalSpawnNumRate` und passe den Wert an:

   ```
   PalSpawnNumRate=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Weniger Pals |
| `1.0` | Standard |
| `2.0` | Doppelt so viele Pals |

:::: warning Achtung
Hohe Werte können die Performance des Servers beeinträchtigen.
::::
