---
description: Backup eines Smalland Survive the Wilds Servers erstellen
---

# So erstellst du ein Backup deines Smalland Survive the Wilds Servers

Ein regelmäßiges Backup deines Smalland Survive the Wilds Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine beschädigte Weltdatei oder einen versehentlich überschriebenen Spielstand.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Weltnamens
- Vor Aufräumarbeiten in der Welt, etwa dem Abreißen großer Basen
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Ordner mit den Weltdateien auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Der Server schreibt im laufenden Betrieb in die Weltdatei — eine Sicherung während des Betriebs kann unvollständig sein.
::::

:::: danger Charaktere sind nicht enthalten
Ein Server-Backup sichert ausschließlich die Weltdaten. Charaktere werden lokal auf dem PC des jeweiligen Spielers gespeichert und lassen sich über den Server weder sichern noch wiederherstellen.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
