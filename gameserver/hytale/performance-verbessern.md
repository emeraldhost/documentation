---
description: Performance auf einem Hytale Server verbessern
---

# So verbesserst du die Performance auf einem Hytale Server

## Überblick

Die Performance eines Hytale-Servers kann durch verschiedene Faktoren beeinflusst werden, darunter die Anzahl der Spieler, die Größe der geladenen Welt und die Server-Konfiguration. In diesem Artikel zeigen wir dir, wie du die Performance deines Hytale-Servers optimieren kannst.

:::: info Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So optimierst du die Konfiguration auf einem Hytale Server

Wenn du kein Plugin installieren möchtest, kannst du die Server-Performance auch durch Anpassung der Konfigurationsdatei verbessern. Die wichtigste Einstellung hierfür ist der **MaxViewRadius**. Der View-Radius bestimmt, wie viele Chunks um einen Spieler herum geladen werden. Ein kleinerer Wert reduziert die Serverbelastung erheblich.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>MaxViewRadius finden</b><br>
   Suche nach der Einstellung `MaxViewRadius` in der `config.json`.

4. <b>Wert anpassen</b><br>
   Reduziere den Wert, um die Performance zu verbessern:

   | Wert | Empfehlung |
   | ---- | ---------- |
   | 32 | Standard und Maximum - hohe Serverbelastung |
   | 16 | Gute Balance zwischen Sichtweite und Performance |
   | 12 | Empfehlung von Hytale für Performance und Gameplay (384 Blöcke) |
   | 10 | Niedrig - für Server mit vielen Spielern oder wenig RAM |

5. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

:::: tip Tipp
Du kannst den Wert auch ohne Neustart über die Konsole der Verwaltung ändern, z.B. mit `maxviewradius 12`. Mehr dazu erfährst du unter [Max View Radius ändern](max-view-radius-aendern.md).
::::

## So passt du die Startparameter auf einem Hytale Server an

Über die Verwaltung kannst du in den Einstellungen zusätzliche Startparameter hinterlegen. So kannst du z.B. eigene Garbage Collector Parameter hinzufügen, um den Server weiter zu optimieren.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu **Einstellungen**.

3. <b>Startparameter anpassen</b><br>
   Füge im Feld **Zusätzliche Startparameter** deine gewünschten Parameter hinzu.
   ```
   -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200
   ```

4. <b>Server neustarten</b><br>
   Starte deinen Server neu, damit die Änderungen übernommen werden.

### Standard Garbage Collector Parameter

Folgende Parameter sind standardmäßig bereits konfiguriert:

| Parameter | Beschreibung |
| --------- | ------------ |
| `-XX:+UseG1GC` | Aktiviert den G1 Garbage Collector, der für Server mit viel RAM optimiert ist |
| `-XX:+ParallelRefProcEnabled` | Beschleunigt die Referenzverarbeitung durch Parallelisierung |
| `-XX:MaxGCPauseMillis=200` | Begrenzt Garbage Collection Pausen auf maximal 200ms |

:::: tip Tipp
Die Standardwerte sind für die meisten Server bereits optimal. Ändere diese nur, wenn du weißt was du tust.
::::

## Empfohlenes Performance-Plugin für Hytale Server

Zur Stabilisierung deines Servers empfehlen wir das Plugin **Nitrado PerformanceSaver**. Es wird auch im offiziellen Server-Handbuch von Hytale empfohlen.

### Download

Das Plugin kann hier heruntergeladen werden: [Performance Saver auf CurseForge](https://www.curseforge.com/hytale/mods/nitrado-performancesaver)

### Performance-Plugin installieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Plugin herunterladen</b><br>
   Lade die .jar Datei des Plugins von CurseForge herunter.

3. <b>Plugin hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die .jar Datei in den `mods/`-Ordner hoch.

4. <b>Server starten</b><br>
   Starte deinen Server.

### Performance Saver

Das Performance Saver Plugin bringt folgende Vorteile:

- **TPS-Limitierung** - Begrenzt die Ticks pro Sekunde intelligent (20 TPS mit Spielern, 5 TPS ohne Spieler)
- **Dynamische View-Radius-Anpassung** - Reduziert den Sichtbereich bei hoher Last automatisch
- **Automatische Garbage Collection** - Triggert die Speicherbereinigung bei Chunk-Entladungen

Die Einstellungen des Plugins findest du nach dem ersten Start in der Datei `mods/Nitrado_PerformanceSaver/config.json`.

## So installierst du das Spark Plugin auf einem Hytale Server

Das Spark Plugin ist ein Performance-Profiler, mit dem du Lag-Ursachen auf deinem Server analysieren kannst. Es zeigt dir genau, welche Prozesse die meisten Ressourcen verbrauchen.

### Download

Das Plugin kann hier heruntergeladen werden: [Spark auf CurseForge](https://www.curseforge.com/hytale/mods/spark)

### Spark installieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Plugin herunterladen</b><br>
   Lade die .jar Datei des Spark Plugins von CurseForge herunter.

3. <b>Plugin hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die .jar Datei in den `mods/`-Ordner hoch.

4. <b>Server starten</b><br>
   Starte deinen Server.

### Spark verwenden

Mit Spark kannst du im Spiel als Admin folgende Befehle nutzen. In der Konsole der Verwaltung gibst du sie ohne `/` ein:

| Befehl | Beschreibung |
| ------ | ------------ |
| `/spark profiler start` | Profiling starten |
| `/spark profiler stop` | Profiling beenden und Report erstellen |
| `/spark tps` | Aktuelle TPS anzeigen |
| `/spark health` | Server-Gesundheit anzeigen |

## Tägliche Neustarts

Ein täglicher Neustart deines Servers kann Speicherlecks (RAM-Leaks) beheben und die Performance stabil halten.

:::: info Info
Automatische Neustarts sowie Backups können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::

## Feedback an das Hytale-Team

Hast du Performance-Probleme oder Fehler mit der Server-Software entdeckt? Du kannst direktes Feedback an das Hytale-Entwicklerteam senden:

[Feedback senden](https://accounts.hytale.com/feedback)
