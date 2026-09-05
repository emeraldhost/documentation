---
slug: "server-passwort-setzen"
language: "de"
title: "So setzt Du ein Passwort auf Deinem Satisfactory Server"
description: "Server Passwort auf einem Satisfactory Server setzen"
tags: []
date: "2026-04-12"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server Passwort setzen"
sort: 9
related: ["gameserver/satisfactory/create-backup", "gameserver/satisfactory/download-savegame", "gameserver/satisfactory/join-server", "gameserver/satisfactory/set-admin-password"]
---

Du kannst Deinen Server mit einem Passwort schützen, sodass nur Spieler mit dem Passwort beitreten können. Das Passwort wird in der Datei `Game.ini` festgelegt.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne die Datei `Game.ini` unter:

   ```text
   /FactoryGame/Saved/Config/LinuxServer/Game.ini
   ```

4. **Passwort setzen**\
   Trage folgenden Inhalt ein und setze Dein gewünschtes Passwort:

   ```ini
   [/Script/FactoryGame.FGServerSubsystem]
   mServerGameState=(ServerSessionName="Dein Server Name",AdminPassword="DeinAdminPasswort",PlayerPassword="DeinServerPasswort")
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Um das Passwort zu entfernen und den Server wieder öffentlich zu machen, entferne den `PlayerPassword`-Wert oder setze ihn auf leer: `PlayerPassword=""`.

> [!NOTE]
> Falls die Datei bereits einen `mServerGameState`-Eintrag enthält, ergänze dort den `PlayerPassword`-Wert. Füge keinen zweiten Eintrag hinzu.
