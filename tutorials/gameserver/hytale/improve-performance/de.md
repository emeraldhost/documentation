---
slug: "performance-verbessern"
language: "de"
title: "So verbesserst Du die Performance auf einem Hytale Server"
description: "Performance auf einem Hytale Server verbessern"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Performance verbessern"
sort: 13
related: ["gameserver/hytale/enable-pvp", "gameserver/hytale/enable-whitelist", "gameserver/hytale/add-mods", "gameserver/hytale/item-loss-on-death"]
---

## Überblick

Die Performance eines Hytale-Servers kann durch verschiedene Faktoren beeinflusst werden, darunter die Anzahl der Spieler, die Größe der geladenen Welt und die Server-Konfiguration. In diesem Artikel zeigen wir Dir, wie Du die Performance Deines Hytale-Servers optimieren kannst.

> [!NOTE]
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So optimierst Du die Konfiguration auf einem Hytale Server

Wenn Du kein Plugin installieren möchtest, kannst Du die Server-Performance auch durch Anpassung der Konfigurationsdatei verbessern. Die wichtigste Einstellung hierfür ist der **MaxViewRadius**. Der View-Radius bestimmt, wie viele Chunks um einen Spieler herum geladen werden. Ein kleinerer Wert reduziert die Serverbelastung erheblich.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. **MaxViewRadius finden**\
   Suche nach der Einstellung `MaxViewRadius` in der `config.json`.

4. **Wert anpassen**\
   Reduziere den Wert, um die Performance zu verbessern:

   | Wert | Empfehlung |
   | ---- | ---------- |
   | 32 | Standard und Maximum - hohe Serverbelastung |
   | 16 | Gute Balance zwischen Sichtweite und Performance |
   | 12 | Empfehlung von Hytale für Performance und Gameplay (384 Blöcke) |
   | 10 | Niedrig - für Server mit vielen Spielern oder wenig RAM |

5. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

> [!TIP]
> Du kannst den Wert auch ohne Neustart über die Konsole der Verwaltung ändern, z.B. mit `maxviewradius 12`. Mehr dazu erfährst Du unter [Max View Radius ändern](/tutorials/gameserver/hytale/change-max-view-radius).

## So passt Du die Startparameter auf einem Hytale Server an

Über die Verwaltung kannst Du in den Einstellungen zusätzliche Startparameter hinterlegen. So kannst Du z.B. eigene Garbage Collector Parameter hinzufügen, um den Server weiter zu optimieren.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu **Einstellungen**.

3. **Startparameter anpassen**\
   Füge im Feld **Zusätzliche Startparameter** Deine gewünschten Parameter hinzu.

   ```text
   -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200
   ```

4. **Server neustarten**\
   Starte Deinen Server neu, damit die Änderungen übernommen werden.

### Standard Garbage Collector Parameter

Folgende Parameter sind standardmäßig bereits konfiguriert:

| Parameter | Beschreibung |
| --------- | ------------ |
| `-XX:+UseG1GC` | Aktiviert den G1 Garbage Collector, der für Server mit viel RAM optimiert ist |
| `-XX:+ParallelRefProcEnabled` | Beschleunigt die Referenzverarbeitung durch Parallelisierung |
| `-XX:MaxGCPauseMillis=200` | Begrenzt Garbage Collection Pausen auf maximal 200ms |

> [!TIP]
> Die Standardwerte sind für die meisten Server bereits optimal. Ändere diese nur, wenn Du weißt was Du tust.

## Empfohlenes Performance-Plugin für Hytale Server

Zur Stabilisierung Deines Servers empfehlen wir das Plugin **Nitrado PerformanceSaver**. Es wird auch im offiziellen Server-Handbuch von Hytale empfohlen.

### Download

Das Plugin kann hier heruntergeladen werden: [Performance Saver auf CurseForge](https://www.curseforge.com/hytale/mods/nitrado-performancesaver)

### Performance-Plugin installieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Plugin herunterladen**\
   Lade die .jar Datei des Plugins von CurseForge herunter.

3. **Plugin hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die .jar Datei in den `mods/`-Ordner hoch.

4. **Server starten**\
   Starte Deinen Server.

### Performance Saver

Das Performance Saver Plugin bringt folgende Vorteile:

- **TPS-Limitierung** - Begrenzt die Ticks pro Sekunde intelligent (20 TPS mit Spielern, 5 TPS ohne Spieler)
- **Dynamische View-Radius-Anpassung** - Reduziert den Sichtbereich bei hoher Last automatisch
- **Automatische Garbage Collection** - Triggert die Speicherbereinigung bei Chunk-Entladungen

Die Einstellungen des Plugins findest Du nach dem ersten Start in der Datei `mods/Nitrado_PerformanceSaver/config.json`.

## So installierst Du das Spark Plugin auf einem Hytale Server

Das Spark Plugin ist ein Performance-Profiler, mit dem Du Lag-Ursachen auf Deinem Server analysieren kannst. Es zeigt Dir genau, welche Prozesse die meisten Ressourcen verbrauchen.

### Download

Das Plugin kann hier heruntergeladen werden: [Spark auf CurseForge](https://www.curseforge.com/hytale/mods/spark)

### Spark installieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Plugin herunterladen**\
   Lade die .jar Datei des Spark Plugins von CurseForge herunter.

3. **Plugin hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die .jar Datei in den `mods/`-Ordner hoch.

4. **Server starten**\
   Starte Deinen Server.

### Spark verwenden

Mit Spark kannst Du im Spiel als Admin folgende Befehle nutzen. In der Konsole der Verwaltung gibst Du sie ohne `/` ein:

| Befehl | Beschreibung |
| ------ | ------------ |
| `/spark profiler start` | Profiling starten |
| `/spark profiler stop` | Profiling beenden und Report erstellen |
| `/spark tps` | Aktuelle TPS anzeigen |
| `/spark health` | Server-Gesundheit anzeigen |

## Tägliche Neustarts

Ein täglicher Neustart Deines Servers kann Speicherlecks (RAM-Leaks) beheben und die Performance stabil halten.

> [!NOTE]
> Automatische Neustarts sowie Backups können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.

## Feedback an das Hytale-Team

Hast Du Performance-Probleme oder Fehler mit der Server-Software entdeckt? Du kannst direktes Feedback an das Hytale-Entwicklerteam senden:

[Feedback senden](https://accounts.hytale.com/feedback)
