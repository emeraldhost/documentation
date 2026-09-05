---
slug: "mods-hinzufuegen"
language: "de"
title: "So installierst Du Mods auf Deinem Barotrauma Server"
description: "Mods auf einem Barotrauma Server installieren"
tags: []
date: "2026-03-07"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 6
related: ["gameserver/barotrauma/add-bots", "gameserver/barotrauma/add-custom-ranks", "gameserver/barotrauma/add-savegame", "gameserver/barotrauma/change-game-mode"]
---

Du kannst Steam Workshop Mods auf Deinem Server installieren, um das Spielerlebnis zu erweitern.

> [!WARNING]
> Stoppe Deinen Server bevor Du Mods installierst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.

## Mods herunterladen

1. **Im Steam Workshop abonnieren**\
   Öffne den [Steam Workshop für Barotrauma](https://steamcommunity.com/app/602960/workshop/) und abonniere die gewünschten Mods.

2. **Spiel starten**\
   Starte Barotrauma auf Deinem PC, damit die Mods heruntergeladen werden.

3. **Mod-Ordner finden**\
   Die heruntergeladenen Mods findest Du auf Deinem PC unter:

   ```text
   %LocalAppData%/Daedalic Entertainment GmbH/Barotrauma/WorkshopMods/Installed
   ```

   Jeder Mod liegt in einem Ordner mit einer numerischen ID.

## Mods auf den Server hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mods hochladen**\
   Lade die Mod-Ordner in folgendes Verzeichnis hoch:

   ```text
   /LocalMods/
   ```

   > [!TIP]
   > Benenne die Ordner von der numerischen ID in den Mod-Namen um, damit Du sie leichter zuordnen kannst. Den Namen findest Du in der `filelist.xml` im jeweiligen Mod-Ordner.

## Mods aktivieren

1. **config_player.xml öffnen**\
   Öffne die Datei `config_player.xml` im Hauptverzeichnis Deines Servers.

2. **Mod-Einträge hinzufügen**\
   Füge für jeden Mod einen Eintrag innerhalb des `<regularpackages>`-Bereichs hinzu:

   ```xml
   <regularpackages>
     ...
     <package path="LocalMods/ModName/filelist.xml" enabled="true"/>
   </regularpackages>
   ```

   Ersetze `ModName` durch den Namen des Mod-Ordners. Für mehrere Mods fügst Du einfach mehrere Einträge hinzu:

   ```xml
   <regularpackages>
     ...
     <package path="LocalMods/HaloWeapons/filelist.xml" enabled="true"/>
     <package path="LocalMods/MoreMonsters/filelist.xml" enabled="true"/>
   </regularpackages>
   ```

3. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Einige Mods müssen sowohl auf dem Server als auch bei allen Spielern installiert sein. Prüfe die Mod-Beschreibung, ob eine clientseitige Installation nötig ist.

> [!IMPORTANT]
> Lege Mods **nicht** in den `WorkshopMods`-Ordner auf dem Server. Dieser wird von Steam verwaltet und sollte nicht manuell bearbeitet werden.
