---
description: Backup eines StarRupture Servers erstellen
---

# So erstellst du ein Backup deines StarRupture Servers

Ein regelmäßiges Backup deines StarRupture Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Spielstand oder einen falsch gesetzten Wert in der `DSSettings.txt`.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Erstellen einer neuen Welt oder dem Wechsel der Session
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du die Dateien der Session auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. StarRupture speichert im Betrieb automatisch – standardmäßig alle 300 Sekunden – eine Sicherung während des Betriebs kann deshalb einen unvollständigen Spielstand enthalten.
::::

:::: danger Wichtig
Steht in deiner `DSSettings.txt` der Wert `StartNewGame` auf `"true"`, erzeugt der Server bei jedem Start eine neue Welt und überschreibt den vorhandenen Spielstand. Prüfe diesen Wert, bevor du ein wiederhergestelltes Backup startest – siehe [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
