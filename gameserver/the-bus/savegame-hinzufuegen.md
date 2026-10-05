---
description: Savegame auf einen The Bus Server hochladen
---

# So fügst du ein Savegame zu deinem The Bus Server hinzu

Du kannst ein Savegame auf deinen Server übertragen und dort weiterspielen.

:::: warning Achtung
Liegt im Zielordner bereits eine Datei mit demselben Namen, wird sie beim Hochladen überschrieben. Erstelle vorher ein [Backup](backup-erstellen.md), falls du das bestehende Savegame behalten möchtest.
::::

:::: info Hinweis
Savegames aus älteren Spielversionen (z.B. aus dem Early Access) sind nicht unbedingt mit der aktuellen Version kompatibel. Prüfe nach dem Start außerdem, ob auf dem Server die Map aktiv ist, auf der du das Savegame gespielt hast – wie du die Map wechselst, erfährst du unter [Map ändern](map-aendern.md).
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade den kompletten Inhalt deines gesicherten Ordners `SaveGames` in folgendes Verzeichnis auf dem Server hoch, z.B. aus der Anleitung [Savegame herunterladen](savegame-herunterladen.md):

   ```
   /TheBus/Saved/SaveGames/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server und tritt ihm bei. Prüfe, ob dein bisheriger Spielstand geladen wurde.
