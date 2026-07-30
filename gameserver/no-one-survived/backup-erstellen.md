---
description: Backup eines No One Survived Servers erstellen
---

# So erstellst du ein Backup deines No One Survived Servers

Ein regelmäßiges Backup deines No One Survived Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine versehentlich überschriebene Spielstandsdatei oder einen falsch gesetzten Savegame-Namen.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Savegame-Namens oder der Karte
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du die Savegame-Dateien auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Der Server schreibt im laufenden Betrieb in die Spielstandsdateien — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Was gehört zum Spielstand?
Die eigentlichen Spielstände liegen als `.sav`-Dateien unter `/WRSH/Saved/SaveGames/WorldSaves/`, die Zwischenstände des Servers unter `/WRSH/Saved/SaveGames/AutoSave/`. Deine Servereinstellungen stehen in der Datei `/WRSH/Saved/Config/WindowsServer/Game.ini` – ein Backup über die Verwaltung sichert alle diese Dateien gemeinsam.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
