---
description: Backup eines The Lord of the Rings Return to Moria Servers erstellen
---

# So erstellst du ein Backup deines The Lord of the Rings Return to Moria Servers

Ein regelmäßiges Backup deines Return to Moria Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine versehentlich überschriebene Weltdatei oder einen falsch eingetragenen Weltnamen in der Konfiguration.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der `MoriaServerConfig.ini`
- Vor dem Hochladen einer anderen Welt
- Vor dem Wechsel des Weltnamens oder der geladenen Weltdatei
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur die Welt sichern, kannst du die Weltdatei auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Return to Moria speichert im laufenden Betrieb – eine Sicherung währenddessen kann eine unvollständige Welt enthalten.
::::

:::: danger Wichtig
Stoppe deinen Server immer über die **Verwaltung**. Nur dabei speichert der Server den aktuellen Stand und beendet sich sauber. Ein erzwungener Abbruch kann Fortschritt kosten und dazu führen, dass der nächste Start mehrere Minuten dauert, weil die alte Online-Session noch hängt.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
