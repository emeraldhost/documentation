---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Terraria tShock Server hinzu"
description: "Savegame auf einem Terraria tShock Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/terraria-tshock/add-admin", "gameserver/terraria-tshock/add-mods", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/download-savegame"]
---

Du kannst eine bestehende Welt auf Deinen Server übertragen, um dort weiterzuspielen. tShock nutzt das ganz normale Terraria-Weltformat – eine Welt besteht also aus **einer einzigen `.wld`-Datei**. Du kannst dafür eine Einzelspieler-Welt, die Welt eines normalen Terraria-Servers oder die Welt eines anderen tShock-Servers verwenden.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/terraria-tshock/create-backup) Deiner bisherigen Server-Welt, falls Du später zurückwechseln möchtest.

## Lokales Savegame finden

1. **Welt-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %userprofile%\Documents\My Games\Terraria\Worlds
   ```

   > [!NOTE]
   > Unter Linux liegen die Welten in `~/.local/share/Terraria/Worlds`, unter macOS in `~/Library/Application Support/Terraria/Worlds`.

2. **Welt auswählen**\
   Suche die gewünschte `.wld`-Datei heraus, z.B. `MeineWelt.wld`. Verwende **keine Leerzeichen** im Dateinamen, sondern Unterstriche, z.B. `Meine_Welt.wld`.

   > [!IMPORTANT]
   > Ein Leerzeichen im Weltnamen zerreißt den Startbefehl Deines Servers – die Welt wird dann nicht geladen. Benenne die Datei vor dem Hochladen um, falls nötig.

## Savegame hochladen und anwenden

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt hochladen**\
   Lade die `.wld`-Datei direkt in das **Hauptverzeichnis** Deines Servers hoch:

   ```text
   /
   ```

   > [!NOTE]
   > Bei tShock liegt die Welt nicht in einem Unterordner, sondern direkt im Hauptverzeichnis – dort, wo auch der Ordner `tshock` liegt.

4. **Weltnamen setzen**\
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **World Name** den Dateinamen Deiner Welt ein – **ohne** die Endung `.wld` (z.B. `Meine_Welt` für `Meine_Welt.wld`).

5. **Server starten**\
   Speichere die Einstellungen und starte Deinen Server. Beim Start wird jetzt Deine hochgeladene Welt geladen.

> [!IMPORTANT]
> Der Weltname wird **exakt** so gesucht, wie Du ihn einträgst – Groß- und Kleinschreibung inklusive. Findet der Server keine passende `.wld`-Datei, erzeugt er beim Start automatisch eine **neue, leere Welt** mit diesem Namen. Heißt Deine Datei `MeineWelt.wld` und Du trägst `meinewelt` ein, landest Du also in einer frisch generierten Welt statt in Deiner hochgeladenen.

> [!WARNING]
> **Welt wechseln**
>
> Möchtest Du eine alte Welt vollständig ersetzen, entferne die alte `.wld`-Datei aus dem Hauptverzeichnis. So kommt es später nicht zu Verwechslungen. Sichere sie vorher, falls Du zurückwechseln möchtest: [Savegame herunterladen](/tutorials/gameserver/terraria-tshock/download-savegame).

> [!NOTE]
> **Server Side Characters**
>
> Eine `.wld`-Datei enthält nur die Welt. Sind die Server Side Characters aktiv (Wert `Enabled` in `/tshock/sscconfig.json`), liegen Inventar und Fortschritt der Spieler in `/tshock/tshock.sqlite`. Möchtest Du auch die Charaktere von einem anderen tShock-Server übernehmen, überträgst Du zusätzlich diese Datei – dabei wandern allerdings auch Accounts, Gruppen und Banns mit.

> [!WARNING]
> **tModLoader**
>
> `.twld`-Dateien gehören zu tModLoader und werden von einem tShock-Server nicht verwendet. Eine tModLoader-Welt gehört auf einen tModLoader-Server: [Savegame hinzufügen (tModLoader)](/tutorials/gameserver/terraria-tmodloader/add-savegame).
