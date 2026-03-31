---
description: Savegame auf einen RuneScape Dragonwilds Server hochladen
---

# So fügst du ein Savegame zu deinem RuneScape: Dragonwilds Server hinzu

Du kannst eine bestehende Singleplayer-Welt auf deinen Server hochladen.

## Savegame finden

Dein lokales Savegame findest du auf deinem PC unter:

```
%LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames
```

:::: tip Tipp
Drücke `Windows + R` und gib `%LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames` ein, um den Ordner direkt zu öffnen.
::::

Die Welt-Datei hat die Endung `.sav`.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade die `.sav`-Datei in folgendes Verzeichnis auf dem Server hoch:

   ```
   /RSDragonwilds/Saved/SaveGames/
   ```

4. <b>Welt-Namen eintragen</b><br>
   Öffne die **Einstellungen** in der Verwaltung und trage den Dateinamen deines Savegames (ohne `.sav`) im Feld **SaveGame** ein.

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: warning Achtung
Durch das Hochladen wird der bestehende Spielstand auf dem Server überschrieben.
::::
