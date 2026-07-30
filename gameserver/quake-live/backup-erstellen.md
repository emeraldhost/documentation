---
description: Backup eines Quake Live Servers erstellen
---

# So erstellst du ein Backup deines Quake Live Servers

Quake Live speichert keine Spielwelt und keinen Spielfortschritt — jede Runde beginnt neu. Wertvoll sind auf deinem Server deshalb die Konfigurationsdateien: deine Servereinstellungen, die Adminliste, der Map-Pool, die Workshop-Inhalte und deine eigenen Factories. Genau diese Dateien sichert ein Backup.

## Wann solltest du ein Backup erstellen?

- Vor Änderungen an der `server.cfg`
- Vor Änderungen an der Adminliste oder am Map-Pool
- Bevor du eigene Factories anpasst oder ersetzt
- Vor Updates der Serverversion
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

## Diese Dateien solltest du sichern

```
/baseq3/server.cfg                <- Serverkonfiguration
/baseq3/access.txt                <- Admins, Moderatoren und Banns
/baseq3/mappool.txt               <- Maps und Factories des Map-Pools
/baseq3/workshop.txt              <- Item-IDs aus dem Steam Workshop
/baseq3/scripts/                  <- eigene Factories (.factories)
```

:::: info Hinweis
Das Verzeichnis `baseq3` liegt im Hauptverzeichnis deines Servers, der vollständige Pfad lautet also `/home/container/baseq3/`. Einzelne Dateien kannst du dir jederzeit auch per [SFTP](../sftp-verbindung-herstellen.md) auf deinen PC herunterladen.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Die `access.txt` wird vom Server vor jedem Map-Ladevorgang neu geschrieben — eine Sicherung im laufenden Betrieb kann daher einen veralteten Stand enthalten, und eine Wiederherstellung würde beim nächsten Map-Wechsel überschrieben.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
