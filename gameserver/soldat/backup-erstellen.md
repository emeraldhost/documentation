---
description: Backup eines Soldat Servers erstellen
---

# So erstellst du ein Backup deines Soldat Servers

Ein regelmäßiges Backup deines Soldat Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Script, das den Server nicht mehr starten lässt.

:::: info Hinweis
Soldat speichert keinen Weltfortschritt — es gibt keinen Spielstand, der übertragen oder wiederhergestellt werden könnte. Gesichert werden also deine Konfigurationsdateien, deine Kartenrotation, deine Admin- und Bannlisten, deine eigenen Karten und deine Scripts — genau die Dateien, deren Verlust am meisten Arbeit macht.
::::

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Bearbeiten der Kartenrotation oder dem Hochladen eigener Karten
- Vor dem Installieren oder Aktualisieren von Server-Scripts
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

## Diese Dateien lohnt es sich zu sichern

Möchtest du nur die wichtigsten Dateien sichern, lade sie dir per [SFTP](../sftp-verbindung-herstellen.md) herunter.

Klassischer Soldat-Server:

| Datei oder Ordner | Inhalt |
|-------------------|--------|
| `soldat.ini` | Hauptkonfiguration des Servers |
| `server.ini` | Erweiterte Servereinstellungen |
| `mapslist.txt` | Kartenrotation |
| `banned.txt` | Gebannte IP-Adressen |
| `remote.txt` | Dauerhafte Adminliste |
| Maps-Ordner | Deine eigenen `.pms`-Karten |
| `scripts/` | Deine Server-Scripts |
| `logs/` | Protokolle, unter anderem `gamestat.txt` |

OpenSoldat:

| Datei oder Ordner | Inhalt |
|-------------------|--------|
| `configs/` | Serverkonfiguration inklusive `server.cfg` |
| `maps/` | Deine eigenen `.pms`-Karten |
| `mods/` | Deine `.smod`-Mod-Pakete |
| `scripts/` | Deine Server-Scripts |
| `logs/` | Protokolle |
| `demos/` | Aufgezeichnete Runden, falls du die Aufzeichnung nutzt |

:::: info Hinweis
Welche der beiden Varianten bei dir läuft, erkennst du daran, ob im Hauptverzeichnis eine `soldat.ini` oder ein Ordner `configs` mit einer `server.cfg` liegt.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. So ist sichergestellt, dass keine Datei gerade beschrieben wird — der Server schreibt unter anderem `banned.txt` und die Logdateien im laufenden Betrieb.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
