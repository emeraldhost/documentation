---
description: Backup eines GTA San Andreas Servers erstellen
---

# So erstellst du ein Backup deines GTA San Andreas Servers

Ein regelmäßiges Backup deines GTA San Andreas Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, ein defektes Skript oder eine versehentlich überschriebene Konfiguration.

## Wann solltest du ein Backup erstellen?

- Vor dem Wechsel zwischen SA-MP und open.mp
- Vor dem Einspielen eines neuen Gamemodes oder einer neuen Skript-Version
- Vor der Installation oder Aktualisierung von Plugins
- Vor größeren Änderungen an `server.cfg` beziehungsweise `config.json`
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

## Was gesichert werden sollte

SA-MP und open.mp haben **keinen Weltspielstand**. Es gibt keine gespeicherte Welt und keine Savegame-Datei — alles Dauerhafte legt allein dein Gamemode an. Ein sinnvolles Backup umfasst deshalb diese Ordner und Dateien:

| Pfad | Inhalt |
|------|--------|
| `/gamemodes/` | Deine Gamemodes als `.amx`-Dateien |
| `/filterscripts/` | Zusatzskripte |
| `/plugins/` | Server-Plugins (`.so`) |
| `/scriptfiles/` | Alle Daten, die deine Skripte selbst speichern |
| `/models/` | Eigene Modelle und Texturen |
| `config.json` bzw. `server.cfg` | Die Serverkonfiguration |
| `bans.json` bzw. `samp.ban` | Deine Bann-Liste |

:::: danger Wichtig
Speichert dein Gamemode Spielerdaten in einer **MySQL-Datenbank**, liegen diese Daten **nicht** in den Serverdateien. Sichere die Datenbank zusätzlich und separat — ein Backup der Serverdateien allein reicht in diesem Fall nicht aus.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Laufende Skripte schreiben währenddessen in `scriptfiles` — eine Sicherung im laufenden Betrieb kann unvollständig sein.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
