---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Terraria tModLoader Servers herunter"
description: "Savegame von einem Terraria tModLoader Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tmodloader"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/terraria-tmodloader/add-world", "gameserver/terraria-tmodloader/create-backup", "gameserver/terraria-tmodloader/join-server", "gameserver/terraria-tmodloader/kick-ban-players"]
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
   /.local/share/Terraria/tModLoader/Worlds/
   ```

4. **Dateien herunterladen**\
   Lade die `.wld` und die dazugehörige `.twld` Datei auf Deinen PC herunter. Beide Dateien gehören zusammen und bilden gemeinsam das Savegame – lade daher immer beide herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Die richtigen Dateien finden**
>
> Liegen mehrere Welten im Verzeichnis, erkennst Du die aktive Welt an dem Namen, der in den **Einstellungen** in der Verwaltung ausgewählt ist. Die `.wld` und die `.twld` Datei einer Welt tragen immer denselben Dateinamen.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/terraria-tmodloader/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/terraria-tmodloader/create-backup).
