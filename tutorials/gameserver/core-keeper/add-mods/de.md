---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Core Keeper Server hinzu"
description: "Mods auf einem Core Keeper Server hinzufügen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 5
related: ["gameserver/core-keeper/add-admin", "gameserver/core-keeper/add-savegame", "gameserver/core-keeper/ban-players", "gameserver/core-keeper/change-content-bundle"]
---

Core Keeper nutzt **mod.io** für Mods. Du kannst Mods manuell herunterladen und per SFTP hochladen.

> [!WARNING]
> Stoppe Deinen Server bevor Du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.

## mod.io einrichten

1. **mod.io Account erstellen**\
   Erstelle einen Account auf [mod.io](https://mod.io/) oder logge Dich ein.

2. **API Key erstellen**\
   Gehe zu [mod.io/me/access](https://mod.io/me/access) und erstelle einen **API Key**. Kopiere den Key und die **API URL** (z.B. `https://u-*.modapi.io/v1`).

3. **OAuth Token erstellen**\
   Erstelle unter **OAuth Access** einen neuen Token mit **Read + Write** Berechtigung. Kopiere den Token sofort – er wird nur einmal angezeigt.

## Mods herunterladen und hochladen

1. **Mods herunterladen**\
   Lade die gewünschten Mods von [mod.io/g/corekeeper](https://mod.io/g/corekeeper) herunter. Nutze den **Download File**-Button auf der Mod-Seite.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Mods hochladen**\
   Entpacke jeden Mod in einen eigenen Unterordner im Verzeichnis:

   ```text
   /Mods/
   ```

   > [!NOTE]
   > Falls der Ordner `Mods` noch nicht existiert, erstelle ihn im Hauptverzeichnis Deines Servers.

5. **Server starten**\
   Starte Deinen Server.

> [!IMPORTANT]
> Alle Spieler müssen **dieselben Mods** installiert haben, um dem Server beitreten zu können.
