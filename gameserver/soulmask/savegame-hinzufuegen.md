---
description: Savegame auf einen Soulmask Server hochladen
---

# So lädst du ein Savegame auf deinen Soulmask Server hoch

Du kannst dein lokales Savegame auf deinen Server übertragen und dort weiterspielen.

## So findest du dein Savegame

Die Soulmask-Savegames findest du auf deinem PC unter:

```
%LocalAppData%\WS\<SteamID>\2646460\AutoGames\<InviteCode>\
```

Ersetze `<SteamID>` durch deine Steam-ID und `<InviteCode>` durch den Einladungscode deiner Welt.

## So lädst du das Savegame hoch

:::: warning Achtung
Stoppe deinen Server bevor du Dateien hochlädst, da diese sonst vom Server überschrieben werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Weltdaten hochladen</b><br>
   Lade die Datei `world.db` in folgendes Verzeichnis auf dem Server hoch:

   ```
   /WS/Saved/Worlds/Dedicated/Level01_Main/
   ```

:::: warning Achtung
Bestehende Dateien im Zielverzeichnis werden überschrieben. Erstelle vorher ein Backup, falls du die aktuelle Welt behalten möchtest.
::::

4. <b>Spieleinstellungen hochladen (optional)</b><br>
   Wenn du deine Spieleinstellungen übertragen möchtest, lade die Datei `GameXishu.json` in folgendes Verzeichnis hoch:

   ```
   /WS/Saved/GameplaySettings/
   ```

5. <b>Server starten</b><br>
   Starte deinen Server. Dein Savegame wird nun geladen.

:::: tip Tipp
Falls deine Einstellungsdatei `GameXishu_2.json` heißt, benenne sie vor dem Hochladen in `GameXishu.json` um.
::::
