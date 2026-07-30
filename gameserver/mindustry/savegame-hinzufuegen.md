---
description: Savegame auf einem Mindustry Server hinzufügen
---

# So fügst du ein Savegame zu deinem Mindustry Server hinzu

Ein Spielstand ist in Mindustry eine einzelne Datei mit der Endung `.msav`. Dein Server liest sie aus dem Ordner `/config/saves/`.

:::: info Hinweis
Es gibt **kein Feld für einen Weltnamen** in einer Konfiguration. Der sogenannte Slot ist schlicht der Dateiname ohne die Endung `.msav`. Die Datei `meinewelt.msav` lädst du also mit dem Befehl `load meinewelt`.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Läuft eine Partie, überschreibt der Server deine Datei sonst unter Umständen durch einen Auto-Save.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /config/saves/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, lege ihn an. Die Schreibweise muss exakt `config/saves` lauten – dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung.
   ::::

4. <b>Datei hochladen</b><br>
   Lade deine `.msav`-Datei direkt in diesen Ordner hoch. Lege keine Unterordner an – der Server liest ausschließlich Dateien, die direkt im Ordner liegen.

   :::: tip Tipp
   Verwende einen kurzen Dateinamen ohne Leerzeichen, zum Beispiel `meinewelt.msav`. Diesen Namen gibst du später ohne Endung als Slot an.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung.

6. <b>Konsole öffnen</b><br>
   Öffne in der Verwaltung die **Konsole** deines Servers.

7. <b>Spielstände auflisten</b><br>
   Kontrolliere, ob dein Spielstand erkannt wurde:

   ```
   saves
   ```

   Der Server listet alle gefundenen Slots ohne Endung auf.

8. <b>Spielstand laden</b><br>
   Läuft bereits eine Partie, beende sie zuerst mit `stop`. Lade anschließend deinen Spielstand:

   ```
   load meinewelt
   ```

   Danach hostet dein Server den geladenen Stand und Spieler können beitreten.

:::: warning Achtung
Mit dem Laden eines anderen Spielstands ersetzt du die laufende Partie. Erstelle vorher ein [Backup](backup-erstellen.md) oder lade den bisherigen Stand herunter, falls du zurückwechseln möchtest.
::::

:::: danger Wichtig
Meldet der Server `No (valid) save data found for slot.`, passt entweder der Slotname nicht oder die Datei ist beschädigt beziehungsweise unvollständig hochgeladen. Prüfe die Schreibweise mit `saves` und lade die Datei im Zweifel erneut hoch.
::::

## Spielstand automatisch beim Start laden

Damit dein Server nach einem Neustart selbstständig denselben Spielstand lädt, hinterlegst du einen Startbefehl in der **Konsole**:

```
config startCommands load meinewelt
```

:::: warning Achtung
Setze den Befehl **nicht** in Anführungszeichen. Mindustry übernimmt alles hinter dem Einstellungsnamen wortwörtlich – Anführungszeichen würden mitgespeichert und der Startbefehl beim nächsten Start ins Leere laufen.
::::

:::: info Hinweis
Mehrere Startbefehle trennst du durch ein Komma, zum Beispiel `config startCommands load meinewelt,pause off`. Die Einstellung wird sofort gespeichert und gilt ab dem nächsten Serverstart.
::::

## Lokalen Spielstand finden

Deine Einzelspieler-Spielstände liegen auf deinem PC im Datenverzeichnis von Mindustry:

| System | Pfad |
|--------|------|
| Windows | `%AppData%\Mindustry\saves\` |
| Linux | `~/.local/share/Mindustry/saves/` |
| macOS | `~/Library/Application Support/Mindustry/saves/` |

:::: warning Steam-Version
Die Steam-Version legt ihr Datenverzeichnis **im Spielordner** ab. Die Spielstände findest du dort unter `saves/saves/` innerhalb deines Mindustry-Installationsordners und nicht in den oben genannten Pfaden.
::::

:::: danger Wichtig
Server- und Einzelspieler-Spielstände nutzen dasselbe Format `.msav`. Ob sich ein Einzelspieler-Spielstand 1:1 auf einem Dedicated Server weiterspielen lässt, ist jedoch nicht offiziell dokumentiert. Arbeite deshalb ausschließlich mit Kopien und lege vorher ein [Backup](backup-erstellen.md) an.
::::

## Eigene Karte hinzufügen

Karten sind kein Spielstand, sondern ein eigener Dateityp – sie liegen in einem anderen Ordner, nutzen aber ebenfalls die Endung `.msav`.

1. <b>Karte hochladen</b><br>
   Lade die `.msav`-Datei deiner Karte per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /config/maps/
   ```

2. <b>Karten neu einlesen</b><br>
   Gib in der **Konsole** deiner Verwaltung ein:

   ```
   reloadmaps
   ```

3. <b>Karte prüfen</b><br>
   Lass dir alle eigenen Karten anzeigen:

   ```
   maps custom
   ```

4. <b>Karte starten</b><br>
   Beende eine eventuell laufende Partie mit `stop` und starte anschließend deine Karte:

   ```
   host meine_karte
   ```

   :::: info Hinweis
   Leerzeichen im Kartennamen darfst du als Unterstrich schreiben, Groß- und Kleinschreibung spielt beim Kartennamen keine Rolle. Meldet der Server `No map with name '...' found.`, kontrolliere den Namen mit `maps custom`.
   ::::

:::: warning Achtung
Startest du eine Karte mit `host`, beginnt eine neue Partie. Dein bisheriger Fortschritt bleibt nur erhalten, wenn du ihn vorher mit `save <Slotname>` gesichert hast.
::::
