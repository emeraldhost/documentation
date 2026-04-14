---
description: Savegame auf einem Windrose Server hinzufügen
---

# So fügst du ein Savegame zu deinem Windrose Server hinzu

Du kannst einen lokalen Spielstand auf deinen Server übertragen, um mit einer bestehenden Welt weiterzuspielen.

## Lokales Savegame finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %LOCALAPPDATA%\R5\Saved\SaveProfiles
   ```

2. <b>Zum Welt-Ordner navigieren</b><br>
   Öffne deinen SteamID-Ordner und navigiere dort zu:

   ```
   RocksDB\<GameVersion>\Worlds\
   ```

3. <b>Welt-Ordner identifizieren</b><br>
   Dort findest du einen Ordner mit einer alphanumerischen Zeichenkette als Namen – der `<WorldID>`. Diese entspricht der Island ID deiner Welt.

## Savegame hochladen und anwenden

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Welt-Ordner hochladen</b><br>
   Lade den kompletten `<WorldID>`-Ordner in folgendes Verzeichnis hoch:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/
   ```

   Der Platzhalter `<GameVersion>` muss auf dem Server genauso heißen wie lokal.

4. <b>Island ID setzen</b><br>
   Damit der Server die hochgeladene Welt lädt, setze die [Island ID](island-id-setzen.md) auf den Namen des `<WorldID>`-Ordners.

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: warning Achtung
Stelle sicher, dass die `<GameVersion>` deines Savegames mit der Serverversion übereinstimmt. Saves älterer Versionen können inkompatibel sein.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein Backup deines bisherigen Server-Savegames, falls du später zurückwechseln möchtest.
::::
