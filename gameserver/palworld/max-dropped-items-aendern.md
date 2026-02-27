---
description: Maximale Anzahl an gedropten Items auf einem Palworld Server ändern
---

# So änderst du die maximale Anzahl an gedropten Items auf deinem Palworld Server

Du kannst festlegen, wie viele Items gleichzeitig auf dem Boden liegen dürfen.

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

4. <b>Limit anpassen</b><br>
   Suche den Parameter `DropItemMaxNum` und passe den Wert an:

   ```
   DropItemMaxNum=3000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `1000` | Weniger Items auf dem Boden |
| `3000` | Standard |
| `5000` | Mehr Items auf dem Boden |

:::: warning Achtung
Hohe Werte können die Performance des Servers beeinträchtigen.
::::
