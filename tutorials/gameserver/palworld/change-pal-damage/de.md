---
slug: "pal-schaden-aendern"
language: "de"
title: "So änderst Du den Pal-Schaden auf Deinem Palworld Server"
description: "Pal-Schadensmultiplikator auf einem Palworld Server ändern"
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
short_title: "Pal-Schaden ändern"
sort: 18
related: ["gameserver/palworld/change-max-dropped-items", "gameserver/palworld/change-pal-capture-rate", "gameserver/palworld/change-pal-spawn-rate", "gameserver/palworld/change-player-damage"]
---

Du kannst anpassen, wie viel Schaden Pals austeilen und einstecken.

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

4. **Pal-Schaden anpassen**\
   **Angriffsstärke der Pals:**

   ```text
   PalDamageRateAttack=1.000000
   ```

   **Verteidigung der Pals:**

   ```text
   PalDamageRateDefense=1.000000
   ```

5. **Server starten**\
   Starte Deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Halber Schaden / halbe Verteidigung |
| `1.0` | Standard |
| `2.0` | Doppelter Schaden / doppelte Verteidigung |

## Alle Parameter

| Parameter | Standard | Beschreibung |
|-----------|----------|-------------|
| `PalDamageRateAttack` | `1.0` | Angriffsstärke der Pals |
| `PalDamageRateDefense` | `1.0` | Verteidigung der Pals |
