---
slug: "welt-zuruecksetzen"
language: "de"
title: "So setzt Du die Welt auf Deinem Palworld Server zurück"
description: "Welt auf einem Palworld Server zurücksetzen"
tags: []
date: "2026-02-28"
visibility: "public"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt zurücksetzen"
sort: 32
related: ["gameserver/palworld/join-server", "gameserver/palworld/kick-ban-players", "gameserver/palworld/restore-automatic-backup", "gameserver/palworld/set-server-password"]
---

Du kannst die Welt Deines Servers zurücksetzen, um eine komplett neue Welt zu generieren. Dabei werden alle Spielstände und Gebäude gelöscht.

> [!WARNING]
> Dieser Vorgang kann nicht rückgängig gemacht werden. Erstelle vorher ein Backup, falls Du den Spielstand behalten möchtest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame-Ordner löschen**\
   Navigiere zu:

   ```text
   /Pal/Saved/SaveGames/0/
   ```

   Lösche den darin enthaltenen Ordner (ein Ordner mit einer langen Zeichenkette als Name).

4. **Server starten**\
   Starte Deinen Server. Eine neue Welt wird automatisch generiert.

> [!TIP]
> Deine Server-Einstellungen in der `PalWorldSettings.ini` bleiben erhalten und müssen nicht erneut konfiguriert werden.
