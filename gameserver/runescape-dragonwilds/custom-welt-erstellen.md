---
description: Custom Welt auf einem RuneScape Dragonwilds Server erstellen
---

# So erstellst du eine custom Welt auf deinem RuneScape: Dragonwilds Server

Standardmäßig erstellt der Server automatisch eine Welt mit Standard-Einstellungen. Du kannst stattdessen eine Welt mit eigenen Einstellungen erstellen und auf den Server hochladen.

## Custom Welt erstellen

1. <b>Spiel starten</b><br>
   Starte RuneScape: Dragonwilds lokal auf deinem PC.

2. <b>Neue Welt erstellen</b><br>
   Erstelle eine neue Welt und wähle die Option **Custom**. Im Tab **Advanced** kannst du alle Einstellungen nach deinen Wünschen anpassen.

3. <b>Welt betreten</b><br>
   Betrete die Welt kurz, damit die Speicherdatei generiert wird. Verlasse die Welt anschließend wieder.

4. <b>Savegame finden</b><br>
   Die erstellte `.sav`-Datei findest du unter:

   ```
   %LOCALAPPDATA%\RSDragonwilds\Saved\SaveGames
   ```

## Welt auf den Server hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame hochladen</b><br>
   Lade die `.sav`-Datei in folgendes Verzeichnis hoch:

   ```
   /RSDragonwilds/Saved/SaveGames/
   ```

4. <b>Welt-Namen eintragen</b><br>
   Öffne die **Einstellungen** in der Verwaltung und trage den Dateinamen deines Savegames (ohne `.sav`) im Feld **SaveGame** ein.

5. <b>Server starten</b><br>
   Starte deinen Server. Die custom Welt wird nun geladen.

:::: info Hinweis
Der Server lädt automatisch die neueste `.sav`-Datei im SaveGames-Ordner. Falls bereits eine Welt existiert, wird diese durch die hochgeladene Datei ersetzt.
::::
