---
description: 'Anleitung zum Hochladen Deiner Eigenen Welt auf einen Enshrouded-Server'
---

# Savegame hochladen

## Voraussetzungen

- Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
    - Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. <b>Erkenne Deine lokalen und Serverdateien</b>
   - Links siehst Du Deine lokalen Dateien, rechts die Dateien Deines Servers.

2. <b>Dateien vorbereiten</b>
   - Lokalisiere Deine Enshrouded-Spielspeicherdateien auf Deinem Computer. Diese befinden sich typischerweise im Steam `userdata` Ordner unter: `C:\Program Files (x86)\Steam\userdata\[DeineSteamID]\1203620\remote`.
     - Ersetze `[DeineSteamID]` mit Deiner SteamID64.
   - Identifiziere die für Deine Welt repräsentativen Dateien, üblicherweise benannt wie `3bd85c7d` und `3bd85c7d_info`.

3. <b>Dateien umbenennen</b>
   - Benenne die Dateien für die Kompatibilität mit Deinem Server um. `3bd85c7d` sollte in `3ad85aea` umbenannt werden und `3bd85c7d_info` in `3ad85aea_info`.

4. <b>Server stoppen</b>
   - Stoppe Deinen Server über das Webinterface, um zu verhindern, dass der Server Deinen Upload automatisch überschreibt.

6. <b>Zum Speicherordner navigieren</b>
   - Navigiere zu Speicherordner `savegame`.
     - Falls Du den Standardordner geändert hast, navigiere zum von Dir gewählten Ordner für die Speicherungen.

7. <b>Dateien hochladen</b>
   - Übertrage die umbenannten Dateien (`3ad85aea` und `3ad85aea_info`) von Deinem Computer in das Speicherverzeichnis des Servers, wobei bei Bedarf vorhandene Dateien ersetzt werden.

8. <b>Starte den Server neu</b>
   - Starte Deinen Enshrouded Server neu. Dein Server sollte nun Deine Welt laden, sodass Du Dein Abenteuer dort fortsetzen kannst, wo Du aufgehört hast. Alle Fortschritte bleiben erhalten und sind nun mit Freunden oder der Gemeinschaft teilbar.

### Jetzt kannst Du Dein Enshrouded-Abenteuer auf dem Server fortsetzen! Mit diesen Schritten solltest Du Deinen Enshrouded-Spielstand erfolgreich auf den Server übertragen können
