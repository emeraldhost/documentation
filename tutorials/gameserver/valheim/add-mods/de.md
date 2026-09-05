---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Valheim Server hinzu"
description: "Mods auf einem Valheim Server hinzufügen"
tags: []
date: "2026-03-10"
visibility: "public"
updated: "2026-04-10"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 5
related: ["gameserver/valheim/download-savegame", "gameserver/valheim/install-bepinex", "gameserver/valheim/add-savegame", "gameserver/valheim/change-branch"]
---

Valheim Mods basieren auf dem **BepInEx**-Framework. Du musst zuerst BepInEx installieren, bevor Du Mods hinzufügen kannst. Siehe [BepInEx installieren](/tutorials/gameserver/valheim/install-bepinex).

> [!WARNING]
> Stoppe Deinen Server bevor Du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.

1. **Mods herunterladen**\
   Lade die gewünschten Mods von [Thunderstore](https://thunderstore.io/c/valheim/) oder [Nexus Mods](https://www.nexusmods.com/valheim) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Mod-Dateien hochladen**\
   Entpacke den Mod und lade die `.dll`-Datei(en) in folgendes Verzeichnis hoch:

   ```text
   /BepInEx/plugins/
   ```

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > /BepInEx/plugins/
   > ├── ValheimPlus.dll
   > ├── EpicLoot.dll
   > └── BetterArchery.dll
   > ```

5. **Server starten**\
   Starte Deinen Server.

> [!IMPORTANT]
> Alle Spieler müssen **dieselben Mods** lokal installiert haben, um dem Server beitreten zu können. Spieler müssen BepInEx und die Mods ebenfalls in ihrem lokalen Valheim-Verzeichnis installieren.

> [!NOTE]
> Einige Mods erstellen beim ersten Start automatisch Konfigurationsdateien unter `/BepInEx/config/`. Diese kannst Du anpassen, um die Mods nach Deinen Wünschen einzustellen.
