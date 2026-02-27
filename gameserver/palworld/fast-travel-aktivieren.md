---
description: Fast Travel auf einem Palworld Server aktivieren oder deaktivieren
---

# So aktivierst oder deaktivierst du Fast Travel auf deinem Palworld Server

Du kannst einstellen, ob Spieler die Schnellreise-Funktion nutzen können.

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

4. <b>Fast Travel einstellen</b><br>
   Suche den Parameter `bEnableFastTravel` und setze den gewünschten Wert:

   ```
   bEnableFastTravel=True
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

| Wert | Beschreibung |
|------|-------------|
| `True` | Fast Travel aktiviert (Standard) |
| `False` | Fast Travel deaktiviert |
