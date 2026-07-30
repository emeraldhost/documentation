---
description: Backup eines Kerbal Space Program Servers erstellen
---

# So erstellst du ein Backup deines Kerbal Space Program Servers

Ein regelmäßiges Backup deines Kerbal Space Program Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine geänderte Mod-Liste oder einen versehentlich überschriebenen Spielstand.

## Wann solltest du ein Backup erstellen?

- Vor Updates von DarkMultiPlayer oder des Spiels
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Ändern der Mod-Liste (`mod-control.txt`)
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Ordner `Universe` auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. DarkMultiPlayer schreibt im laufenden Betrieb ständig Schiffs- und Spielerdaten in den Ordner `Universe` — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.
::::

:::: tip Auch die Konfiguration sichern
Neben dem Ordner `Universe` lohnt sich der Ordner `Config`: Dort liegen unter anderem `Settings.txt`, `admins.txt`, die Bann-Listen und deine `mod-control.txt`.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
