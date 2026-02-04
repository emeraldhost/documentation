---
description: World Seed auf einem Hytale Server ändern
---

# So änderst du den World Seed auf einem Hytale Server

Der World Seed bestimmt, wie die Welt generiert wird. Mit demselben Seed wird immer dieselbe Welt erzeugt - gleiche Landschaften, Berge und Strukturen an den gleichen Koordinaten.

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So änderst du den World Seed

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zum Ordner `universe/worlds/<weltname>/`. Öffne dort die Datei `config.json`.

3. <b>Seed anpassen</b><br>
   Suche nach der Einstellung `Seed` und ändere den Wert:
   ```json
   "Seed": 123456789
   ```
   Du kannst eine beliebige Zahl als Seed verwenden.

4. <b>Welt-Daten löschen</b><br>
   Lösche den `chunks` Ordner im gleichen Verzeichnis (`universe/worlds/<weltname>/chunks`), damit die Welt mit dem neuen Seed neu generiert wird.

5. <b>Server starten</b><br>
   Starte deinen Server, damit die Welt neu generiert wird.

:::: warning Achtung
Durch das Löschen des `chunks` Ordners gehen alle bisherigen Bauwerke und Fortschritte in dieser Welt verloren. Erstelle vorher ein [Backup](./backup-erstellen.md)!
::::
