---
description: Savegame auf einen Barotrauma Server hochladen
---

# So lädst du ein Savegame auf deinen Barotrauma Server hoch

Du kannst dein lokales Savegame auf deinen Server übertragen und dort weiterspielen.

## So findest du dein Savegame

Die Barotrauma-Savegames findest du auf deinem PC unter:

```
%LOCALAPPDATA%\Daedalic Entertainment GmbH\Barotrauma\Multiplayer\
```

Die Savegames sind `.save`-Dateien in diesem Ordner.

## So lädst du das Savegame hoch

:::: warning Achtung
Stoppe deinen Server bevor du Dateien hochlädst, da diese sonst vom Server überschrieben werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade deine `.save`-Datei in folgendes Verzeichnis auf dem Server hoch:

   ```
   /config/Multiplayer/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server und wähle das hochgeladene Savegame aus.
