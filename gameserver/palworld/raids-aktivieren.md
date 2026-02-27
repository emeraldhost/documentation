---
description: Raids auf einem Palworld Server aktivieren oder deaktivieren
---

# So aktivierst oder deaktivierst du Raids auf deinem Palworld Server

Du kannst einstellen, ob feindliche Überfälle auf Spielerbasen stattfinden.

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

4. <b>Raids einstellen</b><br>
   Suche den Parameter `bEnableInvaderEnemy` und setze den gewünschten Wert:

   ```
   bEnableInvaderEnemy=True
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

| Wert | Beschreibung |
|------|-------------|
| `True` | Raids aktiviert (Standard) |
| `False` | Raids deaktiviert |
