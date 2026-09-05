---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Arma Reforger Server hinzu"
description: "Einen weiteren Admin auf einem Arma Reforger Server hinzufügen"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/add-savegame", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/download-savegame"]
---

Du kannst weitere Spieler als Admin hinzufügen, indem Du ihre SteamID64 in die `config.json` einträgst.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **config.json öffnen**\
   Öffne die Datei `config.json` und suche den Eintrag `"admins"` im Bereich `"game"`.

4. **SteamID64 zur admins-Liste hinzufügen**\
   Trage die SteamID64 des Spielers ein, der Admin werden soll:

   ```json
   "game": {
     "admins": [
       "76561198012345678",
       "76561198087654321"
     ]
   }
   ```

   Füge pro Eintrag eine SteamID64 hinzu. Achte darauf, dass die Einträge durch Kommas getrennt sind.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Änderungen an der `config.json` werden erst nach einem Serverneustart wirksam. Die hier eingetragenen Spieler erhalten dauerhaft Admin-Rechte und müssen sich nicht per Passwort einloggen.
