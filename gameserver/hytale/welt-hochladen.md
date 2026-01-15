---
description: Singleplayer-Welt auf einen Hytale Server hochladen
---

# So lädst du eine Singleplayer-Welt auf deinen Hytale Server hoch

Du kannst deine Singleplayer-Welt auf deinen Server übertragen und mit Freunden weiterspielen.

## So findest du deine Welt-Dateien

### Methode 1: Über Hytale

1. <b>Hytale öffnen</b><br>
   Öffne Hytale und gehe zu "Worlds".

2. <b>Ordner öffnen</b><br>
   Klicke mit Rechtsklick auf deine Welt und wähle "Open Folder".

3. <b>Welt-Ordner kopieren</b><br>
   Navigiere zu `universe/worlds/` - hier findest du die Ordner deiner Welten. Kopiere den gewünschten Welt-Ordner.

### Methode 2: Manuell

Die Hytale-Speicherdateien findest du hier:

| Betriebssystem | Pfad |
| -------------- | ---- |
| Windows | `%appdata%\Hytale\Saves` |
| Linux | `$XDG_DATA_HOME/Hytale/Saves` |
| macOS | `~/Application Support/Hytale/Saves` |

Navigiere innerhalb deines Spielstands zu `universe/worlds/` um die Welt-Ordner zu finden.

## So lädst du die Welt hoch

:::: tip Hinweis
Stoppe deinen Server bevor du Dateien hochlädst, da diese sonst vom Server überschrieben werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Welt-Ordner hochladen</b><br>
   Lade den kopierten Welt-Ordner in folgendes Verzeichnis hoch:
   ```
   /universe/worlds/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server.

## So aktivierst du die Welt

Nach dem Hochladen musst du die Welt laden und als Standard setzen.

### Per Konsole

1. <b>Welt laden</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   world load <weltname>
   ```
   Ersetze `<weltname>` durch den Namen des hochgeladenen Ordners.

2. <b>Als Standard setzen</b><br>
   Damit Spieler beim Beitreten automatisch in dieser Welt spawnen:
   ```
   world setdefault <weltname>
   ```

:::: tip Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/world load <weltname>`).
::::

### Per Konfiguration

Du kannst die Standard-Welt auch manuell in der Server-Konfiguration setzen:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>config.json öffnen</b><br>
   Öffne die `config.json` im Hauptverzeichnis deines Servers.

3. <b>Standard-Welt ändern</b><br>
   Suche nach dem `Defaults` Block und ändere den `World` Wert:
   ```json
   "Defaults": {
     "World": "meinewelt",
     "GameMode": "Adventure"
   }
   ```

4. <b>Server starten</b><br>
   Starte deinen Server.

## Spielerdaten übertragen

Wenn du auch deinen Spielerfortschritt übertragen möchtest (Inventar, Position, etc.):

1. Kopiere den Inhalt des `players/` Ordners aus deinem Singleplayer-Spielstand.
2. Lade ihn in den `players/` Ordner auf dem Server hoch.

:::: warning Achtung
Lade nur die Welt-Ordner hoch, nicht den gesamten `universe/` Ordner - sonst werden bestehende Server-Welten überschrieben.
::::
