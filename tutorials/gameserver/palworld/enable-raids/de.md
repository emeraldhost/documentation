---
slug: "raids-aktivieren"
language: "de"
title: "So aktivierst oder deaktivierst Du Raids auf Deinem Palworld Server"
description: "Raids auf einem Palworld Server aktivieren oder deaktivieren"
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
short_title: "Raids aktivieren"
sort: 21
related: ["gameserver/palworld/enable-hardcore-mode", "gameserver/palworld/enable-pvp", "gameserver/palworld/add-mods", "gameserver/palworld/join-server"]
---

Du kannst einstellen, ob feindliche Überfälle auf Spielerbasen stattfinden.

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

4. **Raids einstellen**\
   Suche den Parameter `bEnableInvaderEnemy` und setze den gewünschten Wert:

   ```text
   bEnableInvaderEnemy=True
   ```

5. **Server starten**\
   Starte Deinen Server.

| Wert | Beschreibung |
|------|-------------|
| `True` | Raids aktiviert (Standard) |
| `False` | Raids deaktiviert |
