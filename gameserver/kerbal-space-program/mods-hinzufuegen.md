---
description: Mods auf einem Kerbal Space Program Server hinzufügen
---

# So fügst du Mods zu deinem Kerbal Space Program Server hinzu

Mods laufen bei Kerbal Space Program ausschließlich im Spiel selbst – der DarkMultiPlayer-Server lädt **keine KSP-Mods**. Seine Aufgabe ist eine andere: Er legt über die Datei `mod-control.txt` fest, welche Mods die Spieler verwenden dürfen, und kann optional ein fertiges Modpack an sie verteilen.

:::: danger Wichtig
Alle Spieler brauchen dieselben Mods lokal in ihrem Ordner `GameData`. Fehlt einem Spieler eine Mod aus der Liste des Servers oder hat er eine zusätzliche installiert, wird die Verbindung abgelehnt.
::::

:::: warning Achtung
Erstelle vor Änderungen an der Mod-Liste ein [Backup](backup-erstellen.md). Schiffe, die mit Bauteilen einer Mod gebaut wurden, funktionieren nicht mehr, sobald diese Mod entfernt wird.
::::

## Mod-Liste erzeugen und hochladen

Die Mod-Liste erzeugst du nicht von Hand, sondern im Spiel: Der DMP-Client liest deinen `GameData`-Ordner aus und schreibt daraus die fertige Datei.

1. <b>KSP mit den gewünschten Mods einrichten</b><br>
   Installiere auf deinem PC alle Mods, die auf dem Server erlaubt sein sollen, und starte Kerbal Space Program.

2. <b>Mod Control öffnen</b><br>
   Klicke im DMP-Fenster im Hauptmenü auf **Options** und wechsle auf den Reiter **Advanced**. Dort findest du den Abschnitt **Mod Control**.

3. <b>Datei erzeugen</b><br>
   Klicke im Abschnitt **Mod Control** auf **Whitelist** oder **Blacklist**. Die Datei wird direkt in deinem KSP-Ordner abgelegt:

   ```
   [KSP-Ordner]/mod-control.txt
   ```

4. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Mod-Liste wird nur beim Serverstart eingelesen.

5. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

6. <b>Datei hochladen</b><br>
   Lade die Datei in folgendes Verzeichnis hoch und ersetze die vorhandene Datei:

   ```
   /Config/mod-control.txt
   ```

7. <b>Server starten</b><br>
   Starte deinen Server. Ab jetzt prüft er beim Beitritt jedes Spielers dessen `GameData`-Ordner gegen diese Liste.

:::: info Whitelist oder Blacklist?
| Variante | Bedeutung |
|----------|-----------|
| **Whitelist** | Nur die Mods aus deiner Installation sind erlaubt. Der übliche Weg für einen Server mit fester Mod-Liste. |
| **Blacklist** | Spieler dürfen beliebige Mods verwenden. Nur ausdrücklich gesperrte Dateien und Ressourcen sind verboten. |
::::

:::: info Hinweis
Fehlt die Datei, erzeugt dein Server beim Start automatisch eine `mod-control.txt`, die nur die Original-Bauteile des Spiels enthält. Ist dabei noch eine alte Datei vorhanden, benennt er sie vorher in `mod-control.txt.bak` um. Beim Hochladen per SFTP passiert das nicht – dort überschreibst du die Datei selbst, sichere sie also vorher.
::::

## Aufbau der mod-control.txt

Die Datei besteht aus Abschnitten, die jeweils mit einem `!` beginnen. Zeilen mit `#` am Anfang sind Kommentare.

| Abschnitt | Bedeutung |
|-----------|-----------|
| `!required-files` | Dateien, die jeder Spieler zwingend installiert haben muss |
| `!optional-files` | Dateien, die installiert sein dürfen, aber nicht müssen |
| `!partslist` | Alle Bauteile, die auf dem Server verwendet werden dürfen |
| `!resource-whitelist` | Nur die aufgeführten Dateien sind erlaubt (Whitelist-Variante) |
| `!resource-blacklist` | Die aufgeführten Dateien sind verboten (Blacklist-Variante) |

Einträge werden als Pfad relativ zum Ordner `GameData` geschrieben, optional gefolgt von einem Prüfwert:

```
DarkMultiPlayer/Plugins/DarkMultiPlayer.dll=6a1c9a...
```

:::: warning Achtung
`!resource-whitelist` und `!resource-blacklist` schließen sich gegenseitig aus. Es darf immer nur einer der beiden Abschnitte Einträge enthalten.
::::

## Mod-Kontrolle einstellen

Wie streng dein Server prüft, steuert der Wert `modControl` in der Datei `/Config/Settings.txt`. Stoppe deinen Server, bevor du die Datei bearbeitest.

| Wert | Bedeutung |
|------|-----------|
| `ENABLED_STOP_INVALID_PART_SYNC` | Standard. Schiffe mit unerlaubten Bauteilen werden nicht mit den anderen Spielern synchronisiert. |
| `ENABLED_STOP_INVALID_PART_LAUNCH` | Schiffe mit unerlaubten Bauteilen lassen sich gar nicht erst starten. |
| `DISABLED` | Keine Prüfung. Jeder Spieler kann beliebige Mods verwenden. |

:::: danger Wichtig
Schalte die Mod-Kontrolle nur ab, wenn du weißt, was du tust. Ohne Prüfung landen Schiffe mit Bauteilen im Universum, die andere Spieler nicht laden können.
::::

## Modpack an die Spieler verteilen

Optional kann dein Server den Spielern die passenden Mods bereitstellen, damit nicht jeder sie einzeln zusammensuchen muss.

1. <b>Modus wählen</b><br>
   Öffne die **Verwaltung**, wechsle zu den **Einstellungen** und setze das Feld **Mod Pack Mode**:

   | Wert | Bedeutung |
   |------|-----------|
   | `NONE` | Standard. Der Server verteilt keine Mods. |
   | `CKAN` | Der Server schickt den Spielern eine CKAN-Datei mit der Mod-Liste. |
   | `GAMEDATA` | Der Server schickt den Spielern die kompletten Mod-Dateien. |

2. <b>Modpack hochladen</b><br>
   Lade die Mods per [SFTP](../sftp-verbindung-herstellen.md) in das passende Verzeichnis:

   ```
   /Config/GameData/            (bei GAMEDATA)
   /Config/DarkMultiPlayer.ckan (bei CKAN)
   ```

   :::: tip Tipp
   Alternativ lädt ein Admin sein komplettes `GameData` direkt aus dem Spiel hoch: Im DMP-Chat genügt der Befehl `/upload`. Ohne Adminrechte erscheint die Meldung *"You are not an admin, unable to upload"* – siehe [Admin hinzufügen](admin-hinzufuegen.md).
   ::::

3. <b>Dateiliste aktualisieren</b><br>
   Hast du die Dateien per SFTP hochgeladen, führe anschließend in der **Konsole** deiner Verwaltung folgenden Befehl aus:

   ```
   /reloadmods
   ```

   :::: info Hinweis
   Bleibt der Befehl aus, melden die Spieler die Meldung *"DMP Server has an out of date hash list. Tell the admin to run /reloadmods"*.
   ::::

4. <b>Spieler informieren</b><br>
   Zum Installieren benötigen die Spieler das Zusatzprogramm **DMP Modpack Updater** von [d-mp.org/downloads](https://d-mp.org/downloads). Kerbal Space Program muss dabei geschlossen sein – der Ordner `GameData` lässt sich im laufenden Spiel nicht verändern.

:::: warning Achtung
Die Werte **Mod Pack Mode**, **Warp Mode**, **Game Mode**, **Game Difficulty** und **Server Name** werden bei jedem Serverstart aus der Verwaltung in die `Settings.txt` geschrieben. Ändere sie deshalb ausschließlich in der **Verwaltung** – eine Änderung direkt in der Datei wird beim nächsten Start überschrieben.
::::

:::: info Hinweis
Die Modpack-Verteilung ersetzt die `mod-control.txt` nicht. Sie sorgt nur dafür, dass die Spieler an die Dateien kommen – geprüft wird weiterhin über die Mod-Liste.
::::
