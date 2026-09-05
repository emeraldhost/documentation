---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Core Keeper Server hinzu"
description: "Admin auf einem Core Keeper Server hinzufügen und entfernen"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/core-keeper/add-mods", "gameserver/core-keeper/add-savegame", "gameserver/core-keeper/ban-players", "gameserver/core-keeper/change-content-bundle"]
---

Du kannst Admins über die Datei `Admins.json` verwalten.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Admin hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Admins.json öffnen**\
   Öffne die Datei `Admins.json` unter:

   ```text
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/Admins.json
   ```

4. **Admin hinzufügen**\
   Füge für jeden Admin einen Eintrag im `adminList`-Array hinzu. Das Beispiel zeigt zwei Einträge – sie werden mit einem Komma getrennt; bei nur einem Admin entfällt der zweite Eintrag samt Komma:

   ```json
   { "index": 1, "privileges": 2, "name": "DeinCharaktername", "steamId": 76561198012345678 },
   { "index": 2, "privileges": 1, "name": "ZweiterCharaktername", "steamId": 76561198087654321 }
   ```

   | Feld | Beschreibung |
   |------|-------------|
   | `index` | Fortlaufende Nummer |
   | `privileges` | `2` = Voll-Admin, `1` = eingeschränkter Admin |
   | `name` | Dein Ingame-Charaktername |
   | `steamId` | Deine SteamID64 |

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Adminliste nicht übernimmt.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Admin entfernen

Um einen Admin zu entfernen, lösche den entsprechenden Eintrag aus der `Admins.json` und starte den Server neu.
