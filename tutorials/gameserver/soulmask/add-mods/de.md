---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Soulmask Server hinzu"
description: "Mods auf einem Soulmask Server hinzufügen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 7
related: ["gameserver/soulmask/add-admin", "gameserver/soulmask/add-savegame", "gameserver/soulmask/change-map", "gameserver/soulmask/change-max-players"]
---

Du kannst Steam Workshop Mods auf Deinem Server hinzufügen, um das Spielerlebnis zu erweitern.

> [!WARNING]
> Stoppe Deinen Server bevor Du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.

## Mods herunterladen

1. **Im Steam Workshop abonnieren**\
   Öffne den [Steam Workshop für Soulmask](https://steamcommunity.com/app/2646460/workshop/) und abonniere die gewünschten Mods.

2. **Mod-Ordner finden**\
   Die heruntergeladenen Mods findest Du auf Deinem PC unter:

   ```text
   %LOCALAPPDATA%\WS\Saved\Mods\
   ```

## Mods auf den Server hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mods hochladen**\
   Lade die Mod-Ordner in folgendes Verzeichnis hoch:

   ```text
   /WS/Saved/Mods/
   ```

4. **Server starten**\
   Starte Deinen Server.

> [!IMPORTANT]
> Alle Spieler müssen die **gleichen Mods** über den Steam Workshop abonniert haben, um dem Server beitreten zu können.
