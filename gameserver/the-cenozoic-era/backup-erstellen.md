---
description: Backup eines The Cenozoic Era Servers erstellen
---

# So erstellst du ein Backup deines The Cenozoic Era Servers

Ein regelmäßiges Backup deines The Cenozoic Era Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine beschädigte Konfigurationsdatei oder eine Änderung, die du wieder rückgängig machen möchtest.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration, etwa an Wachstum, Fortpflanzung oder Spielmodus
- Bevor du Dateien per SFTP austauschst
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Läuft der Server währenddessen weiter, können Dateien gesichert werden, die gerade geschrieben werden — das Backup ist dann unter Umständen unvollständig.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

## Was das Backup enthält

Das Backup sichert den kompletten Serverordner. Dazu gehört auch die Konfiguration deines Servers, die per [SFTP](../sftp-verbindung-herstellen.md) in folgendem Verzeichnis liegt:

```
/TheCenozoicEra/Saved/Config/WindowsServer/
```

Dort liegt unter anderem die `Game.ini` mit deinen Servereinstellungen. Im Ordner `/TheCenozoicEra/Saved/Logs/` findest du zusätzlich die Server-Logs.

:::: info Hinweis
Der Konfigurationsordner heißt auch auf deinem Linux-Server `WindowsServer`. The Cenozoic Era stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft. Suche also nicht nach einem Ordner namens `LinuxServer` – den gibt es nicht.
::::

:::: tip Tipp
Sichere deine `Game.ini` zusätzlich manuell auf deinem PC, bevor du größere Änderungen daran vornimmst. So kannst du eine einzelne Einstellung zurücksetzen, ohne ein komplettes Backup wiederherstellen zu müssen.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
