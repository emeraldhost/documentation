---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem BeamMP Server hinzu"
description: "Custom Maps auf einen BeamMP Server hochladen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["beammp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 11
related: ["gameserver/beammp/add-admin", "gameserver/beammp/add-mods", "gameserver/beammp/change-map", "gameserver/beammp/change-max-cars"]
---

BeamMP basiert auf der BeamNG.drive Sandbox und verwendet keine persistenten Welt-Savegames. Stattdessen kannst Du eigene Map-Dateien auf Deinen Server hochladen.

## So lädst Du Custom Maps hoch

> [!WARNING]
> Stoppe Deinen Server bevor Du Dateien hochlädst, da diese sonst vom Server überschrieben werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Map-Dateien hochladen**\
   Lade Deine Custom-Map-Dateien in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /Resources/Client/
   ```

> [!WARNING]
> Bestehende Dateien im Zielverzeichnis werden überschrieben. Erstelle vorher ein Backup, falls Du die aktuellen Dateien behalten möchtest.

4. **Server starten**\
   Starte Deinen Server. Die hochgeladenen Maps stehen nun zur Verfügung.

> [!TIP]
> Da BeamMP auf der BeamNG.drive Sandbox basiert, gibt es keine persistenten Welt-Savegames. Der Spielfortschritt wird nicht serverseitig gespeichert.
