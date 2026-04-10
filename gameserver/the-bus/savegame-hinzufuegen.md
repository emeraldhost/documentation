---
description: Savegame auf einen The Bus Server hochladen
---

# So fügst du ein Savegame zu deinem The Bus Server hinzu

Du kannst ein Savegame auf deinen Server übertragen und dort weiterspielen.

:::: warning Achtung
Beim Hochladen wird das bestehende Savegame auf dem Server überschrieben. Erstelle vorher ein Backup, falls du das aktuelle Savegame behalten möchtest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade deine Save-Dateien in folgendes Verzeichnis auf dem Server hoch:

   ```
   /TheBus/Saved/SaveGames/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server. Dein Savegame wird nun geladen.
