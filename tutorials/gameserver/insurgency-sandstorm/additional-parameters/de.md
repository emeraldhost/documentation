---
slug: "zusaetzliche-parameter"
language: "de"
title: "So setzt Du zusätzliche Parameter auf Deinem Insurgency: Sandstorm Server"
description: "Zusätzliche Startparameter auf einem Insurgency: Sandstorm Server setzen"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Zusätzliche Parameter"
sort: 23
related: ["gameserver/insurgency-sandstorm/add-mods", "gameserver/insurgency-sandstorm/add-mutators", "gameserver/insurgency-sandstorm/change-gamemode-settings", "gameserver/insurgency-sandstorm/change-map"]
---

Über das Feld **Zusätzliche Parameter** kannst Du dem Server beim Start weitere Optionen mitgeben – zum Beispiel zum Aktivieren von Mods, zum Festlegen der Map-Rotation oder eines Server-Passworts.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Parameter eintragen**\
   Trage die gewünschten Parameter im Feld **Zusätzliche Parameter** ein und speichere die Einstellung.

4. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderung übernommen wird.

## Häufig verwendete Parameter

| Parameter | Beschreibung |
|-----------|--------------|
| `-Mods` | Aktiviert das Mod-System (mod.io) – siehe [Mods hinzufügen](/tutorials/gameserver/insurgency-sandstorm/add-mods) |
| `-ModDownloadTravelTo=<Map>?Scenario=<Szenario>` | Lädt die Mods herunter und wechselt anschließend auf die angegebene (modifizierte) Map |
| `-Mutators=<Name1,Name2>` | Aktiviert Mutatoren (z.B. von manchen Mods benötigt) |
| `-Mapcycle=<Datei>` | Verwendet die angegebene Map-Rotations-Datei (ohne Dateiendung) |

> [!NOTE]
> Eine vollständige Übersicht aller verfügbaren Parameter findest Du im offiziellen [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).
