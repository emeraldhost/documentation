---
description: Savegame auf einem Icarus Server hinzufügen
---

# So fügst du ein Savegame zu deinem Icarus Server hinzu

Du kannst einen lokalen Prospect auf deinen Server übertragen, um mit einem bestehenden Spielstand weiterzuspielen.

## Lokales Savegame finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %LOCALAPPDATA%\ICARUS\Saved\PlayerData
   ```

2. <b>Zum Prospects-Ordner navigieren</b><br>
   Öffne deinen SteamID64-Ordner und navigiere dort in den Ordner `Prospects`.

3. <b>Prospect-Datei identifizieren</b><br>
   Dein Spielstand ist eine Datei im Format `<DeinProspect>.json`. Notiere dir den genauen Dateinamen.

## Savegame hochladen und anwenden

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Prospect hochladen</b><br>
   Lade die Datei `<DeinProspect>.json` in folgendes Verzeichnis hoch:

   ```
   /ICARUS/Saved/PlayerData/DedicatedServer/Prospects/
   ```

4. <b>ServerSettings.ini anpassen</b><br>
   Öffne folgende Datei:

   ```
   /ICARUS/Saved/Config/WindowsServer/ServerSettings.ini
   ```

   Passe den Wert von `LoadProspect` an den Dateinamen deines Prospects an (ohne `.json`):

   ```
   LoadProspect=<DeinProspect>
   ```

5. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung.

:::: warning Achtung
Starte den Server einmal und erstelle über den Client einen neuen Prospect, bevor du ein eigenes Savegame zum ersten Mal hochlädst. Erst dann wird die nötige Verzeichnisstruktur auf dem Server erzeugt.
::::

:::: warning Achtung
Stelle sicher, dass die Version deines Savegames mit der Serverversion übereinstimmt. Saves älterer Versionen können zu Fehlern oder inkompatiblen Daten führen.
::::
