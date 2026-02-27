---
description: Ausrüstungs-Haltbarkeit auf einem Palworld Server ändern
---

# So änderst du die Ausrüstungs-Haltbarkeit auf deinem Palworld Server

Du kannst anpassen, wie schnell sich Ausrüstung und Werkzeuge abnutzen.

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

4. <b>Haltbarkeit anpassen</b><br>
   Suche den Parameter `BuildObjectDeteriorationDamageRate` und passe den Wert an:

   ```
   BuildObjectDeteriorationDamageRate=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0` | Kein Verfall |
| `0.5` | Langsamerer Verfall |
| `1.0` | Standard |
| `2.0` | Schnellerer Verfall |
