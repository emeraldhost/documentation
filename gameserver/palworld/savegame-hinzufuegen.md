---
description: Savegame auf einen Palworld Server hochladen
---

# So lädst du ein Savegame auf deinen Palworld Server hoch

Du kannst dein lokales Savegame auf deinen Server übertragen und dort weiterspielen.

## So findest du dein Savegame

Die Palworld-Savegames findest du auf deinem PC unter:

```
%localappdata%\Pal\Saved\SaveGames\
```

Innerhalb dieses Ordners befindet sich ein Unterordner mit deiner Steam-ID und darin dein Savegame-Ordner (eine lange Zeichenkette aus Buchstaben und Zahlen).

## So lädst du das Savegame hoch

:::: warning Achtung
Stoppe deinen Server bevor du Dateien hochlädst, da diese sonst vom Server überschrieben werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade deinen Savegame-Ordner in folgendes Verzeichnis auf dem Server hoch:

   ```
   /Pal/Saved/SaveGames/0/
   ```

4. <b>Ordnername eintragen</b><br>
   Öffne die Datei `GameUserSettings.ini` unter:

   ```
   /Pal/Saved/Config/LinuxServer/GameUserSettings.ini
   ```

   Suche den Parameter `DedicatedServerName=` und trage dort den Namen deines hochgeladenen Savegame-Ordners ein:

   ```ini
   DedicatedServerName=DEIN_ORDNERNAME
   ```

5. <b>Server starten</b><br>
   Starte deinen Server. Dein Savegame wird nun geladen.

:::: tip Tipp
Den Namen des Savegame-Ordners findest du im Verzeichnis `/Pal/Saved/SaveGames/0/`. Es ist die lange Zeichenkette, die als Ordnername dient.
::::
