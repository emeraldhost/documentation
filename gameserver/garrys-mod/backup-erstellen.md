---
description: Backup eines Garry's Mod Servers erstellen
---

# So erstellst du ein Backup deines Garry's Mod Servers

Ein regelmäßiges Backup deines Garry's Mod Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Addon, das den Server nicht mehr starten lässt.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Addons, Gamemodes oder Workshop-Collections
- Vor größeren Änderungen an der Konfiguration, z.B. an der `server.cfg` oder der `users.txt`
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Addons und Konfigurationen legen ihre Daten in der Regel im Ordner `/garrysmod/data/` ab. Dieser Ordner überlebt Mapwechsel und Neustarts und sollte in einem Backup enthalten sein.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
