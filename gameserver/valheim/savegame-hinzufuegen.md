---
description: 'Anleitung zum Hochladen Deiner Eigenen Welt auf einen Valheim-Server'
---

# So fügst du ein Savegame zu deinem Valheim Server hinzu

## Voraussetzungen

- Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
    - Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. <b>Dateien erkennen</b><br>
   Links siehst Du Deine lokalen Dateien, rechts die Dateien Deines Servers.

2. <b>Server beitreten</b><br>
   Starte und betrete zunächst Deinen Valheim-Server. Dies ist notwendig, um die erforderliche Ordnerstruktur für Savegames zu erstellen.

3. <b>Savegame-Daten finden</b><br>
   Suche die `.fwl` und `.db` Dateien in `C:\Users\Benutzername\AppData\LocalLow\IronGate\Valheim`.

4. <b>Savegame übertragen</b><br>
   Verbinde Dich per SFTP mit Deinem Server und navigiere zum Ordner `.config\unity3d\IronGate\Valheim\worlds_local`.
   - Ziehe Deine lokalen Savegame-Dateien in diesen Ordner oder nutze die Upload-Funktion.

5. <b>Weltennamen ändern</b><br>
   Gehe in die Basiseinstellungen Deines Servers und ändere den Weltennamen von „world” in den Namen Deiner hochgeladenen Savegame-Dateien (ohne Dateiendungen).

6. <b>Server neu starten</b><br>
   Starte den Server neu und überprüfe, ob Deine Welt korrekt geladen wird.

### Jetzt kannst Du Deine Valheim-Welt genießen! Mit diesen Schritten solltest Du Deine Valheim-Welt erfolgreich auf Deinen Valheim-Server übertragen können
