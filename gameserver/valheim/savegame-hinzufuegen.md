---
description: 'Anleitung zum Hochladen Deiner Eigenen Welt auf einen Valheim-Server'
---

# Savegame hinzufügen

## Voraussetzungen

* Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
   * Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. <b>Erkenne Deine lokalen und Serverdateien</b>
    * Links siehst Du Deine lokalen Dateien, rechts die Dateien Deines Servers.

2. <b>Starte und betrete zunächst Deinen Valheim-Server</b>
    * Dies ist notwendig, um die erforderliche Ordnerstruktur für Savegames zu erstellen.

3. <b>Lokale Valheim-Savegame-Daten finden</b>
    * Suche die `.fwl` und `.db` Dateien in `C:\Users\Benutzername\AppData\LocalLow\IronGate\Valheim`.

4. <b>Übertrage die Savegame-Daten auf den Server</b>
    * Verbinde Dich per SFTP mit Deinem Server und navigiere zum Ordner `.config\unity3d\IronGate\Valheim\worlds_local`.
    * Ziehe Deine lokalen Savegame-Dateien in diesen Ordner oder nutze die Upload-Funktion.

5. <b>Ändere den Weltennamen im Server</b>
    * Gehe in die Basiseinstellungen Deines Servers und ändere den Weltennamen von „world“ in den Namen Deiner hochgeladenen Savegame-Dateien (ohne Dateiendungen).

6. <b>Starte den Server neu</b>
    * Starte den Server neu und überprüfe, ob Deine Welt korrekt geladen wird.

### Jetzt kannst Du Deine Valheim-Welt genießen! Mit diesen Schritten solltest Du Deine Valheim-Welt erfolgreich auf Deinen Valheim-Server übertragen können.
