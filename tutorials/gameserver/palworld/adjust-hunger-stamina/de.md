---
slug: "hunger-ausdauer-anpassen"
language: "de"
title: "So passt Du Hunger und Ausdauer auf Deinem Palworld Server an"
description: "Hunger und Ausdauer auf einem Palworld Server anpassen"
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
short_title: "Hunger & Ausdauer anpassen"
sort: 14
related: ["gameserver/palworld/add-admin", "gameserver/palworld/broadcast-message", "gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-drop-rate"]
---

Du kannst einstellen, wie schnell Hunger und Ausdauer bei Spielern und Pals abnehmen.

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

4. **Werte anpassen**\
   **Spieler-Hunger:**

   ```text
   PlayerStomachDecreaceRate=1.000000
   ```

   **Spieler-Ausdauer:**

   ```text
   PlayerStaminaDecreaceRate=1.000000
   ```

   **Pal-Hunger:**

   ```text
   PalStomachDecreaceRate=1.000000
   ```

   **Pal-Ausdauer:**

   ```text
   PalStaminaDecreaceRate=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Langsamer Verbrauch (einfacher) |
| `1.0` | Standard |
| `2.0` | Schnellerer Verbrauch (schwieriger) |

> [!NOTE]
> Die Schreibweise `Decreace` im Parameter ist beabsichtigt und muss genau so übernommen werden.
