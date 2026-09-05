---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem 7 Days to Die Server hinzu"
description: "Mods auf einem 7 Days to Die Server hinzufügen"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 6
related: ["gameserver/7-days-to-die/activate-crossplay", "gameserver/7-days-to-die/add-admin", "gameserver/7-days-to-die/add-savegame", "gameserver/7-days-to-die/change-map"]
---

Du kannst Mods auf Deinem Server installieren, um das Spielerlebnis zu erweitern.

> [!WARNING]
> Stoppe Deinen Server bevor Du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.

1. **Mods herunterladen**\
   Lade die gewünschten Mods von [Nexus Mods](https://www.nexusmods.com/7daystodie) oder [7daystodiemods.com](https://7daystodiemods.com/) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Mods hochladen**\
   Entpacke den Mod und lade den Mod-Ordner (der die `ModInfo.xml` enthält) in folgendes Verzeichnis hoch:

   ```text
   /Mods/
   ```

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > /Mods/
   > ├── MeinMod/
   > │   ├── ModInfo.xml
   > │   └── Config/
   > └── WeitererMod/
   >     ├── ModInfo.xml
   >     └── Config/
   > ```

   > [!NOTE]
   > Falls der Ordner `Mods` noch nicht existiert, erstelle ihn im Hauptverzeichnis Deines Servers.

5. **Server starten**\
   Starte Deinen Server.

> [!IMPORTANT]
> Alle Spieler müssen **dieselben Mods** lokal installiert haben, um dem Server beitreten zu können.
