---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Counter-Strike 2 Server"
description: "Spieler auf einem Counter-Strike 2 Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/counter-strike-2/change-map", "gameserver/counter-strike-2/configure-server", "gameserver/counter-strike-2/create-backup", "gameserver/counter-strike-2/join-server"]
---

Du kannst Spieler über die Serverkonsole in der Verwaltung kicken und bannen.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du die [SteamID64](/tutorials/gameserver/steamid64-find-out) eines Spielers herausfindest.

## Spieler über die Serverkonsole kicken oder bannen

1. **Serverkonsole öffnen**\
   Öffne die Konsole Deines Servers über die Verwaltung.

2. **Spieler anzeigen**\
   Gib den Befehl `status` ein, um alle verbundenen Spieler und deren SteamID64 anzuzeigen.

3. **Spieler kicken oder bannen**\
   Verwende einen der folgenden Befehle:

   ```text
   kick <Name>
   ```

   ```text
   banid <Minuten> <SteamID64>
   ```

> [!NOTE]
> Setze die Minuten auf `0`, um den Spieler dauerhaft zu bannen.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Alle verbundenen Spieler anzeigen |
| `kick <Name>` | Spieler vom Server kicken |
| `banid <Minuten> <SteamID64>` | Spieler für eine bestimmte Dauer bannen |
| `removeid <SteamID64>` | Ban eines Spielers aufheben |
