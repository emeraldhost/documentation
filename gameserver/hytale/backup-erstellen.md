---
description: Backup eines Hytale Servers erstellen
---

# So erstellst du ein Backup deines Hytale Servers

Regelmäßige Backups schützen deinen Server vor Datenverlust. Du kannst jederzeit über die Verwaltung ein Backup erstellen oder einzelne Dateien manuell per SFTP sichern.

## So erstellst du ein Backup über die Verwaltung

1. Öffne die Verwaltung deines Servers.
2. Navigiere zu **Backups**.
3. Klicke auf **Backup erstellen**.

Das Backup wird automatisch erstellt und kann jederzeit wiederhergestellt werden.

:::: info Info
Automatische Backups können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::

## So erstellst du ein manuelles Backup per SFTP

:::: warning Achtung
Stoppe deinen Server bevor du ein Backup erstellst, um Datenverlust zu vermeiden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Ordner herunterladen</b><br>
   Lade den gesamten `universe/` Ordner auf deinen Computer herunter.

4. <b>Server starten</b><br>
   Starte deinen Server.

## Wichtige Ordner

| Ordner | Inhalt |
| ------ | ------ |
| `universe/` | Gesamter Spielstand (Welten + Spielerdaten) |
| `universe/worlds/` | Alle Welten |
| `universe/worlds/<name>/` | Einzelne Welt |
| `universe/players/` | Spielerdaten |
| `config.json` | Server-Konfiguration |
| `mods/` | Installierte Mods |

## So erstellst du ein Welt-Backup

Wenn du nur eine bestimmte Welt sichern möchtest:

1. Navigiere zu `universe/worlds/`
2. Lade den gewünschten Welt-Ordner herunter (z.B. `default/`)

## Backup wiederherstellen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Backup hochladen</b><br>
   Lade den gesicherten Ordner hoch und überschreibe die vorhandenen Dateien.

4. <b>Server starten</b><br>
   Starte deinen Server.

:::: warning Achtung
Beim Wiederherstellen eines Backups werden alle aktuellen Daten überschrieben. Erstelle vorher ein Backup des aktuellen Stands!
::::
