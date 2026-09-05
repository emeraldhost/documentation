---
slug: "gebaeudeschaden-aendern"
language: "de"
title: "So änderst Du den Gebäudeschaden auf Deinem Palworld Server"
description: "Gebäudeschaden auf einem Palworld Server ändern"
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
short_title: "Gebäudeschaden ändern"
sort: 10
related: ["gameserver/palworld/change-player-damage", "gameserver/palworld/change-server-name", "gameserver/palworld/change-work-speed", "gameserver/palworld/change-xp-rate"]
---

Du kannst anpassen, wie viel Schaden Gebäude und Strukturen nehmen.

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

4. **Gebäudeschaden anpassen**\
   Es gibt zwei Parameter:

   **Schaden an Gebäuden:**

   ```text
   BuildObjectDamageRate=1.000000
   ```

   **Verfall von Gebäuden:**

   ```text
   BuildObjectDeteriorationDamageRate=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0` | Kein Schaden / kein Verfall |
| `0.5` | Halber Schaden |
| `1.0` | Standard |
| `2.0` | Doppelter Schaden |
