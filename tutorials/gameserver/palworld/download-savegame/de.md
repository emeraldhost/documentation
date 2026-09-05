---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Palworld Servers herunter"
description: "Savegame von einem Palworld Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 22
related: ["gameserver/palworld/create-backup", "gameserver/palworld/disable-death-penalty", "gameserver/palworld/edit-server-config", "gameserver/palworld/enable-fast-travel"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen, zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um es auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig, Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Pal/Saved/SaveGames/0/
   ```

4. **Savegame-Ordner herunterladen**\
   Lade den Savegame-Ordner vollständig auf Deinen PC herunter. Der Ordnername ist eine lange Zeichenkette aus Buchstaben und Zahlen und enthält alle Welt- und Spielerdaten.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Liegen mehrere Ordner in `/Pal/Saved/SaveGames/0/`, findest Du den aktuell geladenen Savegame-Ordner in folgender Datei:
>
> ```text
> /Pal/Saved/Config/LinuxServer/GameUserSettings.ini
> ```
>
> Der Parameter `DedicatedServerName=` enthält den Namen des verwendeten Savegame-Ordners.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/palworld/upload-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/palworld/create-backup).
