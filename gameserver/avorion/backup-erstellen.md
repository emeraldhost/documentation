---
description: Backup eines Avorion Servers erstellen
---

# So erstellst du ein Backup deines Avorion Servers

Ein regelmäßiges Backup deines Avorion Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine defekte Mod oder eine versehentlich überschriebene Galaxie.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hinzufügen oder Entfernen von Mods
- Vor dem Hochladen einer anderen Galaxie
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Avorion speichert im laufenden Betrieb automatisch — eine Sicherung während des Betriebs kann eine unvollständige Galaxie enthalten.
::::

:::: tip Vorher speichern
Läuft dein Server noch, kannst du den aktuellen Stand vorher manuell sichern: Gib in der Konsole der Verwaltung `/save` ein, warte bis der Vorgang abgeschlossen ist, und stoppe den Server anschließend über die Verwaltung.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Galaxie-Ordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
