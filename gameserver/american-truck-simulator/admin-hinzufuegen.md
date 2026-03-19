---
description: Admins auf einem American Truck Simulator Server hinzufügen
---

# So fügst du einen Admin auf deinem American Truck Simulator Server hinzu

## Voraussetzungen

- Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
    - Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.
- Steam64_ID der Benutzer, die als Admins hinzugefügt werden sollen
- Texteditor (wie Notepad, Notepad++, Windows Editor oder Visual Studio Code)

## Schritte

1. <b>Konfigurationsdatei suchen</b><br>
   Stelle eine SFTP-Verbindung zu Deinem Server her.
   - Navigiere zum Pfad "`.local/share/American Truck Simulator`".

2. <b>Konfigurationsdatei bearbeiten</b><br>
   Suche die Datei namens "`server_config.sii`".
   - Öffne diese Datei in einem Texteditor.

3. <b>Admins hinzufügen</b><br>
   Suche nach der Zeile, die mit "`moderator_list:`" beginnt.
    - Ändere die Anzahl in der Zeile "`moderator_list:`", um der Anzahl der Admins zu entsprechen.
    - Füge die Steam64\_IDs der Benutzer hinzu, die Du als Admin hinzufügen möchtest. Jede Steam64\_ID sollte in einer neuen Zeile stehen und wie folgt aussehen: "`moderator_list[X]:  Steam64_ID`". Dabei steht X für die entsprechende Stelle in der Liste.

      Ein Beispiel könnte wie folgt aussehen:

      ```
      moderator_list: 3
      moderator_list[0]: Steam64_ID
      moderator_list[1]: Steam64_ID
      moderator_list[2]: Steam64_ID
      ```

4. <b>Änderungen speichern</b><br>
   Speichere die Änderungen an der Konfigurationsdatei und schließe den Texteditor.
   - Starte den Server neu über das Webinterface.

### Das war's! Mit diesen Schritten solltest Du in der Lage sein, neue Admins auf Deinem American Truck Simulator Server hinzuzufügen. Viel Spaß beim Spielen
