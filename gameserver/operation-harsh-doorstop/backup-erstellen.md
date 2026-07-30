---
description: Backup eines Operation Harsh Doorstop Servers erstellen
---

# So erstellst du ein Backup deines Operation Harsh Doorstop Servers

Ein regelmäßiges Backup deines Operation Harsh Doorstop Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine zerschossene Konfiguration oder eine versehentlich gelöschte Admin-Liste.

:::: info Kein Spielstand, aber trotzdem sicherungswürdig
Operation Harsh Doorstop speichert keinen Weltzustand: Jede Runde beginnt von vorn, und es gibt kein Savegame. Sicherungswürdig sind deshalb vor allem deine Konfigurationsdateien unter `/HarshDoorstop/Saved/Config/LinuxServer/` (zum Beispiel `Admins.cfg`, `Bans.cfg`, `MapCycle.cfg` und `Game.ini`) sowie hochgeladene Mods unter `/HarshDoorstop/Mods`.
::::

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hinzufügen oder Entfernen von Mods
- Vor Änderungen an den Admin- und Ban-Dateien
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Der Server schreibt seine Konfigurationsdateien beim Beenden — eine Sicherung im laufenden Betrieb kann einen veralteten Stand enthalten.
::::

:::: tip Einzelne Dateien sichern
Du kannst deine Konfigurationsdateien auch einfach per [SFTP](../sftp-verbindung-herstellen.md) auf deinen PC herunterladen. Für ein paar kleine `.cfg`-Dateien ist das der schnellste Weg.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
