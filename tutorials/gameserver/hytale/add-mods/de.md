---
slug: "mods-hinzufuegen"
language: "de"
title: "So installierst Du Mods auf einem Hytale Server"
description: "Mods auf einem Hytale Server installieren"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-03-07"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 8
related: ["gameserver/hytale/enable-whitelist", "gameserver/hytale/improve-performance", "gameserver/hytale/item-loss-on-death", "gameserver/hytale/join-server"]
---

> [!TIP]
> **Hinweis**
>
> Stoppe Deinen Server bevor Du Mods installierst, da diese sonst nicht korrekt geladen werden.

> [!TIP]
> Mods für Hytale kannst Du z.B. von [CurseForge](https://www.curseforge.com/hytale) herunterladen.

## So installierst Du Mods

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Mod herunterladen**\
   Lade den gewünschten Mod als `.jar` oder `.zip` Datei herunter.

3. **Mod hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die Mod-Datei in den `mods/`-Ordner hoch.

4. **Server starten**\
   Starte Deinen Server, damit der Mod geladen wird.

## So entfernst Du Mods

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Mod löschen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lösche die Mod-Datei aus dem `mods/`-Ordner.

3. **Server starten**\
   Starte Deinen Server.

> [!WARNING]
> Hytale befindet sich im Early Access. Mods können Stabilitätsprobleme verursachen. Erstelle vor der Installation ein Backup Deines Servers.
