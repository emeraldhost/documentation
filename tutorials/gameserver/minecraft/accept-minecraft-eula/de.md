---
slug: "minecraft-eula-akzeptieren"
language: "de"
title: "So akzeptierst Du die Minecraft EULA"
description: "Anleitung zum Akzeptieren der Minecraft EULA in der eula.txt-Datei"
tags: []
date: "2024-01-12"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Minecraft EULA akzeptieren"
sort: 4
related: ["gameserver/minecraft/change-modpack", "gameserver/minecraft/change-motd", "gameserver/minecraft/change-server-icon", "gameserver/minecraft/change-simulation-distance"]
---

## Voraussetzungen

- Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
  - Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. **Datei suchen**\
   Suche die `eula.txt`-Datei im Hauptverzeichnis des Minecraft Servers. Falls die Datei nicht vorhanden ist, starte den Server einmal, um sie automatisch erstellen zu lassen.

2. **Datei öffnen**\
   Öffne die `eula.txt`-Datei mit einem Texteditor wie Notepad oder Notepad++.

3. **EULA akzeptieren**\
   Suche die Zeile `eula=false` und ändere diese in `eula=true`, um die [Minecraft EULA](https://www.minecraft.net/eula) zu akzeptieren.

4. **Änderungen speichern**\
   Speichere die Datei und schließe den Editor.

5. **Server neustarten**\
   Starte den Minecraft Server neu, damit die Änderung übernommen wird.
