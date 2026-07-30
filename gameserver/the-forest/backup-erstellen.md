---
description: Backup eines The Forest Servers erstellen
---

# So erstellst du ein Backup deines The Forest Servers

Ein regelmäßiges Backup deines The Forest Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Save-Slot oder einen falsch gesetzten Startwert.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Save-Slots oder des Init Type
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Slot-Ordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. The Forest speichert in regelmäßigen Abständen automatisch — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.
::::

:::: danger Wichtig
Der Chat-Befehl `/restart` ist **kein** Weg, den Server neu zu starten: Laut offizieller Befehlsliste löscht er die Speicherdaten. Nutze zum Neustarten immer die **Verwaltung**.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
