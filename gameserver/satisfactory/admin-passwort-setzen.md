---
description: Admin Passwort auf einem Satisfactory Server setzen
---

# So setzt du ein Admin Passwort auf deinem Satisfactory Server

Das Admin Passwort wird benötigt, um sich im Spiel als Administrator anzumelden. Es wird in der Datei `Game.ini` festgelegt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne die Datei `Game.ini` unter:

   ```
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Admin Passwort setzen</b><br>
   Trage folgenden Inhalt ein und setze dein gewünschtes Passwort:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Dein Server Name",AdminPassword="DeinAdminPasswort")
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Teile das Admin Passwort nur mit vertrauenswürdigen Spielern. Jeder mit dem Passwort kann sich Administrator-Rechte vergeben.
::::

:::: info Hinweis
Falls die Datei bereits einen `mServerGameState`-Eintrag enthält, ändere dort nur den Wert von `AdminPassword`. Füge keinen zweiten Eintrag hinzu.
::::
