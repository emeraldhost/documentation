---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem BeamMP Server hinzu"
description: "Mods auf einem BeamMP Server hinzufügen"
tags: []
date: "2025-10-15"
visibility: "public"
updated: "2026-04-10"
cta: "gameserver"
product_keys: ["beammp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 8
related: ["gameserver/beammp/add-admin", "gameserver/beammp/add-savegame", "gameserver/beammp/change-map", "gameserver/beammp/change-max-cars"]
---

Du kannst Mods auf Deinem Server installieren, um das Spielerlebnis zu erweitern.

> [!WARNING]
> Stoppe Deinen Server bevor Du Mods hinzufügst. Die Mods dürfen **kein Archiv** (z.B. `.zip`) sein – entpacke sie vorher.

1. **Mods herunterladen**\
   Lade die gewünschten Mods von [BeamNG.drive Mods](https://www.beamng.com/resources/) oder dem [BeamMP Forum](https://forum.beammp.com/) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Mods hochladen**\
   Lade die entpackten Mod-Dateien in folgendes Verzeichnis hoch:

   ```text
   /Resources/Client/
   ```

5. **Server starten**\
   Starte Deinen Server.

> [!NOTE]
> Mods im `Resources/Client/`-Ordner werden automatisch an alle Spieler heruntergeladen, die dem Server beitreten.
