---
slug: "whitelist-aktivieren"
language: "de"
title: "So aktivierst Du die Whitelist auf Deinem VEIN Server"
description: "Whitelist auf einem VEIN Server aktivieren"
tags: []
date: "2026-03-23"
visibility: "public"
cta: "gameserver"
product_keys: ["vein"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Whitelist aktivieren"
sort: 7
related: ["gameserver/vein/create-backup", "gameserver/vein/download-savegame", "gameserver/vein/join-server", "gameserver/vein/kick-ban-players"]
---

Mit der Whitelist kannst Du den Zugang zu Deinem Server auf bestimmte Spieler beschränken.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne die Datei `Game.ini` unter:

   ```text
   /Vein/Saved/Config/LinuxServer/Game.ini
   ```

4. **Spieler zur Whitelist hinzufügen**\
   Füge den Abschnitt `[/Script/Vein.VeinGameStateBase]` hinzu (falls nicht vorhanden) und trage die SteamID64 jedes Spielers ein:

   ```ini
   [/Script/Vein.VeinGameStateBase]
   WhitelistedPlayers=76561198012345678
   WhitelistedPlayers=76561198087654321
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> Sobald Du einen Spieler zur Whitelist hinzufügst, können **nur noch gelistete Spieler** dem Server beitreten. Vergiss nicht, Deine eigene SteamID64 ebenfalls hinzuzufügen!

## Whitelist deaktivieren

Um die Whitelist zu deaktivieren, entferne alle `WhitelistedPlayers`-Einträge aus der `Game.ini`. Sobald keine Einträge mehr vorhanden sind, kann wieder jeder Spieler dem Server beitreten.
