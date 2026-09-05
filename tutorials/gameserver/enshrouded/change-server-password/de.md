---
slug: "server-passwort-aendern"
language: "de"
title: "So änderst Du das Server Passwort Deines Enshrouded Servers"
description: "Server Passwort auf einem Enshrouded Server ändern"
tags: []
date: "2026-05-29"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server Passwort ändern"
sort: 9
related: ["gameserver/enshrouded/add-savegame", "gameserver/enshrouded/adjust-difficulty", "gameserver/enshrouded/control-automatic-updates", "gameserver/enshrouded/create-backup"]
---

In Enshrouded werden die Passwörter über **Usergruppen** in der Datei `enshrouded_server.json` verwaltet. Jede Gruppe hat ein eigenes Passwort und eigene Rechte. Spieler erhalten je nach eingegebenem Passwort die Rechte der entsprechenden Gruppe.

## Passwort ändern

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **enshrouded_server.json öffnen**\
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis und suche den Abschnitt `userGroups`.

4. **Passwort anpassen**\
   Trage im Feld `password` der gewünschten Gruppe Dein neues Passwort ein:

   ```json
   "userGroups": [
       {
           "name": "Admin",
           "password": "DEIN_ADMIN_PASSWORT",
           "canKickBan": true,
           "canAccessInventories": true,
           "canEditWorld": true,
           "canEditBase": true,
           "canExtendBase": true,
           "reservedSlots": 0
       },
       {
           "name": "Friend",
           "password": "DEIN_FRIEND_PASSWORT",
           "canKickBan": false,
           "canAccessInventories": true,
           "canEditWorld": true,
           "canEditBase": true,
           "canExtendBase": false,
           "reservedSlots": 0
       },
       {
           "name": "Guest",
           "password": "DEIN_GUEST_PASSWORT",
           "canKickBan": false,
           "canAccessInventories": false,
           "canEditWorld": true,
           "canEditBase": false,
           "canExtendBase": false,
           "reservedSlots": 0
       },
       {
           "name": "Visitor",
           "password": "DEIN_VISITOR_PASSWORT",
           "canKickBan": false,
           "canAccessInventories": false,
           "canEditWorld": false,
           "canEditBase": false,
           "canExtendBase": false,
           "reservedSlots": 0
       }
   ]
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server Deine neuen Passwörter verwirft.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Usergruppen

| Gruppe | Rechte |
|--------|--------|
| `Admin` | Volle Rechte: kicken/bannen, Inventare, Welt und Basis bearbeiten und erweitern |
| `Friend` | Inventare, Welt und Basis bearbeiten – aber keine Basis erweitern, kein Kick/Ban |
| `Guest` | Nur die Welt bearbeiten |
| `Visitor` | Keine Bearbeitungsrechte – nur beitreten und umsehen |

> [!WARNING]
> Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.

> [!TIP]
> Um eine Gruppe ohne Passwort zugänglich zu machen, lasse das `password`-Feld leer (`""`). Spieler können dieser Gruppe dann ohne Passwort beitreten.
