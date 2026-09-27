---
description: World Seed auf einem Hytale Server ändern
---

# So änderst du den World Seed auf einem Hytale Server

Der World Seed bestimmt, wie die Welt generiert wird. Mit demselben Seed wird immer dieselbe Welt erzeugt - gleiche Landschaften, Berge und Strukturen an den gleichen Koordinaten.

:::: info Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So zeigst du den aktuellen Seed an

Gib folgenden Befehl in die Konsole deiner Verwaltung ein:
```
world config seed --world <weltname>
```
Die Konsole antwortet zum Beispiel mit `Seed: 1790539101340`. Die Welt, die der Server beim ersten Start anlegt, heißt `default`.

:::: info Hinweis
Einen Befehl zum Ändern des Seeds gibt es nicht. Den Seed änderst du wie unten beschrieben in der Welt-Konfiguration.
::::

## So änderst du den World Seed

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zum Ordner `/universe/worlds/<weltname>/` (für die Standardwelt `/universe/worlds/default/`). Öffne dort die Datei `config.json`.

3. <b>Seed anpassen</b><br>
   Suche nach der Einstellung `Seed` und ändere den Wert:
   ```json
   "Seed": 123456789
   ```
   Du kannst eine beliebige ganze Zahl als Seed verwenden.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.
   ::::

4. <b>Welt-Daten löschen</b><br>
   Lösche den `chunks` Ordner im gleichen Verzeichnis (`/universe/worlds/<weltname>/chunks/`), damit die Welt mit dem neuen Seed neu generiert wird.

5. <b>Server starten</b><br>
   Starte deinen Server, damit die Welt neu generiert wird.

:::: warning Achtung
Durch das Löschen des `chunks` Ordners gehen alle bisherigen Bauwerke und Fortschritte in dieser Welt verloren. Erstelle vorher ein [Backup](backup-erstellen.md)!
::::
