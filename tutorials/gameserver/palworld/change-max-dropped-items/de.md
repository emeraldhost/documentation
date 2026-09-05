---
slug: "max-dropped-items-aendern"
language: "de"
title: "So änderst Du die maximale Anzahl an gedropten Items auf Deinem Palworld Server"
description: "Maximale Anzahl an gedropten Items auf einem Palworld Server ändern"
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
short_title: "Max Dropped Items ändern"
sort: 15
related: ["gameserver/palworld/change-guild-settings", "gameserver/palworld/change-hp-regeneration", "gameserver/palworld/change-pal-capture-rate", "gameserver/palworld/change-pal-damage"]
---

Du kannst festlegen, wie viele Items gleichzeitig auf dem Boden liegen dürfen.

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

4. **Limit anpassen**\
   Suche den Parameter `DropItemMaxNum` und passe den Wert an:

   ```text
   DropItemMaxNum=3000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `1000` | Weniger Items auf dem Boden |
| `3000` | Standard |
| `5000` | Mehr Items auf dem Boden |

> [!WARNING]
> Hohe Werte können die Performance des Servers beeinträchtigen.
