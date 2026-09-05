---
slug: "automatisches-backup-wiederherstellen"
language: "de"
title: "So stellst Du ein automatisches Backup auf Deinem Palworld Server wieder her"
description: "Automatisches Backup auf einem Palworld Server wiederherstellen"
tags: []
date: "2026-08-23"
visibility: "public"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Automatisches Backup wiederherstellen"
sort: 4
related: ["gameserver/palworld/kick-ban-players", "gameserver/palworld/reset-world", "gameserver/palworld/set-server-password", "gameserver/palworld/upload-savegame"]
---

Palworld legt auf Deinem Server selbstständig regelmäßige Backups Deiner Welt an. Damit kannst Du Deinen Spielstand auf einen früheren Zeitpunkt zurücksetzen, zum Beispiel wenn der Spielstand beschädigt wurde oder etwas versehentlich zerstört oder gelöscht wurde. Diese automatischen Backups sind unabhängig von den Backups der Verwaltung, die Du über [Backup erstellen](/tutorials/gameserver/palworld/create-backup) anlegst.

## So findest Du die automatischen Backups

Die automatischen Backups liegen auf Deinem Server unter:

```text
/Pal/Saved/SaveGames/0/<Savegame-Ordner>/backup/world/
```

Der Savegame-Ordner ist der Ordner mit der langen Zeichenkette als Name (z.B. `A1B2C3D4E5F67890A1B2C3D4E5F67890`).

Im Verzeichnis `backup/world/` liegt für jedes Backup ein Ordner, dessen Name der Zeitpunkt des Backups im Format `JJJJ.MM.TT-HH.MM.SS` ist. Der Ordner `2026.01.15-18.30.00` enthält also den Stand vom 15.01.2026 um 18:30:00 Uhr. Jeder Backup-Ordner enthält die Weltdateien `Level.sav` und `LevelMeta.sav` sowie den Ordner `Players` mit den Spielerdaten. Von den letzten Stunden liegen mehrere Backups in kurzen Abständen vor, von älteren Tagen bleibt jeweils ein Backup pro Tag erhalten.

## So stellst Du ein Backup wieder her

> [!WARNING]
> Beim Wiederherstellen wird der komplette Spielstand, also Welt und Spieler, auf den Zeitpunkt des Backups zurückgesetzt. Alles, was zwischen dem Backup und jetzt passiert ist, geht verloren.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Aktuellen Stand sichern**\
   Erstelle über die Verwaltung ein [Backup](/tutorials/gameserver/palworld/create-backup) oder lade Deinen Savegame-Ordner auf Deinen PC herunter ([Savegame herunterladen](/tutorials/gameserver/palworld/download-savegame)), damit Du den aktuellen Stand notfalls zurückholen kannst.

3. **Savegame-Ordner öffnen**\
   Öffne den Dateimanager der Verwaltung und navigiere in Deinen Savegame-Ordner:

   ```text
   /Pal/Saved/SaveGames/0/<Savegame-Ordner>/
   ```

   Alternativ kannst Du Dich auch per [SFTP](/tutorials/gameserver/establish-sftp-connection) verbinden.

4. **Backup auswählen**\
   Öffne den Unterordner `backup/world/` und suche anhand des Zeitstempels den Backup-Ordner mit dem Stand heraus, den Du wiederherstellen möchtest.

5. **Aktuelle Weltdateien löschen**\
   Wechsle zurück in den Savegame-Ordner und lösche dort die Dateien `Level.sav` und `LevelMeta.sav` sowie den Ordner `Players`. Lösche nur diese drei Einträge, nicht den Ordner `backup` und nicht den Savegame-Ordner selbst.

6. **Backup-Dateien kopieren**\
   Kopiere die Dateien `Level.sav` und `LevelMeta.sav` sowie den Ordner `Players` aus dem gewählten Backup-Ordner direkt in den Savegame-Ordner, sodass sie dort neben dem Ordner `backup` liegen.

7. **Server starten**\
   Starte Deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde.

> [!TIP]
> Liegen mehrere Ordner in `/Pal/Saved/SaveGames/0/`, findest Du den aktuell geladenen Savegame-Ordner in folgender Datei:
>
> ```text
> /Pal/Saved/Config/LinuxServer/GameUserSettings.ini
> ```
>
> Der Parameter `DedicatedServerName=` enthält den Namen des verwendeten Savegame-Ordners.

> [!NOTE]
> Die automatischen Backups sind eine Funktion des Palworld-Servers selbst und werden über die Einstellung `bIsUseBackupSaveData` in der `PalWorldSettings.ini` gesteuert (siehe [Config anpassen](/tutorials/gameserver/palworld/edit-server-config)). Steht sie auf `True`, legt Dein Server die Backups selbstständig an.
