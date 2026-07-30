---
description: Backup eines Myth of Empires Servers erstellen
---

# So erstellst du ein Backup deines Myth of Empires Servers

Ein regelmäßiges Backup deines Myth of Empires Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen beschädigten Spielstand oder eine Änderung an der Konfiguration, die du zurücknehmen möchtest.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor einem geplanten Wipe deines Servers
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: danger Vor dem Stoppen speichern
Speichere die Welt, bevor du den Server stoppst. Führe dazu als Admin im Spiel den Befehl `cheat SaveWorld` aus und warte anschließend rund 30 bis 45 Sekunden, bis der Speichervorgang abgeschlossen ist. Wird der Server mitten im Schreiben beendet, kann der Spielstand beschädigt werden.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Myth of Empires speichert im laufenden Betrieb in regelmäßigen Abständen – eine Sicherung während des Betriebs kann unvollständig sein.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Ordner `Saved` auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
