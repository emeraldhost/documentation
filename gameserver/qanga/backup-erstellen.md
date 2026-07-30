---
description: Backup eines QANGA Servers erstellen
---

# So erstellst du ein Backup deines QANGA Servers

Ein regelmäßiges Backup deines QANGA Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen beschädigten Spielstand oder eine Änderung an der Welt, die du rückgängig machen möchtest.

Das ist bei QANGA besonders wichtig: Der Fortschritt eurer gemeinsamen Welt liegt auf dem Server. Gehen die Weltdaten verloren, ist auch der darin gespeicherte Fortschritt weg.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an den Startparametern in der Verwaltung
- Vor Aufräumarbeiten in der Welt, etwa dem Entfernen von Basen oder Fahrzeugen
- Vor dem Wiederherstellen eines älteren Standes
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Im laufenden Betrieb schreibt der Server regelmäßig in die Weltdaten — eine Sicherung während des Betriebs kann mitten in einen Speichervorgang fallen und einen unvollständigen Stand enthalten.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
QANGA nutzt für den Server keine Konfigurationsdateien — alle Servereinstellungen werden über die Startparameter in der **Verwaltung** gesetzt. Ein Backup sichert deshalb vor allem die Serverdateien und die Weltdaten. Notiere dir deine Einstellungen aus der Verwaltung zusätzlich separat, denn sie werden dort und nicht in den Serverdateien gespeichert.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
