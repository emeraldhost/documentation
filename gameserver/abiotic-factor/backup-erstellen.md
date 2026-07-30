---
description: Backup eines Abiotic Factor Servers erstellen
---

# So erstellst du ein Backup deines Abiotic Factor Servers

Ein regelmäßiges Backup deines Abiotic Factor Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Weltordner oder einen falsch gesetzten Weltnamen.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Weltnamens
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Weltordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Der Server schreibt im laufenden Betrieb in die Weltdateien — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Was gehört zum Spielstand?
Der eigentliche Spielstand liegt im Weltordner unter `/AbioticFactor/Saved/SaveGames/Server/Worlds/`. Dort liegen auch die Sandbox-Einstellungen (`SandboxSettings.ini`) deiner Welt. Deine Adminliste (`Admin.ini`) liegt eine Ebene darüber unter `/AbioticFactor/Saved/SaveGames/Server/` – ein Backup über die Verwaltung sichert alle diese Dateien gemeinsam.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
