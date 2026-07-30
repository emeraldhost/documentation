---
description: Backup eines Minecraft PocketMine Edition Servers erstellen
---

# So erstellst du ein Backup deines Minecraft PocketMine Edition Servers

Ein regelmäßiges Backup deines Minecraft PocketMine Edition Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, ein defektes Plugin oder eine versehentlich überschriebene Welt.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor der Installation oder Aktualisierung von Plugins
- Vor größeren Änderungen an `server.properties` oder `pocketmine.yml`
- Vor dem Hochladen einer anderen Welt
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur die Welt sichern, kannst du den Welt-Ordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. PocketMine-MP schreibt im laufenden Betrieb ständig in die LevelDB-Datenbank der geladenen Welt — eine Sicherung während des Betriebs kann unvollständig sein.
::::

:::: info Hinweis
Zum Backup gehören neben dem Ordner `worlds` auch deine Konfigurations- und Listendateien im Hauptordner deines Servers, insbesondere `server.properties`, `pocketmine.yml`, `ops.txt`, `white-list.txt`, `banned-players.txt` und `banned-ips.txt` sowie die Ordner `plugins`, `plugin_data` und `resource_packs`.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
