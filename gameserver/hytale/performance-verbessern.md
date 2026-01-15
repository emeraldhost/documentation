---
description: Performance auf einem Hytale Server verbessern
---

# So verbesserst du die Performance auf einem Hytale Server

## Überblick

Die Performance eines Hytale-Servers kann durch verschiedene Faktoren beeinflusst werden, darunter die Anzahl der Spieler, die Größe der geladenen Welt und die Server-Konfiguration. In diesem Artikel zeigen wir dir, wie du die Performance deines Hytale-Servers optimieren kannst.

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So optimierst du die Konfiguration

Wenn du kein Plugin installieren möchtest, kannst du die Server-Performance auch durch Anpassung der Konfigurationsdatei verbessern. Die wichtigste Einstellung hierfür ist der **MaxViewRadius**.

### So passt du den MaxViewRadius an

Der View-Radius bestimmt, wie viele Chunks um einen Spieler herum geladen werden. Ein kleinerer Wert reduziert die Serverbelastung erheblich.

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

## So installierst du das Performance Saver Plugin

Das Performance Saver Plugin von Nitrado ist ein effektives Tool zur Stabilisierung deines Hytale-Servers. Es optimiert die Ressourcennutzung unter Belastung und verhindert Server-Abstürze bei hoher Last.

### Download

Das Plugin kann hier heruntergeladen werden: [Performance Saver Plugin auf GitHub](https://github.com/nitrado/hytale-plugin-performance-saver)

### Installation

1. <b>Plugin herunterladen</b><br>
   Lade die .jar Datei des Performance Saver Plugins von GitHub herunter.

2. <b>Plugin hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die .jar Datei in den `mods/`-Ordner hoch.

3. <b>Server neustarten</b><br>
   Starte deinen Server neu, damit das Plugin geladen wird.

## Funktionen des Performance Saver Plugins

### TPS-Limitierung

Das Plugin begrenzt die Ticks pro Sekunde (TPS) intelligent, um Ressourcen zu sparen. Basierend auf Netzwerk- und Client-Vorhersage-Mechaniken ist eine niedrigere, aber stabile TPS besser für die Spielererfahrung als schwankende Werte.

- **Standardwert mit Spielern:** 20 TPS
- **Standardwert ohne Spieler:** 5 TPS

### Dynamische View-Radius-Anpassung

Das Plugin überwacht kontinuierlich die CPU-Auslastung (via TPS) und den RAM-Verbrauch (via Garbage Collection). Bei hoher Belastung wird der Sichtbereich automatisch reduziert, um Ressourcen freizugeben. Sobald die Belastung sinkt, wird der View-Radius wieder erhöht.

### Automatische Garbage Collection

Das Plugin triggert automatisch die JVM-Speicherbereinigung, wenn Chunk-Entladungen andeuten, dass Speicher freigegeben werden kann. Dies verhindert Speicherprobleme und sorgt für eine stabilere Performance.

## Tägliche Neustarts

Ein täglicher Neustart deines Servers kann Speicherlecks (RAM-Leaks) beheben und die Performance stabil halten.

:::: info Info
Automatische Neustarts sowie Backups können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
