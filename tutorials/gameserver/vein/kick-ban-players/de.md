---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem VEIN Server"
description: "Spieler auf einem VEIN Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["vein"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/vein/create-backup", "gameserver/vein/download-savegame", "gameserver/vein/enable-whitelist", "gameserver/vein/join-server"]
---

Du kannst Spieler über die `Game.ini` dauerhaft vom Server ausschließen.

## Spieler bannen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne die Datei `Game.ini` und suche den Abschnitt:

   ```text
   [/Script/Vein.VeinGameStateBase]
   ```

4. **BannedPlayers hinzufügen**\
   Füge für jeden gebannten Spieler eine neue Zeile hinzu:

   ```text
   BannedPlayers=<SteamID64>
   ```

   Beispiel:

   ```text
   [/Script/Vein.VeinGameStateBase]
   BannedPlayers=76561198000000001
   BannedPlayers=76561198000000002
   ```

5. **Server starten**\
   Starte Deinen Server.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Spieler entbannen

Entferne die entsprechende `BannedPlayers=<SteamID64>`-Zeile aus der `Game.ini` und starte den Server neu.
