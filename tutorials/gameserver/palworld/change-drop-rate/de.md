---
slug: "drop-rate-aendern"
language: "de"
title: "So änderst Du die Drop-Rate auf Deinem Palworld Server"
description: "Drop-Rate auf einem Palworld Server ändern"
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
short_title: "Drop-Rate ändern"
sort: 7
related: ["gameserver/palworld/adjust-hunger-stamina", "gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-egg-hatching-time", "gameserver/palworld/change-equipment-durability"]
---

Du kannst die Menge an Items anpassen, die beim Sammeln und von besiegten Gegnern fallen.

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

4. **Drop-Rate anpassen**\
   Es gibt zwei Parameter für unterschiedliche Drop-Arten:

   **Ressourcen-Drops** (Abbau, Sammeln):

   ```text
   CollectionDropRate=1.000000
   ```

   **Gegner-Drops** (besiegte Feinde):

   ```text
   EnemyDropItemRate=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `1.0` | Standard |
| `2.0` | Doppelte Drops |
| `5.0` | 5-fache Drops |
