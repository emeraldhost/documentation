---
description: Mods auf einem Euro Truck Simulator 2 Server hinzufügen
---

# Mods hinzufügen

## Voraussetzungen

* Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
  * Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. <b>Öffne den Mod-Manager im Spiel</b>
    * Starte Euro Truck Simulator 2.
    * Klicke im Hauptmenü auf den **Mod-Manager**.

2. <b>Aktiviere die gewünschten Mods</b>
    * Wähle die Mods aus, die Du auf Deinem Server nutzen möchtest.

3. <b>Starte das Spiel</b>
    * Beginne ein Spiel und klicke in der Truckauswahl auf "**Drive**", um in die Spielwelt zu gelangen.

4. <b>Exportiere die Server-Datenpakete</b>
    * Öffne die **Konsole** im Spiel (drucke auf `~` oder `` ` ``).
    * Gib den Befehl "`export_server_packages`" ein.
    * Schließe anschließend das Spiel.

5. <b>Lade die Datenpakete auf den Server</b>
    * Stelle eine SFTP-Verbindung zu Deinem Server her.
    * Navigiere zum Pfad "`.local/share/Euro Truck Simulator 2`".
    * Lade die Dateien "`server_packages.sii`" und "`server_packages.dat`" von Deinem lokalen Datenordner auf Deinen Server hoch.

6. <b>Starte den Server und das Spiel</b>
    * Stoppe Deinen Server über das Webinterface.
    * Starte ihn anschließend wieder.
    * Starte dann das Spiel.

7. <b>Überprüfe die Funktionsfähigkeit der Mods</b>
    * Deine Mods sollten nun im Spiel funktionieren.
    * Genieße Dein Spielerlebnis!

### Das war's! Mit diesen Schritten solltest Du in der Lage sein, Mods auf Deinem Euro Truck Simulator 2 Server zu installieren und zu verwenden.