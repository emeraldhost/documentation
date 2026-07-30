---
description: Backup eines Voyagers of Nera Servers erstellen
---

# So erstellst du ein Backup deines Voyagers of Nera Servers

Ein regelmäßiges Backup deines Voyagers of Nera Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen versehentlich gelöschten Spielstand-Ordner oder eine misslungene Übertragung einer Welt.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Löschen oder Umbenennen von Ordnern unter `PersistedData`
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Ordner deiner Welt auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Voyagers of Nera speichert in regelmäßigen Abständen automatisch — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.
::::

:::: info Was gehört zum Spielstand?
Sowohl deine Welt als auch deine Servereinstellungen liegen unter `/BoatGame/Saved/PersistedData/`. Ein Backup dieses Verzeichnisses enthält damit beides: den Ordner deiner Welt und den Ordner `CustomConfig`.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
