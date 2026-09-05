---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Soulmask Servers herunter"
description: "Savegame von einem Soulmask Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 9
related: ["gameserver/soulmask/configure-pvp", "gameserver/soulmask/create-backup", "gameserver/soulmask/find-invitation-code", "gameserver/soulmask/join-server"]
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
   /WS/Saved/Worlds/Dedicated/Level01_Main/
   ```

4. **Weltdaten herunterladen**\
   Lade die Datei `world.db` aus diesem Verzeichnis auf Deinen PC herunter. Sie enthält Deine komplette Welt inklusive Bauten, Spieler- und Charakterdaten.

5. **Spieleinstellungen herunterladen (optional)**\
   Möchtest Du auch Deine Spieleinstellungen sichern, wechsle zusätzlich in folgendes Verzeichnis und lade die Datei `GameXishu.json` herunter:

   ```text
   /WS/Saved/GameplaySettings/
   ```

6. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Den richtigen Ordner finden**
>
> Der Ordner `Level01_Main` entspricht der Standard-Map Cloud Mist Forest. Läuft Dein Server mit einer anderen Map, liegt die `world.db` in dem Ordner, der dem Wert der Map-Einstellung in der Verwaltung entspricht (z.B. `DLC_Level01_Main` für Shifting Sands).

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/soulmask/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/soulmask/create-backup).
