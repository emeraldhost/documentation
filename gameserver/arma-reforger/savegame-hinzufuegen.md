---
description: Savegame auf einen Arma Reforger Server hochladen
---

# So fügst du ein Savegame zu deinem Arma Reforger Server hinzu

Du kannst ein Savegame auf deinen Server übertragen, um einen bestehenden Spielstand weiterzuführen.

## So lädst du das Savegame hoch

:::: warning Achtung
Stoppe deinen Server bevor du Dateien hochlädst, da diese sonst vom Server überschrieben werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade deinen Save-Ordner in folgendes Verzeichnis auf dem Server hoch:

   ```
   /profile/profile/.save/
   ```

   :::: info Hinweis
   Der Ordner `.save` beginnt mit einem Punkt und ist deshalb versteckt. Siehst du ihn in deinem SFTP-Programm nicht, aktiviere dort die Anzeige versteckter Dateien.
   ::::

:::: warning Achtung
Bestehende Dateien im Zielverzeichnis werden überschrieben. Erstelle vorher ein Backup, falls du den aktuellen Spielstand behalten möchtest.
::::

4. <b>Server starten</b><br>
   Starte deinen Server. Dein Savegame wird nun geladen.
