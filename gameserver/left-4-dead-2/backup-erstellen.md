---
description: Backup eines Left 4 Dead 2 Servers erstellen
---

# So erstellst du ein Backup deines Left 4 Dead 2 Servers

Ein regelmäßiges Backup deines Left 4 Dead 2 Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Plugin, das den Server nicht mehr starten lässt.

:::: info Hinweis
Left 4 Dead 2 speichert keinen Weltfortschritt. Gesichert werden also deine Konfigurationsdateien, deine Plugins und deine Adminlisten — genau die Dateien, deren Verlust am meisten Arbeit macht.
::::

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Metamod:Source, SourceMod oder einzelnen Plugins
- Vor größeren Änderungen an der `server.cfg` oder an den Adminlisten
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: tip Konfiguration mitsichern
Wenn du nur die wichtigsten Dateien sichern möchtest, lade dir per [SFTP](../sftp-verbindung-herstellen.md) die Ordner `/left4dead2/cfg/` und `/left4dead2/addons/` herunter.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
