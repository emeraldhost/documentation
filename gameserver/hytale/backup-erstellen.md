---
description: Backup eines Hytale Servers erstellen
---

# So erstellst du ein Backup deines Hytale Servers

Ein regelmäßiges Backup deines Hytale Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder einen versehentlich gelöschten Spielstand.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Mods, Plugins oder Add-ons
- Vor größeren Änderungen an der Welt oder Konfiguration
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::

## So aktivierst du die automatischen Backups des Hytale Servers

Zusätzlich zu den Backups der Verwaltung kann der Hytale Server selbst in regelmäßigen Abständen Backups deiner Welten anlegen.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Automatische Backups einstellen</b><br>
   Passe die folgenden Felder an:

   | Feld | Beschreibung | Standard |
   |------|-------------|----------|
   | **Aktiviere Auto Server Backup** | `1` schaltet die automatischen Backups ein, `0` schaltet sie aus | `0` |
   | **Backup Ordner** | Ordner im Hauptverzeichnis, in dem der Server die Backups ablegt | `backups` |
   | **Backup Intervall** | Abstand zwischen zwei Backups in Minuten | `30` |

4. <b>Server neu starten</b><br>
   Speichere die Einstellungen und starte deinen Server neu. Das erste automatische Backup legt der Server an, sobald er so lange läuft wie im Feld **Backup Intervall** eingestellt.

Die Backups findest du per [SFTP](../sftp-verbindung-herstellen.md) im Ordner `/backups/` bzw. in dem Ordner, den du im Feld **Backup Ordner** eingetragen hast. Jedes Backup ist eine ZIP-Datei, deren Name dem Zeitpunkt der Erstellung entspricht: `2026-09-27_18-30-00.zip` hat der Server also am 27.09.2026 um 18:30:00 Uhr angelegt. Die Uhrzeit richtet sich nach der Systemzeit des Servers und kann deshalb von deiner Ortszeit abweichen.

:::: warning Achtung
Die automatischen Backups enthalten nur den Ordner `universe` mit deinen Welten und den Spielerdaten. Die `config.json`, die `permissions.json`, die `bans.json` und deine Mods sind nicht enthalten. Diese sicherst du über die [Backup-Funktion](../backup-erstellen.md) der Verwaltung.
::::

Bevor der Server ein neues Backup anlegt, räumt er den Backup-Ordner auf: Er behält standardmäßig die 5 neuesten Backups und legt das neue dazu. Von den älteren Backups verschiebt er höchstens alle 12 Stunden eines in den Unterordner `archive`, in dem standardmäßig bis zu 5 Backups aufbewahrt werden. Alle anderen löscht er. Die Backups belegen Speicherplatz auf deinem Server.

:::: tip Tipp
Ist die Funktion aktiviert, kannst du zusätzlich jederzeit ein Backup über die Konsole der Verwaltung auslösen:
```
backup
```
Ohne aktivierte automatische Backups antwortet der Server mit `The server must be started with --backup-dir to use this command!`.
::::

### So änderst du die Anzahl der aufbewahrten Backups

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>Anzahl festlegen</b><br>
   Trage im Block `Backup` die gewünschten Werte ein. `MaxCount` legt fest, wie viele der neuesten Backups der Server beim Aufräumen im Backup-Ordner behält (das neue Backup kommt jeweils dazu), `ArchiveMaxCount`, wie viele Backups er im Unterordner `archive` aufbewahrt. Beide Werte müssen mindestens `1` sein:
   ```json
   "Backup": {
     "MaxCount": 10,
     "ArchiveMaxCount": 5
   }
   ```

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## So stellst du ein automatisches Backup wieder her

:::: warning Achtung
Beim Wiederherstellen werden alle Welten und Spielerdaten auf den Stand des Backups zurückgesetzt. Alles, was seitdem passiert ist, geht verloren.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Aktuellen Stand sichern</b><br>
   Erstelle über die Verwaltung ein [Backup](../backup-erstellen.md), damit du den aktuellen Stand notfalls zurückholen kannst.

3. <b>Backup herunterladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server, lade die gewünschte ZIP-Datei aus dem Ordner `/backups/` (oder `/backups/archive/`) herunter und entpacke sie auf deinem PC. Darin befinden sich unter anderem die Ordner `worlds` und `resources`.

4. <b>Aktuellen Stand umbenennen</b><br>
   Benenne den Ordner `universe` im Hauptverzeichnis um, zum Beispiel in `universe_alt`.

5. <b>Backup hochladen</b><br>
   Lege im Hauptverzeichnis einen neuen, leeren Ordner `universe` an und lade den entpackten Inhalt der ZIP-Datei hinein. Anschließend muss es den Ordner `/universe/worlds/` geben.

6. <b>Server starten</b><br>
   Starte deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde.

:::: tip Tipp
Brauchst du den alten Stand nicht mehr, kannst du den Ordner `universe_alt` löschen. Der Server lädt ihn nicht.
::::
