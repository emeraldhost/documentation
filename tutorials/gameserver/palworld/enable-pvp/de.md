---
slug: "pvp-aktivieren"
language: "de"
title: "So aktivierst Du PvP auf Deinem Palworld Server"
description: "PvP auf einem Palworld Server aktivieren"
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
short_title: "PvP aktivieren"
sort: 20
related: ["gameserver/palworld/enable-fast-travel", "gameserver/palworld/enable-hardcore-mode", "gameserver/palworld/enable-raids", "gameserver/palworld/add-mods"]
---

Du kannst den PvP-Modus aktivieren, damit Spieler gegeneinander kämpfen können.

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

4. **PvP aktivieren**\
   Suche den Parameter `bIsPvP` und setze ihn auf `True`:

   ```text
   bIsPvP=True
   ```

5. **Server starten**\
   Starte Deinen Server.

## Weitere PvP-Einstellungen

| Parameter | Standard | Beschreibung |
|-----------|----------|-------------|
| `bEnablePlayerToPlayerDamage` | `False` | Spieler können sich gegenseitig Schaden zufügen |
| `bEnableFriendlyFire` | `False` | Gilden-Mitglieder können sich gegenseitig Schaden zufügen |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `False` | Andere Gilden können Todes-Drops aufheben |
