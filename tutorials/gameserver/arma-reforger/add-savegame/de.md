---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Arma Reforger Server hinzu"
description: "Savegame auf einen Arma Reforger Server hochladen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 6
related: ["gameserver/arma-reforger/add-admin", "gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/download-savegame"]
---

Du kannst ein Savegame auf Deinen Server übertragen, um einen bestehenden Spielstand weiterzuführen.

## So lädst Du das Savegame hoch

> [!WARNING]
> Stoppe Deinen Server bevor Du Dateien hochlädst, da diese sonst vom Server überschrieben werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deinen Save-Ordner in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /config/profile/save/
   ```

> [!WARNING]
> Bestehende Dateien im Zielverzeichnis werden überschrieben. Erstelle vorher ein Backup, falls Du den aktuellen Spielstand behalten möchtest.

4. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.
