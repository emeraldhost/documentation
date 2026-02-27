---
description: Pal-Fangrate auf einem Palworld Server ändern
---

# So änderst du die Pal-Fangrate auf deinem Palworld Server

Du kannst den Multiplikator für die Fangchance von Pals anpassen.

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

4. <b>Fangrate anpassen</b><br>
   Suche den Parameter `PalCaptureRate` und passe den Wert an:

   ```
   PalCaptureRate=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Schwerer zu fangen |
| `1.0` | Standard |
| `2.0` | Doppelte Fangchance |
