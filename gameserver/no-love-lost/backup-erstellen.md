---
description: Backup eines No Love Lost Servers erstellen
---

# So erstellst du ein Backup deines No Love Lost Servers

Ein Backup deines No Love Lost Servers sichert die Serverdateien und die Installation. So kommst du nach einem fehlgeschlagenen Update oder beschädigten Serverdateien schnell wieder auf einen funktionierenden Stand zurück.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor Änderungen an den Startparametern deines Servers
- Vor einer Neuinstallation der Serverdateien
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. So ist sichergestellt, dass währenddessen keine Dateien geschrieben werden und das Backup vollständig ist.
::::

:::: info Hinweis
No Love Lost legt auf dem Server keine Konfigurationsdatei an — der Server wird ausschließlich über seine Startparameter gesteuert. Ein Backup sichert deshalb vor allem die Serverinstallation und die Spieldateien.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor größeren Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
