---
description: Backup eines HumanitZ Servers erstellen
---

# So erstellst du ein Backup deines HumanitZ Servers

Ein regelmäßiges Backup deines HumanitZ Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine beschädigte Spielstandsdatei oder einen falsch gesetzten `SaveName`.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der `GameServerSettings.ini`
- Vor dem Hochladen eines anderen Spielstands
- Vor einer Änderung des `SaveName`
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Savegame-Ordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. HumanitZ speichert im laufenden Betrieb automatisch — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.
::::

:::: danger Wichtig
Ein Backup ersetzt keinen Test: Ändere den Wert `SaveName` in der `GameServerSettings.ini` nur, wenn du weißt, welche Datei geladen werden soll. Passt der Name zu keiner vorhandenen `.sav`-Datei, startet dein Server mit einer neuen, leeren Welt.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
