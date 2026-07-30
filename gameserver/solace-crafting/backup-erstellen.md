---
description: Backup eines Solace Crafting Servers erstellen
---

# So erstellst du ein Backup deines Solace Crafting Servers

Ein regelmäßiges Backup deines Solace Crafting Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Weltordner oder einen falsch eingetragenen Weltnamen.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der `servercfg.dat`
- Vor dem Hochladen einer anderen Welt
- Vor dem Wechsel der Welt über den Wert `worldSaveToUse`
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur die Welt sichern, kannst du den Weltordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Solace Crafting speichert im laufenden Betrieb automatisch — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.
::::

:::: danger Wichtig
Trägst du bei `worldSaveToUse` einen Namen ein, zu dem kein Weltordner existiert, legt der Server beim Start eine neue Welt an. Dein bisheriger Fortschritt ist dann zwar nicht gelöscht, wird aber nicht mehr geladen. Ein aktuelles Backup ist in so einem Fall der schnellste Weg zurück.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
