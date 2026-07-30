---
description: Backup eines Longvinter Servers erstellen
---

# So erstellst du ein Backup deines Longvinter Servers

Ein regelmäßiges Backup deines Longvinter Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Spielstand oder eine fehlerhafte Konfiguration.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor Aufräumarbeiten in der Welt, etwa dem Entfernen von Zelten
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
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Longvinter speichert im laufenden Betrieb etwa alle zehn Minuten — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten. Aus demselben Grund überschreibt der Server auch Änderungen an der `Game.ini`, die du im laufenden Betrieb vornimmst.
::::

:::: tip Serverseitige Sicherungen aktivieren
Longvinter kann zusätzlich selbst einmal täglich eine Sicherung des Spielstands anlegen. Dazu trägst du bei gestopptem Server in der Datei `/Longvinter/Saved/Config/LinuxServer/Game.ini` folgenden Wert ein:

```ini
[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
SaveBackups=true
```

Diese Sicherungen liegen auf deinem Server und ersetzen kein eigenes Backup — sie gehen zum Beispiel bei einem beschädigten Spielstandordner mit verloren.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
