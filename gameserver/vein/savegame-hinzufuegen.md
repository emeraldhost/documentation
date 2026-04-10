---
description: Savegame auf einen VEIN Server hochladen
---

# So fügst du ein Savegame zu deinem VEIN Server hinzu

Du kannst dein lokales Savegame auf deinen Server übertragen und dort weiterspielen. Das Savegame besteht aus `.vns` Dateien (z.B. `Server.vns`).

:::: warning Achtung
Beim Hochladen wird das bestehende Savegame auf dem Server überschrieben. Erstelle vorher ein Backup, falls du das aktuelle Savegame behalten möchtest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade deine `.vns` Dateien (z.B. `Server.vns`) in folgendes Verzeichnis auf dem Server hoch:

   ```
   /Vein/Saved/SaveGames/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server. Dein Savegame wird nun geladen.

:::: tip Tipp
Dein lokales Savegame findest du auf deinem PC im Steam-Verzeichnis unter `<Steam>\steamapps\common\VEIN\Saved\SaveGames\`.
::::
