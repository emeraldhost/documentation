---
slug: "whitelist-aktivieren"
language: "de"
title: "So aktivierst Du die Whitelist auf Deinem 7 Days to Die Server"
description: "Whitelist auf einem 7 Days to Die Server aktivieren"
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
short_title: "Whitelist aktivieren"
sort: 11
related: ["gameserver/7-days-to-die/download-savegame", "gameserver/7-days-to-die/enable-cheat-mode", "gameserver/7-days-to-die/join-server", "gameserver/7-days-to-die/kick-ban-players"]
---

Mit der Whitelist kannst Du den Zugang zu Deinem Server auf bestimmte Spieler beschränken.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Whitelist über serveradmin.xml einrichten

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serveradmin.xml öffnen**\
   Öffne die Datei `serveradmin.xml` im Verzeichnis:

   ```text
   /Saves/serveradmin.xml
   ```

4. **Spieler zur Whitelist hinzufügen**\
   Füge im Bereich `<whitelist>` Einträge für jeden Spieler hinzu:

   ```xml
   <whitelist>
     <user platform="Steam" userid="76561198012345678" name="Spieler1" />
     <user platform="Steam" userid="76561198087654321" name="Spieler2" />
   </whitelist>
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Sobald **ein Spieler** in der Whitelist eingetragen ist, können nur noch gelistete Spieler dem Server beitreten. Admins können immer beitreten, unabhängig von der Whitelist.

## Whitelist per Konsolenbefehl verwalten

Falls Du bereits Admin bist, kannst Du die Whitelist auch ingame verwalten. Drücke `F1`, um die Konsole zu öffnen:

| Befehl | Beschreibung |
|--------|-------------|
| `whitelist add <SteamID64>` | Spieler zur Whitelist hinzufügen |
| `whitelist remove <SteamID64>` | Spieler von der Whitelist entfernen |
| `whitelist list` | Alle Spieler auf der Whitelist anzeigen |
