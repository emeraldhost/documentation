---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem DayZ Server"
description: "Spieler auf einem DayZ Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 11
related: ["gameserver/dayz/enable-crosshair", "gameserver/dayz/enable-third-person", "gameserver/dayz/enable-von", "gameserver/dayz/join-server"]
---

Du kannst Spieler per Ingame-Chat-Befehl kicken oder über die Konfigurationsdatei dauerhaft bannen.

> [!WARNING]
> **Voraussetzung**
>
> Du musst Admin auf Deinem Server sein. Hier findest Du eine Anleitung, wie Du einen [Admin hinzufügst](/tutorials/gameserver/dayz/add-admin).

> [!TIP]
> Hier findest Du eine Anleitung, wie Du die [SteamID64](/tutorials/gameserver/steamid64-find-out) eines Spielers herausfindest.

## Spieler per Chat-Befehl kicken

1. **Server beitreten**\
   Tritt Deinem DayZ Server bei und melde Dich als Admin an.

2. **Chat öffnen**\
   Drücke `Enter`, um den Chat zu öffnen.

3. **Spieler kicken**\
   Gib folgenden Befehl ein:

   ```text
   #kick <SteamID64>
   ```

## Spieler über ban.txt dauerhaft bannen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **ban.txt öffnen**\
   Öffne die Datei `ban.txt` im Hauptverzeichnis Deines Servers. Erstelle die Datei, falls sie nicht existiert.

4. **Spieler zur Banliste hinzufügen**\
   Trage die SteamID64 des Spielers in eine neue Zeile ein:

   ```text
   76561198012345678
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Spieler per Chat-Befehl bannen

Du kannst Spieler auch direkt per Chat-Befehl bannen, ohne die `ban.txt` manuell zu bearbeiten:

1. **Chat öffnen**\
   Drücke `Enter`, um den Chat zu öffnen.

2. **Spieler bannen**\
   Gib folgenden Befehl ein:

   ```text
   #exec ban <Name>
   ```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `#kick <SteamID64>` | Spieler vom Server kicken |
| `#exec ban <Name>` | Spieler dauerhaft bannen |
| `#shutdown` | Server herunterfahren |
