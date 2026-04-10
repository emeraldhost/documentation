---
description: Savegame auf einen Project Zomboid Server hochladen
---

# So lädst du ein Savegame auf deinen Project Zomboid Server hoch

Du kannst dein lokales Savegame auf deinen Server übertragen und dort weiterspielen.

## So findest du dein Savegame

Die Project Zomboid Multiplayer-Savegames findest du auf deinem PC unter:

```
%USERPROFILE%\Zomboid\Saves\Multiplayer\
```

## So lädst du das Savegame hoch

:::: warning Achtung
Stoppe deinen Server bevor du Dateien hochlädst. Ein vorhandenes Savegame auf dem Server wird dabei überschrieben.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade deinen Savegame-Ordner in folgendes Verzeichnis auf dem Server hoch:

   ```
   /Zomboid/Saves/Multiplayer/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server. Dein Savegame wird nun geladen.

:::: tip Tipp
Erstelle vor dem Hochladen ein Backup des bestehenden Savegames auf dem Server, falls du es später wiederherstellen möchtest.
::::
