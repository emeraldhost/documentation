---
slug: "ausruestungs-haltbarkeit-aendern"
language: "de"
title: "So änderst Du die Ausrüstungs-Haltbarkeit auf Deinem Palworld Server"
description: "Ausrüstungs-Haltbarkeit auf einem Palworld Server ändern"
tags: []
date: "2026-02-28"
visibility: "public"
updated: "2026-07-16"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Ausrüstungs-Haltbarkeit ändern"
sort: 3
related: ["gameserver/palworld/change-drop-rate", "gameserver/palworld/change-egg-hatching-time", "gameserver/palworld/change-guild-settings", "gameserver/palworld/change-hp-regeneration"]
---

Du kannst anpassen, wie schnell sich Ausrüstung und Werkzeuge abnutzen.

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

4. **Haltbarkeit anpassen**\
   Suche den Parameter `EquipmentDurabilityDamageRate` und passe den Wert an:

   ```text
   EquipmentDurabilityDamageRate=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0` | Kein Verfall |
| `0.5` | Langsamerer Verfall |
| `1.0` | Standard |
| `2.0` | Schnellerer Verfall |
