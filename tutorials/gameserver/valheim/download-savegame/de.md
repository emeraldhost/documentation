---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Valheim Servers herunter"
description: "Savegame von einem Valheim Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 6
related: ["gameserver/valheim/add-admin", "gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren einer Welt oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

4. **Weltordner herunterladen**\
   Lade den kompletten Ordner `<WeltName>` auf Deinen PC herunter. Seit Valheim 1.0 ist jede Welt ein eigener Ordner, dessen Dateien als Satz zusammengehören. Lade deshalb immer den ganzen Ordner herunter und nicht nur einzelne Dateien daraus.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Welcher Ordner zu Deiner Welt gehört, erkennst Du am Feld **Welt Name** in den **Einstellungen** der Verwaltung. Steht dort z.B. `MeineWelt`, benötigst Du den Ordner `MeineWelt`. Ordner mit `_backup_` im Namen sind Sicherungen und nicht der aktuelle Stand.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/valheim/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/valheim/create-backup). Wie Du eines der automatischen Backups zurückspielst, die Valheim selbst auf Deinem Server anlegt, erfährst Du unter [Automatisches Backup wiederherstellen](/tutorials/gameserver/valheim/restore-automatic-backup).
