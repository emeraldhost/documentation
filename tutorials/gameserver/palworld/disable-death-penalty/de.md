---
slug: "todesstrafe-deaktivieren"
language: "de"
title: "So deaktivierst Du die Todesstrafe auf Deinem Palworld Server"
description: "Todesstrafe auf einem Palworld Server deaktivieren"
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
short_title: "Todesstrafe deaktivieren"
sort: 31
related: ["gameserver/palworld/change-xp-rate", "gameserver/palworld/create-backup", "gameserver/palworld/download-savegame", "gameserver/palworld/edit-server-config"]
---

Du kannst einstellen, was Spieler beim Tod verlieren.

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

4. **Todesstrafe anpassen**\
   Suche den Parameter `DeathPenalty` und setze den gewünschten Wert:

   ```text
   DeathPenalty=None
   ```

5. **Server starten**\
   Starte Deinen Server.

**Verfügbare Werte:**

| Wert | Beschreibung |
|------|-------------|
| `None` | Kein Verlust beim Tod |
| `Item` | Nur Items verlieren |
| `ItemAndEquipment` | Items und Ausrüstung verlieren |
| `All` | Alles verlieren (Items, Ausrüstung und Pals) |

> [!NOTE]
> Seit dem 1.0-Release ist der Standardwert `Item` – die Server-Standardwerte wurden an den Normal-Schwierigkeitsgrad des Einzelspielermodus angeglichen. Auf Servern, die vor 1.0 erstellt wurden, gilt weiterhin der in der Config eingetragene Wert (früherer Standard: `All`).
