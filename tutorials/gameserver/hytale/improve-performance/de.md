---
slug: "performance-verbessern"
language: "de"
title: "So verbesserst Du die Performance auf einem Hytale Server"
description: "Performance auf einem Hytale Server verbessern"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-01-22"
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

> [!TIP]
> **Hinweis**
>
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
   | 32 | Standard - hohe Serverbelastung |
   | 16 | Empfohlen - gute Balance |
   | 10 | Niedrig - beste Performance |
   | 8 | Minimal - für schwächere Server |

5. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

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

## Empfohlene Performance-Plugins für Hytale Server

Zur Stabilisierung Deines Servers empfehlen wir folgende Plugins:

| Plugin | Beschreibung |
|--------|--------------|
| Server Optimizer | Dynamische Performance-Anpassungen, NPC-AI-Optimierung |
| Hyfixes | Bugfixes, Crash-Prävention, RAM-Optimierung |
| Performance Saver | TPS-Limitierung, dynamische View-Radius-Anpassung |

### Downloads

- [Server Optimizer auf CurseForge](https://www.curseforge.com/hytale/mods/server-optimizer)
- [Hyfixes auf CurseForge](https://www.curseforge.com/hytale/mods/hyfixes)
- [Performance Saver auf CurseForge](https://www.curseforge.com/hytale/mods/nitrado-performancesaver)

### Performance-Plugins installieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Plugins herunterladen**\
   Lade die .jar Dateien der gewünschten Plugins von CurseForge herunter.

3. **Plugins hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die .jar Dateien in den `mods/`-Ordner hoch.

4. **Server starten**\
   Starte Deinen Server.

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

> [!WARNING]
> **Hinweis**
>
> Hyfixes besteht aus zwei Dateien: `hyfixes.jar` kommt in den `mods/`-Ordner, `hyfixes-early.jar` in den `earlyplugins/`-Ordner.

### Performance Saver

Das Performance Saver Plugin bringt folgende Vorteile:

- **TPS-Limitierung** - Begrenzt die Ticks pro Sekunde intelligent (20 TPS mit Spielern, 5 TPS ohne Spieler)
- **Dynamische View-Radius-Anpassung** - Reduziert den Sichtbereich bei hoher Last automatisch
- **Automatische Garbage Collection** - Triggert die Speicherbereinigung bei Chunk-Entladungen

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

Mit Spark kannst Du im Spiel als Admin folgende Befehle nutzen:

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
