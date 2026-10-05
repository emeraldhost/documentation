---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem The Bus Server hinzu"
description: "Savegame auf einen The Bus Server hochladen"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 12
related: ["gameserver/the-bus/enable-ai-buses", "gameserver/the-bus/add-mods", "gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players"]
---

Du kannst ein Savegame auf Deinen Server übertragen und dort weiterspielen.

> [!WARNING]
> Liegt im Zielordner bereits eine Datei mit demselben Namen, wird sie beim Hochladen überschrieben. Erstelle vorher ein [Backup](/tutorials/gameserver/the-bus/create-backup), falls Du das bestehende Savegame behalten möchtest.

> [!NOTE]
> Savegames aus älteren Spielversionen (z.B. aus dem Early Access) sind nicht unbedingt mit der aktuellen Version kompatibel. Prüfe nach dem Start außerdem, ob auf dem Server die Map aktiv ist, auf der Du das Savegame gespielt hast – wie Du die Map wechselst, erfährst Du unter [Map ändern](/tutorials/gameserver/the-bus/change-map).

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade den kompletten Inhalt Deines gesicherten Ordners `SaveGames` in folgendes Verzeichnis auf dem Server hoch, z.B. aus der Anleitung [Savegame herunterladen](/tutorials/gameserver/the-bus/download-savegame):

   ```text
   /TheBus/Saved/SaveGames/
   ```

4. **Server starten**\
   Starte Deinen Server und tritt ihm bei. Prüfe, ob Dein bisheriger Spielstand geladen wurde.
