---
description: Backup eines SCUM Servers erstellen
---

# So erstellst du ein Backup deines SCUM Servers

Ein regelmäßiges Backup deines SCUM Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine beschädigte Datenbank oder einen versehentlich überschriebenen Spielstand.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor Aufräumarbeiten in der Welt, etwa dem Entfernen von Basen oder Fahrzeugen
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du die Datenbank auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. SCUM speichert die gesamte Welt in einer SQLite-Datenbank, die im laufenden Betrieb geschrieben wird — eine Sicherung während des Betriebs kann unvollständig sein.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
