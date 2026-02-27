---
description: XP-Rate auf einem Palworld Server ändern
---

# So änderst du die XP-Rate auf deinem Palworld Server

Du kannst den Erfahrungspunkte-Multiplikator anpassen, um schneller oder langsamer zu leveln.

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

4. <b>XP-Rate anpassen</b><br>
   Suche den Parameter `ExpRate` und passe den Wert an:

   ```
   ExpRate=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Halbe XP |
| `1.0` | Standard |
| `2.0` | Doppelte XP |
| `5.0` | 5-fache XP |
