---
description: Savegame auf einen Aloft Server hochladen
---

# So fügst du ein Savegame zu deinem Aloft Server hinzu

Du kannst dein lokales Savegame auf deinen Server übertragen und dort weiterspielen.

## So findest du dein Savegame

Die Aloft-Savegames findest du auf deinem PC unter:

```
%LOCALAPPDATA%\Aloft\Saved\SaveGames\
```

## So lädst du das Savegame hoch

:::: warning Achtung
Stoppe deinen Server bevor du Dateien hochlädst, da diese sonst vom Server überschrieben werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade deine Savegame-Dateien in folgendes Verzeichnis auf dem Server hoch:

   ```
   /Aloft/Saved/SaveGames/
   ```

:::: warning Achtung
Bestehende Dateien im Zielverzeichnis werden überschrieben. Erstelle vorher ein Backup, falls du die aktuelle Welt behalten möchtest.
::::

4. <b>Server starten</b><br>
   Starte deinen Server. Dein Savegame wird nun geladen.
