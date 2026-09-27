---
slug: "automatisches-backup-wiederherstellen"
language: "de"
title: "So stellst Du ein automatisches Backup auf Deinem Space Engineers Server wieder her"
description: "Automatisches Backup auf einem Space Engineers Server wiederherstellen und die Anzahl der Backups ändern"
tags: []
date: "2026-09-27"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Automatisches Backup wiederherstellen"
sort: 18
related: ["gameserver/space-engineers/configure-automatic-backups", "gameserver/space-engineers/download-world", "gameserver/space-engineers/upload-world", "gameserver/space-engineers/change-world-settings"]
---
Space Engineers legt auf Deinem Server bei jedem Speichern selbstständig ein Backup Deiner Welt an. Damit kannst Du Deine Welt auf einen früheren Stand zurücksetzen, zum Beispiel wenn ein Schiff versehentlich zerstört wurde oder etwas in der Welt schiefgelaufen ist. Diese automatischen Backups sind unabhängig von den Backups der Verwaltung, die Du über [Backup erstellen](/tutorials/gameserver/create-backup) anlegst.

## So findest Du die automatischen Backups

Deine Welt liegt auf Deinem Server im Ordner `/config/Saves/World/`. Die automatischen Backups findest Du im Unterordner:

```text
/config/Saves/World/Backup/
```

Für jedes Backup gibt es dort einen eigenen Ordner. Sein Name ist der Zeitpunkt des Backups im Format `JJJJ-MM-TT HHmmss`. Den Ordner `2026-09-27 174500` hat Dein Server also am 27.09.2026 um 17:45:00 Uhr angelegt. Die Uhrzeit richtet sich nach der Systemzeit des Servers und kann deshalb von Deiner Ortszeit abweichen.

Jeder Backup-Ordner enthält eine Kopie aller Dateien, die direkt in `/config/Saves/World/` liegen:

- `Sandbox.sbc` und `Sandbox_config.sbc` mit den Welt-Einstellungen und der Mod-Liste
- `SANDBOX_0_0_0_.sbs` und `SANDBOX_0_0_0_.sbsB5` mit den Schiffen, Stationen, Spielfiguren und weiteren Objekten der Welt
- die `.vx2`-Dateien der Planeten und Asteroiden
- je nach Welt das Vorschaubild `thumb.jpg` und weitere Dateien, deren Name mit `gs-` beginnt

Unterordner wie `Storage`, in dem manche Mods ihre Daten ablegen, sichert der Server dabei nicht mit.

Dein Server legt ein neues Backup an, sobald er die Welt erfolgreich gespeichert hat. Automatisch speichert er im Abstand aus dem Feld **Automatischer Backup Interval** in den **Einstellungen** der Verwaltung (Standard: alle `5` Minuten). Das neueste Backup entspricht also immer dem zuletzt gespeicherten Stand Deiner Welt.

> [!NOTE]
> Mit den Standardwerten behält Dein Server nur die letzten 5 Backups und löscht bei jedem neuen Backup das älteste. Die automatischen Backups reichen damit nur etwa 25 Minuten Laufzeit zurück. Für ältere Stände brauchst Du ein [Backup der Verwaltung](/tutorials/gameserver/create-backup). Wie Du mehr automatische Backups aufbewahrst, erfährst Du unter [Anzahl der Backups ändern](#anzahl-der-backups-andern).

## So stellst Du ein Backup wieder her

> [!WARNING]
> Beim Wiederherstellen wird die komplette Welt auf den Stand des Backups zurückgesetzt. Alles, was seitdem in der Welt passiert ist, geht verloren. Da auch die Spielfiguren mit ihrem Inventar in der Welt gespeichert sind, betrifft das alle Spieler.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange er läuft, speichert er regelmäßig und würde dabei seinen aktuellen Stand über das wiederhergestellte Backup schreiben.

2. **Aktuellen Stand sichern**\
   Erstelle über die Verwaltung ein [Backup](/tutorials/gameserver/create-backup), damit Du den aktuellen Stand notfalls zurückholen kannst.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne folgendes Verzeichnis:

   ```text
   /config/Saves/World/Backup/
   ```

4. **Backup auswählen**\
   Suche anhand des Zeitstempels im Ordnernamen das Backup mit dem Stand heraus, den Du wiederherstellen möchtest, zum Beispiel `2026-09-27 174500`. Denk daran, dass das neueste Backup Deinem aktuellen Stand entspricht.

5. **Backup herunterladen**\
   Lade den gewählten Backup-Ordner auf Deinen PC herunter. So bleibt das Backup auf dem Server erhalten.

6. **Aktuelle Weltdateien löschen**\
   Wechsle in den Ordner `/config/Saves/World/` und lösche dort alle Dateien, die direkt in diesem Ordner liegen. Lösche nur Dateien, nicht den Ordner `Backup` und auch keine anderen Unterordner wie `Storage`.

7. **Backup-Dateien hochladen**\
   Lade alle Dateien aus dem heruntergeladenen Backup-Ordner direkt in `/config/Saves/World/` hoch, nicht als weiteren Unterordner. Die `Sandbox.sbc` muss danach direkt in `/config/Saves/World/` neben dem Ordner `Backup` liegen.

   > [!IMPORTANT]
   > Ersetze immer den kompletten Satz an Dateien aus einem einzigen Backup und mische keine Dateien aus verschiedenen Backups. Liegt eine `SANDBOX_0_0_0_.sbsB5` im Ordner, lädt der Server diese Datei statt der `SANDBOX_0_0_0_.sbs`. Spielst Du also nur die `.sbs` zurück und lässt die neuere `.sbsB5` liegen, lädt der Server weiterhin den neueren Stand.

8. **Server starten**\
   Starte Deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde.

> [!NOTE]
> Im Datei-Browser der Verwaltung kannst Du in Schritt 7 die Dateien auch direkt aus dem Backup-Ordner nach `/config/Saves/World/` verschieben, statt sie herunter- und wieder hochzuladen. Das gewählte Backup ist danach allerdings nicht mehr vorhanden. Den leeren Backup-Ordner kannst Du anschließend löschen.

Mit dem Backup übernimmst Du auch die Welt-Einstellungen und die Mod-Liste aus der `Sandbox_config.sbc` zum Zeitpunkt des Backups. Hast Du seitdem Mods hinzugefügt, trage sie erneut ein (siehe [Mods hinzufügen](/tutorials/gameserver/space-engineers/add-mods)). Die Werte aus den **Einstellungen** der Verwaltung, zum Beispiel **Game Mode** und **Maximale Spieler**, schreibt die Verwaltung beim Start ohnehin neu in die Welt. Admins und gebannte Spieler, die Du in der Datei `/config/SpaceEngineers-Dedicated.cfg` eingetragen hast (siehe [Admins hinzufügen](/tutorials/gameserver/space-engineers/add-admins) und [Spieler kicken und bannen](/tutorials/gameserver/space-engineers/kick-ban-players)), liegen außerhalb des Weltordners und bleiben unverändert. Ränge, die Du direkt im Spiel über **Promote** vergeben hast, speichert der Server dagegen in der Welt. Sie entsprechen nach dem Wiederherstellen wieder dem Stand des Backups.

> [!TIP]
> Sobald Dein Server wieder läuft, legt er bei jedem Speichern ein neues Backup an und löscht dabei die ältesten. Möchtest Du mehrere Backups nacheinander ausprobieren, lade vorher den gesamten Ordner `Backup` auf Deinen PC herunter.
>
> Startet der Server nicht oder siehst Du im Spiel nicht den erwarteten Stand, stoppe ihn umgehend, damit er beim Speichern keine weiteren Backups löscht. Prüfe dann, ob die `Sandbox.sbc` direkt in `/config/Saves/World/` liegt und nicht versehentlich in einem Unterordner gelandet ist. Lässt sich das Backup trotzdem nicht laden, spiele das [Backup](/tutorials/gameserver/create-backup) der Verwaltung aus Schritt 2 wieder ein und versuche es mit einem anderen automatischen Backup.

## Anzahl der Backups ändern

Wie viele automatische Backups Dein Server aufbewahrt, legt der Wert `MaxBackupSaves` in der Datei `Sandbox_config.sbc` Deiner Welt fest (Standard: `5`, erlaubt sind `0` bis `1000`). Die Verwaltung überschreibt diesen Wert nicht.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Ein laufender Server kann Deine Änderung beim Speichern oder Stoppen überschreiben.

2. **Backup erstellen**\
   Erstelle ein [Backup](/tutorials/gameserver/create-backup) oder lade Dir eine Kopie der Datei `Sandbox_config.sbc` herunter. So kannst Du den alten Stand wiederherstellen, falls beim Bearbeiten etwas schiefgeht.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser der Verwaltung.

4. **Konfigurationsdatei öffnen**\
   Öffne die Datei:

   ```text
   /config/Saves/World/Sandbox_config.sbc
   ```

5. **Wert ändern**\
   Suche im Block `<Settings>` die Zeile mit `MaxBackupSaves` und trage die gewünschte Anzahl ein, zum Beispiel:

   ```xml
   <MaxBackupSaves>12</MaxBackupSaves>
   ```

6. **Server starten**\
   Speichere die Datei und starte Deinen Server. Erscheint beim Laden der Welt in der Konsole die Zeile `Sandbox world configuration file found, overriding checkpoint settings.`, hat der Server Deine `Sandbox_config.sbc` übernommen.

Wie weit die Backups zurückreichen, kannst Du grob so abschätzen: Anzahl der Backups × **Automatischer Backup Interval**. Mit `12` Backups und dem Standardintervall von `5` Minuten reichen die Backups also etwa eine Stunde zurück. Ein größeres Intervall verlängert diesen Zeitraum ebenfalls, dafür speichert der Server seltener (siehe [Automatische Backups einrichten](/tutorials/gameserver/space-engineers/configure-automatic-backups)).

> [!WARNING]
> Setzt Du `MaxBackupSaves` auf `0`, legt der Server keine automatischen Backups mehr an und löscht beim nächsten Speichern den kompletten Ordner `Backup` mit allen vorhandenen Backups.

> [!NOTE]
> Ändere den Wert in der `Sandbox_config.sbc` Deiner Welt und nicht in der `SpaceEngineers-Dedicated.cfg`. Dort gilt er nur für neu erstellte Welten. Jedes Backup enthält eine Kopie aller Dateien Deiner Welt einschließlich der `.vx2`-Dateien und belegt ungefähr so viel Speicherplatz wie diese. Mehr Backups brauchen also entsprechend mehr Speicherplatz.

> [!IMPORTANT]
> Achte beim Bearbeiten auf gültiges XML. Ist die `Sandbox_config.sbc` fehlerhaft, ignoriert der Server die gesamte Datei, ohne eine Fehlermeldung in der Konsole anzuzeigen. Er verwendet dann die Einstellungen aus der `Sandbox.sbc` und überschreibt die `Sandbox_config.sbc` beim nächsten Speichern. Deine Änderungen gehen dabei verloren. Fehlt die Zeile aus Schritt 6 nach dem Start, stoppe den Server, spiele Deine Kopie der Datei wieder ein und ändere den Wert erneut. Mehr zum Bearbeiten der Welt-Einstellungen findest Du unter [Welt-Einstellungen ändern](/tutorials/gameserver/space-engineers/change-world-settings).
