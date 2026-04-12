---
description: Server Namen auf einem Satisfactory Server ändern
---

# So änderst du den Server Namen deines Satisfactory Servers

Der Server Name wird in der Datei `Game.ini` festgelegt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne die Datei `Game.ini` unter:

   ```
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Server Name ändern</b><br>
   Trage folgenden Inhalt ein und passe den Namen an:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Dein Server Name")
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Falls die Datei bereits einen `mServerGameState`-Eintrag enthält, ändere dort nur den Wert von `ServerSessionName`. Füge keinen zweiten Eintrag hinzu.
::::
