---
description: Savegame auf einen Conan Exiles Server hochladen
---

# So lädst du ein Savegame auf deinen Conan Exiles Server hoch

Du kannst dein lokales Savegame auf deinen Server übertragen und dort weiterspielen. Das Savegame besteht aus der Datei `game.db`.

:::: warning Achtung
Beim Hochladen wird das bestehende Savegame auf dem Server überschrieben. Erstelle vorher ein Backup, falls du das aktuelle Savegame behalten möchtest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade deine `game.db` Datei in folgendes Verzeichnis auf dem Server hoch:

   ```
   /ConanSandbox/Saved/game.db
   ```

4. <b>Server starten</b><br>
   Starte deinen Server. Dein Savegame wird nun geladen.

:::: tip Tipp
Dein lokales Savegame findest du auf deinem PC im Conan Exiles Installationsverzeichnis unter `ConanSandbox/Saved/`.
::::
