---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Valheim Server hinzu"
description: "Admin auf einem Valheim Server hinzufügen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/valheim/download-savegame", "gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

Du kannst Admins über die Datei `adminlist.txt` hinzufügen. Jeder Admin wird anhand seiner SteamID64 identifiziert.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **adminlist.txt öffnen**\
   Öffne die Datei `adminlist.txt` im Verzeichnis:

   ```text
   /config/adminlist.txt
   ```

   Falls die Datei dort nicht vorhanden ist, prüfe alternativ:

   ```text
   /.config/unity3d/IronGate/Valheim/adminlist.txt
   ```

4. **SteamID64 eintragen**\
   Trage die SteamID64 des Spielers ein, der Admin werden soll. Füge pro Zeile eine SteamID64 hinzu:

   ```text
   76561198012345678
   76561198087654321
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Änderungen an der `adminlist.txt` werden erst nach einem Serverneustart wirksam.
