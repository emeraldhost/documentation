---
description: Backup eines Frozen Flame Servers erstellen
---

# So erstellst du ein Backup deines Frozen Flame Servers

Ein regelmäßiges Backup deines Frozen Flame Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Spielstand oder einen entfernten Spielerfortschritt.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Spielmodus zwischen Cataclysm und Campaign
- Bevor du Spielerprofile mit `Admin_RemoveProfile` entfernst
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Ordner `SaveGames` auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Frozen Flame schreibt im laufenden Betrieb in den Spielstand — eine Sicherung während des Betriebs kann unvollständig sein. Setze davor über RCON den Befehl `Admin_SaveAll` ab, damit der aktuelle Stand auf der Festplatte liegt: [Adminrechte nutzen](admin-hinzufuegen.md).
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
