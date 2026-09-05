---
slug: "map-aendern"
language: "de"
title: "So änderst Du die Map auf Deinem Conan Exiles Server"
description: "Schritt-für-Schritt-Anleitung, wie Du die Map auf Deinem Conan Exiles Server wechselst"
tags: []
date: "2026-01-08"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Map ändern"
sort: 4
related: ["gameserver/conan-exiles/add-mods", "gameserver/conan-exiles/add-savegame", "gameserver/conan-exiles/change-max-players", "gameserver/conan-exiles/change-server-community"]
---

> [!TIP]
> Du kannst die Dateien auch mit einem FTP-Programm bearbeiten. Hier findest Du eine Anleitung, wie Du eine [SFTP-Verbindung herstellst](/tutorials/gameserver/establish-sftp-connection).

> [!WARNING]
> Beim Wechsel der Map gehen alle Spielstände und Gebäude verloren! Erstelle vorher ein Backup, falls Du später zur alten Map zurückkehren möchtest.

## Verfügbare Maps

| Map | Wert |
|-----|------|
| **Exiled Lands** | `/Game/Maps/ConanSandbox/ConanSandbox` |
| **Isle of Siptah** | `/Game/DLC_EXT/DLC_Siptah/Maps/DLC_Isle_of_Siptah` |

> [!NOTE]
> Für die Map „Isle of Siptah“ wird der gleichnamige DLC benötigt.

## Schritte

1. **Server stoppen**\
   Stoppe Deinen Server in der Verwaltung.

2. **Datei öffnen**\
   Navigiere im Datei-Browser zur Datei `Engine.ini`.
   - Pfad: `ConanSandbox/Saved/Config/WindowsServer/Engine.ini`

3. **Eintrag hinzufügen**\
   Füge folgenden Eintrag hinzu:

   ```ini
   [/Script/EngineSettings.GameMapsSettings]
   ServerDefaultMap=/Game/DLC_EXT/DLC_Siptah/Maps/DLC_Isle_of_Siptah
   ```

4. **Server neustarten**\
   Speichere die Datei und starte Deinen Server neu.
