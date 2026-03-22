---
description: Savegame auf einen Core Keeper Server hochladen
---

# So fügst du ein Savegame zu deinem Core Keeper Server hinzu

Du kannst eine bestehende Singleplayer-Welt auf deinen Server hochladen.

## Savegame finden

Dein lokales Savegame findest du auf deinem PC unter:

```
%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\<SteamID>\worlds
```

:::: tip Tipp
Drücke `Windows + R`, gib `%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\` ein und navigiere in den Ordner mit deiner SteamID, dann in `worlds`.
::::

Die Welt-Datei heißt z.B. `0.world.gzip`. Die Zahl vor `.world.gzip` ist der **World Index**.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Welt hochladen</b><br>
   Lade die `.world.gzip`-Datei in folgendes Verzeichnis hoch:

   ```
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/worlds/
   ```

4. <b>World Index anpassen</b><br>
   Stelle sicher, dass der **World Index** in den Server-Einstellungen mit der Zahl deiner Welt-Datei übereinstimmt.

   :::: tip Beispiel
   Wenn deine Datei `0.world.gzip` heißt, muss der World Index `0` sein. Bei `3.world.gzip` muss er `3` sein.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: warning Achtung
Durch das Hochladen wird der bestehende Spielstand auf dem Server überschrieben.
::::
