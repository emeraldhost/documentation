---
slug: "bepinex-installieren"
language: "de"
title: "So installierst Du BepInEx auf Deinem Valheim Server"
description: "BepInEx auf einem Valheim Server installieren"
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
short_title: "BepInEx installieren"
sort: 3
related: ["gameserver/valheim/add-admin", "gameserver/valheim/download-savegame", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

**BepInEx** ist ein Mod-Framework, das benötigt wird, um Mods auf Deinem Valheim Server zu nutzen.

1. **BepInEx herunterladen**\
   Lade das **BepInExPack_Valheim** von [Thunderstore](https://thunderstore.io/c/valheim/p/denikson/BepInExPack_Valheim/) herunter. Klicke auf **Manual Download**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **BepInEx hochladen**\
   Entpacke die heruntergeladene ZIP-Datei und lade den **gesamten Inhalt** in das Hauptverzeichnis Deines Servers hoch. Folgende Dateien und Ordner sollten danach vorhanden sein:

   ```text
   /
   ├── BepInEx/
   │   ├── config/
   │   ├── plugins/
   │   └── core/
   ├── doorstop_config.ini
   ├── winhttp.dll
   └── ...
   ```

5. **Server starten**\
   Starte Deinen Server. BepInEx wird automatisch initialisiert.

> [!NOTE]
> Nach der Installation kannst Du Mods als `.dll`-Dateien in den Ordner `/BepInEx/plugins/` hochladen. Siehe [Mods hinzufügen](/tutorials/gameserver/valheim/add-mods).
