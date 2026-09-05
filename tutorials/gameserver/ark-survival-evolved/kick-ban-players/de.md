---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem ARK Survival Evolved Server"
description: "Spieler auf einem ARK Survival Evolved Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["ark-survival-evolved"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/ark-survival-evolved/add-savegame", "gameserver/ark-survival-evolved/create-backup", "gameserver/ark-survival-evolved/download-savegame", "gameserver/ark-survival-evolved/join-server"]
---

Du kannst Spieler per Konsolenbefehl kicken und bannen.

> [!WARNING]
> **Voraussetzung**
>
> Du musst Admin auf Deinem Server sein. Hier findest Du eine Anleitung, wie Du einen [Admin hinzufügst](/tutorials/gameserver/ark-survival-evolved/add-admin).

> [!TIP]
> Hier findest Du eine Anleitung, wie Du die [SteamID64](/tutorials/gameserver/steamid64-find-out) eines Spielers herausfindest.

## Spieler per Konsolenbefehl kicken oder bannen

1. **Server beitreten**\
   Tritt Deinem ARK Survival Evolved Server bei.

2. **Konsole öffnen**\
   Drücke die `Tab`-Taste, um die Konsole zu öffnen.

3. **Spieler anzeigen**\
   Gib den Befehl `ListPlayers` ein, um alle verbundenen Spieler und deren SteamID64 anzuzeigen.

4. **Spieler kicken oder bannen**\
   Verwende einen der folgenden Befehle:

   ```text
   KickPlayer <SteamID64>
   ```

   ```text
   BanPlayer <SteamID64>
   ```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `ListPlayers` | Alle verbundenen Spieler anzeigen |
| `KickPlayer <SteamID64>` | Spieler vom Server kicken |
| `BanPlayer <SteamID64>` | Spieler dauerhaft bannen |
| `UnbanPlayer <SteamID64>` | Ban eines Spielers aufheben |
