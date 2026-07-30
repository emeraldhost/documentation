---
description: Backup eines IOSoccer Servers erstellen
---

# So erstellst du ein Backup deines IOSoccer Servers

Ein regelmäßiges Backup deines IOSoccer Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Plugin, das den Server nicht mehr starten lässt.

:::: info Hinweis
IOSoccer speichert auf dem Server keinen Weltfortschritt — es gibt keinen Spielstand, der übertragen oder wiederhergestellt werden könnte. Gesichert werden also deine Konfigurationsdateien, deine Kartenrotation, deine Plugins, deine Adminlisten, deine Bannlisten und deine eigenen Karten — genau die Dateien, deren Verlust am meisten Arbeit macht.
::::

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Metamod:Source, SourceMod oder einzelnen Plugins
- Vor größeren Änderungen an der `server.cfg`, an der `mapcycle.txt` oder an den Adminlisten
- Vor dem Hochladen eigener Karten
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: tip Konfiguration mitsichern
Wenn du nur die wichtigsten Dateien sichern möchtest, lade dir per [SFTP](../sftp-verbindung-herstellen.md) die Ordner `/iosoccer/cfg/`, `/iosoccer/addons/` und `/iosoccer/maps/` sowie die Datei `/iosoccer/mapcycle.txt` herunter.
::::

:::: info Matchstatistiken
Lässt du deinen Server Matchdaten speichern, legt er die Ergebnisse als JSON-Dateien im Spielordner unter `statistics` ab. Existiert der Ordner `/iosoccer/statistics/` bei dir, sichere ihn mit — sonst sind deine bisherigen Spielergebnisse nach einer Wiederherstellung weg.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. So ist sichergestellt, dass keine Datei gerade beschrieben wird. Denke außerdem daran, aktuelle Banns vorher mit `writeid` und `writeip` in die Bann-Dateien zu schreiben — sonst liegen sie nur im Arbeitsspeicher und landen nicht im Backup.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
