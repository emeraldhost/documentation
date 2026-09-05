---
slug: "pal-fangrate-aendern"
language: "de"
title: "So änderst Du die Pal-Fangrate auf Deinem Palworld Server"
description: "Pal-Fangrate auf einem Palworld Server ändern"
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
short_title: "Pal-Fangrate ändern"
sort: 17
related: ["gameserver/palworld/change-hp-regeneration", "gameserver/palworld/change-max-dropped-items", "gameserver/palworld/change-pal-damage", "gameserver/palworld/change-pal-spawn-rate"]
---

Du kannst den Multiplikator für die Fangchance von Pals anpassen.

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

4. **Fangrate anpassen**\
   Suche den Parameter `PalCaptureRate` und passe den Wert an:

   ```text
   PalCaptureRate=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Schwerer zu fangen |
| `1.0` | Standard |
| `2.0` | Doppelte Fangchance |
