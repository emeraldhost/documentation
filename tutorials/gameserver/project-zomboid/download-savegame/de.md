---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Project Zomboid Servers herunter"
description: "Savegame von einem Project Zomboid Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 5
related: ["gameserver/project-zomboid/change-server-name", "gameserver/project-zomboid/create-backup", "gameserver/project-zomboid/enable-server-list", "gameserver/project-zomboid/join-server"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um es auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Zomboid/Saves/Multiplayer/
   ```

4. **Dateien herunterladen**\
   Lade den kompletten Savegame-Ordner aus diesem Verzeichnis auf Deinen PC herunter. Der Ordner enthält den gesamten Spielstand Deines Servers – lade ihn immer vollständig herunter, nicht nur einzelne Dateien daraus.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Den richtigen Ordner finden**
>
> Im Verzeichnis `Multiplayer/` liegt für jeden Spielstand ein eigener Ordner. Liegen dort mehrere Ordner, erkennst Du den aktuell genutzten Spielstand am neuesten Änderungsdatum.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/project-zomboid/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/project-zomboid/create-backup).
