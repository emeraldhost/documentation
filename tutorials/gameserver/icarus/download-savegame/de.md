---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Icarus Servers herunter"
description: "Savegame von einem Icarus Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["icarus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/icarus/change-server-name", "gameserver/icarus/create-backup", "gameserver/icarus/join-server", "gameserver/icarus/set-admin-password"]
---

Du kannst den Prospect Deines Servers jederzeit auf Deinen PC herunterladen, zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig, Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /ICARUS/Saved/PlayerData/DedicatedServer/Prospects/
   ```

4. **Prospect-Datei herunterladen**\
   Lade die Datei `<DeinProspect>.json` auf Deinen PC herunter. Jeder Prospect ist eine einzelne `.json`-Datei, die den kompletten Spielstand enthält.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Welcher Prospect aktuell geladen wird, siehst Du in folgender Datei:
>
> ```text
> /ICARUS/Saved/Config/WindowsServer/ServerSettings.ini
> ```
>
> Der Parameter `LoadProspect=` enthält den Dateinamen Deines Prospects (ohne `.json`).

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/icarus/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/icarus/create-backup).
