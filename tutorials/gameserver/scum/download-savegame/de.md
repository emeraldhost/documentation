---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines SCUM Servers herunter"
description: "Savegame von einem SCUM Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/scum/add-savegame", "gameserver/scum/create-backup", "gameserver/scum/join-server", "gameserver/scum/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. SCUM schreibt im laufenden Betrieb ständig in die Datenbank – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /SCUM/Saved/SaveFiles/
   ```

4. **Dateien herunterladen**\
   Lade alle drei Dateien auf Deinen PC herunter:

   ```text
   SCUM.db
   SCUM.db-wal
   SCUM.db-shm
   ```

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Die drei Dateien gehören zusammen: `SCUM.db` ist die eigentliche Datenbank mit Welt, Basen, Fahrzeugen und Charakteren, `SCUM.db-wal` das Write-Ahead-Log und `SCUM.db-shm` die zugehörige Shared-Memory-Datei. Sichere sie deshalb immer gemeinsam.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich den folgenden Ordner herunter:
>
> ```text
> /SCUM/Saved/Config/WindowsServer/
> ```
>
> Dort liegen unter anderem `ServerSettings.ini`, `AdminUsers.ini` und `BannedUsers.ini`.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/scum/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/scum/create-backup).
