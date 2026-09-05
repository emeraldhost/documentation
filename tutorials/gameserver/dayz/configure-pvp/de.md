---
slug: "pvp-einstellen"
language: "de"
title: "So stellst Du PvP und PvE auf Deinem DayZ Server ein"
description: "PvP und PvE auf einem DayZ Server einstellen"
tags: []
date: "2026-04-08"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "PvP einstellen"
sort: 7
related: ["gameserver/dayz/change-map", "gameserver/dayz/change-time", "gameserver/dayz/create-backup", "gameserver/dayz/download-savegame"]
---

Du kannst Friendly Fire und den Schaden zwischen Spielern über die `serverDZ.cfg` anpassen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serverDZ.cfg öffnen**\
   Öffne die Datei `serverDZ.cfg` im Hauptverzeichnis Deines Servers.

4. **Einstellungen anpassen**\
   Suche und passe die folgenden Werte an:

   ```text
   enableCfgGameplayFile = 1;
   disableDamageSystem = 0;
   ```

   | Einstellung | Beschreibung | Werte |
   |-------------|-------------|-------|
   | `disableDamageSystem` | Schadenssystem (PvP) | `0` = aktiviert, `1` = deaktiviert |
   | `enableCfgGameplayFile` | Erweiterte Gameplay-Konfiguration | `0` = aus, `1` = an |

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Für einen reinen **PvE-Server** setze `disableDamageSystem = 1`. Spieler können sich dann nicht gegenseitig verletzen.

> [!NOTE]
> Erweiterte Gameplay-Einstellungen wie Mechaniken, Bewegung und mehr kannst Du in der `cfggameplay.json` konfigurieren, sobald `enableCfgGameplayFile = 1` gesetzt ist.
