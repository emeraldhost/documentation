---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Colony Survival Servers herunter"
description: "Savegame von einem Colony Survival Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/colony-survival/add-savegame", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/join-server", "gameserver/colony-survival/kick-ban-players"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Colony Survival schreibt im laufenden Betrieb ständig in die Weltdatenbank – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /gamedata/savegames/
   ```

4. **Weltordner herunterladen**\
   Lade den kompletten Ordner Deiner Welt mit allen enthaltenen Dateien herunter. Welchen Namen der Ordner hat, siehst Du in der **Verwaltung** im Feld **World Name**.

   | Datei | Inhalt |
   |-------|--------|
   | `world.sqlite3` | Die eigentliche Welt als SQLite-Datenbank |
   | `world.sqlite3-wal` | Write-Ahead-Log der Datenbank (nicht immer vorhanden) |
   | `world.sqlite3-shm` | Shared-Memory-Datei des Write-Ahead-Logs (nicht immer vorhanden) |
   | `worldconfig.json` | Anzeigename, Welttyp und aktivierte Mods |
   | `permissionusers.json` | Rechte der Spieler (falls angelegt) |
   | `permissiongroups.json` | Eigene Rechtegruppen (falls angelegt) |

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Lade immer den **kompletten Ordner** herunter. Die Dateien gehören zusammen: Ohne `worldconfig.json` fehlen dem Spielstand die Angaben zu Welttyp und aktivierten Mods, ohne die `-wal`-Datei können die letzten Änderungen an der Welt fehlen.

> [!TIP]
> **Mods mitsichern**
>
> Nutzt Deine Welt Mods, sichere zusätzlich das Mod-Verzeichnis, damit sich die Welt später wieder laden lässt:
>
> ```text
> /gamedata/mods/
> ```

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/colony-survival/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/colony-survival/create-backup).
