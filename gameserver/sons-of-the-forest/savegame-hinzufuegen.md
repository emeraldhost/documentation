---
description: Savegame auf einem Sons Of The Forest Server hinzufügen
---

# So fügst du ein Savegame zu deinem Sons Of The Forest Server hinzu

Du kannst einen lokalen Spielstand auf deinen Server übertragen, um mit einer bestehenden Welt weiterzuspielen.

:::: warning Achtung
Sons Of The Forest speichert Spielerdaten wie Inventar, Position und Kleidung **nicht** im Welt-Savegame. Nach dem Import bleiben deine Bauwerke und der Weltzustand erhalten, alle Spieler starten aber mit einem neuen Charakter.
::::

## Lokales Savegame finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %userprofile%\AppData\LocalLow\Endnight\SonsOfTheForest\Saves
   ```

2. <b>Richtigen Unterordner wählen</b><br>
   Öffne den Ordner mit deiner SteamID64 und darin den Ordner `Multiplayer`. Er enthält alle Welten, in denen du selbst der Host warst.

   :::: info Hinweis
   `MultiplayerClient` enthält Welten, in denen du nur Gast warst, `Singleplayer` deine Einzelspieler-Welten. Für einen Dedicated Server benötigst du einen Spielstand aus `Multiplayer`.
   ::::

3. <b>Spielstand identifizieren</b><br>
   Jeder Spielstand ist ein eigener Ordner mit einer zufälligen Nummer als Namen (z.B. `1833122971`). Darin liegen mehrere Dateien – unter anderem verschiedene `.json`-Dateien und eine `SaveData.zip` –, die alle zusammengehören.

## Savegame hochladen und anwenden

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Ordner umbenennen</b><br>
   Benenne den Spielstand-Ordner in eine zehnstellige Zahl mit führenden Nullen um. Diese Zahl ist später dein Save-Slot.

   :::: tip Beispiel
   ```
   0000000002
   ```
   ::::

4. <b>Spielstand hochladen</b><br>
   Lade den kompletten Ordner mit allen enthaltenen Dateien in folgendes Verzeichnis hoch:

   ```
   /serverconfig/Saves/DedicatedServer/Multiplayer/
   ```

5. <b>Save-Slot eintragen</b><br>
   Öffne die Datei `/serverconfig/dedicatedserver.cfg` und passe folgende Werte an:

   ```json
   "SaveSlot": 2,
   "SaveMode": "Continue",
   ```

   Die Zahl bei `SaveSlot` muss dem Ordnernamen ohne führende Nullen entsprechen (`0000000002` entspricht also `2`).

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: danger Wichtig
`SaveMode` muss auf `Continue` stehen. Steht dort `New`, wird der Slot beim nächsten Serverstart mit einer frisch generierten Welt überschrieben und dein hochgeladener Spielstand ist verloren.
::::

:::: tip Ohne Umbenennen
Du kannst den Ordnernamen auch unverändert lassen und stattdessen die Zahl des Ordners direkt als Save-Slot eintragen – bei einem Ordner `1833122971` also `"SaveSlot": 1833122971`. Wichtig ist nur, dass Ordnername und `SaveSlot` zusammenpassen.
::::

:::: warning Achtung
Existiert der Ordner `/serverconfig/Saves/DedicatedServer/Multiplayer/` noch nicht, starte den Server einmal, damit die Ordnerstruktur automatisch angelegt wird. Stoppe den Server anschließend wieder, bevor du die Dateien hochlädst.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Savegames, falls du später zurückwechseln möchtest.
::::
