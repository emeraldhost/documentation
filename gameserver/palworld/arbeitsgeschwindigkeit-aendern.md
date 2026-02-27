---
description: Arbeitsgeschwindigkeit auf einem Palworld Server ändern
---

# So änderst du die Arbeitsgeschwindigkeit auf deinem Palworld Server

Du kannst anpassen, wie schnell Pals an Arbeitsstationen arbeiten.

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

4. <b>Arbeitsgeschwindigkeit anpassen</b><br>
   Suche den Parameter `WorkSpeedRate` und passe den Wert an:

   ```
   WorkSpeedRate=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Halbe Arbeitsgeschwindigkeit |
| `1.0` | Standard |
| `2.0` | Doppelte Arbeitsgeschwindigkeit |
| `5.0` | 5-fache Arbeitsgeschwindigkeit |
