---
description: Savegame auf einem StarRupture Server hinzufügen
---

# So fügst du ein Savegame zu deinem StarRupture Server hinzu

Ein Spielstand von StarRupture besteht aus einem **Ordner**, der genauso heißt wie die Session deines Servers, und darin aus **zwei Dateien mit demselben Basisnamen**: `AutoSave0.sav` und `AutoSave0.met`. Zusätzlich musst du den Namen der Session in der Konfigurationsdatei `DSSettings.txt` eintragen, damit der Server den Spielstand findet und lädt.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

## Aufbau des Spielstands

| Pfad | Inhalt |
|------|--------|
| `/StarRupture/Saved/SaveGames/<SessionName>/AutoSave0.sav` | Der eigentliche Spielstand mit Welt, Basis und Fortschritt |
| `/StarRupture/Saved/SaveGames/<SessionName>/AutoSave0.met` | Die zugehörige Metadatei – gehört zwingend zur `.sav` |
| `/StarRupture/Saved/SaveGames/SaveData.dat` | Übergeordnete Datei, die der Server selbst verwaltet |

:::: info Hinweis
`.sav` und `.met` gehören immer zusammen und müssen denselben Basisnamen tragen. Fehlt eine der beiden Dateien oder weichen die Namen voneinander ab, lädt der Server den Spielstand nicht.
::::

## Die Datei DSSettings.txt

Welche Session der Server verwendet und ob er einen vorhandenen Spielstand lädt oder eine neue Welt erzeugt, steuerst du in der Datei `DSSettings.txt` im Hauptverzeichnis deines Servers:

```
/DSSettings.txt
```

Der Inhalt ist im JSON-Format aufgebaut:

```
{
  "SessionName": "MeinServer",
  "SaveGameName": "AutoSave0.sav",
  "SaveGameInterval": "300",
  "StartNewGame": "false",
  "LoadSavedGame": "true"
}
```

:::: warning Achtung
Alle Werte stehen in Anführungszeichen – auch Zahlen und `"true"`/`"false"`. Trägst du sie ohne Anführungszeichen ein, kann der Server die Datei nicht auswerten.
::::

| Wert | Bedeutung |
|------|-----------|
| `SessionName` | Name der Session – entspricht exakt dem Ordnernamen unter `Saved/SaveGames/`, maximal 20 Zeichen |
| `SaveGameName` | Dateiname des Spielstands, standardmäßig `AutoSave0.sav` |
| `SaveGameInterval` | Abstand der automatischen Speicherung in Sekunden, standardmäßig `"300"` |
| `StartNewGame` | `"true"` erzeugt beim Start eine komplett neue Welt |
| `LoadSavedGame` | `"true"` lädt den vorhandenen Spielstand der eingetragenen Session |

:::: warning Achtung
Werden `SessionName`, `StartNewGame` oder `LoadSavedGame` in deiner **Verwaltung** als Einstellungen angeboten, nimm die Änderungen ausschließlich dort vor. Die `DSSettings.txt` kann beim Serverstart aus diesen Feldern neu geschrieben werden – manuelle Änderungen in der Datei wären dann wieder überschrieben.
::::

## Lokalen Spielstand finden

Deinen eigenen Spielstand vom PC findest du unter:

```
C:\Program Files (x86)\Steam\userdata\<SteamID64>\1631270\remote\Saved\SaveGames\
```

:::: info Hinweis
`1631270` ist die Steam-App-ID von StarRupture. Der Ordner `<SteamID64>` besteht aus einer langen Zahlenfolge – wie du deine ID ermittelst, steht unter [SteamID64 herausfinden](../steamid64-herausfinden.md). Hast du Steam in einem anderen Verzeichnis installiert, liegt der Ordner `userdata` entsprechend dort.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /StarRupture/Saved/SaveGames/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Dateien hochlädst.
   ::::

4. <b>Ordner für die Session anlegen</b><br>
   Lege dort einen Ordner an, der exakt so heißt wie der Wert `SessionName` in deiner `DSSettings.txt`. Der Name darf maximal 20 Zeichen lang sein.

5. <b>Dateien hochladen</b><br>
   Lade die `.sav`-Datei und die zugehörige `.met`-Datei deines Spielstands in diesen Ordner hoch.

6. <b>Dateien umbenennen</b><br>
   Benenne beide Dateien so um, dass sie zum Wert `SaveGameName` passen:

   ```
   AutoSave0.sav
   AutoSave0.met
   ```

   :::: warning Achtung
   Der Basisname muss bei beiden Dateien identisch sein. `AutoSave0.sav` zusammen mit `Spielstand.met` funktioniert nicht.
   ::::

7. <b>DSSettings.txt anpassen</b><br>
   Öffne die Datei `/DSSettings.txt` und setze folgende Werte:

   ```
   "SessionName": "<dein Ordnername>",
   "SaveGameName": "AutoSave0.sav",
   "StartNewGame": "false",
   "LoadSavedGame": "true"
   ```

8. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: danger Wichtig
`StartNewGame` muss auf `"false"` stehen. Bleibt der Wert auf `"true"`, erzeugt der Server bei jedem Start eine frische Welt und überschreibt damit deinen hochgeladenen Spielstand.
::::

## Neue Welt erstellen

Möchtest du stattdessen mit einer komplett neuen Welt beginnen, gehst du so vor:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Neue Welt aktivieren</b><br>
   Öffne die Datei `/DSSettings.txt`, trage den gewünschten `SessionName` ein und setze:

   ```
   "StartNewGame": "true",
   "LoadSavedGame": "false"
   ```

3. <b>Server starten</b><br>
   Starte deinen Server. Er erzeugt jetzt eine neue Welt.

4. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server, siehe [Server beitreten](server-beitreten.md).

5. <b>Welt speichern</b><br>
   Drücke im Spiel `ESC` und wähle **Save**. Erst dadurch wird die neue Welt tatsächlich als Spielstand auf den Server geschrieben.

6. <b>Verbindung trennen und Server stoppen</b><br>
   Verlasse den Server und stoppe ihn anschließend über die Verwaltung.

7. <b>Werte zurücksetzen</b><br>
   Setze in der `/DSSettings.txt` die beiden Werte wieder zurück:

   ```
   "StartNewGame": "false",
   "LoadSavedGame": "true"
   ```

8. <b>Server starten</b><br>
   Starte deinen Server erneut. Ab jetzt wird deine neue Welt bei jedem Start geladen und der Fortschritt bleibt erhalten.

:::: danger Wichtig
Vergiss diesen letzten Schritt nicht. Bleibt `StartNewGame` auf `"true"`, wird deine gerade erstellte Welt beim nächsten Serverstart wieder durch eine frische Welt ersetzt.
::::

:::: info Hinweis
Der Server speichert im Betrieb automatisch. Wie oft, steuert der Wert `SaveGameInterval` in der `DSSettings.txt` – die Angabe erfolgt in Sekunden.
::::
