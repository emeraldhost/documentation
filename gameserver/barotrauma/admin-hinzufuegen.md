---
description: Admin auf einem Barotrauma Server hinzufügen
---

# So fügst du einen Admin auf deinem Barotrauma Server hinzu

Du kannst Admins über die Datei `clientpermissions.xml` hinzufügen, um Spielern Berechtigungen auf deinem Server zu vergeben.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>clientpermissions.xml bearbeiten</b><br>
   Öffne die Datei `clientpermissions.xml` im Verzeichnis:

   ```
   /config/clientpermissions.xml
   ```

   Füge einen neuen Eintrag für den Spieler hinzu:

   ```xml
   <Client
     name="SpielerName"
     steamid="DEINE_STEAMID64"
     permissions="All"
   />
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Mit `permissions="All"` erhält der Spieler alle verfügbaren Berechtigungen. Du kannst auch einzelne Berechtigungen wie `ManageRound,Kick,Ban,ConsoleCommands` vergeben.
::::
