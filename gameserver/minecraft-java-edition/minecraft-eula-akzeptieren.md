---
description: 'Anleitung zum Akzeptieren der Minecraft EULA in der eula.txt-Datei'
---

# Akzeptieren der Minecraft EULA

## Voraussetzungen

- Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
    - Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. <b>Datei suchen</b><br>
   Suche die `eula.txt`-Datei im Hauptverzeichnis des Minecraft Servers. Falls die Datei nicht vorhanden ist, starte den Server einmal, um sie automatisch erstellen zu lassen.

2. <b>Datei öffnen</b><br>
   Öffne die `eula.txt`-Datei mit einem Texteditor wie Notepad oder Notepad++.

3. <b>EULA akzeptieren</b><br>
   Suche die Zeile `eula=false` und ändere diese in `eula=true`, um die [Minecraft EULA](https://www.minecraft.net/eula) zu akzeptieren.

4. <b>Änderungen speichern</b><br>
   Speichere die Datei und schließe den Editor.

5. <b>Server neustarten</b><br>
   Starte den Minecraft Server neu, damit die Änderung übernommen wird.
