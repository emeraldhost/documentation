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

Die Hytale-Spielstände findest du hier:

| Betriebssystem | Pfad |
| -------------- | ---- |
| Windows | `%appdata%\Hytale\UserData\Saves` |
| Linux | `$XDG_DATA_HOME/Hytale/UserData/Saves` |
| macOS | `~/Library/Application Support/Hytale/UserData/Saves` |

Jeder Spielstand hat dort einen eigenen Ordner. Navigiere innerhalb deines Spielstands zu `universe/worlds/`, um die Welt-Ordner zu finden.

:::: info Hinweis
Spielst du auf der Pre-Release-Version von Hytale, liegen deine Spielstände nicht unter `UserData`, sondern im Ordner `data/pre-release/` innerhalb des Hytale-Ordners. Eine solche Welt lässt sich auf einem Server mit der Patchline `release` unter Umständen nicht öffnen. Die Patchline deines Servers stellst du in der **Verwaltung** unter **Einstellungen** im Feld **Hytale Patchline** ein.
::::

## So lädst du die Welt hoch

:::: info Hinweis
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
   Der Name des Ordners ist später der Name der Welt.

4. <b>Server starten</b><br>
   Starte deinen Server. Er lädt beim Start automatisch alle Welten aus `/universe/worlds/`, also auch deine hochgeladene Welt.

:::: warning Achtung
Gibt es auf dem Server bereits einen Ordner mit demselben Namen (die Standardwelt des Servers heißt `default`), benenne deinen Welt-Ordner vor dem Hochladen um. Sonst überschreibst du die Dateien der bestehenden Welt.
::::

## So setzt du die Welt als Standard

Damit Spieler beim Beitreten in deiner hochgeladenen Welt landen, musst du sie als Standardwelt festlegen.

### Per Konsole

1. <b>Welt prüfen</b><br>
   Gib folgenden Befehl in die Konsole ein, um alle geladenen Welten anzuzeigen:
   ```
   world list
   ```
   Deine hochgeladene Welt sollte hier mit dem Namen ihres Ordners erscheinen.

2. <b>Als Standard setzen</b><br>
   Damit Spieler beim Beitreten automatisch in dieser Welt spawnen:
   ```
   world setdefault <weltname>
   ```
   Ersetze `<weltname>` durch den Namen des hochgeladenen Ordners.

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/world setdefault <weltname>`).
::::

### Per Konfiguration

Du kannst die Standard-Welt auch manuell in der Server-Konfiguration setzen:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>config.json öffnen</b><br>
   Öffne die `config.json` im Hauptverzeichnis deines Servers.

3. <b>Standard-Welt ändern</b><br>
   Suche nach dem `Defaults` Block und ändere den `World` Wert. Die übrigen Einträge im Block lässt du unverändert:
   ```json
   "Defaults": {
     "World": "meinewelt",
     "GameMode": "Adventure"
   }
   ```

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Konfiguration nicht mehr laden kann.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server.

:::: info Hinweis
Spieler, die schon einmal auf dem Server waren, betreten ihn weiterhin in der Welt, in der sie sich zuletzt aufgehalten haben. Die Standardwelt gilt für neue Spieler und für Spieler, deren letzte Welt nicht mehr geladen ist. Mit Admin-Rechten wechselst du im Spiel mit `/tp world <weltname>` in eine andere Welt.
::::

## Spielerdaten übertragen

Wenn du auch deinen Spielerfortschritt übertragen möchtest (Inventar, Position, etc.):

1. Kopiere den Inhalt des Ordners `universe/players/` aus deinem Singleplayer-Spielstand.
2. Lade ihn bei gestopptem Server in den Ordner `/universe/players/` hoch.

:::: warning Achtung
Lade nur die Welt-Ordner hoch, nicht den gesamten `universe/` Ordner - sonst werden bestehende Server-Welten überschrieben.
::::
