---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Terraria Server hinzu"
description: "Savegame auf einem Terraria Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 3
related: ["gameserver/terraria/create-backup", "gameserver/terraria/download-savegame", "gameserver/terraria/join-server", "gameserver/terraria/kick-ban-players"]
---

Du kannst eine lokale Welt auf Deinen Server übertragen, um dort mit einer bestehenden Welt weiterzuspielen. Eine Welt besteht im normalen Terraria aus **einer einzigen `.wld`-Datei**.

## Lokales Savegame finden

1. **Welt-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %userprofile%\Documents\My Games\Terraria\Worlds
   ```

   > [!NOTE]
   > Unter Linux liegen die Welten in `~/.local/share/Terraria/Worlds`, unter macOS in `~/Library/Application Support/Terraria/Worlds`.

2. **Welt auswählen**\
   Suche die gewünschte `.wld`-Datei heraus, z.B. `MeineWelt.wld`. Vermeide Leerzeichen im Dateinamen und verwende stattdessen Unterstriche, z.B. `Meine_Welt.wld`.

## Savegame hochladen und anwenden

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt hochladen**\
   Lade die `.wld`-Datei in folgendes Verzeichnis hoch:

   ```text
   /saves/Worlds/
   ```

4. **Weltnamen setzen**\
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **World Name** den Dateinamen Deiner Welt ein – **ohne** die Endung `.wld` (z.B. `Meine_Welt` für `Meine_Welt.wld`).

5. **Server starten**\
   Speichere die Einstellungen und starte Deinen Server.

> [!IMPORTANT]
> Der Weltname wird **exakt** so gesucht, wie Du ihn einträgst – Groß- und Kleinschreibung inklusive. Findet der Server im Ordner `/saves/Worlds/` keine passende `.wld`-Datei, erzeugt er beim Start automatisch eine **neue, leere Welt** mit diesem Namen. Heißt Deine Datei `MeineWelt.wld` und Du trägst `meinewelt` ein, landest Du also in einer frisch generierten Welt statt in Deiner hochgeladenen.

> [!WARNING]
> Bearbeite die Datei `serverconfig.txt` nicht von Hand, um die Welt zu wechseln. Die Werte `worldpath`, `worldname`, `world`, `difficulty`, `autocreate`, `port`, `maxplayers`, `motd`, `seed`, `password` und `npcstream` werden bei **jedem Serverstart** aus den Einstellungen in der Verwaltung neu geschrieben. Ändere stattdessen immer die passende Einstellung im Panel.

> [!WARNING]
> **Welt wechseln**
>
> Möchtest Du eine alte Welt vollständig ersetzen, entferne im Ordner `/saves/Worlds/` auch die alte `.wld`-Datei sowie die zugehörigen `.bak`-Sicherungsdateien. So kommt es später nicht zu Verwechslungen.

> [!NOTE]
> Existiert der Ordner `/saves/Worlds/` noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe den Server anschließend wieder, bevor Du die Datei hochlädst.

> [!WARNING]
> **tModLoader**
>
> `.twld`-Dateien gehören zu tModLoader und werden von einem normalen Terraria-Server nicht verwendet. Eine tModLoader-Welt gehört auf einen tModLoader-Server: [Savegame hinzufügen (tModLoader)](/tutorials/gameserver/terraria-tmodloader/add-savegame).

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/terraria/create-backup) Deiner bisherigen Server-Welt, falls Du später zurückwechseln möchtest.
