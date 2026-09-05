---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem 7 Days to Die Server"
description: "Spieler auf einem 7 Days to Die Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 10
related: ["gameserver/7-days-to-die/download-savegame", "gameserver/7-days-to-die/enable-cheat-mode", "gameserver/7-days-to-die/enable-whitelist", "gameserver/7-days-to-die/join-server"]
---

Du kannst Spieler per Konsolenbefehl oder über die Datei `serveradmin.xml` kicken und bannen.

> [!WARNING]
> **Voraussetzung**
>
> Du musst Admin auf Deinem Server sein. Hier findest Du eine Anleitung, wie Du einen [Admin hinzufügst](/tutorials/gameserver/7-days-to-die/add-admin).

## Spieler per Konsolenbefehl kicken oder bannen

1. **Server beitreten**\
   Tritt Deinem 7 Days to Die Server bei.

2. **Konsole öffnen**\
   Drücke `F1`, um die Konsole zu öffnen.

3. **Spieler anzeigen**\
   Gib den Befehl `listplayers` ein, um alle verbundenen Spieler anzuzeigen.

4. **Spieler kicken oder bannen**\
   Verwende einen der folgenden Befehle:

   ```text
   kick <Name>
   ```

   ```text
   ban add <Name> <Dauer> <Einheit> [Grund]
   ```

   Beispiel:

   ```text
   ban add PlayerName 1 year cheating
   ```

## Spieler über serveradmin.xml bannen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serveradmin.xml öffnen**\
   Öffne die Datei `serveradmin.xml` im Verzeichnis:

   ```text
   /Saves/serveradmin.xml
   ```

4. **Spieler zur Blacklist hinzufügen**\
   Füge im Bereich `<blacklist>` einen neuen Eintrag hinzu:

   ```xml
   <blacklist>
     <blacklisted platform="Steam" userid="STEAMID64_DES_SPIELERS" name="Spielername"
       unbandate="" reason="Grund" />
   </blacklist>
   ```

> [!TIP]
> Hier findest Du eine Anleitung, wie Du die [SteamID64](/tutorials/gameserver/steamid64-find-out) eines Spielers herausfindest.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `listplayers` | Alle verbundenen Spieler anzeigen |
| `kick <Name>` | Spieler vom Server kicken |
| `ban add <Name> <Dauer> <Einheit> [Grund]` | Spieler bannen (z.B. `ban add PlayerName 1 year cheating`) |
| `ban remove <Name>` | Ban eines Spielers aufheben |
