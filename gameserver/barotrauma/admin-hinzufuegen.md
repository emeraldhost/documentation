---
description: Admin auf einem Barotrauma Server hinzufügen und entfernen
---

# So fügst du einen Admin auf deinem Barotrauma Server hinzu

Du kannst Admins über die Datei `clientpermissions.xml` verwalten.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Admin hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>clientpermissions.xml öffnen</b><br>
   Öffne die Datei `clientpermissions.xml` unter:

   ```
   /config/clientpermissions.xml
   ```

4. <b>Admin hinzufügen</b><br>
   Füge einen neuen Eintrag hinzu:

   ```xml
   <Client
     name="SpielerName"
     steamid="DEINE_STEAMID64"
     preset="Admin"
   />
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Admin entfernen

Um einen Admin zu entfernen, lösche den entsprechenden `<Client>`-Eintrag aus der `clientpermissions.xml` und starte den Server neu.

## Verfügbare Presets

| Preset | Beschreibung |
|--------|-------------|
| `Admin` | Vollzugriff auf alle Befehle und Einstellungen |
| `Moderator` | Kann Spieler kicken, bannen und den Chat moderieren |
| `None` | Keine besonderen Berechtigungen |

:::: info Hinweis
Du kannst auch benutzerdefinierte Berechtigungen vergeben, indem du `permissions="ManageRound,Kick,Ban,ConsoleCommands"` statt eines Presets verwendest.
::::
