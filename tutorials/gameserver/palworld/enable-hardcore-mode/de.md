---
slug: "hardcore-modus-aktivieren"
language: "de"
title: "So aktivierst Du den Hardcore-Modus auf Deinem Palworld Server"
description: "Hardcore-Modus auf einem Palworld Server aktivieren"
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
short_title: "Hardcore-Modus aktivieren"
sort: 12
related: ["gameserver/palworld/edit-server-config", "gameserver/palworld/enable-fast-travel", "gameserver/palworld/enable-pvp", "gameserver/palworld/enable-raids"]
---

Im Hardcore-Modus können Spieler nicht respawnen und Pals gehen beim Tod dauerhaft verloren.

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

4. **Hardcore-Modus aktivieren**\
   Suche die folgenden Parameter und setze sie auf `True`:

   ```text
   bHardcore=True
   bPalLost=True
   ```

5. **Server starten**\
   Starte Deinen Server.

## Alle Parameter

| Parameter | Standard | Beschreibung |
|-----------|----------|-------------|
| `bHardcore` | `False` | Spieler können nicht respawnen |
| `bPalLost` | `False` | Pals gehen beim Tod dauerhaft verloren |

> [!TIP]
> Du kannst die Parameter auch einzeln aktivieren, z.B. nur `bPalLost=True` ohne Hardcore-Modus.
