---
slug: "gilden-einstellungen-aendern"
language: "de"
title: "So änderst Du die Gilden-Einstellungen auf Deinem Palworld Server"
description: "Gilden-Einstellungen auf einem Palworld Server ändern"
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
short_title: "Gilden-Einstellungen ändern"
sort: 11
related: ["gameserver/palworld/change-egg-hatching-time", "gameserver/palworld/change-equipment-durability", "gameserver/palworld/change-hp-regeneration", "gameserver/palworld/change-max-dropped-items"]
---

Du kannst die maximale Anzahl an Gilden-Mitgliedern, Basen und Arbeitern anpassen.

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

4. **Gilden-Einstellungen anpassen**\
   **Maximale Spieler pro Gilde:**

   ```text
   GuildPlayerMaxNum=20
   ```

   **Maximale Basen pro Gilde:**

   ```text
   BaseCampMaxNumInGuild=4
   ```

   **Maximale Arbeiter pro Basis:**

   ```text
   BaseCampWorkerMaxNum=15
   ```

5. **Server starten**\
   Starte Deinen Server.

## Alle Parameter

| Parameter | Standard | Beschreibung |
|-----------|----------|-------------|
| `GuildPlayerMaxNum` | `20` | Maximale Spieler pro Gilde |
| `BaseCampMaxNumInGuild` | `4` | Maximale Basen pro Gilde |
| `BaseCampWorkerMaxNum` | `15` | Maximale Arbeiter pro Basis |

> [!WARNING]
> Hohe Werte bei `BaseCampWorkerMaxNum` können die Performance des Servers beeinträchtigen.
