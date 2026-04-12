---
description: Server Passwort auf einem Satisfactory Server setzen
---

# So setzt du ein Passwort auf deinem Satisfactory Server

Du kannst deinen Server mit einem Passwort schützen, sodass nur Spieler mit dem Passwort beitreten können. Das Passwort wird in der Datei `Game.ini` festgelegt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne die Datei `Game.ini` unter:

   ```
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Passwort setzen</b><br>
   Trage folgenden Inhalt ein und setze dein gewünschtes Passwort:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Dein Server Name",AdminPassword="DeinAdminPasswort",PlayerPassword="DeinServerPasswort")
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Um das Passwort zu entfernen und den Server wieder öffentlich zu machen, entferne den `PlayerPassword`-Wert oder setze ihn auf leer: `PlayerPassword=""`.
::::

:::: info Hinweis
Falls die Datei bereits einen `mServerGameState`-Eintrag enthält, ergänze dort den `PlayerPassword`-Wert. Füge keinen zweiten Eintrag hinzu.
::::
