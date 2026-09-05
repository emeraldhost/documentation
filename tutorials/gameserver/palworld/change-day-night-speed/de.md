---
slug: "tageszeit-geschwindigkeit-aendern"
language: "de"
title: "So änderst Du die Tageszeit-Geschwindigkeit auf Deinem Palworld Server"
description: "Tageszeit-Geschwindigkeit auf einem Palworld Server ändern"
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
short_title: "Tageszeit-Geschwindigkeit ändern"
sort: 30
related: ["gameserver/palworld/broadcast-message", "gameserver/palworld/adjust-hunger-stamina", "gameserver/palworld/change-drop-rate", "gameserver/palworld/change-egg-hatching-time"]
---

Du kannst die Geschwindigkeit des Tag-Nacht-Zyklus für Tag und Nacht getrennt anpassen.

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

4. **Geschwindigkeit anpassen**\
   Suche die Parameter `DayTimeSpeedRate` und `NightTimeSpeedRate`:

   ```text
   DayTimeSpeedRate=1.000000
   NightTimeSpeedRate=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Doppelt so lange Tages-/Nachtzeit |
| `1.0` | Standard |
| `2.0` | Halb so lange Tages-/Nachtzeit |

> [!TIP]
> Ein niedrigerer Wert bedeutet längere Tage/Nächte, ein höherer Wert kürzere.
