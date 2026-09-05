---
slug: "hp-regeneration-aendern"
language: "de"
title: "So änderst Du die HP-Regeneration auf Deinem Palworld Server"
description: "HP-Regeneration auf einem Palworld Server ändern"
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
short_title: "HP-Regeneration ändern"
sort: 13
related: ["gameserver/palworld/change-equipment-durability", "gameserver/palworld/change-guild-settings", "gameserver/palworld/change-max-dropped-items", "gameserver/palworld/change-pal-capture-rate"]
---

Du kannst anpassen, wie schnell sich die Lebenspunkte von Spielern und Pals regenerieren.

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

4. **HP-Regeneration anpassen**\
   **Spieler-Regeneration:**

   ```text
   PlayerAutoHPRegeneRate=1.000000
   ```

   **Spieler-Regeneration im Schlaf:**

   ```text
   PlayerAutoHpRegeneRateInSleep=1.000000
   ```

   **Pal-Regeneration:**

   ```text
   PalAutoHPRegeneRate=1.000000
   ```

   **Pal-Regeneration im Schlaf:**

   ```text
   PalAutoHpRegeneRateInSleep=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Langsamere Regeneration |
| `1.0` | Standard |
| `2.0` | Doppelte Regeneration |
| `5.0` | 5-fache Regeneration |
