---
slug: "arbeitsgeschwindigkeit-aendern"
language: "de"
title: "So änderst Du die Arbeitsgeschwindigkeit auf Deinem Palworld Server"
description: "Arbeitsgeschwindigkeit auf einem Palworld Server ändern"
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
short_title: "Arbeitsgeschwindigkeit ändern"
sort: 2
related: ["gameserver/palworld/change-server-name", "gameserver/palworld/change-structure-damage", "gameserver/palworld/change-xp-rate", "gameserver/palworld/create-backup"]
---

Du kannst anpassen, wie schnell Pals an Arbeitsstationen arbeiten.

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

4. **Arbeitsgeschwindigkeit anpassen**\
   Suche den Parameter `WorkSpeedRate` und passe den Wert an:

   ```text
   WorkSpeedRate=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Halbe Arbeitsgeschwindigkeit |
| `1.0` | Standard |
| `2.0` | Doppelte Arbeitsgeschwindigkeit |
| `5.0` | 5-fache Arbeitsgeschwindigkeit |
