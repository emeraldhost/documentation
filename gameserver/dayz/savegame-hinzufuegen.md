---
description: Savegame auf einen DayZ Server hochladen
---

# So fügst du ein Savegame zu deinem DayZ Server hinzu

Du kannst ein Savegame von einem anderen DayZ-Server auf deinen Server übertragen. Das Savegame befindet sich im `storage_1` Ordner.

:::: info Hinweis
DayZ-Spielstände werden ausschließlich serverseitig gespeichert. Diese Anleitung beschreibt die Übertragung von Savegames zwischen DayZ-Servern, nicht aus einem Singleplayer-Spiel.
::::

:::: warning Achtung
Beim Hochladen wird das bestehende Savegame auf dem Server überschrieben. Erstelle vorher ein Backup, falls du das aktuelle Savegame behalten möchtest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade deinen `storage_1` Ordner in folgendes Verzeichnis auf dem Server hoch:

   ```
   /mpmissions/dayzOffline.chernarusplus/storage_1/
   ```

   :::: tip Tipp
   Wenn du die Livonia-Map verwendest, lautet der Pfad stattdessen:
   ```
   /mpmissions/dayzOffline.enoch/storage_1/
   ```
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server. Dein Savegame wird nun geladen.

:::: tip Tipp
Um das Savegame von einem anderen Server zu erhalten, lade den `storage_1` Ordner per SFTP von dem Quellserver herunter.
::::
