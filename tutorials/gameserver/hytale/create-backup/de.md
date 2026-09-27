---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Hytale Servers"
description: "Backup eines Hytale Servers erstellen"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/hytale/change-time", "gameserver/hytale/change-weather", "gameserver/hytale/create-new-world", "gameserver/hytale/disable-npcs"]
---

Ein regelmäßiges Backup Deines Hytale Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder einen versehentlich gelöschten Spielstand.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Mods, Plugins oder Add-ons
- Vor größeren Änderungen an der Welt oder Konfiguration
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.

## So aktivierst Du die automatischen Backups des Hytale Servers

Zusätzlich zu den Backups der Verwaltung kann der Hytale Server selbst in regelmäßigen Abständen Backups Deiner Welten anlegen.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Automatische Backups einstellen**\
   Passe die folgenden Felder an:

   | Feld | Beschreibung | Standard |
   |------|-------------|----------|
   | **Aktiviere Auto Server Backup** | `1` schaltet die automatischen Backups ein, `0` schaltet sie aus | `0` |
   | **Backup Ordner** | Ordner im Hauptverzeichnis, in dem der Server die Backups ablegt | `backups` |
   | **Backup Intervall** | Abstand zwischen zwei Backups in Minuten | `30` |

4. **Server neu starten**\
   Speichere die Einstellungen und starte Deinen Server neu. Das erste automatische Backup legt der Server an, sobald er so lange läuft wie im Feld **Backup Intervall** eingestellt.

Die Backups findest Du per [SFTP](/tutorials/gameserver/establish-sftp-connection) im Ordner `/backups/` bzw. in dem Ordner, den Du im Feld **Backup Ordner** eingetragen hast. Jedes Backup ist eine ZIP-Datei, deren Name dem Zeitpunkt der Erstellung entspricht: `2026-09-27_18-30-00.zip` hat der Server also am 27.09.2026 um 18:30:00 Uhr angelegt. Die Uhrzeit richtet sich nach der Systemzeit des Servers und kann deshalb von Deiner Ortszeit abweichen.

> [!WARNING]
> Die automatischen Backups enthalten nur den Ordner `universe` mit Deinen Welten und den Spielerdaten. Die `config.json`, die `permissions.json`, die `bans.json` und Deine Mods sind nicht enthalten. Diese sicherst Du über die [Backup-Funktion](/tutorials/gameserver/create-backup) der Verwaltung.

Bevor der Server ein neues Backup anlegt, räumt er den Backup-Ordner auf: Er behält standardmäßig die 5 neuesten Backups und legt das neue dazu. Von den älteren Backups verschiebt er höchstens alle 12 Stunden eines in den Unterordner `archive`, in dem standardmäßig bis zu 5 Backups aufbewahrt werden. Alle anderen löscht er. Die Backups belegen Speicherplatz auf Deinem Server.

> [!TIP]
> Ist die Funktion aktiviert, kannst Du zusätzlich jederzeit ein Backup über die Konsole der Verwaltung auslösen:
>
> ```text
> backup
> ```
>
> Ohne aktivierte automatische Backups antwortet der Server mit `The server must be started with --backup-dir to use this command!`.

### So änderst Du die Anzahl der aufbewahrten Backups

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. **Anzahl festlegen**\
   Trage im Block `Backup` die gewünschten Werte ein. `MaxCount` legt fest, wie viele der neuesten Backups der Server beim Aufräumen im Backup-Ordner behält (das neue Backup kommt jeweils dazu), `ArchiveMaxCount`, wie viele Backups er im Unterordner `archive` aufbewahrt. Beide Werte müssen mindestens `1` sein:

   ```json
   "Backup": {
     "MaxCount": 10,
     "ArchiveMaxCount": 5
   }
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

## So stellst Du ein automatisches Backup wieder her

> [!WARNING]
> Beim Wiederherstellen werden alle Welten und Spielerdaten auf den Stand des Backups zurückgesetzt. Alles, was seitdem passiert ist, geht verloren.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Aktuellen Stand sichern**\
   Erstelle über die Verwaltung ein [Backup](/tutorials/gameserver/create-backup), damit Du den aktuellen Stand notfalls zurückholen kannst.

3. **Backup herunterladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server, lade die gewünschte ZIP-Datei aus dem Ordner `/backups/` (oder `/backups/archive/`) herunter und entpacke sie auf Deinem PC. Darin befinden sich unter anderem die Ordner `worlds` und `resources`.

4. **Aktuellen Stand umbenennen**\
   Benenne den Ordner `universe` im Hauptverzeichnis um, zum Beispiel in `universe_alt`.

5. **Backup hochladen**\
   Lege im Hauptverzeichnis einen neuen, leeren Ordner `universe` an und lade den entpackten Inhalt der ZIP-Datei hinein. Anschließend muss es den Ordner `/universe/worlds/` geben.

6. **Server starten**\
   Starte Deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde.

> [!TIP]
> Brauchst Du den alten Stand nicht mehr, kannst Du den Ordner `universe_alt` löschen. Der Server lädt ihn nicht.
