---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Core Keeper Servers herunter"
description: "Savegame von einem Core Keeper Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 6
related: ["gameserver/core-keeper/change-world-seed", "gameserver/core-keeper/create-backup", "gameserver/core-keeper/join-server", "gameserver/core-keeper/enable-seasonal-events"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/worlds/
   ```

4. **Welt-Datei herunterladen**\
   Lade die `.world.gzip`-Datei Deiner Welt auf Deinen PC herunter, zum Beispiel `0.world.gzip`. Liegen mehrere Welten im Verzeichnis, lade einfach alle Dateien herunter, wenn Du auf Nummer sicher gehen willst.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Die richtige Welt-Datei finden**
>
> Die Zahl vor `.world.gzip` ist der **World Index**. Welche Welt Dein Server aktuell lädt, erkennst Du am World Index in den Server-Einstellungen: Steht dieser auf `0`, ist `0.world.gzip` die aktive Welt, bei `3` entsprechend `3.world.gzip`.

> [!TIP]
> Möchtest Du die heruntergeladene Welt lokal im Einzelspieler weiterspielen, legst Du die `.world.gzip`-Datei auf Deinem PC in folgendem Ordner ab:
>
> ```text
> %USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\<SteamID>\worlds
> ```

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/core-keeper/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/core-keeper/create-backup).
