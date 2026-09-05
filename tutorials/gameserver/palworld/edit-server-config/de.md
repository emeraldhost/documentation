---
slug: "server-config-anpassen"
language: "de"
title: "So passt Du die Config Deines Palworld Servers an"
description: "Config eines Palworld Servers anpassen"
tags: []
date: "2026-01-06"
visibility: "public"
updated: "2026-02-28"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server Config anpassen"
sort: 25
related: ["gameserver/palworld/disable-death-penalty", "gameserver/palworld/download-savegame", "gameserver/palworld/enable-fast-travel", "gameserver/palworld/enable-hardcore-mode"]
---

Du kannst die Einstellungen Deines Servers über die Konfigurationsdatei anpassen.

> [!WARNING]
> Stoppe Deinen Server bevor Du die Config-Datei bearbeitest, da Deine Änderungen sonst vom Spiel überschrieben werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Config-Datei öffnen**\
   Navigiere zum folgenden Pfad und öffne die Datei `PalWorldSettings.ini`:

   ```text
   /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
   ```

4. **Einstellungen anpassen**\
   Passe die gewünschten Einstellungen an und speichere die Datei.

5. **Server starten**\
   Starte Deinen Server neu, damit die Änderungen übernommen werden.
