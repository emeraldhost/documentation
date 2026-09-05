---
slug: "pal-spawnrate-aendern"
language: "de"
title: "So änderst Du die Pal-Spawnrate auf Deinem Palworld Server"
description: "Pal-Spawnrate auf einem Palworld Server ändern"
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
short_title: "Pal-Spawnrate ändern"
sort: 19
related: ["gameserver/palworld/change-pal-capture-rate", "gameserver/palworld/change-pal-damage", "gameserver/palworld/change-player-damage", "gameserver/palworld/change-server-name"]
---

Du kannst anpassen, wie viele Pals auf der Karte spawnen.

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

4. **Spawnrate anpassen**\
   Suche den Parameter `PalSpawnNumRate` und passe den Wert an:

   ```text
   PalSpawnNumRate=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Weniger Pals |
| `1.0` | Standard |
| `2.0` | Doppelt so viele Pals |

> [!WARNING]
> Hohe Werte können die Performance des Servers beeinträchtigen.
