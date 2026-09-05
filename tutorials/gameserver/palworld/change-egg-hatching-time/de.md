---
slug: "eier-ausbrutzeit-aendern"
language: "de"
title: "So änderst Du die Eier-Ausbrützeit auf Deinem Palworld Server"
description: "Eier-Ausbrützeit auf einem Palworld Server ändern"
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
short_title: "Eier-Ausbrützeit ändern"
sort: 8
related: ["gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-drop-rate", "gameserver/palworld/change-equipment-durability", "gameserver/palworld/change-guild-settings"]
---

Du kannst die Dauer anpassen, die Pal-Eier zum Ausbrüten benötigen.

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

4. **Ausbrützeit anpassen**\
   Suche den Parameter `PalEggDefaultHatchingTime` und passe den Wert an:

   ```text
   PalEggDefaultHatchingTime=1.000000
   ```

   Der Wert ist in **Stunden** angegeben und gilt für das größte Ei (Huge Egg) – kleinere Eier schlüpfen entsprechend schneller.

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0` | Sofortiges Ausbrüten |
| `1.0` | 1 Stunde (Standard) |
| `24.0` | 1 Tag |
| `72.0` | 3 Tage |

> [!NOTE]
> Seit dem 1.0-Release ist der Standardwert `1` Stunde. Auf Servern, die vor 1.0 erstellt wurden, gilt weiterhin der in der Config eingetragene Wert (früherer Standard: `72`).
