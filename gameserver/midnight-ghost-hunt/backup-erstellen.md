---
description: Backup eines Midnight Ghost Hunt Servers erstellen
---

# So erstellst du ein Backup deines Midnight Ghost Hunt Servers

Ein Backup deines Midnight Ghost Hunt Servers sichert die Serverdateien und deine Konfiguration. So kommst du nach einem fehlgeschlagenen Update, beschädigten Serverdateien oder einer misslungenen Änderung an den Regeln schnell wieder auf einen funktionierenden Stand zurück.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor Änderungen an den Startparametern deines Servers
- Vor größeren Änderungen an der Datei `CustomRules.ini`
- Vor einer Neuinstallation der Serverdateien
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. So ist sichergestellt, dass währenddessen keine Dateien geschrieben werden und das Backup vollständig ist.
::::

:::: info Hinweis
Midnight Ghost Hunt speichert keinen Spielstand und keine Welt: Gespielt wird in einzelnen Runden, die jedes Mal neu beginnen. Ein Backup sichert deshalb vor allem die Serverinstallation, deine Konfigurationsdatei `CustomRules.ini` sowie die Logdateien deines Servers.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor größeren Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Einzelne Dateien wie `CustomRules.ini` kannst du zusätzlich per SFTP herunterladen und lokal aufbewahren: [SFTP-Verbindung herstellen](../sftp-verbindung-herstellen.md).
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
