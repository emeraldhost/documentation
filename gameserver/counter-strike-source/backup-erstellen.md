---
description: Backup eines Counter-Strike Source Servers erstellen
---

# So erstellst du ein Backup deines Counter-Strike Source Servers

Ein regelmäßiges Backup deines Counter-Strike Source Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Plugin, das den Server nicht mehr starten lässt.

:::: info Hinweis
Counter-Strike Source speichert keinen Spielfortschritt. Gesichert werden also deine Konfigurationsdateien, deine Plugins, deine Adminlisten und deine Maps — genau die Dateien, deren Verlust am meisten Arbeit macht.
::::

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Metamod:Source, SourceMod oder einzelnen Plugins
- Vor größeren Änderungen an der `server.cfg` oder an den Adminlisten
- Nach dem Hinzufügen eigener Maps
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: tip Konfiguration mitsichern
Wenn du nur die wichtigsten Dateien sichern möchtest, lade dir per [SFTP](../sftp-verbindung-herstellen.md) die Ordner `/cstrike/cfg/`, `/cstrike/addons/` und `/cstrike/maps/` herunter.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
