---
description: Performance auf einem Hytale Server verbessern
---

# So verbesserst du die Performance auf einem Hytale Server

## Überblick

Die Performance eines Hytale-Servers kann durch verschiedene Faktoren beeinflusst werden, darunter die Anzahl der Spieler, die Größe der geladenen Welt und die Server-Konfiguration. In diesem Artikel zeigen wir dir, wie du die Performance deines Hytale-Servers optimieren kannst.

:::: tip Hinweis
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
   | 32 | Standard - hohe Serverbelastung |
   | 16 | Empfohlen - gute Balance |
   | 10 | Niedrig - beste Performance |
   | 8 | Minimal - für schwächere Server |

5. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

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

## Empfohlene Performance-Plugins für Hytale Server

Zur Stabilisierung deines Servers empfehlen wir folgende Plugins:

| Plugin | Beschreibung |
|--------|--------------|
| Server Optimizer | Dynamische Performance-Anpassungen, NPC-AI-Optimierung |
| Hyfixes | Bugfixes, Crash-Prävention, RAM-Optimierung |
| Performance Saver | TPS-Limitierung, dynamische View-Radius-Anpassung |

### Downloads

- [Server Optimizer auf CurseForge](https://www.curseforge.com/hytale/mods/server-optimizer)
- [Hyfixes auf CurseForge](https://www.curseforge.com/hytale/mods/hyfixes)
- [Performance Saver auf CurseForge](https://www.curseforge.com/hytale/mods/nitrado-performancesaver)

### Installation

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Plugins herunterladen</b><br>
   Lade die .jar Dateien der gewünschten Plugins von CurseForge herunter.

3. <b>Plugins hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die .jar Dateien in den `mods/`-Ordner hoch.

4. <b>Server starten</b><br>
   Starte deinen Server.


### Server Optimizer

Das Server Optimizer Plugin bringt folgende Vorteile:

- **View Distance Management** - Senkt die Sichtweite bei niedrigen TPS oder hoher RAM-Auslastung
- **Per-Player Simulation Range** - Reduziert die Simulationsreichweite pro Spieler bei TPS-Drops
- **NPC-AI-Optimierung** - Passt NPC-Tick-Raten basierend auf Distanz und Sichtbarkeit an
- **Self-Healing Config** - Fehlende Einstellungen werden automatisch ergänzt
- **Profiling** - Erstellt detaillierte Performance-Reports

### Hyfixes

Das Hyfixes Plugin bringt folgende Vorteile:

- **Crash-Prävention** - Behebt Server-Crashes durch null-Referenzen und Iterator-Fehler
- **Timeout-Fixes** - Verhindert Spieler-Kicks bei Netzwerk-Lag während Interaktionen
- **RAM-Optimierung** - Verbesserte Chunk-Bereinigung (bis zu 77% RAM-Reduktion)
- **Interaction-Chain-Fixes** - Entfernt korrupte Interaktionsketten vor Crashes

:::: warning Hinweis
Hyfixes besteht aus zwei Dateien: `hyfixes.jar` kommt in den `mods/`-Ordner, `hyfixes-early.jar` in den `earlyplugins/`-Ordner.
::::

### Performance Saver

Das Performance Saver Plugin bringt folgende Vorteile:

- **TPS-Limitierung** - Begrenzt die Ticks pro Sekunde intelligent (20 TPS mit Spielern, 5 TPS ohne Spieler)
- **Dynamische View-Radius-Anpassung** - Reduziert den Sichtbereich bei hoher Last automatisch
- **Automatische Garbage Collection** - Triggert die Speicherbereinigung bei Chunk-Entladungen

## So installierst du das Spark Plugin auf einem Hytale Server

Das Spark Plugin ist ein Performance-Profiler, mit dem du Lag-Ursachen auf deinem Server analysieren kannst. Es zeigt dir genau, welche Prozesse die meisten Ressourcen verbrauchen.

### Download

Das Plugin kann hier heruntergeladen werden: [Spark auf CurseForge](https://www.curseforge.com/hytale/mods/spark)

### Installation

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Plugin herunterladen</b><br>
   Lade die .jar Datei des Spark Plugins von CurseForge herunter.

3. <b>Plugin hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die .jar Datei in den `mods/`-Ordner hoch.

4. <b>Server starten</b><br>
   Starte deinen Server.

### Spark verwenden

Mit Spark kannst du im Spiel als Admin folgende Befehle nutzen:

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
