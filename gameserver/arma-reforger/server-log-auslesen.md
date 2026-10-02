---
description: Server-Log eines Arma Reforger Servers in der Konsole mitlesen und die Log-Dateien per SFTP herunterladen
---

# So liest du das Server-Log deines Arma Reforger Servers aus

Das Server-Log protokolliert, was dein Arma Reforger Server tut: den Start, das Laden von Mods und Szenario sowie Fehler im laufenden Betrieb. Bei Problemen ist es die erste Anlaufstelle – und genau das, was der Support von dir braucht.

Du kommst auf zwei Wegen an das Log: live in der Konsole der Verwaltung oder als Dateien per SFTP.

## Log live in der Konsole mitlesen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers und wechsle zur **Konsole**.

2. <b>Server starten</b><br>
   Starte deinen Server. Die Konsole gibt ab jetzt die Ausgabe des Servers direkt aus.

3. <b>Ausgabe verfolgen</b><br>
   Lies die Meldungen von oben nach unten mit. Achte besonders auf die Zeilen kurz vor einem Absturz oder einem fehlgeschlagenen Start – dort steht meistens die Ursache.

:::: info Hinweis
Die Konsole dient bei Arma Reforger nur zum Mitlesen. Der Server kennt keine Konsolenbefehle, Eingaben in der Konsole haben daher keine Wirkung.
::::

## Log-Dateien herunterladen

Arma Reforger speichert seine Logs im Profilordner des Servers. Bei jedem Serverstart legt der Server dort einen eigenen Unterordner an, dessen Name Datum und Uhrzeit des Starts enthält.

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Ordner logs öffnen</b><br>
   Öffne im Hauptverzeichnis den Ordner `profile`, darin den gleichnamigen Unterordner `profile` und dort den Ordner `logs`:

   ```
   /profile/profile/logs/
   ```

3. <b>Passenden Start auswählen</b><br>
   Öffne den Unterordner des Serverstarts, der dich interessiert. Den neuesten Start erkennst du am jüngsten Datum und der spätesten Uhrzeit im Ordnernamen.

4. <b>Dateien herunterladen</b><br>
   Lade die `.log`-Dateien aus diesem Ordner auf deinen PC herunter und öffne sie mit einem beliebigen Texteditor.

:::: warning Achtung
Arma Reforger behält standardmäßig nur die 10 neuesten Logs, ältere werden automatisch gelöscht. Lade die Dateien deshalb am besten direkt nach einem Problem herunter, bevor sie durch weitere Neustarts verloren gehen.
::::

## Worauf du im Log achten solltest

### Fehler nach einer Änderung an der config.json

Startet dein Server nicht mehr, nachdem du die `config.json` bearbeitet hast, sieh dir die letzten Zeilen in der Konsole oder im neuesten Log an. Dort findest du die Fehlermeldung, an der der Start abgebrochen ist.

:::: tip Tipp
Häufigste Ursache ist ungültiges JSON. Prüfe die Datei mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
::::

### Fehler beim Herunterladen von Mods

Die Mods aus der `config.json` lädt dein Server beim Start herunter. Fehlt ein Mod im Spiel oder bleibt der Start beim Laden der Mods hängen, suche im Log nach Fehlermeldungen rund um den Download. Prüfe danach die Einträge in der `config.json`, wie unter [Mods hinzufügen](mods-hinzufuegen.md) beschrieben.

### Liste der verfügbaren Szenarien

Bei jedem Start schreibt dein Server die Pfade der Szenario-Dateien (`.conf`), die er findet, ins Log – das sind die im Spiel enthaltenen Szenarien. Darüber findest du die genaue Szenario ID, die du in das Feld **Szenario ID** einträgst.

:::: tip Beispiel
```
{ECC61978EDCC2B5A}Missions/23_Campaign.conf
```
::::

:::: info Hinweis
Workshop-Szenarien tauchen in dieser Liste nicht auf. Die Szenario ID eines Workshop-Szenarios findest du auf der Workshop-Seite im Tab **Scenarios**. Mehr dazu unter [Szenario ändern](szenario-aendern.md).
::::

### Performance-Statistiken

Setzt du in den **Einstellungen** das Feld **[Advanced] Log FPS Interval** auf einen Wert größer als 0, schreibt dein Server in diesem Abstand (in Sekunden) eine Zeile mit Performance-Werten ins Log, z.B.:

```
FPS: 60.0, frame time (avg: 16.7 ms, min: 9.3 ms, max: 23.7 ms), Mem: 3291106 kB, Player: 2, AI: 104, Veh: 0 (17), Proj (S: 12, M: 0, G: 0 | 12), RplItemsS: 410, RplItemsC0: 17068
```

Dort siehst du unter anderem die aktuellen Server-FPS, die Zahl der Spieler und die Zahl der KI-Einheiten. Wie du diese Werte einordnest, erfährst du unter [Performance verbessern](performance-verbessern.md).

## Wenn du nicht weiterkommst

Wirst du aus dem Log nicht schlau, hänge die `.log`-Dateien des betroffenen Serverstarts einfach an ein [Support-Ticket](https://emeraldhost.de/de/support) an und beschreibe kurz, wann das Problem aufgetreten ist. Damit können wir gezielt nachsehen.

:::: info Hinweis
Lösungen für typische Fehler findest du unter [Häufige Probleme beheben](server-probleme-beheben.md).
::::
