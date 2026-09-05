---
slug: "fast-travel-aktivieren"
language: "de"
title: "So aktivierst oder deaktivierst Du Fast Travel auf Deinem Palworld Server"
description: "Fast Travel auf einem Palworld Server aktivieren oder deaktivieren"
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
short_title: "Fast Travel aktivieren"
sort: 9
related: ["gameserver/palworld/download-savegame", "gameserver/palworld/edit-server-config", "gameserver/palworld/enable-hardcore-mode", "gameserver/palworld/enable-pvp"]
---

Du kannst einstellen, ob Spieler die Schnellreise-Funktion nutzen können.

> [!WARNING]
> Stelle sicher, dass Dein Server gestoppt ist, bevor Du die Config-Datei bearbeitest. Änderungen an der `PalWorldSettings.ini` werden sonst vom Spiel überschrieben.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Config-Datei öffnen**\
   Öffne die Datei `PalWorldSettings.ini` unter:

   ```text
   /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
   ```

4. **Fast Travel einstellen**\
   Suche den Parameter `bEnableFastTravel` und setze den gewünschten Wert:

   ```text
   bEnableFastTravel=True
   ```

5. **Server starten**\
   Starte Deinen Server.

| Wert | Beschreibung |
|------|-------------|
| `True` | Fast Travel aktiviert (Standard) |
| `False` | Fast Travel deaktiviert |
