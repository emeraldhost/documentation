---
description: Verwendung von Behavior und Resource Packs auf Minecraft Bedrock Server
---

# Behavior und Resource Packs hinzufügen

## Voraussetzungen

- Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
    - Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.
- Ein Behavior Pack im Format .mcpack oder .mcaddon
- Texteditor (wie Notepad, Notepad++, Windows Editor oder Visual Studio Code)

## Um ein Behavior Pack und Resource Packs hinzuzufügen, folge diesen Schritten

1. <b>Pack herunterladen</b><br>
   Lade ein Behavior Pack Deiner Wahl herunter und entpacke die Dateien mit einem geeigneten Programm. (wie WinRAR oder 7-Zip)

2. <b>Packs hochladen</b><br>
   Verbinde Dich mit Deinem Server über das FTP-Tool. Lade den Behavior Pack Ordner in /behavior\_packs und den Resource Pack Ordner (falls vorhanden) in /resources\_packs hoch.

3. <b>Server neu starten</b><br>
   Starte den Server einmal neu, damit die Ordnerstruktur aktualisiert wird.

4. <b>JSON-Dateien erstellen</b><br>
   Erstelle zwei neue Dateien mit den Namen "`world_resource_packs.json`" und "`world_behavior_packs.json`".

5. <b>Resource Pack eintragen</b><br>
   Öffne im Resource Pack Ordner die Datei "manifest.json". Kopiere die UUID und Versionsnummer und füge sie in die "world\_resource\_packs.json" Datei ein. Achte auf die richtige Formatierung.

6. <b>Behavior Pack eintragen</b><br>
   Wiederhole den gleichen Vorgang für die "`world_behavior_packs.json`" Datei und den zugehörigen Behavior Pack Ordner.

7. <b>JSON-Dateien hochladen</b><br>
   Lade beide `.json`-Dateien in den World-Unterordner auf Deinem Server hoch.

8. <b>Änderungen überprüfen</b><br>
   Starte Deinen Server neu und stelle sicher, dass die Packs korrekt installiert sind.

### Jetzt kannst Du loslegen und Spaß haben! Mit diesen Schritten solltest Du in der Lage sein, Behavior und Resource Packs auf Deinem Minecraft Bedrock Server erfolgreich zu verwenden
