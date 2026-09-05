---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem V Rising Server hinzu"
description: "Mods auf einem V Rising Server hinzufügen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 5
related: ["gameserver/v-rising/add-admin", "gameserver/v-rising/download-savegame", "gameserver/v-rising/install-bepinex", "gameserver/v-rising/add-savegame"]
---

V Rising Mods basieren auf dem **BepInEx**-Framework. Du musst zuerst BepInEx installieren, bevor Du Mods hinzufügen kannst. Siehe [BepInEx installieren](/tutorials/gameserver/v-rising/install-bepinex).

> [!WARNING]
> Stoppe Deinen Server bevor Du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.

1. **Mods herunterladen**\
   Lade die gewünschten Mods von [Thunderstore](https://thunderstore.io/c/v-rising/) oder [Nexus Mods](https://www.nexusmods.com/vrising) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Mod-Dateien hochladen**\
   Entpacke den Mod und lade die `.dll`-Datei(en) in folgendes Verzeichnis hoch:

   ```text
   /BepInEx/plugins/
   ```

5. **Server starten**\
   Starte Deinen Server.

> [!IMPORTANT]
> Alle Spieler müssen **dieselben Mods** lokal installiert haben, um dem Server beitreten zu können.
